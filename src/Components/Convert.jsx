import { convertCode } from "../api.js";
import { useState } from "react";

const Convert = ({
  sourceCode,
  sourceLanguage,
  targetLanguage,
  setTranslatedCode,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleConvert = async () => {
    try {
      setLoading(true);
      setError("");

      const result = await convertCode(
        sourceCode,
        sourceLanguage,
        targetLanguage,
      );

      setTranslatedCode(result);
    } catch (error) {
      console.error("Conversion failed:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleConvert}
        disabled={loading}
        className="text-white h-15 w-50 bg-[#191919] m-10 absolute top-[10vh] left-[27vw] font-bold border border-solid border-white text-center text-[2.5vh]"
      >
        {loading ? "Converting..." : "Convert"}
      </button>

      {error && (
        <p className="text-red-500 absolute top-[20vh] left-[28.3vw]">
          {error}
        </p>
      )}
    </>
  );
};

export default Convert;
