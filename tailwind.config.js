const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dongle": ['Dongle', defaultTheme.fontFamily.sans],
        "zen-kurenaido": ['Zen Kurenaido', defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
