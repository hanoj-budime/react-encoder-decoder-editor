import React from "react";
export default function Footer() {
  return (
    <footer className="sticky bottom-0 bg-white dark:bg-gray-800 p-4 shadow text-center">
      &copy; {new Date().getFullYear()} Encoder/Decoder App
    </footer>
  );
}