import datetime
import json
import os.path
import boto3
#import jsonify
import requests
from flask import Flask, request, render_template
from os import getcwd
from flask_cors import CORS, cross_origin
#from flask_mysqldb import MySQL
#import yaml
'''db = yaml.load(open('db.yaml'))

app.config['MYSQL_HOST'] = db['mysql_host']
app.config['MYSQL_USER'] = db['mysql_user']
app.config['MYSQL_PASSWORD'] = db['mysql_password']
app.config['MYSQL_DB'] = db['mysql_DB']'''

ALLOWED_EXTENSIONS = {'pdf','png','jpeg','jpg'}
app = Flask('face_rekognition')

#mysql = MySQL(app)
CORS(app, support_credentials=True)

s3 = boto3.client('s3',
                  aws_access_key_id='ACCESS_KEY_ID',
                  aws_secret_access_key='SECRET_KEY')

def face_comparision(document,photo):

    client = boto3.client('rekognition')
    response = client.compare_faces(
        SourceImage={
                'S3Object': {
                    'Bucket': 'image-match02',
                    'Name': document
                }
            },
        TargetImage={
                'S3Object': {
                    'Bucket': 'image-match02',
                    'Name': photo
                }
            },
        SimilarityThreshold=0
    )
    #pprint.pprint(response)
    return (response['FaceMatches'])

@app.route('/')
def index():
    return render_template("index.html")

def upload_to_aws(local_file, bucket, s3_file):
    s3 = boto3.client('s3')
    try:
        s3.upload_file(local_file, bucket, s3_file)
        print("Upload Successful")
        return True
    except FileNotFoundError:
        print("The file was not found")
        return False

@app.route('/compare_faces', methods=['GET','POST'])
@cross_origin(origin='*')
def login():
    final_data = {}
    if request.method == "POST":
        document = request.files['Document_Photo']
        doc_path = os.path.join(getcwd() + "/media/" + document.filename)
        document.save(doc_path)
        photo = request.files['User_Photo']
        photoPath='https://image-match02.s3.ap-south-1.amazonaws.com/'+ str(photo.filename)
        user_path = os.path.join(getcwd() + "/media/" + photo.filename)
        photo.save(user_path)
        upload_to_aws(doc_path,"image-match02", document.filename)
        upload_to_aws(user_path, "image-match02", photo.filename)
        print(document,photo)
        try:
            result=face_comparision(document.filename,photo.filename)
            print(result)
            if 'Similarity' in result[0].keys():
                final_data['Similarity']=result[0].get('Similarity')
                final_data['photoPath']=photoPath
        except Exception as e:
            final_data = {'message': 'Please provide valid input'}

        # print(json.dumps(result))
        # json_result = json.dumps(result)

    return render_template("index.html", result=final_data)

if __name__ == '__main__':
   app.run(debug=True)
#    doc_path='https://image-match02.s3.ap-south-1.amazonaws.com/target_Image.jpg'
#    x= 70.55
#    photo_save(doc_path, x)



