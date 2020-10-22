export const state = () => ({
  sidebar: false,
  isLoggedIn: true,
  username: 'Admin',

  company: '',
  dashboard: [],
  certified: [],

  dashboardData: [],

  dialog: {
    display: false,
    sample_name: '',
    order_number: 0,
    sample_number: 0
  },

  fields: [
    { id: 1, name: 'Suhu', desc: '-', url: '?bid=temperatur&sub=oven', count: 3, color: 'blue ' },
    { id: 2, name: 'Dimensi', desc: '-', url: '?bid=dimensi', count: 0, color: 'success' },
    { id: 3, name: 'Tekanan', desc: '-', url: '?bid=tekanan', count: 0, color: 'warning' },
    { id: 4, name: 'Gaya', desc: '-', url: '?bid=gaya&sub=gaya', count: 0, color: 'error' }, 
    { id: 5, name: 'Masa dan Timbangan', desc: '-', url: '?bid=masa dan timbangan', count: 0, color: 'blue' },
    { id: 6, name: 'Optik / Instrumen Analisa', desc: '-', url: '?bid=optik \/ instrumen analisa', count: 0, color: 'success' },
    { id: 7, name: 'Alat-alat Gelas Volumetri', desc: '-', url: '?bid=alat-alat gelas volumetri', count: 0, color: 'warning' },
    { id: 8, name: 'Kelistrikan (Mesin Las)', desc: '-', url: '?bid=kelistrikan (mesin las)', count: 0, color: 'error' },
  ]  
})

export const mutations = {
  toggleSidebar(state) {
    state.sidebar = !state.sidebar
  },

  openDialog(state, data) {
    state.dialog.display = true
    state.dialog.sample_name = data.sample_name
    state.dialog.order_number = data.order_number
    state.dialog.sample_number = data.sample_number
  },

  closeDialog(state) {
    state.dialog.display = false
    state.dialog.sample_name = ''
    state.dialog.order_number = 0
    state.dialog.sample_number = 0
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

  setOvenCount(state, data) {
    var keyCount = Object.keys(data).length;
    state.fields[0].count = keyCount
  }
}