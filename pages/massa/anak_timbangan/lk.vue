<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <massaHeader></massaHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI MASSA</p>

            <p class="b">3-06-20-00064</p>
            <v-layout row wrap>
              <table width="100%">
                <thead>
                  <tr class="tableizer-firstrow">
                    <td colspan="7">Deskripsi Alat :</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td width="20%" class="b">Massa</td>
                    <td>:</td>
                    <td>1 g</td>
                    <td width="20%" class="b">Lokasi</td>
                    <td>:</td>
                    <td colspan="2">Laboratorium Kalibrasi B4T</td>
                  </tr>
                  <tr>
                    <td class="b">Merek</td>
                    <td>:</td>
                    <td>Kern</td>
                    <td class="b">Suhu ruang</td>
                    <td>:</td>
                    <td>20 ± 1</td>
                    <td>oC</td>
                  </tr>
                  <tr>
                    <td class="b">No.Seri</td>
                    <td>:</td>
                    <td>G962938</td>
                    <td class="b">Kelembaban</td>
                    <td>:</td>
                    <td>61 ± 5</td>
                    <td>%</td>
                  </tr>
                  <tr>
                    <td class="b">Bahan</td>
                    <td>:</td>
                    <td>Stainless Steel</td>
                    <td class="b">Tekanan Udara </td>
                    <td>:</td>
                    <td>626 s/d 627</td>
                    <td>mmHg</td>
                  </tr>
                  <tr>
                    <td class="b">Buatan</td>
                    <td>:</td>
                    <td colspan="5">Germany</td>
                  </tr>
                  <tr>
                    <td class="b">Kelas</td>
                    <td>:</td>
                    <td colspan="5">F1</td>
                  </tr>
                </tbody>
              </table>

              <table width="100%" class="mt-3">
                <tbody>
                  <tr>
                    <td class="b" width="20%">Metoda Kalibrasi</td>
                    <td>:</td>
                    <td>PC-306-03</td>
                  </tr>
                  <tr>
                    <td class="b">Acuan</td>
                    <td>:</td>
                    <td>"The Calibration of Weights and Balances" E.C Morris, <br> and Kitty M.K Fen, NMI,Third Edition,Australia,2010,Butir 3</td>
                  </tr>
                </tbody>
              </table>

              <table class="mt-3" width="100%">
                <thead>
                  <tr>
                    <td colspan="10" class="b">Alat Kalibrasi yang digunakan :</td>
                  </tr>
                </thead>
                <tbody>
                  <tr class="mt-1">
                    <td width="20px">&nbsp;</td>
                    <td class="b" width="20px">1.</td>
                    <td class="b" colspan="3">Massa Standar</td>
                    
                    <td class="b" width="20px">2.</td>
                    <td class="b" colspan="3">Timbangan</td>
                  </tr>
                  <tr>
                    <td colspan="2"></td>
                    <td>Kelas</td>
                    <td>:</td>
                    <td>E2</td>
                    <td></td>
                    <td>Jenis</td>
                    <td>:</td>
                    <td>Timbangan Elektronik</td>
                  </tr>
                  <tr>
                    <td colspan="2"></td>
                    <td>No.Seri</td>
                    <td>:</td>
                    <td>158850</td>
                    <td></td>
                    <td>No. Seri</td>
                    <td>:</td>
                    <td>1118252772</td>
                  </tr>
                  <tr>
                    <td colspan="2"></td>
                    <td>Massa Nominal (MT)</td>
                    <td>:</td>
                    <td>1 g</td>
                    <td></td>
                    <td>Daya baca</td>
                    <td>:</td>
                    <td>0.00001 g</td>
                  </tr>
                  <tr>
                    <td colspan="2"></td>
                    <td>Nilai Massa Standar (MS)</td>
                    <td>:</td>
                    <td>1.000021 g</td>
                  </tr>
                  <tr>
                    <td colspan="2"></td>
                    <td>Nilai Ketidakpastian </td>
                    <td>:</td>
                    <td>0.004 mg</td>
                  </tr>
                </tbody>
              </table>

              <table class="grid mt-3" width="100%">
                <thead>
                  <tr class="tableizer-firstrow">
                    <td colspan="3" class="td-grid b">Pengamatan </td>
                    <td class="td-grid b">Pembacaan Timbangan </td>
                    <td class="td-grid b" width="25%">Perbedaan pembacaan</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="td-grid" width='20px' rowspan="4"><p style="writing-mode: vertical-rl; text-orientation: upright;">RUN 1</p></td>
                    <td class="td-grid">Massa Standar</td>
                    <td class="td-grid">(MS<sub>1</sub>)</td>
                    <td class="td-grid">1.00002</td>
                    <td class="td-grid" rowspan="2">-0.00005</td>
                  </tr>
                  <tr>
                    <td class="td-grid">Massa Tidak Diketahui</td>
                    <td class="td-grid">(MT<sub>1</sub>)</td>
                    <td class="td-grid">0.99997</td>
                  </tr>
                  <tr>
                    <td class="td-grid">Massa Tidak Diketahui</td>
                    <td class="td-grid">(MT<sub>1</sub>)</td>
                    <td class="td-grid">0.99997</td>
                    <td class="td-grid" rowspan="2">-0.00005</td>
                  </tr>
                  <tr>
                    <td class="td-grid">Massa Standar</td>
                    <td class="td-grid">(MS<sub>1</sub>)</td>
                    <td class="td-grid">1.00002</td>
                  </tr>
                  <tr>
                    <td class="td-grid" width='20px' rowspan="4"><p style="writing-mode: vertical-rl; text-orientation: upright;">RUN 2</p></td>
                    <td class="td-grid">Massa Standar</td>
                    <td class="td-grid">(MS<sub>1</sub>)</td>
                    <td class="td-grid">1.00002</td>
                    <td class="td-grid" rowspan="2">-0.00005</td>
                  </tr>
                  <tr>
                    <td class="td-grid">Massa Tidak Diketahui</td>
                    <td class="td-grid">(MT2)</td>
                    <td class="td-grid">0.99997</td>
                  </tr>
                  <tr>
                    <td class="td-grid">Massa Tidak Diketahui</td>
                    <td class="td-grid">(MT2)</td>
                    <td class="td-grid">0.99996</td>
                    <td class="td-grid" rowspan="2">-0.00006</td>
                  </tr>
                  <tr>
                    <td class="td-grid">Massa Standar</td>
                    <td class="td-grid">(MS<sub>1</sub>)</td>
                    <td class="td-grid">1.00002</td>
                  </tr>
                  <tr>
                    <td class="td-grid" colspan="4">Rata-rata perbedaan pembacaan  (∆m)</td>
                    <td class="td-grid">-0.00005</td>
                  </tr>
                  <tr>
                    <td class="td-grid" colspan="4">Standar Deviasi dari perbedaan pembacaan  (σ)</td>
                    <td class="td-grid">0.000005</td>
                  </tr>
                  <tr>
                    <td class="td-grid" colspan="4">Ketidakpastian baku daya ulang Pembacaan  (σ/√4)</td>
                    <td class="td-grid">0.000003</td>
                  </tr>
                </tbody>
              </table>

              <table class="grid mt-2" width="100%">
                <tr>
                  <td class="td-grid" colspan="4">Nilai Konvensional Massa Tidak Diketahui (MT)</td>
                  <td rowspan="2" class="td-grid" width="25%">0.99997</td>
                </tr>
                <tr>
                  <td class="td-grid" colspan="4">Nilai Massa Standar (MS) + Rata-rata Perbedaab Pembacaan (∆m)</td>
                </tr>
              </table>
            </v-layout>

            <p class="mt-4 mb-1">Perhitungan ketidakpastian pengukuran :</p>
            <p class="mt-4 mb-0">1. Analisa tipe B</p>

            <v-layout row wrap>
              <table class="grid" width="100%">
                <thead>
                  <tr class="tableizer-firstrow">
                    <th class="th-grid">Sumber Ketidakpastian</th>
                    <th class="th-grid" colspan="2">Koefisien <br> Sensitivitas <br> Ci</th>
                    <th class="th-grid" colspan="2">Ketidakpastian Standar <br> ui</th>
                    <th class="th-grid">Ci.ui</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="td-grid">1. Massa standar (μb<sub>1</sub>)</td>
                    <td class="td-grid">C<sub>std</sub></td>
                    <td class="td-grid">1</td>
                    <td class="td-grid">
                      <v-img src="/mass/mass1.png" width="120px" contain>
                      </v-img>
                    </td>
                    <td class="td-grid">0.000002000</td>
                    <td class="td-grid">0.000002</td>
                  </tr>
                  <tr>
                    <td class="td-grid">2. Resolusi timbangan (μb<sub>2</sub>)</td>
                    <td class="td-grid">C<sub>R</sub></td>
                    <td class="td-grid">1</td>
                    <td class="td-grid">
                      <v-img src="/mass/mass2.png" width="150px" contain>
                      </v-img>
                    </td>
                    <td class="td-grid">0.000002887</td>
                    <td class="td-grid">0.000003</td>
                  </tr>
                  <tr>
                    <td class="td-grid">3. Bouyancy udara (μb<sub>3</sub>)</td>
                    <td class="td-grid">C<sub>by</sub></td>
                    <td class="td-grid">1</td>
                    <td class="td-grid">
                      <v-img src="/mass/mass3.png" width="180px" contain>
                      </v-img>
                    </td>
                    <td class="td-grid">0.000000715</td>
                    <td class="td-grid">0.000001</td>
                  </tr>
                  <tr>
                    <td class="td-grid">4. Drift (μb<sub>4</sub>)</td>
                    <td class="td-grid">C<sub>drift</sub></td>
                    <td class="td-grid">1</td>
                    <td class="td-grid">
                      <v-img src="/mass/mass4.png" width="120px" contain>
                      </v-img>
                    </td>
                    <td class="td-grid">0.000000173</td>
                    <td class="td-grid">0.000000</td>
                  </tr>
                </tbody>
              </table>
            </v-layout>

            <p class="mt-4 mb-0">2. Analisa tipe A</p>
            <v-layout row wrap>
              <table class="grid mb-4" width="100%">
                <thead>
                  <tr class="tableizer-firstrow">
                    <th class="th-grid">Sumber Ketidakpastian</th>
                    <th class="th-grid" colspan="2">Koefisien <br> Sensitivitas <br> Ci</th>
                    <th class="th-grid" colspan="2">Ketidakpastian Standar <br> ui</th>
                    <th class="th-grid">Ci.ui</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="td-grid">1. Ketidakpastian pengukuran (μa<sub>1</sub>)</td>
                    <td class="td-grid">C<sub>rep</sub></td>
                    <td class="td-grid">1</td>
                    <td class="td-grid">
                      <v-img src="/mass/mass5.png" width="120px" contain>
                      </v-img>
                    </td>
                    <td class="td-grid">0.000002000</td>
                    <td class="td-grid">0.000002</td>
                  </tr>
                </tbody>
              </table>

              <v-flex xs12 sm4 class="pa-2">
                <table class="grid" width="100%">
                  <tr>
                    <th class="th-grid">Ketidakpastian Gabungan <br> U<sub>C</sub></th>
                  </tr>
                  <tr>
                    <td class="td-grid">
                      <v-img src="/mass/mass6.png" width="120px" contain>
                      </v-img>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-xs-center">0.0000044</td>
                  </tr>
                </table>
              </v-flex>

              <v-flex xs12 sm4 class="pa-2">
                <table class="grid" width="100%">
                  <tr>
                    <th class="th-grid">Ketidakpastian yang diperluas <br> g</th>
                  </tr>
                  <tr>
                    <td class="td-grid">
                      <v-img src="/mass/mass7.png" width="120px" contain>
                      </v-img>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-xs-center">0.000009</td>
                  </tr>
                </table>
              </v-flex>

              <v-flex xs12 sm4 class="pa-2">
                <span class="b">RESUME</span>
                <table class="grid" width="100%">
                  <tr>
                    <td class="td-grid">Massa Konvensional</td>
                    <td class="td-grid">0.99997 g</td>
                  </tr>
                  <tr>
                    <td class="td-grid text-xs-center">Ketidakpastian</td>
                    <td class="td-grid text-xs-center">0.0087 mg</td>
                  </tr>
                </table>

              </v-flex>
            </v-layout>
            <p>Catatan : Ketidakpastian yang dilaporkan adalah ketidakpastian bentangan <br> pada tingkat kepercayaan 95% dengan faktor cakupan k=2</p>

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
  } table.grid {
    border-collapse: collapse;
  } table.grid, th.th-grid, td.td-grid  {
    border: 1px solid grey;
    padding: 3px
  }
