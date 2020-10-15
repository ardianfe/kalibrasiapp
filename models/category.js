let url = 'https://kalibarasi-b4t.appspot.com'
let base_url = process.env.base
let base_url2 = process.env.base2

const model = $axios => ({
  getListOrders() {
    return $axios.$get(base_url2+'/orders/?per_page=50&page=1')
  },

  getLembarKerja({id}) {
    return $axios.$get(base_url2 + '/results/' + id)
  }
});

export default ({
  $axios
}, inject) => {
  inject('category', model($axios));
}