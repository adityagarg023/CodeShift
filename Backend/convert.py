import os
from google import genai
from dotenv import load_dotenv

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


def convert_code(code: str, source_language: str, target_language: str):
    prompt = f"""
    Translate the following code from {source_language}
    to {target_language}.
    CRITICAL:
    - Return only the translated code.
    - Do not include Markdown code fences.
    - Preserve the original functionality.
    - Do not explain the code.
    Source code:
    {code}
    """

    response = client.models.generate_content(model="gemini-3.8-flash", contents=prompt)

    return response.text
