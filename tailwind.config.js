/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      dark: '#000',
      light: '#fff',
    },
    borderRadius:{
      '30px': '30px',
    },
    fontSize: {
      '52px': '52px',
    },
    extend: {
      margin: {
        '18px': '18px',
        '30px': '30px',
      },
      padding: {
        '25px': '25px',
        '64px': '64px',
      },
    },
  }
};
