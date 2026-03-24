from fastapi import FastAPI
import schemas,model,database
from twilio.rest import Client
import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
import dummy_data
from database import Base,engine

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

if not ACCOUNT_SID or not AUTH_TOKEN:
    raise ValueError("Twilio credentials missing")

client = Client(ACCOUNT_SID, AUTH_TOKEN)

TWILIO_WHATSAPP_NUMBER = "whatsapp:+14155238886"
YOUR_WHATSAPP_NUMBER = "whatsapp:+918591258371"

@app.on_event("startup")
def startup():
    import models

    db_file = "test.db"

    # If DB does NOT exist → create + seed
    if not os.path.exists(db_file):
        print("Creating database and inserting dummy data...")
        Base.metadata.create_all(bind=engine)
        dummy_data.practice_dummy_data()
    else:
        print("Database already exists. Skipping initialization.")
        

@app.get("/")
def home():
    return {"message": "API is running"}

@app.post("/contact")
def send_whatsapp(data: schemas.ContactForm):
    msg = f"""
New Contact Form Submission:

Name: {data.name}
Email: {data.email}
Message: {data.message}
"""

    client.messages.create(
        body=msg,
        from_=TWILIO_WHATSAPP_NUMBER,
        to=YOUR_WHATSAPP_NUMBER
    )

    return {"status": "Message sent"}

@app.post("/Sql_Chatbot")
def ChatModel(userinput: schemas.Userinput):
    result = model.chatmodel(user_input=userinput.user_input)
    return {"query": result}

@app.post("/Query")
def Execute_query(request:schemas.QueryRequest):
    return  database.execute_raw_sql(query=request.query)