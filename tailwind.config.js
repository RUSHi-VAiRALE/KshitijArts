/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dimgray: {
          "100": "#6e6e6e",
          "200": "#646464",
          "300": "#5e5e5e",
        },
        whitesmoke: "#f7f7f7",
        black: "#000",
        gainsboro: "#d9d9d9",
        darkgray: "#a0a0a0",
        blueviolet: {
          "100": "#a657ff",
          "200": "#8b3dff",
        },
        silver: "#c4c4c4",
      },
      spacing:{},
      fontFamily: {
        "muli-14-regular": "Mulish",
        "ovo-18-regular": "Ovo",
        "palanquin-dark": "'Palanquin Dark'",
      }
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      mini: "15px",
      smi: "13px",
      inherit: "inherit",
    }
  },
  plugins: [],
}

