/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D9D9D9",
        "primary-transparent": "#D9D9D9DD",
        secondary: "#334155",
        background: "#FFFFFF",
        "text-orange": "#F87537",
        "button-boundary-color": "#94a3b8",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".no-copy": {
            "user-select": "none",
            "-webkit-user-select": "none",
            "-moz-user-select": "none",
            "-ms-user-select": "none",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
