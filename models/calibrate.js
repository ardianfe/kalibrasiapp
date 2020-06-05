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
  
  dashboard(){
    return $axios.$get('https://dev-kalibrasi.uc.r.appspot.com/dashboard/5ecf1968400b079d81e61140')
  }, 

  
});

export default ({
  $axios
}, inject) => {
  inject('calibrate', model($axios));
}