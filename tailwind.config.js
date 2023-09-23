/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {

    screens: {
      'xs': '50px',
       // => @media (min-width: 475x) { ... }
      'sm': '602px',
      // => @media (min-width: 570px) { ... }

      'md': '603px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  
    extend: {
      background: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          }
    },
  colors: {
    'purple': '#251392',
  },
 
  plugins: [],
}

