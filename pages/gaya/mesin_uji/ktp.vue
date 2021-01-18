<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <gayaHeader></gayaHeader>

      <v-layout justify-center column>
        <v-card class="px-4 py-2 elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <p class="b mb-0 mt-2">Pilih Lembar Kerja</p>
          <v-select :items="sheetnames" v-model="sheetname"></v-select>
        </v-card>

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p>No. Laporan : 3-09-19-00757</p>
            <p class="text-xs-center b title my-4">
              LEMBAR KERJA VERIFIKASI SISTEM PENGUKUR GAYA <br>			
              MESIN UJI TARIK, TEKAN, UNIVERSAL
            </p>
            <p class="font-weight-bold">Perhitungan Ketidakpastian Pengukuran</p>

            <p class="mt-3 mb-0">1. Analisa Tipe B (µb)</p>
            <table>
              <tr>
                <td>a.</td>
                <td colspan="3">Pada Alat Kalibrasi (µb1)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>Tingkat Kepercayaan 95 %, faktor cakupan k (assumsi)</td>
                <td width="40px">=</td>
                <td>{{data_ktp[sheetname].analisa_tipe_b.mb1.k_trust}}</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>ketidakpastian standar dari sertifikat</td>
                <td>=</td>
                <td>
                  <span v-for="(item, index) in data_ktp[sheetname].analisa_tipe_b.mb1.ktp_std_sert" :key="index">{{item+ " "}}</span>
                </td>
              </tr>
              <tr>
                <td>b.</td>
                <td colspan="3">Ketidakpastian Drift alat standar (µb2)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Selisih residual maksimum</td>
                <td>=</td>
                <td>
                  <span v-for="(item, index) in data_ktp[sheetname].analisa_tipe_b.mb2.selisih_residual" :key="index">{{item+ " "}}</span>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Ketidakpastian Standar Drift (µb2)</td>
                <td>=</td>
                <td>
                  <span v-for="(item, index) in data_ktp[sheetname].analisa_tipe_b.mb2.std_drift" :key="index">{{item+ " "}}</span>
                </td>
              </tr>
              <tr>
                <td>c.</td>
                <td colspan="3">Pada pengaruh perubahan suhu (µb3)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Selisih suhu pengamatan</td>
                <td>=</td>
                <td>
                  <span v-for="(item, index) in data_ktp[sheetname].analisa_tipe_b.mb3" :key="index">{{item+ " "}}</span>
                </td>
              </tr>
              <tr>
                <td>d.</td>
                <td colspan="3">Pada indikator Hidraulik Jack  (µb4)</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Julat ukur</td>
                <td>=</td>
                <td>
                  <span v-for="(item, index) in data_ktp[sheetname].analisa_tipe_b.mb4.julat_ukur" :key="index">{{item+ " "}}</span>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Readability</td>
                <td>=</td>
                <td>
                  <span v-for="(item, index) in data_ktp[sheetname].analisa_tipe_b.mb4.readablity" :key="index">{{item+ " "}}</span>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Distribusi rectangular (a)</td>
                <td>=</td>
                <td>
                  <span v-for="(item, index) in data_ktp[sheetname].analisa_tipe_b.mb4.distribusi_recatangular" :key="index">{{item+ " "}}</span>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>- Ketidakpastian standar indikator hidraulik jack (µb4)</td>
                <td>=</td>
                <td>
                  <span v-for="(item, index) in data_ktp[sheetname].analisa_tipe_b.mb4.ktp_std_idkt" :key="index">{{item+ " "}}</span>
                </td>
              </tr>
            </table>
              
            <p class="mt-3 mb-0">2. Analisa Tipe A (µa)</p>
            <table>
              <tr>
                <td>- Pada pengukuran (kesalahan relatif mampu ulang maksimum)</td>
                <td>=</td>
                <td>
                  <span v-for="(item, index) in data_ktp[sheetname].analisa_tipe_a.ktp_std_pengukuran" :key="index">{{item+ " "}}</span>
                </td>
              </tr>
              <tr>
                <td>- Ketidakpastian standar pengukuran (µa)</td>
                <td>=</td>
                <td>
                  <span v-for="(item, index) in data_ktp[sheetname].analisa_tipe_a.error_mampu_ulang" :key="index">{{item+ " "}}</span>
                </td>
              </tr>
            </table>
              
            <p class="mt-3 mb-0">3. Ketidakpastian gabungan (µc) </p>
            <table>
              <tr>
                <td> =</td>
                <td>
                  <span v-for="(item, index) in data_ktp[sheetname].ktp_gabungan.rumus" :key="index">{{item+ " "}}</span>
                </td>
              </tr>
              <tr>
                <td> =</td>
                <td>
                  <span v-for="(item, index) in data_ktp[sheetname].ktp_gabungan.nilai" :key="index">{{item+ " "}}</span>
                </td>
              </tr>
            </table>
              
            <p class="mt-3 mb-0">4. Ketidakpastian diperluas (µ95)</p>
            <table>
              <tr>
                <td colspan="4">Tingkat kepercayaan 95 %, faktor cakupan k (asumsi) = {{data_ktp[sheetname].ktp_diperluas.k_trust}}</td>
              </tr>
              <tr>
                <td>Maka ketidakpastian diperluass (µ95)</td>
                <td>=</td>
                <td>{{data_ktp[sheetname].ktp_diperluas.rumus}}</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>=</td>
                <td>{{data_ktp[sheetname].ktp_diperluas.kxrumus}}</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>=</td>
                <td>
                  <span v-for="(item, index) in data_ktp[sheetname].ktp_diperluas.nilai" :key="index">{{item+ " "}}</span>
                </td>
              </tr>
            </table>

            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : Agus Surya Permana <br>
                Tanggal :	30 Juni 2017 <br>
                Tanda Tangan :	

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
              <v-flex xs6>
                Dikalibrasi oleh : Sudrajat <br>
                Tanggal :	2 Juni 2017 <br>
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
  } table, th, td {
    font-size: 10pt;
    border: 0px solid grey;
    padding: 3px;
    margin-left: 25px;  }
