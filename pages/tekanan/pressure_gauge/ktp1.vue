<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <tekananHeader></tekananHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p>No. Laporan : 3-09-19-00757</p>

            <p class="mt-3 b">Analisa Tipe B </p>
            <table width="100%">
              <tr class="tableizer-firstrow">
                <td class="b">1.</td>
                <td class="b" colspan="3">Ketidakpastian baku kalibrasi </td>
                <td class="b" colspan="2">Penguji  Bobot  Mati  No.</td>
                <td class="b">25/213, </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Dari Sertifikat Kalibrasi : U95 =, </td>
                <td>&nbsp;</td>
                <td>0.003</td>
                <td>%</td>
                <td>Asumsi k = 2,0</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>     U95 =</td>
                <td>0.00075</td>
                <td>kgf  =</td>
                <td>0.00075</td>
                <td>Kg/cm²</td>
              </tr>
            </table>

            <table width="100%" class="mt-2">
              <tr>
                <td class="b">2.</td>
                <td class="b" colspan="6">Ketidakpastian baku dari variasi suhu</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="6">Temperatur ruangan pengukuran bervariasi dalam limit ± 2° C dengan asumsi mempunyai</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>distribusi rectangular</td>
                <td>&nbsp;</td>
                <td>u(t) =</td>
                <td>2</td>
                <td>°C</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="6">Koefisien sensitifitas untuk komponen ketidakpastian baku ini adalah  -aP, </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Maka : -aP = 23E-6 x Kap.Max.PG =</td>
                <td>&nbsp;</td>
                <td>0.00138</td>
                <td>Kg/cm²</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </table>
            
            <table width="100%" class="mt-2">
              <tr>
                <td class="b">3.</td>
                <td class="b" colspan="6">Ketidakpastian baku dari variasi perbedaan level acuan (u3)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="6">Dari Sertifikat alat pengukur perbedaan tinggi level acuan diperoleh nilai ketidakpastian 2 mm, k=2</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>u(h)=1 mm=</td>
                <td>0.001</td>
                <td>m</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="6">Koefisien sensitifitas untuk komp ini adalah rg, apabila r = 800 kg/m3 = 0.8 kg/l</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>rg = (0.8 x 9.78 m/s2) =</td>
                <td>&nbsp;</td>
                <td>7.824</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </table>
            
            <table width="100%" class="mt-2">
              <tr>
                <td class="b">4.</td>
                <td class="b" colspan="6">Ketidakpastian baku dari variasi percepatan gravitasi lokal (u4)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="6">Bila variasi gravitasi lokal diasumsikan sebesar 25 ppm, dengan dist rectrangular, maka :</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>u(g) = 25ppm =</td>
                <td>0.000025</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Koefisien sensitifitas adalah P/g, sehingga :</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>P/g= (Kap.Max.PG /9.78 m/s2) =</td>
                <td>&nbsp;</td>
                <td>6.134552</td>
                <td>Kg/cm²</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </table>
            
            <table width="100%" class="mt-2">
              <tr>
                <td class="b">5.</td>
                <td class="b" colspan="6">Ketidakpastian baku dari daya baca thd divisi Pressure Gauge (u5)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Daya baca terhadap bourdon Pressure Gauge adalah :</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>0.2</td>
                <td>Kg/cm²</td>
                <td>&nbsp;</td>
              </tr>
            </table>

            <p class="mt-3 b">Analisa Tipe A</p>
            
            <table width="100%" class="mt-2">
              <tr>
                <td>1.</td>
                <td>Ketidakpastian baku daya ulang pembacaan</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Daya ulang pembacaan diperoleh : </td>
                <td>&nbsp;</td>
                <td>0.2000</td>
                <td>Kg/cm²</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </table>

            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : {{data_alat.diperiksa.person}} <br>
                Tanggal :	{{convertDate(data_alat.diperiksa.date)}} <br>
                Tanda Tangan :	

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
              <v-flex xs6>
                Dikalibrasi oleh : {{data_alat.dikalibrasi.person}} <br>
                Tanggal :	{{convertDate(data_alat.dikalibrasi.date)}} <br>
                Tanda-tangan :

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>        
    
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<style scoped>
  #wrapper {
    overflow-x: hidden;
    /* overflow: scroll; */
  } table {
    border-collapse: collapse;
    font-size: 9pt;
  } table, th, td {
    border: 1px solid grey;
    padding: 2px
  }
  table.fixed { table-layout:fixed; }
  table.fixed td { overflow: hidden; }
</style>

<script>
import tekananHeader from '~/components/tekanan/pressure.vue'

export default {
  components: {
    tekananHeader
  },

  head: {
    title: 'Ketidakpastian Pressure Gauge | Bidang Tekanan',
    meta: [
      {
        hid: 'Tekanan',
        name: 'Tekanan',
        content: 'Bidang Tekanan'
      }
    ],
  },

    data: () => ({
    no_cert: '',



    komponen: [
      { nama: 'Penguji  Bobot  Mati  No.	25/213, ', satuan: 'Kg/cm²', distribusi: 'normal'},
      { nama: 'var suhu	', satuan: '°C', distribusi: 'rectangular'},
      { nama: 'beda level oli	', satuan: 'm', distribusi: 'normal'},
      { nama: 'var g-lokal	', satuan: '°C', distribusi: 'rectangular'},
      { nama: 'daya baca	', satuan: '°C', distribusi: 'rectangular'},
      { nama: 'Daya ulang Pembacaan	', satuan: '°C', distribusi: 'normal'},
    ],

    data_alat: {
      alat_kalibrasi: {
        larutan_standar: []
      },
      deskripsi: {
        buatan: "", 
        kondisi_ling: {
          kelembaban_udara: "", 
          suhu_ruang: ""
        },
        lokasi: "",
        merk: "",
        model: "",
        nama_alat: "",
        no_seri: "",
      },
      dikalibrasi: {
        date: "0000-00-00 00:00:00", 
        person: ""
      },
      diperiksa: [{
        date: "0000-00-00 00:00:00", 
        person: ""
      }],
      kondisi_pengamatan: [],
      metode_kalibrasi: "PC-307-03",
      standar_acuan: []
    },
  
    data_ktp: {
      derajat_kebebasan: 0,
      faktor_cakupan: 0,
      ktp_bentang: {
        satuan_kg_percm2: 0,
        satuan_persen: 0
      },
      ktp_gabungan: 0,
      table_data: {
        ci: [],
        pembagi: [],
        U: [],
        ui: [],
        uici: [],
        uici2: [],
        uici4pervi: [],
        vi: []
      },
      sums: {
        uici2: 0, 
        uici4pervi: 0
      },
    },
  }),

  mounted() {
    this.getLK()
  },

  methods: {
    async getLK() {
      try {
        const req = await this.$category.getLembarKerja({id: this.$route.query.id})

        console.log('get LK: ', req);
        let req_data = req.results[0]

        this.no_cert = req_data.no_laporan
        this.data_ktp = req_data.data_ktp.ktp_pengukuran_kalibrasi_tekanan
        this.data_alat = req_data.data_alat
      } catch (error) {
        console.log('get LK err: ', error.response);
      }
    },

    convertDate(date_string) {
      // const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date_string).toLocaleDateString('id-ID', options)
    }
  },

}
</script>