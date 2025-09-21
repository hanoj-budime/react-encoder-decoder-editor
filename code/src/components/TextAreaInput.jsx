import React from "react";

export default function TextAreaInput({ value, onChange, placeholder }) {
  return (
    <textarea
      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
      rows={5}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}
