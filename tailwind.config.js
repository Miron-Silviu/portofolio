/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./portofolio/*.{html,js}"],
  theme: {

    screens: {
      'xs': {'min': '10px', 'max': '199px'},    
      'sm': {'min': '200px', 'max': '500px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '501px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  
    extend: {
      background: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          }
    },
  colors: {
    'purple': '#251392',
  },
        dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
  plugins: [],
}

