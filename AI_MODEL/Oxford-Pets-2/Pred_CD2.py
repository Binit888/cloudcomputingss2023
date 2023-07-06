# -*- coding: utf-8 -*-
"""
Created on Wed Jun  7 21:46:21 2023

@author: alber
"""

import cv2
from ultralytics import YOLO
import os
import numpy as np

#path = "test/images/samoyed_149_jpg.rf.0eeec496ae5c0f01cc0b7e468b5a0a93.jpg" 

# Load the YOLOv8 model
model = YOLO('runs/detect/train/weights/best.pt')


# from ndarray
im2 = cv2.imread("cat.jpg")
results = model.predict(source=im2, save=True, save_txt=True)  # save predictions as labels


# for filename in os.listdir(path):
#     img = cv2.imread(os.path.join(path, filename))
#     # do something with the image, for example display it
#     if img is not None:
#         images.append(img)
   
# inputs = np.array(images)
    
# res = model("test/images/samoyed_149_jpg.rf.0eeec496ae5c0f01cc0b7e468b5a0a93.jpg")
# res.print()

    

# boxes = result.boxes  # Boxes object for bbox outputs
# masks = result.masks  # Masks object for segmentation masks outputs
# probs = result.probs  # Class probabilities for classification outputs
    
    

# results = model(img)
# annotated_frame = results[0].plot()
# cv2.imshow("YOLOv8 Inference", annotated_frame)
# time.sleep(5)
