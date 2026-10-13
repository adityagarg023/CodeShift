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

const UserCode = ({ language, setLanguage, code, setCode }) => {
  return (
    <div className="mt-10">
      <LangSelector language={language} onLanguageChange={setLanguage} />

      <MonacoEditor
        className="ml-10 mt-5 mr-10"
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

export default UserCode;
