export const state = () => ({
  sidebar: false,
  isLoggedIn: true,
  username: 'Admin',

  
})

export const mutations = {
  toggleSidebar(state) {
    state.sidebar = !state.sidebar
  },

  login(state, username) {
    state.isLoggedIn = true
    // state.username = username
  },

  logout(state, username) {
    state.isLoggedIn = false
    // state.username = username
  }
}