import React from "react";

export default function ActionButtons({ onEncode, onDecode, onClear }) {
  return (
    <div className="flex gap-2 mt-2">
      <button onClick={onEncode} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Encode
      </button>
      <button onClick={onDecode} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
        Decode
      </button>
      <button onClick={onClear} className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition">
        Clear
      </button>
    </div>
  );
}
