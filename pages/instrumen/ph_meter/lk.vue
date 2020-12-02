<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <instumenHeader></instumenHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI <br> SPECTROFOTOMETER SERAPAN ATOM</p>

            <v-layout row wrap>
              <table class="no-grid" style="font-size: 9pt" width="100%">
                <tr>
                  <td class="no-grid" colspan="2" width="20%">No. Sertifikat</td>
                  <td class="no-grid">:</td>
                  <td class="no-grid">{{no_cert}}</td>
                </tr>
                <tr>
                  <td class="no-grid" colspan="2">Deskripsi Alat</td>
                  <td class="no-grid">:</td>
                </tr>
                <tr>
                  <td class="no-grid">&nbsp;</td>
                  <td class="no-grid">Nama Alat</td>
                  <td class="no-grid">:</td>
                  <td class="no-grid">{{data_alat.deskripsi.nama_alat}}</td>
                </tr>
                <tr>
                  <td class="no-grid">&nbsp;</td>
                  <td class="no-grid">Merek</td>
                  <td class="no-grid">:</td>
                  <td class="no-grid">{{data_alat.deskripsi.merk}}</td>
                  <td class="no-grid">No. Seri :</td>
                  <td class="no-grid">{{data_alat.deskripsi.no_seri}}</td>
                </tr>
                <tr>
                  <td class="no-grid">&nbsp;</td>
                  <td class="no-grid">Model</td>
                  <td class="no-grid">:</td>
                  <td class="no-grid">{{data_alat.deskripsi.model}}</td>
                  <td class="no-grid">Buatan :</td>
                  <td class="no-grid">{{data_alat.deskripsi.buatan}}</td>
                </tr>
                <tr>
                  <td class="no-grid">&nbsp;</td>
                  <td class="no-grid">Lokasi Kalibrasi</td>
                  <td class="no-grid">:</td>
                  <td class="no-grid">{{data_alat.deskripsi.lokasi}}</td>
                </tr>
                <tr>
                  <td class="no-grid">&nbsp;</td>
                  <td class="no-grid">Kondisi Lingkungan</td>
                  <td class="no-grid">:</td>
                  <td class="no-grid">1. Suhu Ruang : {{data_alat.deskripsi.kondisi_ling.suhu_ruang}}</td>
                </tr>
                <tr>
                  <td class="no-grid">&nbsp;</td>
                  <td class="no-grid">&nbsp;</td>
                  <td class="no-grid">:</td>
                  <td class="no-grid">2. Kelembaban Udara : {{data_alat.deskripsi.kondisi_ling.kelembaban_udara}}</td>
                </tr>
              </table>

              <table class="no-grid mt-2" style="font-size: 9pt" width="100%">
                <tr>
                  <td class="no-grid" colspan="2" width="20%">Metoda Kalibrasi</td>
                  <td class="no-grid">:</td>
                  <td class="no-grid">{{data_alat.metode_kalibrasi}}</td>
                </tr>
                <tr v-for="(item, x) in data_alat.standar_acuan" :key="x">
                  <td class="no-grid" colspan="2">
                    <span v-if="x == 0">Acuan</span>
                  </td>
                  <td class="no-grid">:</td>
                  <td class="no-grid">{{item}} </td>
                </tr>
              </table>

              <table class="no-grid mt-3" style="font-size: 9pt" width="100%">
                <thead>
                  <tr>
                    <td class="no-grid b" colspan="5">Alat / Bahan Kalibrasi yang digunakan :</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="no-grid">&nbsp;</td>
                    <td class="no-grid">Larutan standar :</td>
                    <td class="no-grid">{{data_alat.alat_kalibrasi.larutan_standar[0]}}</td>
                    <td class="no-grid">&nbsp;</td>
                    <td class="no-grid">{{data_alat.alat_kalibrasi.larutan_standar[1]}}</td>
                  </tr>
                  <tr v-for="(item, x) in data_alat.kondisi_pengamatan" :key="x">
                    <td class="no-grid">&nbsp;</td>
                    <td class="no-grid">
                      <span v-if="x == 0">Kondisi Pengamatan :</span>
                    </td>
                    <td class="no-grid">{{item.kondisi}}</td>
                    <td class="no-grid">=</td>
                    <td class="no-grid">{{item.nilai}} {{item.satuan}}</td>
                  </tr>
                </tbody>
              </table>

            </v-layout>

            <p class="b mt-3 mb-1">Data Hasil Pengamatan :</p>
            <p>1. Penentuan kepekaan AAS untuk pengukuran Cu pada 324.8 nm</p>
            <v-layout row wrap>
              <table width="100%" class="text-xs-center">
                <thead>
                  <tr>
                    <th colspan="3">Larutan Standar Copper</th>
                    <th rowspan="2">Kepekaan <br> ( ppm )</th>
                    <th rowspan="2">Syarat Acuan <br> ( ppm )</th>
                    <th rowspan="2">Ketidakpastian *) <br> ± ( ppm )</th>
                  </tr>
                  <tr>
                    <td>Konsentrasi ( ppm )</td>
                    <td>Absorban</td>
                    <td>Rata-rata</td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="i in 3" :key="i">
                    <td rowspan="3" v-if="i == 1">{{data_kal.kepekaan.konsentrasi}}</td>
                    <td >{{data_kal.kepekaan.absorban[i-1]}}</td>
                    <td rowspan="3" v-if="i == 1">{{data_kal.kepekaan.rataan.toFixed(3)}}</td>
                    <td rowspan="3" v-if="i == 1">{{data_kal.kepekaan.kepekaan.toFixed(3)}}</td>
                    <td rowspan="3" v-if="i == 1">{{data_kal.kepekaan.syarat_acuan}}</td>
                    <td rowspan="3" v-if="i == 1">{{data_kal.kepekaan.ketidakpastian.toFixed(4)}}</td>
                  </tr>
                </tbody>
              </table>
            </v-layout>
            <p>*)  Ketidakpastian yang dilaporkan adalah ketidakpastian bentangan pada tingkat kepercayaan 95% <br>dengan faktor cakupan k = 2.</p>

            <p class="b mt-3 mb-1">Data Hasil Pengamatan :</p>
            <p>2. Penentuan Presisi Pengukuran Cu pada panjang gelombang 324.8 nm</p>
            <table width="100%" class="text-xs-center">
              <thead>
                <tr>
                  <th colspan="3">Larutan Standar</th>
                  <th rowspan="2">Simpangan Baku</th>
                  <th rowspan="2">Simpangan Baku Relatif ( % )</th>
                  <th rowspan="2">Syarat Acuan ( % )</th>
                </tr>
                <tr>
                  <td>Konsentrasi (ppm)</td>
                  <td>Absorban</td>
                  <td>Rata-rata</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.5</td>
                  <td rowspan="6">0.155</td>
                  <td rowspan="6">0.154</td>
                  <td rowspan="6">0.00101</td>
                  <td rowspan="6">0.66</td>
                  <td rowspan="6">maks. 1,0</td>
                </tr>
                <tr>
                  <td>0.153</td>
                </tr>
                <tr>
                  <td>0.155</td>
                </tr>
                <tr>
                  <td>0.155</td>
                </tr>
                <tr>
                  <td>0.154</td>
                </tr>
                <tr>
                  <td>0.153</td>
                </tr>
              </tbody>
            </table>

            <p class="mt-3">3. Penentuan Linieritas</p>
            <table class="tableizer-table">
              <thead>
                <tr class="tableizer-firstrow">
                  <th rowspan="2">Konsentrasi Larutan Standar (ppm)</th>
                  <th colspan="6">Pengukuran Absorban </th>
                  <th rowspan="2">Rata - rata  </th>
                  <th rowspan="2">RSD ( % )</th>
                  <th rowspan="2">STD Deviasi</th>
                </tr>
                <tr>
                  <td>A1</td>
                  <td>A2</td>
                  <td>A3</td>
                  <td>A4</td>
                  <td>A5</td>
                  <td>A6</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, x) in data_kal.linearitas.konsentrasi_larutan" :key="x">
                  <td>{{item}}</td>
                  <td>{{data_kal.linearitas['absorban-A1'][x]}}</td>
                  <td>{{data_kal.linearitas['absorban-A2'][x]}}</td>
                  <td>{{data_kal.linearitas['absorban-A3'][x]}}</td>
                  <td>{{data_kal.linearitas['absorban-A4'][x]}}</td>
                  <td>{{data_kal.linearitas['absorban-A5'][x]}}</td>
                  <td>{{data_kal.linearitas['absorban-A6'][x]}}</td>
                  <td>{{data_kal.linearitas['rataan'][x].toFixed(4)}}</td>
                  <td>{{data_kal.linearitas['rsd%'][x].toFixed(2)}}</td>
                  <td>{{data_kal.linearitas['stdv'][x].toFixed(4)}}</td>
                </tr>

                <!-- <template>
                  <tr>
                    <td>0.05</td>
                    <td>0.0053</td>
                    <td>0.0054</td>
                    <td>0.0053</td>
                    <td>0.0051</td>
                    <td>0.0051</td>
                    <td>0.0059</td>
                    <td>0.0054</td>
                    <td>5.51</td>
                    <td>0.0003</td>
                  </tr>
                  <tr>
                    <td>0.1</td>
                    <td>0.0101</td>
                    <td>0.0099</td>
                    <td>0.0097</td>
                    <td>0.0096</td>
                    <td>0.0097</td>
                    <td>0.0096</td>
                    <td>0.0098</td>
                    <td>2.01</td>
                    <td>0.0002</td>
                  </tr>
                  <tr>
                    <td>0.5</td>
                    <td>0.0507</td>
                    <td>0.0500</td>
                    <td>0.0499</td>
                    <td>0.0503</td>
                    <td>0.0502</td>
                    <td>0.0500</td>
                    <td>0.0502</td>
                    <td>0.58</td>
                    <td>0.0003</td>
                  </tr>
                  <tr>
                    <td>1.0</td>
                    <td>0.1013</td>
                    <td>0.1017</td>
                    <td>0.1016</td>
                    <td>0.1010</td>
                    <td>0.1010</td>
                    <td>0.1015</td>
                    <td>0.1014</td>
                    <td>0.30</td>
                    <td>0.0003</td>
                  </tr>
                  <tr>
                    <td>1.5</td>
                    <td>0.1550</td>
                    <td>0.1541</td>
                    <td>0.1548</td>
                    <td>0.1518</td>
                    <td>0.1537</td>
                    <td>0.1541</td>
                    <td>0.1539</td>
                    <td>0.74</td>
                    <td>0.0011</td>
                  </tr>
                  <tr>
                    <td>2.0</td>
                    <td>0.2023</td>
                    <td>0.2035</td>
                    <td>0.2028</td>
                    <td>0.2027</td>
                    <td>0.2016</td>
                    <td>0.2034</td>
                    <td>0.2027</td>
                    <td>0.35</td>
                    <td>0.0007</td>
                  </tr>
                  <tr>
                    <td>3.0</td>
                    <td>0.2971</td>
                    <td>0.2959</td>
                    <td>0.2984</td>
                    <td>0.2999</td>
                    <td>0.2985</td>
                    <td>0.2979</td>
                    <td>0.2980</td>
                    <td>0.46</td>
                    <td>0.0014</td>
                  </tr>
                  <tr>
                    <td>4.0</td>
                    <td>0.3911</td>
                    <td>0.3895</td>
                    <td>0.3917</td>
                    <td>0.3942</td>
                    <td>0.3948</td>
                    <td>0.3925</td>
                    <td>0.3923</td>
                    <td>0.50</td>
                    <td>0.0020</td>
                  </tr>
                  <tr>
                    <td>6.0</td>
                    <td>0.5755</td>
                    <td>0.5779</td>
                    <td>0.5785</td>
                    <td>0.5729</td>
                    <td>0.5710</td>
                    <td>0.5695</td>
                    <td>0.5742</td>
                    <td>0.64</td>
                    <td>0.0037</td>
                  </tr>
                  <tr>
                    <td>8.0</td>
                    <td>0.7379</td>
                    <td>0.7444</td>
                    <td>0.7449</td>
                    <td>0.7467</td>
                    <td>0.7460</td>
                    <td>0.7437</td>
                    <td>0.7439</td>
                    <td>0.42</td>
                    <td>0.0031</td>
                  </tr>
                  <tr>
                    <td>10.0</td>
                    <td>0.8849</td>
                    <td>0.8874</td>
                    <td>0.8854</td>
                    <td>0.8885</td>
                    <td>0.8886</td>
                    <td>0.8863</td>
                    <td>0.8869</td>
                    <td>0.18</td>
                    <td>0.0016</td>
                  </tr>
                  <tr>
                    <td>12.0</td>
                    <td>1.0253</td>
                    <td>1.0226</td>
                    <td>1.0212</td>
                    <td>1.0161</td>
                    <td>1.0229</td>
                    <td>1.0189</td>
                    <td>1.0212</td>
                    <td>0.32</td>
                    <td>0.0033</td>
                  </tr>
                  <tr>
                    <td>15.0</td>
                    <td>1.2126</td>
                    <td>1.2268</td>
                    <td>1.2313</td>
                    <td>1.2236</td>
                    <td>1.2171</td>
                    <td>1.2133</td>
                    <td>1.2208</td>
                    <td>0.63</td>
                    <td>0.0076</td>
                  </tr>
                </template> -->
                <tr>
                  <td colspan="6" class="pt-3 b">Daerah Linier dari kurva standar adalah : </td>
                  <td colspan="4" class="pt-3">0.01 s/d 8.00 ppm</td>
                </tr>
              </tbody>
            </table>

          </v-card-text>

          <v-card-text>
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
  } table, th, td {
    border: 1px solid grey;
    padding: 3px
  }
  table.no-grid, th.no-grid, td.no-grid {
    border: 0px solid grey;
    padding: 3px
  }
