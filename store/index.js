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
  ],

  nama_bidang: {
    "Jangka Sorong": [3],
    "Mikrometer Eksternal": [4],
    "Dial Indicator": [2],
    "Pressure Gauge": [37],
    "Mesin Uji Universal": [13],
    "Anak Timbangan F1/F2": [28],
    "Inkubator": [99],
    "pH meter": [22],
    "Autoclave": [29],
    "Timbangan": [39, 40, 41],
    "Buret": [42],
    "Furnace (Tanur)": [99],
    "Oven/Bath": [30],
    "Atomatic Absorption Spectrophotometer (AAS)": [19],
    "Pipet Ukur": [42],
    "Termometer Digital": [33],
    "Hot Plate": [35],
    "Refregerator": [99],
    "Proving Ring": [15],
    "Hammer Tester": [7, 36],
    "Gelas Ukur": [99],
    "Turbidimeter": [99],
    "Load Cell": [9],
    "Labu Ukur": [99],
    "Konduktometer": [99],
    "Hidrolik Jack": [8],
    "Ayakan": [1],
    "Anak Timbangan M1/M2": [99],
    "Mesin Uji Impact": [12],
    "Blaine Apparatus": [99],
    "Bola Baja (Massa & dimensi)": [99],
    "Softening Point": [99],
    "Termometer Gelas": [34],
    "Penetrometer": [99],
    "Termometer Gauge": [99],
    "Temperature Gauge": [99],
    "Serapan spektometeratom/ atomic absorption spectro": [19]
  },

  bidang: {
    1: { id: 'dimensi1', slug: '/dimensi/ayakan/lk', name: 'Ayakan', cat: 'dimensi' },
    2: { id: 'dimensi2', slug: '/dimensi/dial_indikator/lk', name: 'Dial Indikator', cat: 'dimensi' },
    3: { id: 'dimensi3', slug: '/dimensi/jangka_sorong/lk', name: 'Jangka Sorong', cat: 'dimensi' },
    4: { id: 'dimensi4', slug: '/dimensi/micrometer/lk', name: 'Mikrometer Eksternal', cat: 'dimensi' },
    5: { id: 'dimensi5', slug: '/dimensi/stopwatch/lk', name: 'Stopwatch', cat: 'dimensi' },
    6: { id: 'gaya1', slug: '/gaya/durometer/lk', name: 'Durometer', cat: 'gaya' },
    7: { id: 'gaya2', slug: '/gaya/hammer_tester/before_set', name: 'Hammer Tester', cat: 'gaya' },
    8: { id: 'gaya3', slug: '/gaya/hydraulik_jack/lk', name: 'Hidrolik Jack', cat: 'gaya' },
    9: { id: 'gaya4', slug: '/gaya/load_cell/lk', name: 'Load Cell', cat: 'gaya' },
    10: { id: 'gaya5', slug: '/gaya/abrasi/lk', name: 'Mesin Abrasi', cat: 'gaya' },
    11: { id: 'gaya6', slug: '/gaya/bending/lk', name: 'Mesin Bending', cat: 'gaya' },
    12: { id: 'gaya7', slug: '/gaya/uji_impak/lk', name: 'Mesin Uji Impak', cat: 'gaya' },
    13: { id: 'gaya8', slug: '/gaya/uji/lk', name: 'Mesin Uji', cat: 'gaya' },
    14: { id: 'gaya9', slug: '/gaya/mixer/lk', name: 'Mixer', cat: 'gaya' },
    15: { id: 'gaya10', slug: '/gaya/proving_ring/lk', name: 'Proving Ring', cat: 'gaya' },
    16: { id: 'gaya11', slug: '/gaya/spring_impact/lk', name: 'Spring Impact', cat: 'gaya' },
    17: { id: 'gaya12', slug: '/gaya/surface_roughness/lk', name: 'Surface Roughness', cat: 'gaya' },
    18: { id: 'gaya13', slug: '/gaya/uji_kekerasan/lk', name: 'Uji Kekerasan', cat: 'gaya' },
    19: { id: 'instrumen1', slug: '/instrumen/AAS/lk', name: 'Atomatic Absorption Spectrophotometer (AAS)', cat: 'instrumen' },
    20: { id: 'instrumen2', slug: '/instrumen/conductivity_meter/lk', name: 'Conductivity Meter', cat: 'instrumen' },
    21: { id: 'instrumen3', slug: '/instrumen/do_meter/lk', name: 'DO Meter', cat: 'instrumen' },
    22: { id: 'instrumen4', slug: '/instrumen/ph_meter/lk', name: 'pH meter', cat: 'instrumen' },
    23: { id: 'instrumen5', slug: '/instrumen/spectro_emisi/lk', name: 'Spectro Emisi', cat: 'instrumen' },
    24: { id: 'instrumen6', slug: '/instrumen/spectro_vis_uvis/lk', name: 'Spectro VIS-UVIS', cat: 'instrumen' },
    25: { id: 'kelistrikan1', slug: '/kelistrikan/battery_charge/lk', name: 'Battery Charge', cat: 'kelistrikan' },
    26: { id: 'kelistrikan2', slug: '/kelistrikan/load_bank/lk', name: 'Load Bank', cat: 'kelistrikan' },
    27: { id: 'kelistrikan3', slug: '/kelistrikan/mesin_las/lk', name: 'Mesin Las', cat: 'kelistrikan' },
    28: { id: 'massa1', slug: '/massa/anak_timbangan_f1-f2/lk', name: 'Anak Timbangan F1/F2', cat: 'massa' },
    29: { id: 'suhu1', slug: '/suhu/autoclave/lk', name: 'Autoclave', cat: 'suhu' },
    30: { id: 'suhu2', slug: '/suhu/oven/bath/lembar-kerja', name: 'Oven/Bath', cat: 'suhu' },
    31: { id: 'suhu3', slug: '/suhu/temp_recorder/lk', name: 'Temperature Recorder', cat: 'suhu' },
    32: { id: 'suhu4', slug: '/suhu/termometer_dial/lk', name: 'Termometer Dial', cat: 'suhu' },
    33: { id: 'suhu5', slug: '/suhu/termometer_digital/lk', name: 'Termometer Digital', cat: 'suhu' },
    34: { id: 'suhu6', slug: '/suhu/termometer_gelas/lk', name: 'Termometer Gelas', cat: 'suhu' },
    35: { id: 'suhu7', slug: '/suhu/water_bath/lk', name: 'Water Bath', cat: 'suhu' },
    36: { id: 'tekanan1', slug: '/tekanan/hammer_tester/before_set', name: 'Hammer Tester', cat: 'tekanan' },
    37: { id: 'tekanan2', slug: '/tekanan/pressure_gauge/lk', name: 'Pressure Gauge', cat: 'tekanan' },
    38: { id: 'timbangan1', slug: '/timbangan/moisture_balance/lk', name: 'Moisture Balance', cat: 'timbangan' },
    39: { id: 'timbangan2', slug: '/timbangan/timbangan_elektronik/lk', name: 'Timbangan Elektronik', cat: 'timbangan' },
    40: { id: 'timbangan3', slug: '/timbangan/timbangan_mekanik_industri/lk', name: 'Timbangan', cat: 'timbangan' },
    41: { id: 'timbangan4', slug: '/timbangan/timbangan_mekanik/lk', name: 'Timbangan', cat: 'timbangan' },
    42: { id: 'Volumetrik1', slug: '/volumetrik/buret/lk', name: 'Buret', cat: 'Volumetrik' },
    43: { id: 'Volumetrik2', slug: '/volumetrik/piknometer/lk', name: 'Piknometer', cat: 'Volumetrik' },
    99: { id: 'notfound'}
  }
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