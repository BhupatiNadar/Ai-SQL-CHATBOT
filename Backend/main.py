from fastapi import FastAPI
import schemas
from twilio.rest import Client
import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ACCOUNT_SID = os.getenv("ACCOUNT_SID")
AUTH_TOKEN = os.getenv("AUTH_TOKEN")
TWILIO_WHATSAPP_NUMBER ="whatsapp:+14155238886"
YOUR_WHATSAPP_NUMBER = "whatsapp:+918591258371"

client = Client(ACCOUNT_SID, AUTH_TOKEN)


@app.post("/contact")
def send_whatsapp(data: schemas.ContactForm):
    msg = f"""
New Contact Form Submission:

Name: {data.name}
Email: {data.email}
Message: {data.message}
"""

    message = client.messages.create(
        body=msg,
        from_=TWILIO_WHATSAPP_NUMBER,
        to=YOUR_WHATSAPP_NUMBER
    )

    return {"status": "Message sent"}

@app.get("/")
def home():
    return {"message": "API is running"}