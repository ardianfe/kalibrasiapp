<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <massaHeader></massaHeader>

      <v-layout justify-center column>
        <v-flex xs12 sm6 class="mt-3">
          <label for="mass">Pilih Ukuran massa</label>
          <v-select
            :items="mass"
            id="mass"
            v-model="selectedMass"
            label="Pilih ukuran massa"
            solo
            background-color="white"
          ></v-select>
        </v-flex>

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI MASSA</p>

            <p class="b">{{no_cert}}</p>

            {{data_alat[selectedMass]}}
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
                    <td>{{selectedMass}}</td>
                    <td width="20%" class="b">Lokasi</td>
                    <td>:</td>
                    <td colspan="2">{{data_alat[selectedMass].description.lokasi}}</td>
                  </tr>
                  <tr>
                    <td class="b">Merek</td>
                    <td>:</td>
                    <td>{{data_alat[selectedMass].description.merk}}</td>
                    <td class="b">Suhu ruang</td>
                    <td>:</td>
                    <td>{{data_alat[selectedMass].description.suhu}}</td>
                    <td>oC</td>
                  </tr>
                  <tr>
                    <td class="b">No.Seri</td>
                    <td>:</td>
                    <td>{{data_alat[selectedMass].description.no_seri}}</td>
                    <td class="b">Kelembaban</td>
                    <td>:</td>
                    <td>{{data_alat[selectedMass].description.kelembaban}}</td>
                    <td>%</td>
                  </tr>
                  <tr>
                    <td class="b">Bahan</td>
                    <td>:</td>
                    <td>{{data_alat[selectedMass].description.bahan}}</td>
                    <td class="b">Tekanan Udara </td>
                    <td>:</td>
                    <td>626 s/d 627</td>
                    <td>mmHg</td>
                  </tr>
                  <tr>
                    <td class="b">Buatan</td>
                    <td>:</td>
                    <td colspan="5">{{data_alat[selectedMass].description.buatan}}</td>
                  </tr>
                  <tr>
                    <td class="b">Kelas</td>
                    <td>:</td>
                    <td colspan="5">{{data_alat[selectedMass].description.kelas}}</td>
                  </tr>
                </tbody>
              </table>

              <table width="100%" class="mt-3">
                <tbody>
                  <tr>
                    <td class="b" width="20%">Metoda Kalibrasi</td>
                    <td>:</td>
                    <td>{{data_alat[selectedMass].metode_kalibrasi}}</td>
                  </tr>
                  <tr>
                    <td class="b">Acuan</td>
                    <td>:</td>
                    <td>{{data_alat[selectedMass].acuan[0]}}<br> {{data_alat[selectedMass].acuan[1]}}</td>
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
                    <td>{{data_alat[selectedMass].alat_kalibrasi['Massa Standar'].kelas}}</td>
                    <td></td>
                    <td>Jenis</td>
                    <td>:</td>
                    <td>{{data_alat[selectedMass].alat_kalibrasi['Timbangan'].jenis}}</td>
                  </tr>
                  <tr>
                    <td colspan="2"></td>
                    <td>No.Seri</td>
                    <td>:</td>
                    <td>{{data_alat[selectedMass].alat_kalibrasi['Massa Standar']['no seri']}}</td>
                    <td></td>
                    <td>No. Seri</td>
                    <td>:</td>
                    <td>{{data_alat[selectedMass].alat_kalibrasi['Timbangan']['no seri']}}</td>
                  </tr>
                  <tr>
                    <td colspan="2"></td>
                    <td>Massa Nominal (MT)</td>
                    <td>:</td>
                    <td>{{data_alat[selectedMass].alat_kalibrasi['Massa Standar'].MT}} g</td>
                    <td></td>
                    <td>Daya baca</td>
                    <td>:</td>
                    <td>{{data_alat[selectedMass].alat_kalibrasi['Massa Standar'].daya_baca}} g</td>
                  </tr>
                  <tr>
                    <td colspan="2"></td>
                    <td>Nilai Massa Standar (MS)</td>
                    <td>:</td>
                    <td>{{data_alat[selectedMass].alat_kalibrasi['Massa Standar'].MS}} g</td>
                  </tr>
                  <tr>
                    <td colspan="2"></td>
                    <td>Nilai Ketidakpastian </td>
                    <td>:</td>
                    <td>{{data_alat[selectedMass].alat_kalibrasi['Massa Standar'].KTP}} mg</td>
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
                    <td class="td-grid">{{ kal['pembacaan_timbangan_'+selectedMass][0] }}</td>
                    <td class="td-grid" rowspan="2">{{ kal['perbedaan_baca_'+selectedMass][0] }}</td>
                  </tr>
                  <tr>
                    <td class="td-grid">Massa Tidak Diketahui</td>
                    <td class="td-grid">(MT<sub>1</sub>)</td>
                    <td class="td-grid">{{ kal['pembacaan_timbangan_'+selectedMass][1] }}</td>
                  </tr>
                  <tr>
                    <td class="td-grid">Massa Tidak Diketahui</td>
                    <td class="td-grid">(MT<sub>1</sub>)</td>
                    <td class="td-grid">{{ kal['pembacaan_timbangan_'+selectedMass][2] }}</td>
                    <td class="td-grid" rowspan="2">{{ kal['perbedaan_baca_'+selectedMass][1] }}</td>
                  </tr>
                  <tr>
                    <td class="td-grid">Massa Standar</td>
                    <td class="td-grid">(MS<sub>1</sub>)</td>
                    <td class="td-grid">{{ kal['pembacaan_timbangan_'+selectedMass][3] }}</td>
                  </tr>
                  <tr>
                    <td class="td-grid" width='20px' rowspan="4"><p style="writing-mode: vertical-rl; text-orientation: upright;">RUN 2</p></td>
                    <td class="td-grid">Massa Standar</td>
                    <td class="td-grid">(MS<sub>1</sub>)</td>
                    <td class="td-grid">{{ kal['pembacaan_timbangan_'+selectedMass][4] }}</td>
                    <td class="td-grid" rowspan="2">{{ kal['perbedaan_baca_'+selectedMass][2] }}</td>
                  </tr>
                  <tr>
                    <td class="td-grid">Massa Tidak Diketahui</td>
                    <td class="td-grid">(MT2)</td>
                    <td class="td-grid">{{ kal['pembacaan_timbangan_'+selectedMass][5] }}</td>
                  </tr>
                  <tr>
                    <td class="td-grid">Massa Tidak Diketahui</td>
                    <td class="td-grid">(MT2)</td>
                    <td class="td-grid">{{ kal['pembacaan_timbangan_'+selectedMass][6] }}</td>
                    <td class="td-grid" rowspan="2">{{ kal['perbedaan_baca_'+selectedMass][3] }}</td>
                  </tr>
                  <tr>
                    <td class="td-grid">Massa Standar</td>
                    <td class="td-grid">(MS<sub>1</sub>)</td>
                    <td class="td-grid">{{ kal['pembacaan_timbangan_'+selectedMass][7] }}2</td>
                  </tr>
                  <tr>
                    <td class="td-grid" colspan="4">Rata-rata perbedaan pembacaan  (∆m)</td>
                    <td class="td-grid">{{ kal['rata_prbd_baca_'+selectedMass] }}</td>
                  </tr>
                  <tr>
                    <td class="td-grid" colspan="4">Standar Deviasi dari perbedaan pembacaan  (σ)</td>
                    <td class="td-grid">{{ kal['stdv_'+selectedMass] }}</td>
                  </tr>
                  <tr>
                    <td class="td-grid" colspan="4">Ketidakpastian baku daya ulang Pembacaan  (σ/√4)</td>
                    <td class="td-grid">{{ kal['ktp_baku_'+selectedMass] }}</td>
                  </tr>
                </tbody>
              </table>

              <table class="grid mt-2" width="100%">
                <tr>
                  <td class="td-grid" colspan="4">Nilai Konvensional Massa Tidak Diketahui (MT)</td>
                  <td rowspan="2" class="td-grid" width="25%">{{ kal['nilai_MT_'+selectedMass] }}</td>
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
                    <td class="td-grid">{{ ktp['analisis_B_'+selectedMass].mb1[0] }}</td>
                    <td class="td-grid">{{ ktp['analisis_B_'+selectedMass].mb1[1] }}</td>
                  </tr>
                  <tr>
                    <td class="td-grid">2. Resolusi timbangan (μb<sub>2</sub>)</td>
                    <td class="td-grid">C<sub>R</sub></td>
                    <td class="td-grid">1</td>
                    <td class="td-grid">
                      <v-img src="/mass/mass2.png" width="150px" contain>
                      </v-img>
                    </td>
                    <td class="td-grid">{{ ktp['analisis_B_'+selectedMass].mb2[0] }}</td>
                    <td class="td-grid">{{ ktp['analisis_B_'+selectedMass].mb2[1] }}</td>
                  </tr>
                  <tr>
                    <td class="td-grid">3. Bouyancy udara (μb<sub>3</sub>)</td>
                    <td class="td-grid">C<sub>by</sub></td>
                    <td class="td-grid">1</td>
                    <td class="td-grid">
                      <v-img src="/mass/mass3.png" width="180px" contain>
                      </v-img>
                    </td>
                    <td class="td-grid">{{ ktp['analisis_B_'+selectedMass].mb3[0] }}</td>
                    <td class="td-grid">{{ ktp['analisis_B_'+selectedMass].mb3[1] }}</td>
                  </tr>
                  <tr>
                    <td class="td-grid">4. Drift (μb<sub>4</sub>)</td>
                    <td class="td-grid">C<sub>drift</sub></td>
                    <td class="td-grid">1</td>
                    <td class="td-grid">
                      <v-img src="/mass/mass4.png" width="120px" contain>
                      </v-img>
                    </td>
                    <td class="td-grid">{{ ktp['analisis_B_'+selectedMass].mb4[0] }}</td>
                    <td class="td-grid">{{ ktp['analisis_B_'+selectedMass].mb4[1] }}</td>
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
                    <td class="td-grid">{{ ktp['analisis_A_ma1_'+selectedMass][0] }}</td>
                    <td class="td-grid">{{ ktp['analisis_A_ma1_'+selectedMass][1] }}</td>
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
                    <td class="text-xs-center">{{ ktp['uc_'+selectedMass] }}</td>
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
                    <td class="text-xs-center">{{ ktp['u95'+selectedMass] }}</td>
                  </tr>
                </table>
              </v-flex>

              <v-flex xs12 sm4 class="pa-2">
                <span class="b">RESUME</span>
                <table class="grid" width="100%">
                  <tr>
                    <td class="td-grid text-xs-center">Massa Konvensional</td>
                    <td class="td-grid text-xs-center">
                      <span v-if="ktp['resume'+selectedMass]">
                        {{ ktp['resume'+selectedMass]['massa_konv'] }} g
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="td-grid text-xs-center">Ketidakpastian</td>
                    <td class="td-grid text-xs-center">
                      <span v-if="ktp['resume'+selectedMass]">
                        {{ ktp['resume'+selectedMass]['ketidakpastian'] }} mg
                      </span>
                    </td>
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
    title: 'Lembar Kerja Anak Timbangan | Bidang Massa',
    meta: [
      {
        hid: 'mass',
        name: 'mass',
        content: 'Bidang Massa'
      }
    ],
  },

  data: () => ({
    no_cert: '',

    data_kal: {
      h_max_2: 0,
      h_max_3: 0,
      h_standar_2: 0,
      h_standar_3: 0,
      havg_2: 0,
      havg_3: 0,
      hk2: {
        "Unnamed: 5": [], 
        "Unnamed: 8": []},
      hk3: {  
        "Unnamed: 5": [], 
        "Unnamed: 8": []},
      hmin_2: 0,
      hmin_3: 0,
      kesalahan_2: 0,
      kesalahan_3: 0,
      repeatability_2: 0,
      repeatability_3: 0
    },

    data_alat: {
      "1 g":{
        "acuan":[
          "\" The Calibration of Weights and Balances\" E.C Morris, ",
          "  and Kitty M.K Fen, NMI,Third Edition,Australia,2010,Butir 3"
        ],
        "alat_kalibrasi":{
          "Massa Standar":{
            "KTP":"0.004",
            "MS":"1.000021",
            "MT":"1",
            "kelas":"E2",
            "no seri":"158850"
          },
          "Timbangan":{
            "daya_baca":1e-05,
            "jenis":"Timbangan Elektronik",
            "no_seri":1118252772
          }
        },
        "description":{
          "bahan":"Stainless Steel",
          "buatan":"Germany",
          "kelas":"F1",
          "kelembaban":"61 \u00b1 5",
          "lokasi":"Laboratorium Kalibrasi B4T",
          "massa":"1 g",
          "merk":"Kern",
          "no_seri":"G962938",
          "suhu":"20 \u00b1 1"
        },
        "dikalibrasi":{
          "date":"2020-02-12 00:00:00",
          "person":"Satrio O."
        },
        "diperiksa":{
          "date":"2020-02-12 00:00:00",
          "person":"Agus SP"
        },
        "metode_kalibrasi":"PC-306-03"
      },
    },
    kal: {
      "ktp_baku_1 g": "0.00000",
      "nilai_MT_1 g": "0.99997",
      "pembacaan_timbangan_1 g":[1.00002, 0.99997, 0.99997, 1.00002, 1.00002, 0.99997, 0.99996, 1.00002],
      "perbedaan_baca_1 g":[-0.00005, -0.00005, -0.00005, -0.00006],
      "rata_prbd_baca_1 g": "-0.00005",
      "stdv_1 g": "0.00001",
    },
    ktp: {
      "analisis_A_ma1_1 g": ["0.000003", "0.00000"],
      "analisis_B_1 g": {
        mb1: ["0.000002000", "0.00000"],
        mb2: ["0.000002887", "0.00000"],
        mb3: ["0.000000715", "0.00000"],
        mb4: ["0.000000173", "0.00000"]
      },
      "resume 1 g": {
        ketidakpastian: "0.00875",
        massa_konv: "0.99997"
      },
      "u951 g": "0.000009",
      "uc_1 g": "0.0000044"
    },
    mass: [],
    selectedMass: '1 g'
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
        this.data_alat = req_data.data_alat

        this.mass = Object.keys(req_data.data_alat)

        console.log(this.mass);
        this.selectedMass = this.mass[0]

        this.kal = req_data.data_kal
        this.ktp = req_data.data_ktp
        // this.data_kal = req_data.data_kal
      } catch (error) {
        console.log('get LK err: ', error.response);
      }
    }
  },
}

function hideElement(id) {
  document.getElementById(id).innerHTML = "Hello World";
}
</script>