let base_url = process.env.loginbase
const model = $axios => ({
  register({username, email, password}) {
    return $axios.$post(base_url + '/signup', {
      username, email, password
    })
  },
  
  getUsers() {
    return $axios.$get(base_url + '/users', {
      params: {
        role: 1
      }
    })
  },

  edit({data}) {
    return $axios.$put(base_url + '/users/' + data.username, {
      role: data.role,
      disabled: data.disabled
    })
  }
});

export default ({
  $axios
}, inject) => {
  inject('user', model($axios));
}