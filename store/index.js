export const state = () => ({
  sidebar: false,
  isLoggedIn: true,
  username: 'Admin',

  company: '',
  dashboard: []
  
})

export const mutations = {
  toggleSidebar(state) {
    state.sidebar = !state.sidebar
  },

  setCompany(state, data) {
    state.company = data
  },
  
  setDashboard(state, data) {
    state.dashboard = data
  },

  login(state, username) {
    state.isLoggedIn = true
    // state.username = username
  },

  logout(state, username) {
    state.isLoggedIn = false
    // state.username = username
  },
}