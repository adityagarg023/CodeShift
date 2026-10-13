const API_URL = "https://codeshift-8nwh.onrender.com";

export async function convertCode(code, sourceLanguage, targetLanguage) {
  const response = await fetch(`${API_URL}/convert`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code,
      source_language: sourceLanguage,
      target_language: targetLanguage,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Translation failed");
  }

  return data.translated_code;
}

export async function predictOutput(code, language) {
  const response = await fetch(`${API_URL}/run`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code,
      language,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Output prediction failed");
  }

  return data.output;
}
