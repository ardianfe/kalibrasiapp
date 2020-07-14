export const state = () => ({
  sidebar: false,
  isLoggedIn: true,
  username: 'Admin',

  company: '',
  dashboard: [],
  certified: [],

  dashboardData: []
  
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
    console.log('dashboard data', data);
  },
  
  setCertified(state, data) {
    state.certified = data
    console.log('certified data', data);
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