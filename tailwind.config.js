/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#0066FF",
          dark: "#0047b3",
          darker: "#002a66",
        },
        ink: "#0b1220",
        bg: "#fbfcff",
        "bg-soft": "#eef4ff",
      },
      fontFamily: {
        display: ["var(--font-baloo)", "var(--font-poppins)", "system-ui", "sans-serif"],
        body: ["var(--font-poppins)", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        brand: "20px",
      },
      boxShadow: {
        brand: "0 10px 30px rgba(0, 60, 180, 0.12)",
        "brand-lg": "0 16px 36px rgba(0, 60, 180, 0.18)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        navLinkIn: {
          "0%": { opacity: 0, transform: "translateX(40px) scale(.9)" },
          "60%": { opacity: 1, transform: "translateX(-4px) scale(1.03)" },
          "100%": { opacity: 1, transform: "translateX(0) scale(1)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        marquee: "marquee 22s linear infinite",
        "nav-link-in": "navLinkIn .5s cubic-bezier(.34,1.56,.64,1) forwards",
      },
    },
  },
  plugins: [],
};
