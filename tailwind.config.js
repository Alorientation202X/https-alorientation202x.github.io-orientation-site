/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Cherche les classes Tailwind dans tous les fichiers JS/JSX
    "./public/index.html"         // Et aussi dans ton fichier HTML principal
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

  