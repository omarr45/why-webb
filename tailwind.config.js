module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffff32',
          100: '#fff628',
          200: '#ffec1e',
          300: '#ffe214',
          400: '#ffd80a',
          500: '#ffce00',
          600: '#f5c400',
          700: '#ebba00',
          800: '#e1b000',
          900: '#d7a600',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
  variants: {
    extend: {
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus'],
    },
  },
};
