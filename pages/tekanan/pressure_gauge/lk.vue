<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <tekananHeader></tekananHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text v-if="$store.state.isLoggedIn">
            <p class="text-xs-center b title my-4">
              LEMBAR KERJA KALIBRASI PRESSURE GAUGE
            </p>

            <p class="b">Sertifikat No : {{no_cert}}</p>
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Deskripsi Alat : {{ data_alat.deskripsi.nama_alat }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Daerah Ukur : 0 - {{ data_alat.deskripsi.daerah_ukur }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Tipe : {{ data_alat.deskripsi.tipe }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Nomor Seri : {{ data_alat.deskripsi.no_seri }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Resolusi 1 div : {{ data_alat.deskripsi.resolusi }} bar</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Readability : {{ data_alat.deskripsi.readibility }} bar</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Lokasi Kalibrasi : {{ data_alat.deskripsi.lokasi }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Suhu ruangan : {{ data_alat.deskripsi.kondisi_ling.suhu_ruang.sebelum_koreksi }} °C Sebelum koreksi</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Suhu ruangan : {{ data_alat.deskripsi.kondisi_ling.suhu_ruang.setelah_koreksi }} °C Setelah koreksi</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Suhu ruangan rata2 : {{ data_alat.deskripsi.kondisi_ling.suhu_ruang.rata_rata.toFixed(2) }} ± 0.10 °C</p>
                </v-layout>
              </v-flex>
              
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mb-1">Merek : {{ data_alat.deskripsi.merk }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Buatan : {{ data_alat.deskripsi.buatan }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Nominal : {{ data_alat.deskripsi.nominal }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-3">Media : {{ data_alat.deskripsi.media }}</p>
                </v-layout>

                <v-layout>
                  <p class="mb-1">Alat Kalibrasi : {{ data_alat.alat_kalibrasi.alat }} : {{ data_alat.alat_kalibrasi.sn }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Sertifikat No. : {{ no_cert }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Ketelusuran : {{ data_alat.deskripsi.ketelusuran }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Metoda Kalibrsi : {{ data_alat.metode_kalibrasi }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Standar Acuan : {{ data_alat.standar_acuan }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Overload Test : {{ data_alat.overload_test }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">Residual of zerro : {{ data_alat.residual_zerro }}</p>
                </v-layout>
                
                <v-layout>
                  <p class="mb-1">f.g. lokal : {{ data_alat.fg_lokal }}</p>
                </v-layout>                
              </v-flex>

              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mt-3">Kelembaban : {{ data_alat.deskripsi.kondisi_ling.kelembaban_udara.sebelum_koreksi }} % RH Sebelum koreksi</p>
                </v-layout>
              </v-flex>
              <v-flex xs12 sm6>
                <v-layout>
                  <p class="mt-3">Kelembaban : {{ data_alat.deskripsi.kondisi_ling.kelembaban_udara.setelah_koreksi }} % RH Setelah koreksi</p>
                </v-layout>
              </v-flex>
            </v-layout>

          </v-card-text>
        </v-card>
        
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>

            <table width="100%" class="text-xs-center">
              <thead>
                <tr>
                  <th rowspan="2">Penunjukan <br> Pressure <br> Gauge</th>
                  <th colspan="4">Penunjukan Standar</th>
                  <th colspan="2">Rata-rata</th>
                  <th colspan="2">Kesalahan</th>
                  <th>Perbedaan Naik <br> dgn Turun</th>
                </tr>
                <tr>
                  <td colspan="2">Beban Naik</td>
                  <td colspan="2">Beban Turun</td>
                  <td>Naik</td>
                  <td>Turun</td>
                  <td>Naik</td>
                  <td>Turun</td>
                  <td>Naik dgn</td>
                </tr>
                <tr style="font-size: 8pt">
                  <td>bar</td>
                  <td>Kg/cm²</td>
                  <td>bar</td>
                  <td>Kg/cm²</td>
                  <td>bar</td>
                  <td>bar</td>
                  <td>bar</td>
                  <td>(%)</td>
                  <td>(%)</td>
                  <td>bar</td>
                </tr>
              </thead>
              <tbody style="font-size: 9pt">
                <tr v-for="(item, index) in data_kal['penunjuk pressure gauge'].length" :key="index">
                  <td>{{data_kal["penunjuk pressure gauge"][index]}}</td>
                  <td>{{data_kal["bbn_naik_kgcm2"][index]}}</td>
                  <td>{{data_kal["bbn_naik_bar"][index]}}</td>
                  <td>{{data_kal["bbn_trn_kgcm2"][index]}}</td>
                  <td>{{data_kal["bbn_turun_bar"][index]}}</td>
                  <td>{{data_kal["avrg_naik"][index]}}</td>
                  <td>{{data_kal["avrg_turun"][index]}}</td>
                  <td>{{data_kal["error_naik_tanda"][index]}} {{data_kal["error_naik_persen"][index]}}</td>
                  <td>{{data_kal["error_turun_tanda"][index]}} {{data_kal["error_turun_persen"][index]}}</td>
                  <td>{{data_kal["beda_naik_turun"][index]}}</td>
                </tr>
              </tbody>
            </table>
            
            <div class="b my-2">Perhitungan Ketidakpastian pada saat Naik</div>
            <table width="100%">
              <thead>
                <tr>
                  <th rowspan="3">Penunjukan <br> Pressure <br> Gauge</th>
                  <th colspan="7">Ktp-baku</th>
                  <th colspan="2" rowspan="3">Ketidakpastian <br> Diperluas (U95)</th>
                </tr>
                <tr>
                  <td>Kal. Standar</td>
                  <td>var suhu</td>
                  <td>beda level oli</td>
                  <td>var g-lokal</td>
                  <td>daya baca</td>
                  <td>daya ulang</td>
                  <td>Gabungan</td>
                </tr>
                <tr>
                  <td>(u1)</td>
                  <td>(u2)</td>
                  <td>(u3)</td>
                  <td>(u4)</td>
                  <td>(u5)</td>
                  <td>(u6)</td>
                  <td>(uc)</td>
                </tr>
                <tr>
                  <td>bar</td>
                  <td>bar</td>
                  <td>bar</td>
                  <td>bar</td>
                  <td>bar</td>
                  <td>bar</td>
                  <td>bar</td>
                  <td>bar</td>
                  <td>bar</td>
                  <td>(%)</td>
                </tr>
              </thead>

              <tbody style="font-size: 9pt">
                <tr v-for="(item, index) in ktp_naik['penunjukan pressure gauge'].length" :key="index">
                  <td class="b">{{ ktp_naik['penunjukan pressure gauge'][index] }}</td>
                  <td>{{ ktp_naik.ktp_baku_u1[index] }}</td>
                  <td>{{ ktp_naik['penunjukan pressure gauge'][index] > 0 ? ktp_naik.ktp_baku_u2[index].toExponential(3) : ''}}</td>
                  <td>{{ ktp_naik['penunjukan pressure gauge'][index] > 0 ? ktp_naik.ktp_baku_u3[index].toExponential(3) : ''}}</td>
                  <td>{{ ktp_naik['penunjukan pressure gauge'][index] > 0 ? ktp_naik.ktp_baku_u4[index].toExponential(3) : ''}}</td>
                  <td>{{ ktp_naik.ktp_baku_u5[index] ? ktp_naik.ktp_baku_u5[index].toFixed(5) : '' }}</td>
                  <td>{{ ktp_naik['penunjukan pressure gauge'][index] > 0 ? ktp_naik.ktp_baku_u6[index].toExponential(3) : ''}}</td>
                  <td>{{ ktp_naik.ktp_baku_uc[index] ? ktp_naik.ktp_baku_uc[index].toFixed(5) : '' }}</td>
                  <td>{{ ktp_naik['penunjukan pressure gauge'][index] > 0 ? '± ' +ktp_naik.ktp_u95_bar[index].toExponential(3) : ''}}</td>
                  <td>{{ ktp_naik['penunjukan pressure gauge'][index] > 0 ? '± ' +ktp_naik.ktp_u95_persen[index].toExponential(3) : ''}}</td>
                </tr>
              </tbody>
            </table>

            <div class="b my-2">Perhitungan Ketidakpastian pada saat Turun</div>
            <table width="100%">
              <thead>
                <tr>
                  <th rowspan="3">Penunjukan <br> Pressure <br> Gauge</th>
                  <th colspan="7">Ktp-baku</th>
                  <th colspan="2" rowspan="3">Ketidakpastian <br> Diperluas (U95)</th>
                </tr>
                <tr>
                  <td>Kal. Standar</td>
                  <td>var suhu</td>
                  <td>beda level oli</td>
                  <td>var g-lokal</td>
                  <td>daya baca</td>
                  <td>daya ulang</td>
                  <td>Gabungan</td>
                </tr>
                <tr>
                  <td>(u1)</td>
                  <td>(u2)</td>
                  <td>(u3)</td>
                  <td>(u4)</td>
                  <td>(u5)</td>
                  <td>(u6)</td>
                  <td>(uc)</td>
                </tr>
                <tr>
                  <td>bar</td>
                  <td>bar</td>
                  <td>bar</td>
                  <td>bar</td>
                  <td>bar</td>
                  <td>bar</td>
                  <td>bar</td>
                  <td>bar</td>
                  <td>bar</td>
                  <td>(%)</td>
                </tr>
              </thead>

              <tbody style="font-size: 9pt">
                <tr v-for="(item, index) in ktp_turun['penunjukan pressure gauge'].length" :key="index">
                  <td class="b">{{ ktp_turun['penunjukan pressure gauge'][index] }}</td>
                  <td>{{ ktp_turun.ktp_baku_u1[index] }}</td>
                  <td>{{ ktp_turun['penunjukan pressure gauge'][index] > 0 ? ktp_turun.ktp_baku_u2[index].toExponential(3) : ''}}</td>
                  <td>{{ ktp_turun['penunjukan pressure gauge'][index] > 0 ? ktp_turun.ktp_baku_u3[index].toExponential(3) : ''}}</td>
                  <td>{{ ktp_turun['penunjukan pressure gauge'][index] > 0 ? ktp_turun.ktp_baku_u4[index].toExponential(3) : ''}}</td>
                  <td>{{ ktp_turun.ktp_baku_u5[index] ? ktp_turun.ktp_baku_u5[index].toFixed(5) : '' }}</td>
                  <td>{{ ktp_turun['penunjukan pressure gauge'][index] > 0 ? ktp_turun.ktp_baku_u6[index].toExponential(3) : ''}}</td>
                  <td>{{ ktp_turun.ktp_baku_uc[index] ? ktp_turun.ktp_baku_uc[index].toFixed(5) : '' }}</td>
                  <td>{{ ktp_turun['penunjukan pressure gauge'][index] > 0 ? '± ' +ktp_turun.ktp_u95_bar[index].toExponential(3) : ''}}</td>
                  <td>{{ ktp_turun['penunjukan pressure gauge'][index] > 0 ? '± ' +ktp_turun.ktp_u95_persen[index].toExponential(3) : ''}}</td>
                </tr>
              </tbody>
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
  p {
    font-size: 9pt
  }
  #wrapper {
    overflow-x: hidden;
    /* overflow: scroll; */
  } table {
    border-collapse: collapse;
  } table, th, td {
    border: 1px solid grey;
    padding: 3px;
  }
</style>

<script>
import tekananHeader from '~/components/tekanan/pressure.vue'

export default {
  components: {
    tekananHeader
  },

  head: {
    title: 'Lembar Kerja | Bidang Tekanan',
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

    data_kal: {
      "penunjuk pressure gauge": [],
      "bbn_naik_kgcm2": [],
      "bbn_naik_bar": [],
      "bbn_trn_kgcm2": [],
      "bbn_turun_bar": [],
      "avrg_naik": [],
      "avrg_turun": [],
      "error_naik_tanda": [],
      "error_naik_persen": [],
      "error_turun_tanda": [],
      "error_turun_persen": [],
      "beda_naik_turun": [],
    },

    ktp_naik: {
      'penunjukan pressure gauge': [],
      ktp_baku_u1: [],
      ktp_baku_u2: [],
      ktp_baku_u3: [],
      ktp_baku_u4: [],
      ktp_baku_u5: [],
      ktp_baku_u6: [],
      ktp_baku_uc: [],
      ktp_u95_bar: [],
      ktp_u95_persen: [],
    }, ktp_turun: {
      'penunjukan pressure gauge': [],
      ktp_baku_u1: [],
      ktp_baku_u2: [],
      ktp_baku_u3: [],
      ktp_baku_u4: [],
      ktp_baku_u5: [],
      ktp_baku_u6: [],
      ktp_baku_uc: [],
      ktp_u95_bar: [],
      ktp_u95_persen: [],
    },

    data_alat: {
      alat_kalibrasi: {
        alat: "Penguji Bobot Mati No.", 
        sn: "25/213, "
      },
      deskripsi: {
        buatan: "GERMANY.", 
        daerah_ukur: 60, 
        kapasitas: 20.818199999999997,
        buatan: "GERMANY.",
        daerah_ukur: 60,
        kapasitas: 20.818199999999997,
        kondisi_ling: {
          kelembaban_udara: {
            sebelum_koreksi: "67.07 - 67.07", 
            setelah_koreksi: 67.0656
          },
          suhu_ruang: {
            rata_rata: 20.818199999999997,
            sebelum_koreksi: "20.4-20.4",
            setelah_koreksi: "20.82-20.82",
          },
        },
        lokasi: "Lab. Kalibrasi Tekanan B4T, Bandung.",
        media: "Oli",
        merk: "SCHUH TECHNOLOGY",
        nama_alat: "Pressure Gaauge",
        no_seri: "PG.60.1",
        nominal: 63,
        readibility: 0.2,
        resolusi: 1,
        tipe: "SC.250"
      },
      dikalibrasi: {
        date: "", 
        person: ""
      },
      diperiksa: {
        date: "", 
        person: ""
      },
      fg_lokal: 0.9972468916500539,
      metode_kalibrasi: "PC-302-01",
      overload_test: 25,
      residual_zerro: 0,
      standar_acuan: "BS EN 837-1 : 1998",
      tgl_diterima: "2017-07-18",
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
        this.data_kal = req_data.data_kal.tabel_hasil
        this.ktp_naik = req_data.data_ktp.naik
        this.ktp_turun = req_data.data_ktp.turun
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