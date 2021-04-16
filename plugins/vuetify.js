import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: '#1976D2',
    accent: colors.grey.darken1,
    secondary: "#2F91EE",
    info: colors.teal.lighten1,
    warning: "#F8A611",
    error: "#DB3C3C",
    success: "#2EB85C",
    overview1: '#039BE5',
    overview2: '#2274A5'
  }
})
