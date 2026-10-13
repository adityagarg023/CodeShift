import { useState } from "react";
import { predictOutput } from "../api.js";

const Output = ({ code, language }) => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleRun = async () => {
    try {
      setLoading(true);
      setError("");
      setOutput("");

      const result = await predictOutput(code, language);
      setOutput(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ml-30 mt-10">
      <button
        onClick={handleRun}
        disabled={loading}
        className="text-white h-15 w-45 bg-[#191919] border border-solid border-white text-[2.3vh] font-bold"
      >
        {loading ? "Running..." : "Run"}
      </button>

      <pre className="bg-[#1E1E1E] w-[25vw] h-[68vh] overflow-auto whitespace-pre-wrap p-3 text-white mt-5">
        {output}
      </pre>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Output;
