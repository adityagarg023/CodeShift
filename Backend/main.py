#type:ignore
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from convert import convert_code
from run import predict_output

app = FastAPI(title="CodeShift API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://code-shift-lilac.vercel.app",
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ConvertRequest(BaseModel):
    code: str
    source_language: str
    target_language: str


class RunRequest(BaseModel):
    code: str
    language: str


@app.get("/")
def home():
    return {"message": "CodeShift API is running"}


@app.post("/convert")
def convert(request: ConvertRequest):
    try:
        result = convert_code(
            request.code, request.source_language, request.target_language
        )
        return {"translated_code": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/run")
def run(request: RunRequest):
    try:
        result = predict_output(request.code, request.language)
        return {"output": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
