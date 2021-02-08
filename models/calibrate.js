let url = 'https://kalibarasi-b4t.appspot.com'
let base_url = process.env.base
let base_url2 = process.env.base2

const model = $axios => ({
  getListOrders({perpage, page}) {
    return $axios.$get(base_url2+'/orders/?per_page='+perpage+'&page='+page)
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
  
  uploads({file, cat, sample, order_id, sample_number, sheet_name}) {
    // kalibrasiapis/uploads/?id_order=20746&id_sample=20082873001&cat=gaya&sample=13&sheet=GRP-100kN,5223
    // let formData = new FormData()
    // formData.append('file', file)
    // formData.append('sheet', sheet_name)
    // formData.append('cat', cat)
    // formData.append('sample', sample)
    return $axios.$post(base_url2 + '/uploads/?id_order='+order_id+'&id_sample='+sample_number+'&cat='+cat+'&sample='+sample+'&sheet='+sheet_name, file)
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
  },

  //sipeja
  sipeja_upload(data) {
    return $axios.$push(process.env.sipeja_base + '/uploadLaporan', {
      // "{
      //   ""id_order""	:123,
      //   ""3-09-20-00002""	: CURLFile,
      //   ""3-09-20-00003""	: CURLFile
      // }"
      
      data
    })
  }
});

export default ({
  $axios
}, inject) => {
  inject('calibrate', model($axios));
}