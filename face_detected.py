import boto3
import logger
import logging
from configparser import ConfigParser

config = ConfigParser()
config.read('config.ini')

logger = logging.getLogger(__name__)


def face_comparision():
    client = boto3.client('rekognition')
    response = client.compare_faces(
        SourceImage={
                'S3Object': {
                    'Bucket': 'image-match02',
                    'Name': 'Pan_card.jpg'
                }
            },
        TargetImage={
                'S3Object': {
                    'Bucket': 'image-match02',
                    'Name': 'target_Image.jpg'
                }
            },
        SimilarityThreshold=0
    )
    #pprint.pprint(response)
    return (response['FaceMatches'])

def main():
    print('-' * 88)
    print("Amazon Rekognition image detection & Comparison..!")
    print('-' * 88)

    logging.basicConfig(level=logging.INFO, format='%(levelname)s: %(message)s')
    '''photo='Pan_card.jpg'
    bucket='image-match02'
    face_count=detect_faces(photo, bucket)
    print("Faces detected: " + str(face_count))'''

    face_comparision()
    for record in face_comparision():
        face = record
        confidence = face['Face']
        print("photo matched with {}""%"" Similarity".format(face['Similarity']))

        #print("With {}""%"" Confidence".format(confidence['Confidence']))

if __name__ == "__main__":
    main()