</style>

<script>
import massaHeader from '~/components/massa/anak_timbangan.vue'
import durometer from '~/static/durometer.json'

export default {
  components: {
    massaHeader
  },

  head: {
    title: 'Lembar Kerja | Bidang Massa',
    meta: [
      {
        hid: 'mass',
        name: 'mass',
        content: 'Bidang Massa'
      }
    ],
  },

  data: () => ({
    no_cert: '3-09-10-0490',
    equipment: {
      name : '',
      capacity : '',
      brand : '',
      serial_number : '',
      type : '',
      made_in : '',
      location : '',
      temperature : '',
      standard : '',
      methods : '',
    },

    hk: {
      d_min: [0,0],
      d_max: [0,0],
      h_minumum: 401,
      h_rata_rata: 401.6,
      hasil: {
        unnamed7: [],
        unnamed9: [],
        unnamed11: [],
        unnamed13: [],
      }
    }
  }),

  mounted() {
    // if (!this.$store.state.isLoggedIn) {
    //   this.$router.push('/')
    // }

    this.cekCORS()

    console.log('cal?', durometer);
    var data = durometer.result[0].data_alat
    this.equipment.name = data['Deskripsi Alat']
    this.equipment.capacity = data['Kapasitas']
    this.equipment.brand = data['Merek']
    this.equipment.serial_number = data['No Seri']
    this.equipment.type = data['Tipe']
    this.equipment.made_in = data['Buatan']
    this.equipment.location = data['Lokasi Kalibrasi']
    this.equipment.temperature = data['Suhu']
    this.equipment.standard = data['Standar acuan']
    this.equipment.methods = data['Metoda verifikasi']

    console.log('eq ', this.equipment);

    this.ketidakpastian = durometer.result

    // this.hk.d_min = durometer.result[0].data_kal.d_minimum_1
    // this.hk.d_max = durometer.result[0].data_kal.d_maksimum_1

    // this.hk.hasil.unnamed7 = durometer.result[0].data_kal.hk1['Unnamed: 7']
    // this.hk.hasil.unnamed9 = durometer.result[0].data_kal.hk1['Unnamed: 9']
    // this.hk.hasil.unnamed11 = durometer.result[0].data_kal.hk1['Unnamed: 11']
    // this.hk.hasil.unnamed13 = durometer.result[0].data_kal.hk1['Unnamed: 13']
  },

  methods: {
    async cekCORS() {
      try {
        const req = await this.$calibrate.testCors()

        console.log('test cors', req);
      } catch (error) {
        console.log('cek cors :', error.response);
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