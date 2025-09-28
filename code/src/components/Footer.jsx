import React from "react";
import { FaLinkedin, FaGithub, FaCode, FaBug } from "react-icons/fa";

export default function Footer() {
  return (
<footer className="sticky bottom-0 z-50 border-t border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          {/* Left: Developer Info */}
          <div className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
            <FaCode className="h-4 w-4" />
            <span>
              Developed by <span className="font-medium text-gray-900 dark:text-gray-100">Hanoj Budime</span> · 2025-
              {new Date().getFullYear()}
            </span>
          </div>

          {/* Right: Action Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/hanoj-budime/react-json-viewer-editor/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              title="Report Issue on GitHub"
            >
              <FaBug className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/hanoj-budime"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              title="Connect on LinkedIn"
            >
              <FaLinkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://github.com/hanoj-budime"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              title="View GitHub Profile"
            >
              <FaGithub className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </a>
          </div>
        </div>
      </footer>
  );
}