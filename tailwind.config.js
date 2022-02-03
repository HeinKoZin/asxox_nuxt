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
      variants: {
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
        backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
      },
      fontFamily: {
        "dongle": ['Dongle', defaultTheme.fontFamily.sans],
        "zen-kurenaido": ['Zen Kurenaido', defaultTheme.fontFamily.sans],
        "comfortaa": ['Comfortaa', 'cursive'],
        "quicksand": ['Quicksand', defaultTheme.fontFamily.sans],
      },
      animation: {
        fadeIn: "fade-in 0.5s ease-in-out",
        fadeOut: "fade-out 0.5s ease-in-out",
        slideUp: "slide-up 0.5s ease-in-out",
        slideDown: "slide-down 0.5s ease-in-out",
        slideLeft: "slide-left 0.5s ease-in-out",
        slideRight: "slide-right 0.5s ease-in-out",
        loginSlideUp: "login-slide-up 0.5s ease-in-out",
        registerSlideUp: "register-slide-up 0.5s ease-in-out",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "fade-out": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          }
        },
        "slide-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          }
        },
        "login-slide-up": {
          "0%": {
            // transform: "translateX(100%)",
            // Sync with info-container's width
            left: "58.333333%",
          },
          "100%": {
            // transform: "translateX(0)",
            left: "0%",
          }
        },
        "register-slide-up": {
          "0%": {
            // transform: "translateX(100%)",
            // Sync with info-container's width
            right: "58.333333%",

          },
          "100%": {
            // transform: "translateX(0%)",
            right: "0%",
          }
        }

      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],

}
