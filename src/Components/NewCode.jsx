import NewCode from "@monaco-editor/react";
import LangSelector from "./LangSelector.jsx";
import { useState } from "react";

const monacoLanguages = {
  JavaScript: "javascript",
  Python: "python",
  Java: "java",
  "C++": "cpp",
  C: "c",
  TypeScript: "typescript",
  Go: "go",
  Rust: "rust",
};

const newCode = () => {
  const [language, setLanguage] = useState("Select Language");
  const [code, setCode] = useState("// Write your code here");

  return (
    <div className="mt-10">
      <div className="flex justify-end">
        <LangSelector language={language} onLanguageChange={setLanguage} />
      </div>
      <NewCode
        className="ml-20 mt-5"
        width="33vw"
        height="70vh"
        language={monacoLanguages[language]}
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value ?? "")}
        options={{
          minimap: { enabled: false },
          automaticLayout: true,
          scrollBeyondLastLine: false,
        }}
      />
    </div>
  );
};

export default newCode;
