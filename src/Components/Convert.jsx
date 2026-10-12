import { convertCode } from "../api.js";
import { useState } from "react";

const Convert = () => {
  const [loading, setLoading] = useState(false);
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
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      onClick={handleConvert}
      disabled={loading}
      className="text-white h-15 w-35 bg-[#191919] m-10 absolute top-[10vh] left-[28.3vw] font-bold border border-solid border-white text-center text-[2.5vh]"
    >
      {loading ? "Converting..." : "Convert"}
    </button>
  );
};

export default Convert;
