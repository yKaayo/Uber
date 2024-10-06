/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      dark: '#000',
      light: {
        100: '#fff',
        200: '#f3f3f3'
      },
    },
    borderRadius:{
      'lg': '8px',
      '30px': '30px',
    },
    fontSize: {
      '52px': '52px',
    },
    extend: {
      spacing: {
        
      },
      margin: {
        '18px': '18px',
        '30px': '30px',
      },
      padding: {
        '25px': '25px',
        '64px': '64px',
      },
      height: {
        'hero': 'calc(100% - 68px)',
      },
      width: {
        '94': '23.5rem',
      },
    },
  }
};
