import torch 
import torch.nn as nn
from torchvision.models import resnet18
from torch.optim import lr_scheduler
import torchvision.transforms as transforms
from PIL import Image
from fastapi import FastAPI

device = 'cuda' if torch.cuda.is_available() else 'cpu'
model = resnet18(weights=None)
in_features = model.fc.in_features
model.fc = nn.Linear(in_features , 1)
model.conv1 = nn.Conv2d(1, 64, kernel_size=3, stride=2, padding=3,bias=False)
model.to(device);
model.load_state_dict(torch.load('modelSevere.pth' , map_location=torch.device(device)))
model.eval()

Transformation = transforms.Compose([
    transforms.Resize(size = (224,224)), 
    transforms.ToTensor()
    ])

def predict(image):
    image = Transformation(image).unsqueeze(0)
    image = image.to(device)
    with torch.inference_mode():
        output = model(image)
        prediction = torch.sigmoid(output).item()
        return prediction


app = FastAPI()
@app.get('/model/severity')
def home(id:str):
    print(id)
    img_path = f'../images/{id}'
    img = Image.open(img_path)
    prediction = predict(img)
    return {'severity':
        f'{round(prediction*100,3)}'}
