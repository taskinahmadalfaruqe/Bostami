/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: 'class',

  content: ["*"],
  theme: {

    container: {
      center: true,
      padding: '50px',
    },

    extend: {
      backgroundImage: {
        'background-image': "url('../Image/bg.jpg')",
        'bg-image-dark': "url('../Image/bgtwo.jpg')",
        'common-bg': "linear-gradient(to right, #fa5252, #dd2476)",
        'common-bg-hover': "linear-gradient(to left, #fa5252, #dd2476)",
      },

      colors: {
        lightbg: '#F3F6F6',
        darkbg: '#111111',
        lightdarkbg: '#1D1D1D',
      }
    },

    fontFamily: {
      'POPINS': ['Poppins', 'sans-serif'],
      'OSWALD': ['Oswald', 'sans-serif'],
    }
  },
  plugins: [],
}
