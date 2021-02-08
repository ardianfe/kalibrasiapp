<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <instumenHeader></instumenHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI PH METER</p>

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
                  <td class="no-grid">Kapasitas</td>
                  <td class="no-grid">:</td>
                  <td class="no-grid">{{data_alat.deskripsi.kapasitas}}</td>
                  <td class="no-grid">Resolusi :</td>
                  <td class="no-grid">{{data_alat.deskripsi.resolusi[0] + " " + data_alat.deskripsi.resolusi[1]}}</td>
                </tr>
                <tr>
                  <td class="no-grid">&nbsp;</td>
                  <td class="no-grid">Lokasi Kalibrasi</td>
                  <td class="no-grid">:</td>
                  <td class="no-grid">{{data_alat.deskripsi.lokasi}}</td>
                </tr>
              </table>

              <table class="my-2" style="font-size: 9pt">
                <thead>
                  <tr>
                    <td class="b" rowspan="2">Parameter</td>
                    <td class="b" colspan="2">penunjukan alat</td>
                    <td class="b" rowspan="2">Rata - rata</td>
                    <td class="b" rowspan="2">Selisih</td>
                    <td class="b" rowspan="2">Koreksi</td>
                    <td class="b" rowspan="2">nilai µ sertifikat</td>
                  </tr>
                  <tr>
                    <td>Awal</td>
                    <td>akhir</td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in data_alat.kondisi_lingkungan.parameter" :key="index">
                    <td>{{item}}</td>
                    <td>{{data_alat.kondisi_lingkungan.ptjk_akhir[0]}}</td>
                    <td>{{data_alat.kondisi_lingkungan.ptjk_awal[0]}}</td>
                    <td>{{data_alat.kondisi_lingkungan.rata[0]}}</td>
                    <td>{{data_alat.kondisi_lingkungan.selisih[0]}}</td>
                    <td>{{data_alat.kondisi_lingkungan.koreksi[0]}}</td>
                    <td>{{data_alat.kondisi_lingkungan.m_sertifikat[0]}}</td>
                  </tr>
                </tbody>
              </table>

              <table class="no-grid mt-2" style="font-size: 9pt" width="100%">
                <tr v-for="(item, x) in data_alat.standar_acuan" :key="x">
                  <td class="no-grid" colspan="2">
                    <span v-if="x == 0">Acuan</span>
                  </td>
                  <td class="no-grid">:</td>
                  <td class="no-grid">{{item}} </td>
                </tr>
              </table>

              <table class="no-grid mt-2" style="font-size: 9pt" width="100%"> 
                <tr v-for="(item, x) in data_alat.alat_bahan" :key="x">
                  <td class="no-grid" colspan="2">
                    <span v-if="x == 0">Alat/Bahan yang digunakan</span>
                  </td>
                  <td class="no-grid">:</td>
                  <td class="no-grid">{{item[0]}} </td>
                  <td class="no-grid">{{item[1]}} </td>
                </tr>
              </table>

              <table class="my-2" style="font-size: 9pt">
                <tr>
                  <td>Tanggal Pendaftaran</td>
                  <td>:</td>
                  <td>{{data_alat.tgl_diterima}}</td>
                </tr>
                <tr>
                  <td>Pemilik / Perusahaan</td>
                  <td>:</td>
                  <td>{{data_co.nama_co}}</td>
                </tr>
                <tr>
                  <td>Alamat</td>
                  <td>:</td>
                  <td>{{data_co.alamat}}</td>
                </tr>
                <tr>
                  <td>Ketertelusuran</td>
                  <td>:</td>
                  <td>{{data_alat.ketelusuran}}</td>
                </tr>
              </table>
            </v-layout>
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

        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI PH METER</p>
            <p class="b">2. Kalibrasi Parameter Elektroda</p>
            <table class="tableizer-table" style="font-size: 9pt">
              <thead>
                <tr class="tableizer-firstrow">
                  <th rowspan="3">Buffer pH <br> pada suhu <br> {{data_kal.table_param_elektroda.buffer_ph}}</th>
                  <th colspan="8">PENUNJUKAN ALAT</th>
                  <th rowspan="3">KOREKSI (pH)</th>
                  <th rowspan="3">Ketidakpastian *)</th>
                </tr>
                <tr>
                  <td colspan="4">Sebelum disetel</td>
                  <td colspan="4">Sesudah disetel</td>
                </tr>
                <tr>
                  <td>SUHU °C</td>
                  <td>setelah di koreksi °C</td>
                  <td>penunjukan alat pH</td>
                  <td>Rata-rata</td>
                  <td>SUHU °C</td>
                  <td>setelah di koreksi °C</td>
                  <td>penunjukan alat pH</td>
                  <td>Rata-rata</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in data_kal.table_param_elektroda.table.buffer_suhu" :key="index">
                  <td>{{item}}</td>
                  <td>{{data_kal.table_param_elektroda.table.sblm_stel_suhu_C[index]}}</td>
                  <td>{{data_kal.table_param_elektroda.table.sblm_stel_stlh_koreksi_C[index]}}</td>
                  <td>{{data_kal.table_param_elektroda.table.sblm_stel_pnjk_alat_ph[index]}}</td>
                  <td>{{data_kal.table_param_elektroda.table.sblm_stel_rerata[index] ? data_kal.table_param_elektroda.table.sblm_stel_rerata[index].toFixed(3) : data_kal.table_param_elektroda.table.sblm_stel_rerata[index]}}</td>
                  <td>{{data_kal.table_param_elektroda.table.stlh_stel_suhu[index]}}</td>
                  <td>{{data_kal.table_param_elektroda.table.stlh_stel_stlh_koreksi[index]}}</td>
                  <td>{{data_kal.table_param_elektroda.table.stlh_stel_penjk_alat_ph[index]}}</td>
                  <td>{{data_kal.table_param_elektroda.table.stlh_stel_rerata[index] ? data_kal.table_param_elektroda.table.stlh_stel_rerata[index].toFixed(3) : data_kal.table_param_elektroda.table.stlh_stel_rerata[index]}}</td>
                  <td>{{data_kal.table_param_elektroda.table.koreksi[index] ? data_kal.table_param_elektroda.table.koreksi[index].toFixed(3) : data_kal.table_param_elektroda.table.koreksi[index]}}</td>
                  <td>{{data_kal.table_param_elektroda.table.ktp[index] ? data_kal.table_param_elektroda.table.ktp[index].toFixed(3) : data_kal.table_param_elektroda.table.ktp[index]}}</td>
                </tr>
              </tbody>
            </table>
            <p style="font-size: 9pt">Catatan : *) Ketidakpastian yang dilaporkan adalah ketidakpastian bentangan pada tingkat kepercayaan 95%, dengan faktor cakupan k=2.</p>

            <p class="b mt-4">3. Pengenceran respon slope dari elektroda (% slope)</p>
            <table class="tableizer-table">
              <thead>
                <tr class="tableizer-firstrow">
                  <th rowspan="2">BUFFER (PH)</th>
                  <th colspan="2">SUHU °C</th>
                  <th>PENUNJUKAN ALAT mV</th>
                  <th rowspan="2">RATA-RATA (mV)</th>
                  <th rowspan="2">% Slope</th>
                </tr>
                <tr>
                  <td>pen alat</td>
                  <td>Stlh koreksi</td>
                  <td>penunjukan alat</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in data_kal.persen_slope.table.buffer_ph" :key="index">
                  <td>{{item}}</td>
                  <td>{{data_kal.persen_slope.table.suhu_pen_alat[index]}}</td>
                  <td>{{data_kal.persen_slope.table.suhu_stlh_koreksi[index]}}</td>
                  <td>{{data_kal.persen_slope.table.penunjukan_alat[index]}}</td>
                  <td>{{data_kal.persen_slope.table.rerata[index]}}</td>
                  <td>{{data_kal.persen_slope.table.persen_slope[index]}}</td>
                </tr>
              </tbody>
            </table>

            <table class="tableizer-table mt-3">
              <thead>
                  <tr class="tableizer-firstrow">
                    <th></th>
                    <th>
                      <span class="u">{{data_kal.persen_slope.rumus_slope}}</span><br>
                      <span>pH x s</span>
                    </th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>s = </td>
                    <td>
                      {{data_kal.persen_slope.s_pada_suhu[0][0]}}<br>
                      {{data_kal.persen_slope.s_pada_suhu[0][1]}}
                    </td>
                  </tr>
                  <tr>
                    <td>st = </td>
                    <td>{{data_kal.persen_slope.st}}</td>
                  </tr>
                  <tr>
                    <td>s = </td>
                    <td>{{data_kal.persen_slope.s}}</td>
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
import instumenHeader from '~/components/instrumen/turbidimeter.vue'
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
    no_cert: '',

    data_kal: {
      lampiran_sert: {
        ketidakpastian: [],
        koreksi: [],
        pnjk_alat_sblm_stel: [],
        pnjk_alat_stlh_stel: [],
        standar: [],
        suhu: []
      },
      persen_slope: {
        rumus_slope: "",
        s: 0,
        s_pada_suhu: [
          [0, 1]
        ],
        st: 0,
        table: {
          buffer_ph: [],
          suhu_pen_alat: [],
          suhu_stlh_koreksi: [],
          penunjukan_alat: [],
          rerata: [],
          persen_slope: [],
        }
      },
      table_param_elektroda: {
        buffer_ph: "",
        table: {
          buffer_suhu: [],
          koreksi: [],
          ktp: [],
          sblm_stel_pnjk_alat_ph: [],
          sblm_stel_rerata: [],
          sblm_stel_stlh_koreksi_C: [],
          sblm_stel_suhu_C: [],
          stlh_stel_penjk_alat_ph: [],
          stlh_stel_rerata: [],
          stlh_stel_stlh_koreksi: [],
          stlh_stel_suhu: []
        }
      }
    },
    
    data_alat: {
      alat_kalibrasi: {
        larutan_standar: []
      },
      kondisi_lingkungan: {
        parameter: [],
        ptjk_akhir: [],
        ptjk_awal: [],
        rata: [],
        selisih: [],
        koreksi: [],
        m_sertifikat: [],
      },
      deskripsi: {
        buatan: "", 
        lokasi: "",
        merk: "",
        model: "",
        nama_alat: "",
        no_seri: "",
        resolusi: [0, 0]
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
      standar_acuan: [],
      ketelusuran:''
    },

    data_co: {
      nama_co: '',
      alamat: ''
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
        this.data_co = req_data.data_co
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