let url = 'https://kalibarasi-b4t.appspot.com'
let base_url = process.env.base

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

  // New APIs
  
  getDashboard(){
    return $axios.$get(base_url + '/dashboard/')
  }, 
  
  getCompanyCount(){
    return $axios.$get(base_url + '/dashboard/co/')
  }, 
  
  getDataCertificate({id}){
    return $axios.$get(base_url + '/data_cert/' + id)
  }, 
  
  getWorkSheet({id}){
    return $axios.$get(base_url + '/lampiran/' + id)
  }, 

  getWorkSheet({id}){
    return $axios.$get(base_url + '/lembar_kerja/' + id)
  }, 
  
  getWorkSheet({category}){
    return $axios.$get(base_url + '/all-works/', {
      params: {
        category
      }
    })
  }, 

  uploadFile({file, category}) {
    console.log(file, category);    
    let formData = new FormData()
    formData.append('file', file)
    formData.append('category', category)
    return $axios.$post(url + '/upload', formData)
  },
});

export default ({
  $axios
}, inject) => {
  inject('calibrate', model($axios));
}