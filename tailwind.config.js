/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#287477',
        'primary': '#42C1C7',
        'primary-light': '#8EDADD',
        'secondary-dark': '#311062',
        'secondary': '#521AA3',
        'secondary-light': '#9776C8',
        'success-dark': '#16612B',
        'success': '#24A148',
        'success-light': '#7CC791',
        'warning-dark': '#977204',
        'warning': '#FCBE07',
        'warning-light': '#FDD86A',
        'error-dark': '#831218',
        'error': '#DA1E28',
        'error-light': '#E9787E',
        'gray-6': '#161616',
        'gray-5,5': '#222222',
        'gray-5': '#393939',
        'gray-4': '#6F6F6F',
        'gray-3': '#A8A8A8',
        'gray-2': '#E0E0E0',
        'gray-1': '#F4F4F4',
        'gray-0': '#FFFFFF',
      },
    },
    transitionProperty: {
      'height': 'height',
      'spacing': 'margin, padding',
      'width': 'width',
    }
  },
  plugins: [],
  }
  
  