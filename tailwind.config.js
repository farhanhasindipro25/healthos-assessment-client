/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        customTheme: {
          primary: "#11131c", 
          secondary: "#0f1119", 
          accent: "#F2F5FF",
          error: "#EF3E36", 
          success: "#00C49A",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
