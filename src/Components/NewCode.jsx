import NewCode from '@monaco-editor/react';
import LangSelector from './LangSelector.jsx';
import { useState } from 'react';

const monacoLanguages = {
    JavaScript: "javascript",
    Python: "python",
    Java: "java",
    "C++": "cpp",
    C: "c",
    TypeScript: "typescript",
    Go: "go",
    Rust: "rust",
}

const newCode = () => {
    const [language, setLanguage] = useState("JavaScript");
    const [code, setCode] = useState("// Write your code here");

    return (
        <div>
            <LangSelector
                language={language}
                onLanguageChange={setLanguage}
            />
            <NewCode
                width="45vw" height="70vh" language={monacoLanguages[language]} theme='vs-dark' value={code}
                onChange={(value) => setCode(value ?? "")}
                options={{
                    minimap: { enabled: false },
                    automaticLayout: true,
                    scrollBeyondLastLine: false,
                }}
                className='ml-25'
            />
        </div>
    )
}

export default newCode