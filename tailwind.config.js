/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url(./images/bg-hero-desktop.svg)",
        'hero-mobile': "url(./images/bg-hero-mobile.svg)"
      },
      fontFamily: {
         'body': ['"Open Sans'],
         'header': ['Poppins']
      },
      backgroundColor: {
        'pink': 'hsl(322, 100%, 66%)',
        'light-pink': 'hsl(322, 100%, 70%)',
        'pale-cyan': 'hsl(193, 100%, 96%)',
      },
      colors: {
        'pale-cyan': 'hsl(193, 100%, 96%)',
        'dark-cyan': 'hsl(192, 100%, 9%)',
        'grayish-blue': 'hsl(208, 11%, 55%)',
        'pink': 'hsl(322, 100%, 66%)',
      },
      maxWidth: {
         'max-1': '31rem',
         'max-2': '30rem',
         'max-3': '37rem',
         'max-4': '29rem',
         'max-5': '15.5rem',
         'max-6': '17.8rem'
      },
      boxShadow: {
        'round-shadow': '0 0 6px 1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
      },
      spacing: {
        'bot': '-13rem'
      }
    },
  },
  plugins: [],
}

