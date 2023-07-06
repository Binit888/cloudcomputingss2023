from ultralytics import YOLO

# Load a model
model = YOLO('yolov8n.yaml')  # build a new model from YAML
model = YOLO('yolov8n.pt')  # load a pretrained model (recommended for training)
model = YOLO('yolov8n.yaml').load('yolov8n.pt')  # build from YAML and transfer weights

# Train the model
model.train(data='C:/Users/alber/Documents/Alberto/Trabajo/Maestria/FUAS/S5/Cloud Computing/catdogs/Oxford-Pets-2/data.yaml', epochs=100, imgsz=640)