</style>

<script>
import instumenHeader from '~/components/instrumen/ph.vue'
import durometer from '~/static/durometer.json'

export default {
  components: {
    instumenHeader
  },

  head: {
    title: 'Lembar Kerja | Bidang Instrumen Analisa',
    meta: [
      {
        hid: 'Instrumen Analisa',
        name: 'Instrumen Analisa',
        content: 'Bidang Instrumen Analisa'
      }
    ],
  },

  data: () => ({
    no_cert: '3-09-10-0490',

    data_kal: {
      idl: {
        absorban_blanko: [],
        absorban_standar: [],
        batas_deteksi: 0,
        raatan_standar: 0,
        rataan_blanko: 0,
        simpangan_baku: 0
      },
      kepekaan: {
        absorban: [],
        kepekaan: 0,
        ketidakpastian: 0,
        konsentrasi: 0,
        rataan: 0,
        syarat_acuan: ""
      },
      linearitas: {
        "absorban-A1": [],
        "absorban-A2": [],
        "absorban-A3": [],
        "absorban-A4": [],
        "absorban-A5": [],
        "absorban-A6": [],
        "konsentrasi_larutan": [],
        "rataan": [],
        "rsd%": [],
        "stdv": []
      }
    },
    
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
    }
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
        this.data_kal = req_data.data_kal
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

function hideElement(id) {
  document.getElementById(id).innerHTML = "Hello World";
}
</script>