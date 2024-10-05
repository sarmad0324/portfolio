/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0E1117',  // Your global background color // Your global text color
        textSecondary: '#9398A0',
        btnColor:'#3154AD',
        btnHover: '#222830',
      },
      keyframes: {
        bounceCustom: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        bounceCustom: 'bounceCustom 1s infinite',  // Define the custom animation
      },
    },
  },
  plugins: [],
  // tailwind.config.js

}