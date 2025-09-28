import React from "react";

export default function ResultOutput({ result }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    alert("Copied to clipboard!");
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Result:</label>
        <button
          onClick={copyToClipboard}
          className="w-full bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
        >
          Copy
        </button>
      </div>
      <textarea
        readOnly
        value={result}
        className="w-full h-64 p-3 border rounded-md resize-none bg-gray-100"
        rows={5}
      />
    </div>
  );
}
