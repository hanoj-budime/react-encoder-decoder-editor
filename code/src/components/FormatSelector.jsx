import React from "react";

export default function FormatSelector({ format, onChange }) {
  return (
    <div className="w-full">
      <label className="block font-semibold mb-1">Select Format:</label>
      <select
        value={format}
        onChange={e => onChange(e.target.value)}
        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        <option value="url">URL Encode/Decode</option>
        <option value="base64">Base64 Encode/Decode</option>
        <option value="hex">Hex Encode/Decode</option>
      </select>
    </div>
  );
}
