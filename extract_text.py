import json
from os import getcwd
import  os.path
from flask import Flask, request, render_template
app = Flask('face_rekognition')

import boto3




def detect_text(document):
    client = boto3.client('rekognition')

    response = client.detect_text(Image={'S3Object': {'Bucket': 'image-match02', 'Name': document}})

    textDetections = response['TextDetections']
    print('Detected text from pan card\n----------')
    for text in textDetections:
        print(text['DetectedText'])
    return json.dumps(textDetections)

@app.route('/')
def index():
    return render_template("datafile.html")

def upload_to_aws(local_file, bucket, s3_file):
    s3 = boto3.client('s3')
    try:
        s3.upload_file(local_file, bucket, s3_file)
        print("Upload Successful")
        return True
    except FileNotFoundError:
        print("The file was not found")
        return False


@app.route('/detect_text', methods=['GET','POST'])
def main():
    detect_data = ""
    if request.method == "POST":
        document = request.files['Document_Photo']
        doc_path = os.path.join(getcwd() + "/media/" + document.filename)
        document.save(doc_path)
        upload_to_aws(doc_path, "image-match02", document.filename)
        print(document)
        text_count = detect_text(document.filename)
        detect_data=json.dumps(text_count)
        print(detect_data)
        print("Text detected: " + str(text_count))

    return render_template("datafile.html", result=detect_data)


if __name__ == "__main__":
    app.run(port=8000,debug=True)