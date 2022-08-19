from ast import Num
from fastapi import FastAPI


import psycopg2
from fastapi.middleware.cors import CORSMiddleware


connection = psycopg2.connect(user="postgres",
                                  password="manjith",
                                  host="127.0.0.1",
                                  port="5432",
                                  database="Emp")

cur=connection.cursor()


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
    
)




@app.get('/empdata')
def adddata(Name:str='',Number:str='',Email:str=''):
    cur.execute("INSERT INTO emp_detail (name, number, email) VALUES(%s, %s, %s)", (Name, Number, Email))
    connection.commit()
    return ('Responce submitted')
