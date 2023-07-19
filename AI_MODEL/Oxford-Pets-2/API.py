# -*- coding: utf-8 -*-
"""
Created on Tue Jul 18 20:22:05 2023

@author: alber
"""

import boto3
import os

# Set up AWS credentials
session = boto3.Session(
    aws_access_key_id='AKIA4L7YQXAUK5VF76HJ',
    aws_secret_access_key='T6DnD/yXSchWkk7gdzJV95YUN6s4Zp4IxhiPotrA',
    region_name='eu-west-1'  # or your preferred region
)

s3 = session.client('s3')

# Specify your path
image_path = 'C:/Users/alber/Documents/Alberto/Trabajo/Maestria/FUAS/S5/Cloud Computing/catdogs/Oxford-Pets-2/runs/detect/val'
bucket_name = 'imagesformodel'
s3_key = 'rs/'

for filename in os.listdir(image_path):
    if filename.endswith(".jpg") or filename.endswith(".png"): # You can add more extensions if needed
        img_path = os.path.join(image_path, filename)

        # Construct the new path
        new_path = os.path.join(s3_key, filename)

        # Upload image to S3
        s3.upload_file(img_path, bucket_name, new_path)
