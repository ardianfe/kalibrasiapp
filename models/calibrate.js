let url = 'https://kalibarasi-b4t.appspot.com'
const model = $axios => ({
  upload({file}) {
    console.log(file);    
    let formData = new FormData()
    formData.append('file', file)
    return $axios.$post(url + '/upload', formData)
  },

  getCertData({no_cert}) {
    return $axios.$get(url + '/data_cert/' + no_cert)
  },

  getWorkSheet({no_cert, temperature}) {
    return $axios.$get(url + '/lembar_kerja/' + no_cert + '/' + temperature)
  },

  getAllCertificate() {
    return $axios.$get(url + '/data_cert/')
  },

  getCertificate({no_cert}){
    return $axios.$get(url + '/data_cert/' + no_cert)
  },

  getLampiran({no_cert, temperature}){
    return $axios.$get(url + '/lampiran/' + no_cert + '/' + temperature)
  }, 
  
  getListData({no_cert, temperature}){
    return $axios.$get(url + '/lampiran/' + no_cert + '/' + temperature)
  }, 

  
});

export default ({
  $axios
}, inject) => {
  inject('calibrate', model($axios));
}