import React from "react";

export default function FormatSelector({ format, onChange }) {
  return (
    <div className="w-full">
      <label className="block font-semibold mb-1">Select Format:</label>
      <select
        value={format}
        onChange={(e) => onChange(e.target.value)}
        className="
      w-full p-2 rounded-md
      border border-gray-300 dark:border-gray-600
      bg-white dark:bg-gray-800
      text-gray-900 dark:text-gray-100
      focus:outline-none focus:ring-2 focus:ring-blue-400
    "
      >
        <option value="url">URL Encode/Decode</option>
        <option value="base64">Base64 Encode/Decode</option>
        <option value="hex">Hex Encode/Decode</option>
      </select>
    </div>
  );
}
