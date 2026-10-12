import os
from google import genai
from dotenv import load_dotenv

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


def predict_output(code: str, language: str):
    prompt = f"""
    Predict the output of the following {language} program.
    Requirements:
    - Do not execute the code.
    - Reason through the code and predict its output.
    - Show errors if the code would produce an error.
    - Return only the predicted output.
    - Do not include Markdown code fences.
    Code:
    {code}
    """

    response = client.models.generate_content(model="gemini-3.8-flash", contents=prompt)

    return response.text
