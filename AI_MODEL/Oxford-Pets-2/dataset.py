# -*- coding: utf-8 -*-
"""
Created on Mon Jun  5 21:00:54 2023

@author: alber
"""


from roboflow import Roboflow
rf = Roboflow(api_key="x4d6CWM3iSGPB2TkrGeo")
project = rf.workspace("brad-dwyer").project("oxford-pets")
dataset = project.version(2).download("yolov8")


