import React, { useState, useEffect } from "react";
import TextAreaInput from "./components/TextAreaInput";
import ActionButtons from "./components/ActionButtons";
import FormatSelector from "./components/FormatSelector";
import ResultOutput from "./components/ResultOutput";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { urlEncode, urlDecode, base64Encode, base64Decode, hexEncode, hexDecode } from "./utils/encodeUtils";

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "light";
};

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [format, setFormat] = useState("url");
  const [theme, setTheme] = useState(getInitialTheme);
  const [panelMode, setPanelMode] = useState("split");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleEncode = () => {
    let res;
    switch (format) {
      case "url":
        res = urlEncode(input);
        break;
      case "base64":
        res = base64Encode(input);
        break;
      case "hex":
        res = hexEncode(input);
        break;
      default:
        res = input;
    }
    setResult(res);
  };

  const handleDecode = () => {
    let res;
    switch (format) {
      case "url":
        res = urlDecode(input);
        break;
      case "base64":
        res = base64Decode(input);
        break;
      case "hex":
        res = hexDecode(input);
        break;
      default:
        res = input;
    }
    setResult(res);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header theme={theme} setTheme={setTheme} panelMode={panelMode} setPanelMode={setPanelMode} />
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-2 sm:px-4 py-2 flex-grow w-full">
        {panelMode === "split" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <section>
              <div className="flex justify-between items-end mb-4">
                <FormatSelector format={format} onChange={setFormat} />
                <ActionButtons onEncode={handleEncode} onDecode={handleDecode} onClear={handleClear} />
              </div>
              <TextAreaInput value={input} onChange={setInput} placeholder="Enter text or URL here..." />
            </section>
            <section>
              <ResultOutput result={result} />
            </section>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <section>
              <div className="flex justify-between items-end mb-4">
                <FormatSelector format={format} onChange={setFormat} />
                <ActionButtons onEncode={handleEncode} onDecode={handleDecode} onClear={handleClear} />
              </div>
              <TextAreaInput value={input} onChange={setInput} placeholder="Enter text or URL here..." />
            </section>
            <section>
              <ResultOutput result={result} />
            </section>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
