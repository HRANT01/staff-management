/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "640px" }, // Мобильные устройства (до 640px)
        tablet: { min: "641px", max: "1024px" }, // Планшеты (641px - 1024px)
      },
    },
  },
  plugins: [],
};
