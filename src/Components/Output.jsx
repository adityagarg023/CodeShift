import { useState } from 'react'

const Output = ({ code, language }) => {
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const run = async () => {
        if (!code?.trim()) return;
        try {
            setLoading(true);
            setResult("");
            const data = await execute(language, code)
            setResult(
                data.run?.output ||
                data.run?.stderr ||
                data.message ||
                "Execution completed."
            )
        } catch (error) {
            setResult(
                error.response?.data?.message ||
                error.message ||
                "Execution failed."
            )
        } finally {
            setLoading(false)
        }
    }


    return (
        <div className='ml-30 mt-10'>
            <button
                onClick={run} disabled={loading}
                className='text-white h-15 w-30 bg-[#191919] border border-solid border-white text-[2.3vh] font-bold'
            >
                {loading ? "Running..." : "Run"}
            </button>
            <pre className='bg-[#1E1E1E] w-[25vw] h-[68vh] overflow-auto whitespace-pre-wrap p-3 text-white mt-5'>
                {result || "Output"}
            </pre>
        </div>
    )
}

export default Output