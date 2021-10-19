FROM python:3.9

WORKDIR /face_rekognition

ADD . /face_rekognition

RUN pip install -r requirements.txt

CMD ["python","./face_rekognition/face_compare.py"]