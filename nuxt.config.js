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
    base2: process.env.base2,
    title: process.env.title,
    desc: process.env.desc,
    api_key: process.env.api_key
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      user: '/',
      home: '/'
    },
    strategies: { 
      local1: {
        _scheme: 'local',
        endpoints: {
          login: {
            url: process.env.loginbase + '/token',
            method: 'post',
            propertyName: 'access_token'
          },
          logout: false,
          user: {
            url: process.env.loginbase + '/users/me',
            method: 'get',
            propertyName: ''
          }
        },
        tokenRequired: true,
        tokenType: 'Bearer',
      },
      sipeja: {
        _scheme: 'local',
        endpoints: {
          login: {
            url: process.env.sipeja_login + '/api/v1/employee',
            method: 'post',
            propertyName: 'data.name'
          },
          logout: false,
          // user: {
          //   url: process.env.sipeja_login + '/api/v1/employee',
          //   method: 'get',
          //   propertyName: ''
          // }
        },
        tokenRequired: true,
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
    '@/models/category',
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
    proxy: false
    // See https://github.com/nuxt-community/axios-module#options
  },

  proxy: {
    '/api/': process.env.sipeja_login,
    // '/api/': { target: process.env.sipeja_login, pathRewrite: {'^/api/': ''} }
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
