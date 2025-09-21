import React, { useState } from "react";
import TextAreaInput from "./components/TextAreaInput";
import ActionButtons from "./components/ActionButtons";
import FormatSelector from "./components/FormatSelector";
import ResultOutput from "./components/ResultOutput";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { urlEncode, urlDecode, base64Encode, base64Decode, hexEncode, hexDecode } from "./utils/encodeUtils";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [format, setFormat] = useState("url");

  const handleEncode = () => {
    let res;
    switch (format) {
      case "url": res = urlEncode(input); break;
      case "base64": res = base64Encode(input); break;
      case "hex": res = hexEncode(input); break;
      default: res = input;
    }
    setResult(res);
  };

  const handleDecode = () => {
    let res;
    switch (format) {
      case "url": res = urlDecode(input); break;
      case "base64": res = base64Decode(input); break;
      case "hex": res = hexDecode(input); break;
      default: res = input;
    }
    setResult(res);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="w-full max-w-3xl mx-auto p-6">
        <FormatSelector format={format} onChange={setFormat} />
        <TextAreaInput value={input} onChange={setInput} placeholder="Enter text or URL here..." />
        <ActionButtons onEncode={handleEncode} onDecode={handleDecode} onClear={handleClear} />
        <ResultOutput result={result} />
      </main>
      <Footer />
    </div>
  );
}
