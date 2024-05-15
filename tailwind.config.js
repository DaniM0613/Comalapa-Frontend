

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,tx,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        imagen: "url('src/assets/header_img.png')"
      }),
      keyframes:{
        fadaIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          }
        }
      },
      animation: {
        fadaIn: "fadaIn 1s ease-in-out"
      }
    },
  },
  plugins: [],
}

