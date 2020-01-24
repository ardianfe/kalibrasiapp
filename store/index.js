export const state = () => ({
  sidebar: false,
  isLoggedIn: false,
  title: 'Aplikasi Soal',
  username: 'Admin',

  paketSoal: [
    { id: 0, title: 'Ulangan Harian', status: 'undone' },
    { id: 1, title: 'Ulangan Tengan Semester', status: 'done' },
    { id: 2, title: 'Latihan', status: 'done' },
    { id: 3, title: 'Quiz', status: 'undone' },
  ],

  
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