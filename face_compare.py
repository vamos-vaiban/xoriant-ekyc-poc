import boto3
from flask import Flask, request, render_template


app = Flask('face_rekognition')

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



@app.route('/compare_faces', methods=['GET','POST'])
def login():
    document = request.form['document']
    photo = request.form['photo']
    print(document,photo)
    result=face_comparision(document,photo)
    print("result")
    return render_template("index.html", result=result)


if __name__ == '__main__':
    app.run(debug=True)

