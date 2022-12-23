/** @type {import('tailwindcss').Config} */
module.exports = {
  important: '#___gatsby',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'azzurra-navy-blue': '#242e63',
        'azzurra-dark-blue': '#0f1337',
        'azzurra-gold': '#bf9638',
        'azzurra-dark-gold': '#9f7b34',
        'azzurra-opaque-gold': '#ddca96',
        'azzurra-gray-70': '#828180',
        'azzurra-gray-60': '#A1A1A1'
      },
      backgroundImage: {
        'gradient-linear':
          'linear-gradient(180deg, rgba(255,255,255,0.75) 5%, rgba(255,255,255,0) 60%)',
        'gradient-light':
          'radial-gradient(circle, rgb(255 255 255 / 70%) 0%, rgb(255 255 255 / 0%) 50%)'
      },
      backgroundPosition: {
        brandHighlights: 'center 18px'
      },
      height: {
        'text-content-80': '80%'
      },
      maxWidth: {
        boxPdf: '18.5rem'
      },
      maxHeight: {
        'screen-75': '90vh'
      },
      spacing: {
        width: {
          'w-screen': '100vw'
        },
        height: {
          'h-screen': '100vh'
        }
      }
    }
  },
  plugins: []
};
