let base_url = process.env.base
const model = $axios => ({
  signUp({email, password}) {
    return $axios.$post(url + '/sign_up/', {
      email, password
    })
  },
});

export default ({
  $axios
}, inject) => {
  inject('user', model($axios));
}