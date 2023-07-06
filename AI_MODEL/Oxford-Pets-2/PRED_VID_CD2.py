
"""
Created on Thu Jun  8 10:35:02 2023

@author: alber
"""

import cv2
from ultralytics import YOLO

# Load the YOLOv8 model
model = YOLO('runs/detect/train/weights/best.pt')

# Open the video file
#video_path = "path/to/your/video/file.mp4"
cap = cv2.VideoCapture(0)

frame_counter = 0

# Loop through the video frames
while cap.isOpened():
    # Read a frame from the video
    success, frame = cap.read()

    if success:
        # Run YOLOv8 inference on the frame
        results = model.predict(frame, save=True, conf=0.90)
        
        boxes = results[0].boxes

        # Visualize the results on the frame
        annotated_frame = results[0].plot()
        
        # Display the annotated frame
        cv2.imshow("YOLOv8 Inference", annotated_frame)
        
        if len(boxes.xyxy) > 0:
            cv2.imwrite(f'detected_frame_{frame_counter}.jpg', annotated_frame)
            frame_counter += 1
            

        # Break the loop if 'q' is pressed
        if cv2.waitKey(1) & 0xFF == ord("q"):
            break
    else:
        # Break the loop if the end of the video is reached
        break

# Release the video capture object and close the display window
cap.release()
cv2.destroyAllWindows()