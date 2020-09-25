import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'
require('dotenv').config();

export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  env: {
    base: process.env.base,
    title: process.env.title,
    desc: process.env.desc
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      user: '/',
      home: '/banksoal'
    },
    strategies: { 
      local1: {
        _scheme: 'local',
        endpoints: {
          login: {
            url: process.env.base + '/login/',
            method: 'post',
            propertyName: 'token'
          },
          logout: false,
          user: {
            url: process.env.base + '/protected/',
            method: 'get',
            propertyName: ''
          }
        },
        tokenRequired: true,
        tokenType: 'Bearer',
      },
    }
  },

  head: {
    title: process.env.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /* nuxt.js Router */ 
  router: {
    middleware: ['auth']
  },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/axios',
    '@/plugins/auth',

    // Models
    '@/models/calibrate',
    '@/models/user',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
