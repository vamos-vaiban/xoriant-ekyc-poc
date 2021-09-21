# Amazon Rekognition image detection and comparison..!

## Purpose

Shows how to use the AWS SDK for Python (Boto3) with Amazon Rekognition to
recognize people, objects, and text in images and videos.

* Detect faces, celebrities, objects, and text in an image.
* Create a collection of indexed faces and search for faces in your collection 
that match a reference image.
* Detect faces, celebrities, and objects in a video.
* Create a notification channel so your code can determine when a video
detection job has completed.

## Prerequisites

- You must have an AWS account, and have your default credentials and AWS Region
  configured as described in the [AWS Tools and SDKs Shared Configuration and
  Credentials Reference Guide](https://docs.aws.amazon.com/credref/latest/refdocs/creds-config-files.html).
- Python 3.9 or later
- Boto3 1.18.20,1.18.32 
- Requests 2.26.0 or later
- Pillow 8.3.2 or later

## Cautions

- As an AWS best practice, grant this code least privilege, or only the 
  permissions required to perform a task. For more information, see 
  [Grant Least Privilege](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege) 
  in the *AWS Identity and Access Management 
  User Guide*.
- This code has not been tested in all AWS Regions. Some AWS services are 
  available only in specific Regions. For more information, see the 
  [AWS Region Table](https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/)
  on the AWS website.
- Running this code might result in charges to your AWS account.

## Running the code:

* Detecting items in a single image.
* comapring face from the image.


**Image comparision**

Run this example at a command prompt with the following command.

```
python face_compare.py
``` 

## Additional information

- [Boto3 Amazon Rekognition service reference](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/rekognition.html)
- [Amazon Rekognition documentation](https://docs.aws.amazon.com/rekognition)
