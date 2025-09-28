import React from "react";

export default function TextAreaInput({ value, onChange, placeholder }) {
  return (
    <textarea
      className="w-full h-64 p-3 border rounded-md resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      rows={5}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}
