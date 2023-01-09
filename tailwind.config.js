/** @type {import('tailwindcss').Config} */
module.exports = {
  important: '#___gatsby',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'azzurra-navy-blue': '#242e63',
        'azzurra-dark-blue': '#0f1337',
        'azzurra-light-blue': '#4e778d',
        'azzurra-brown': '#6F5B3C',
        'azzurra-gold': '#bf9638',
        'azzurra-gold-100': '#b38c3f',
        'azzurra-dark-gold': '#9f7b34',
        'azzurra-opaque-gold': '#ddca96',
        'azzurra-gray-70': '#828180',
        'azzurra-gray-60': '#A1A1A1',
        'azzurra-gray-50': '#d1d1d1',
        'azzurra-gray-20': '#f1f2f2',
        'nav-light': 'rgba(255,255,255,0.72)',
        transparent: 'rgba(241,242,242,0)'
      },
      screens: {
        'mobile-landscape': {
          raw: '(min-width: 321px) and (max-width: 896px) and (orientation: landscape)'
        }
      },
      backgroundSize: {
        '50%': '50%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%'
      },
      backdropSaturate: {
        'nav-light': '180%'
      },
      backdropBlur: {
        'nav-light': '10px'
      },
      backgroundImage: {
        'azzurra-gold-linear':
          'linear-gradient(-168deg, rgb(221,202,150) 0%, rgb(179,140,63) 100%)',
        'azzurra-blue-linear':
          'linear-gradient(116deg, rgb(36,46,99) 0%, rgb(56,97,122) 100%)',
        'gradient-linear':
          'linear-gradient(180deg, rgba(255,255,255,0.75) 5%, rgba(255,255,255,0) 60%)',
        'gradient-light':
          'radial-gradient(circle, rgb(255 255 255 / 70%) 0%, rgb(255 255 255 / 0%) 50%)',
        'team-section': `url('/images/azzurra__team-section__bg.jpg')`,
        'team-person-card': `url('/images/azzurra__team-section__fallback-profile-img.png')`,
        'regulatory-information': `url('/images/azzurra__investment-policy__bg.jpg')`,
        'contact-form': `url('/images/azzurra__contact-section__bg.png')`,
        'hero-banner': `url('/images/azzurra__hero-banner.jpg')`
      },
      backgroundPosition: {
        brandHighlights: 'center 18px'
      },
      gridTemplateAreas: {
        'about-card': ['icon description']
      },
      gridTemplateColumns: {
        'about-card': 'minmax(4rem, 5rem) minmax(83.333333%, 1fr)'
      },
      height: {
        'content-custom': 'calc(100% - 100px)',
        'text-content-90': '90%',
        'text-content-80': '80%'
      },
      maxWidth: {
        boxPdf: '18.5rem'
      },
      maxHeight: {
        'screen-75': '90vh'
      },
      margin: {
        '75%': '75%'
      },
      boxShadow: {
        1: '0px 5px 10px 0px rgba(0, 0, 0, 0.1)'
      },
      spacing: {
        width: {
          'w-screen': '100vw'
        },
        height: {
          'h-screen': '100vh'
        }
      },
      keyframes: {
        up: {
          '0%': {
            transform: 'translateY(-100%)'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        down: {
          '0%': {
            transform: 'translateY(0)'
          },
          '100%': {
            transform: 'translateY(-100%)'
          }
        }
      },
      animation: {
        'to-up': 'up 0.3s linear',
        'to-down': 'down 0.3s linear'
      }
    }
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
    require('@tailwindcss/forms')
  ]
};
