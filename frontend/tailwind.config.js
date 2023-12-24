/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '18': '18px',
        '112': '24rem',
        '114': '26rem',
        '116': '28rem',
        '125': '32rem',
        '132': '38rem',
        '135': '42rem'
      }
    },
    borderWidth: {
      '1': '1px',
      '2': '2px'
    },
  },
  plugins: [],
}

