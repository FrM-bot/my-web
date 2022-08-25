/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', ...defaultTheme.fontFamily.sans]
      },
      maxWidth: {
        '60vw': '60vw'
      }
    },
    colors: {
      'custom-cyan': '#15e8cf',
      'custom-dark': '#18191c',
      'custom-dark-2': '#242424b3',
      'custom-white': '#fff'
    }
  },
  darkMode: ['class', '[data-theme="dark"]']
}
