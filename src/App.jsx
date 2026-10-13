import { useState } from "react";
import Header from "./Components/Header.jsx";
import UserCode from "./Components/UserCode.jsx";
import NewCode from "./Components/NewCode.jsx";
import Convert from "./Components/Convert.jsx";
import Output from "./Components/Output.jsx";

const App = () => {
  const [sourceCode, setSourceCode] = useState("// Write your code here");
  const [sourceLanguage, setSourceLanguage] = useState("Select Language");
  const [targetLanguage, setTargetLanguage] = useState("Select Language");
  const [translatedCode, setTranslatedCode] = useState("");

  return (
    <div>
      <Header />

      <main className="flex align-center">
        <UserCode
          code={sourceCode}
          setCode={setSourceCode}
          language={sourceLanguage}
          setLanguage={setSourceLanguage}
        />

        <Convert
          sourceCode={sourceCode}
          sourceLanguage={sourceLanguage}
          targetLanguage={targetLanguage}
          setTranslatedCode={setTranslatedCode}
        />

        <NewCode
          code={translatedCode}
          setCode={setTranslatedCode}
          language={targetLanguage}
          setLanguage={setTargetLanguage}
        />

        <Output code={translatedCode} language={targetLanguage} />
      </main>
    </div>
  );
};

export default App;
