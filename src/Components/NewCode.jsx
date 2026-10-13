import MonacoEditor from "@monaco-editor/react";
import LangSelector from "./LangSelector.jsx";

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

const NewCode = ({ code, setCode, language, setLanguage }) => {
  return (
    <div className="mt-10">
      <div className="flex justify-end">
        <LangSelector language={language} onLanguageChange={setLanguage} />
      </div>

      <MonacoEditor
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

export default NewCode;