</style>

<script>
import gayaHeader from '~/components/gaya/mesin_uji.vue'

export default {
  components: {
    gayaHeader
  },

  head: {
    title: 'Lembar Kerja | Bidang Gaya',
    meta: [
      {
        hid: 'gaya',
        name: 'gaya',
        content: 'Bidang Gaya'
      }
    ],
  },

  data: () => ({
    no_cert: '3-09-10-0490',

    sheetname: 'KTP_100KN',
    sheetnames: [],

    data_ktp: {
      KTP_100KN: {
        analisa_tipe_a: {
          error_mampu_ulang: [],
          ktp_std_pengukuran: []
        },
        analisa_tipe_b: {
          mb1: {
            k_trust: "",
            ktp_std_sert: []
          },
          mb2: {
            selisih_residual: [],
            std_drift: []
          },
          mb3: [],
          mb4: {
            distribusi_recatangular: [],
            julat_ukur: [],
            ktp_std_idkt: [],
            readablity: []
          }
        },
        ktp_diperluas: {
          k_trust: "",
          kxrumus: "",
          nilai: [],
          rumus: ""
        },
        ktp_gabungan: {
          nilai: [],
          rumus: []
        }
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
        this.sheetnames = Object.keys(req_data.data_ktp)

        this.data_ktp = req_data.data_ktp
      } catch (error) {
        console.log('get LK err: ', error.response);
      }
    },

    fileSelected(e) {
      var reader = new FileReader();
      console.log(e.target.files[0]);
      this.filename = e.target.files[0].name
      this.file = e.target.files[0]
    },

    async fileUpload() {
      this.uploading = true
      try {
        const req = await this.$calibrate.uploadFile({
          file: this.file,
          category: this.selected
        })

        // console.log(this.file);

        setTimeout(() => {
          this.uploading = false
          this.$router.go(-1);
        }, 300);
        
      } catch (error) {
        alert('gagal mengupload file')
        setTimeout(() => {
          this.uploading = false
          this.$router.go(-1);
        }, 300);
      }
    },

    sheetPush(id, name, str) {
      this.sheets.push({'id': id, 'name': name, 'htmlstr': str})
      // document.getElementById(''+id).innerHTML += str;
    },

    createElement() {
      for (const key in this.sheets) {
        if (this.sheets.hasOwnProperty(key)) {
          const element = this.sheets[key];
          
          document.getElementById(''+element.id).innerHTML += element.htmlstr;
          console.log(document.getElementById(element.id));
        }
      }

      let tds = document.querySelectorAll('td')
      // console.log(tds);
      tds.remove()
      
    }
  },
}

function hideElement(id) {
  document.getElementById(id).innerHTML = "Hello World";
}
</script>