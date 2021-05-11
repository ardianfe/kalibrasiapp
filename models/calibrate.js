let url = 'https://kalibarasi-b4t.appspot.com'
let base_url = process.env.base
let base_url2 = process.env.base2
let masterbase = process.env.masterbase

const model = $axios => ({
  getListOrders({perpage, page}) {
    return $axios.$get(masterbase+'/order?n_per_page='+perpage+'&page_number='+page)
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
    return $axios.$post(base_url2 + '/uploads/?id_order='+order_id+'&id_sample='+sample_number+'&cat='+cat+'&sample='+sample+'&sheet='+sheet_name, file)
  },

  getCertData({no_cert}) {
    return $axios.$get(url + '/data_cert/' + no_cert)
  },

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

  createReport({
    _id,
    nama_sample,
    no_laporan,
    dibuat_untuk,
    equipment, 
    owner,
    acceptance_date,
    calibration_date,
    standard,
    env_cond,
    calibration_location,
    calibration_method,
    reference,
    result,
    published_date,
    director_name,
    director_nip,
    id_sipeja
  }) {
    let createdata = {
      "_id": _id, 
      "nama_sample": nama_sample,
      "no_laporan": no_laporan,
      "dibuat_untuk": dibuat_untuk,
      "equipment": equipment,
      "owner": owner,
      "acceptance_date": acceptance_date,
      "calibration_date": calibration_date,
      "standard": standard,
      "env_cond": env_cond,
      "calibration_location": calibration_location,
      "calibration_method": calibration_method,
      "reference": reference,
      "result": result,
      "published_date": published_date,
      "director_name": director_name,
      "director_nip": director_nip,
      "id_sipeja": id_sipeja
    }
    // console.log('create report:', createdata);
    return $axios.$post(process.env.basenew, {
      _id, 
      nama_sample,
      no_laporan,
      dibuat_untuk,
      equipment,
      owner,
      acceptance_date,
      calibration_date,
      standard,
      env_cond,
      calibration_loc: calibration_location,
      calibration_method,
      reference,
      result,
      published_date,
      director_name,
      director_nip,
      id_sipeja
    })
  },

  //upload sipeja via another API
  sipeja_upload({order_id, sample_id, no_laporan}) {
    return $axios.$get(process.env.sipeja_upload + '/' + order_id + '/' + sample_id + '/' + no_laporan)
  },

  getNomorLaporan({id_order, no_sample}) {
    return $axios.$get(process.env.sipeja_basenew, {
    // return $axios.$get(process.env.basenew, {
      params: {
        id_order, id_sample: no_sample
      }
    })
  },

  saveForm({sample_id, certificate}) {
    return $axios.$put(process.env.basenew + sample_id, certificate)
  },

  //base new
  getLembarKerja({id}) {
    return $axios.$get(process.env.basenew + id)
  },

  getOrderDetails({id}) {
    return $axios.$get(process.env.base2 + '/orders/' + id)
  },

  getOnGoings() {
    return $axios.$get(process.env.basenew)
  },
  getOnGoingsByStatus({stat}) {
    if (stat == 99) {
      return $axios.$get(process.env.basenew)
    } else {
      return $axios.$get(process.env.basenew + '?status=' + stat)
    }
  },

  uploadReport({id, file, cat}) {
    let formData = new FormData()
    formData.append('file', file)
    // return $axios.$post(base_url + '/upload', formData)

    return $axios.$put(process.env.basefile + id +'?cat='+ cat, formData)
  },

  getFile({url}) {
    return $axios.$get(url)
  },

  mergeFile({cert, attch, id}) {
    let formData = new FormData()
    formData.append('files', cert)
    formData.append('files', attch)

    console.log(formData);
    return $axios.$post(process.env.basepdf + '/uploadpdf/' + id, formData)
  },

  getStandard({nama_sample}) {
    return $axios.$get(masterbase + '/standard', {
      params: {
        nama_sample
      }
    })
  },

  createStandard({name, tools, traceability}) {
    return $axios.$post(masterbase + '/standard', {
      standard_name: name,
      alat_standard: tools,
      ketertelusuran: traceability
    })
  }
});

export default ({
  $axios
}, inject) => {
  inject('calibrate', model($axios));
}