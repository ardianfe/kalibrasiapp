let url = 'https://kalibarasi-b4t.appspot.com'
let base_url = process.env.base
let base_url2 = process.env.base2

const model = $axios => ({
  getListOrders() {
    return $axios.$get(base_url2+'/orders/?per_page=50&page=1')
  },

  getLembarKerja({id}) {
    return $axios.$get(base_url2 + '/results/' + id)
  },

  getDetailOrders({id}) {
    return $axios.$get(base_url2 + '/orders/' + id)
  },

  getResultByName({name}) {
    return $axios.$get(base_url2 + '/results/?nama_sample=' + name )
  },

  changeCertifDate({no_sampel, date_cert}) {
    return $axios.$put(base_url2 + '/results/' + no_sampel, {
      date_cert
    })
  }
});

export default ({
  $axios
}, inject) => {
  inject('category', model($axios));
}