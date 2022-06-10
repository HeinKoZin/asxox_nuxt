let apiLink = process.env.API_LINK;

export default {
  mode: "universal",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Asxox",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Asxox - The Best Ecommerce in Myanmar",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      { rel: "icon", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  },

  server: {
    host: "0.0.0.0",
    // for production
    port: process.env.PORT || 3000,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css", "vue-toast-notification/dist/theme-sugar.css"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    // Equivalent to { path: '~/components' }
    "~/components",
    { path: "~/components/Common", extensions: ["vue"] },
    { path: "~/components/Slider", extensions: ["vue"] },
    { path: "~/components/AdsShop", extensions: ["vue"] },
    { path: "~/components/ProductDetail", extensions: ["vue"] },
    { path: "~/components/Checkout", extensions: ["vue"] },
    { path: "~/components/User", extensions: ["vue"] },
    { path: "~/components/Layouts", extensions: ["vue"] },
    { path: "~/components/ModelBoxs", extensions: ["vue"] },
  ],

  purgeCSS: {},

  plugins: [
    "~/plugins/v-toast.js",
    "~/plugins/v-touch.js",
    "~/plugins/inject.js",
    { src: "~/plugins/v-dragscroll.js", ssr: false },
    "~/plugins/fontawesome.js",
    "~/plugins/click-outside.js",
    { src: "~/plugins/v-carousel.js", ssr: false },
    // '@/plugins/aos.js'
  ],
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8", "@nuxtjs/dotenv", 'nuxt-lazysizes'],

  lazySizes: {
    extendAssetUrls: {
      img: ['src', 'srcset', 'data-src', 'data-srcset'],
      source: ['src', 'srcset', 'data-src', 'data-srcset'],

      // Example for a custom component
      AppImage: ['source-md-url', 'image-url']
    },
  },

  image: {
    domains: ['cdn.asxox.com.mm']
  },

  ssr: true,
  target: "server",
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxt/image",
    "cookie-universal-nuxt",
    "@nuxtjs/proxy",


    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyCuarDfDNQtbUtPEO4MjZKhTeCk6Dqumdw",
          authDomain: "asxoxfblogin.firebaseapp.com",
          projectId: "asxoxfblogin",
          storageBucket: "asxoxfblogin.appspot.com",
          messagingSenderId: "539876334740",
          appId: "1:539876334740:web:cecacc0987cb57a82be881",
          measurementId: "G-G5DEYDYDMR",
        },
        services: {
          auth: true, // Just as example. Can be any other service.
        },
      },
    ],

  ],


  axios: {
    proxy: true // Can be also an object with default options
  },


  proxy: [
    'https://asxox.com.mm'
  ],

  auth: {
    redirect: false,
    strategies: {
      local: {
        token: {
          property: "token",
          global: true,
          required: true,
          type: "Bearer",
          maxAge: 2147483647,
        },

        user: {
          property: false,
          autoFetch: true,
        },
        endpoints: {
          login: { url: "/login", method: "post" },
          logout: { url: "/logout", method: "get" },
          user: { url: "/user", method: "get" },
        },
      },
    },
    cookie: {
      options: {
        expires: 100000,
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: apiLink,
  },
  router: {
    middleware: ["auth/setDefaultToken", "store/defaultStore"],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
