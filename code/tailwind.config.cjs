module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: { light: "#ffffff", dark: "#1e1e1e" },
        text: { light: "#1a1a1a", dark: "#f5f5f5" },
        accent: { light: "#2563eb", dark: "#3b82f6" },
        border: { light: "#e5e7eb", dark: "#374151" },
      },
    },
  },
  safelist: [
    {
      pattern: /(border|dark:border)-(red|blue|green|yellow|purple|pink|orange|emerald|cyan|fuchsia)-(400|500|600)/,
    },
  ],
  plugins: [],
};