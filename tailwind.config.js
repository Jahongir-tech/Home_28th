/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "login": "url('assets/images/login.png')",
        "register": "url('assets/images/register.png')",
        "hero": "url('assets/images/hero.png')",
      },
      container:{
        center:true,
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1122px',
          '2xl': '1122px',
        },
      }
    },
  },
  plugins: [],

}