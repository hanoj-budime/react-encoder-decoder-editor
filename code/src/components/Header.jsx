import React from "react";
import { MdOutlineSplitscreen } from "react-icons/md";

// * Sticky Top Header
export default function Header({theme, setTheme, panelMode, setPanelMode}) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 py-2">
        {/* Left: Brand */}
        <div className="flex items-center">
          <span className="text-2xl font-bold">Encoder/Decoder</span>
        </div>

        {/* Right: Theme & Panel Toggle */}
        <div className="flex items-center gap-2">
          {/* Panel Switch Button */}
          <button
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            onClick={() => setPanelMode((m) => (m === "split" ? "single" : "split"))}
            title={panelMode === "split" ? "Switch to Single Panel" : "Switch to Split Panel"}
          >
            {panelMode === "split" ? (
              <MdOutlineSplitscreen className="h-5 w-5 transform transition-transform duration-300 rotate-90" />
            ) : (
              <MdOutlineSplitscreen className="h-5 w-5 transform transition-transform duration-300" />
            )}
          </button>

          {/* Theme Toggle */}
          <button
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </header>
  );
}
