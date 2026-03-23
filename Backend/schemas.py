from pydantic import BaseModel,EmailStr

class ContactForm(BaseModel):
    name:str
    email:EmailStr
    message:str
    
class Userinput(BaseModel):
    user_input:str
