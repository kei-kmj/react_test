import datetime

from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/api/data")
async def read_data():
    # 現在時刻を返す
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return {"data": time}
