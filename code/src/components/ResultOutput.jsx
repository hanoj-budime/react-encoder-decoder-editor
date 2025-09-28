import { useState } from "react";

export default function ResultOutput({ result }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000); // reset after 1 sec
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Result:</label>
        <button
          onClick={copyToClipboard}
          className={`w-full px-4 py-2 rounded transition 
            ${copied ? "bg-green-500 text-white hover:bg-green-600" : "bg-yellow-400 text-black hover:bg-yellow-500"}`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <textarea
        readOnly
        value={result}
        className="w-full h-64 p-3 border rounded-md resize-none bg-gray-100 dark:bg-gray-800"
        rows={5}
      />
    </div>
  );
}
