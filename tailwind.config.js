/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {},
      backgroundImage:{
        'testi': "url('src/assets/pojokatas.png')",
        'bawah': "url('src/assets/pojokbawah.png')" },
      animation: {
        anim:'spin 6s linear infinite',
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        blueberryreg: ["blueberryreg", "sans-serif"],
        blueberrylight: ["blueberrylight", "sans-serif"],
        blueberrymd: ["blueberrymd", "sans-serif"],
        blueberry: ["blueberry", "sans-serif"],
        blueberryextrabold: ["blueberryextrabold", "sans-serif"],
        blueberryblack: ["blueberryblack", "sans-serif"],

      },
      borderRadius: {
        large:'20px',
      },
      margin: {
        custom:'1000px',
      },
    },
    screens: {
      xs: "360px",
      sm: "481px",
      md: "768px",
      lg: "992px",
      xl: "1200px",

    },
  },
  plugins: [],
}

