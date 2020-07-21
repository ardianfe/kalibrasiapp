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

  // getWorkSheet({no_cert, temperature}) {
  //   return $axios.$get(url + '/lembar_kerja/' + no_cert + '/' + temperature)
  // },

  getAllCertificate() {
    return $axios.$get(url + '/data_cert/')
  },

  getCertificate({no_cert}){
    return $axios.$get(url + '/data_cert/3-01-19-00473')
  },

  getLampiran({no_cert, temperature}){
    return $axios.$get(url + '/lampiran/3-01-19-00473/110' + temperature)
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
  
  getAttachment({id, temperature}){
    return $axios.$get(base_url + '/lampiran/' + id + '/' + temperature)
  }, 

  getWorkSheet({id, temp}){
    return $axios.$get(base_url + '/lembar_kerja/' + id + '/' + temp)
  }, 
  
  getAllWork({category}){
    return $axios.$get(base_url + '/all-works/', {
      params: {
        category
      }
    })
  }, 

  getWork({status, page}){
    return $axios.$get(base_url + '/dashboard/', {
      params: {
        status, //page
      }
    })
  },

  updateCertifStatus({id, status}) {
    return $axios.$put(base_url + '/data_cert/' + id, {
      status
    })
  },

  uploadFile({file, category}) {
    console.log(file, category);    
    let formData = new FormData()
    formData.append('file', file)
    formData.append('category', category)
    return $axios.$post(base_url + '/upload', formData)
  },

  getDetail({id}) {
    return $axios.$get(base_url + '/work/' + id + '/')
  }
});

export default ({
  $axios
}, inject) => {
  inject('calibrate', model($axios));
}