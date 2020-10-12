let url = 'https://kalibarasi-b4t.appspot.com'
let base_url = process.env.base
let base_url2 = process.env.base2

const model = $axios => ({
  getListOrders() {
    return $axios.$get(base_url2+'/orders/?per_page=50&page=1')
  },

  testCors() {
    return $axios.$get(base_url2 + '/results/16042280001')
  },

  upload({file, cat, sample, order_id, sample_number}) {
    let formData = new FormData()
    formData.append('file', file)
    formData.append('cat', cat)
    formData.append('sample', sample)
    return $axios.$post(base_url2 + '/upload/' + order_id + '/' + sample_number, formData)
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
  },

  deleteDataCert({id}) {
    return $axios.$delete(base_url + '/work/' + id + '/')
  }
});

export default ({
  $axios
}, inject) => {
  inject('calibrate', model($axios));
}