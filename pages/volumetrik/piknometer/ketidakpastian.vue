<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <volHeader></volHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="100%">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA KALIBRASI LABU UKUR</p>

            <p>No. Sertifikat : {{no_cert}}</p>

            <v-layout column>
              <table style="width: 100%">
                <thead>
                  <tr>
                    <th>Komponen</th>
                    <th>Satuan</th>
                    <th>Distribusi</th>
                    <th>U</th>
                    <th>Pembagi</th>
                    <th>vi</th>
                    <th>ui</th>
                    <th>ci</th>
                    <th>ui.ci</th>
                    <th>(ui.ci)²</th>
                    <th>(ui.ci)4/vi</th>
                  </tr>
                </thead>
                <tbody> 
                  <template>
                    <tr v-for="(item, index) in data_ktp.ktp_pengukuran.data.komponen" :key="index">
                      <td>{{item}}</td>
                      <td>{{data_ktp.ktp_pengukuran.data.satuan[index]}}</td>
                      <td>{{data_ktp.ktp_pengukuran.data.distribusi[index]}}</td>
                      <td>{{data_ktp.ktp_pengukuran.data.u[index]}}</td>
                      <td>{{data_ktp.ktp_pengukuran.data.pembagi[index] ? data_ktp.ktp_pengukuran.data.pembagi[index].toFixed(3) : data_ktp.ktp_pengukuran.data.pembagi[index]}}</td>
                      <td>{{data_ktp.ktp_pengukuran.data.vi[index]}}</td>
                      <td>{{data_ktp.ktp_pengukuran.data.ui[index] ? data_ktp.ktp_pengukuran.data.ui[index].toExponential(5) : data_ktp.ktp_pengukuran.data.ui[index]}}</td>
                      <td>{{data_ktp.ktp_pengukuran.data.ci[index]}}</td>
                      <td>{{data_ktp.ktp_pengukuran.data.uici[index]}}</td>
                      <td>{{data_ktp.ktp_pengukuran.data.uici2[index]}}</td>
                      <td>{{data_ktp.ktp_pengukuran.data.uici4_vi[index]}}</td>
                    </tr>
                  </template>
                    <tr>
                      <td colspan="11">&nbsp;</td>
                    </tr>
                    <tr>
                      <td colspan="9">Sums</td>
                      <td>{{data_ktp.ktp_pengukuran.sums[0].toExponential(6)}}</td>
                      <td>{{data_ktp.ktp_pengukuran.sums[1].toExponential(6)}}</td>
                    </tr>
                    <tr>
                      <td colspan="9">Ketidakpastian baku gabungan, uc, ml</td>
                      <td colspan="2">{{data_ktp.ktp_pengukuran.ktp_gab}}</td>
                    </tr>
                    <tr>
                      <td colspan="9">Derajat kebebasan efektif, veff</td>
                      <td colspan="2">{{data_ktp.ktp_pengukuran.derajat_kbbs_efektif}}</td>
                    </tr>
                    <tr>
                      <td colspan="9">Faktor cakupan, k-student's for veff and CL 95%</td>
                      <td colspan="2">{{data_ktp.ktp_pengukuran.faktor_cakupan}}</td>
                    </tr>
                    <tr>
                      <td colspan="9">Ketidakpastian bentangan, U = k.uc, um</td>
                      <td colspan="2">{{data_ktp.ktp_pengukuran.ktp_bentangan}} um</td>
                    </tr>
                    <!-- <tr>
                      <td colspan="9"></td>
                      <td colspan="2">{{data_ktp.ktp_pengukuran.ktp_bentang.mm}} mm</td>
                    </tr> -->
                </tbody>
              </table>

              <table class="mt-4" style="max-width: 80%">
                <tr>
                  <td colspan="3" class="b">1. U massa air destilasi,(mg) </td>
                  <td>{{data_ktp.massa_air_destilasi.mg}}</td>
                </tr>
                <tr>
                  <td>a. LOP Timbangan, (g)</td>
                  <td v-for="(item, index) in data_ktp.massa_air_destilasi.lop_timbangan" :key="index">{{item}}</td>
                </tr>
                <tr>
                  <td>b. Stdv maks, (ml)</td>
                  <td v-for="(item, index) in data_ktp.massa_air_destilasi.stdev_maks" :key="index">{{item}}</td>
                </tr>
              </table>

              <table class="mt-2" style="max-width: 80%">
                <tr>
                  <td class="b">2 .u  densitas udara kg/m3</td>
                  <td>{{data_ktp.u_densitas_udara}}</td>
                </tr>
              </table>
              
              <table class="mt-2" style="max-width: 80%">
                <tr>
                  <td class="b">3. u Densitas  air, kg/m3</td>
                  <td>{{data_ktp.u_densitas_air}}</td>
                </tr>
              </table>
              
              <table class="mt-2" style="max-width: 80%">
                <tr>
                  <td class="b">4. u  Densitas pembacaan timbangan kg/m3</td>
                  <td>{{data_ktp.u_densitas_pembacaan_timb}}</td>
                </tr>
              </table>
              
              <table class="mt-2" style="max-width: 80%">
                <tr>
                  <td class="b">5. u  Suhu air destilasi °C</td>
                  <td>{{data_ktp.u_suhu_air_destilasi}}</td>
                </tr>
              </table>
              
              <table class="mt-2" style="max-width: 80%">
                <tr>
                  <td rowspan="3" class="b">6. KoefMuai. Bahan  :</td>
                  <td>a. Koef. Bahan Borosilikat</td>
                  <td>{{data_ktp.koofesien_muai_bahan.koef_soda_kapur}}</td>
                </tr>
                <tr>
                  <td>b. Koef.Bahan Soda Kapur</td>
                  <td>{{data_ktp.koofesien_muai_bahan.koof_borosilikat}}</td>
                </tr>
                <tr>
                  <td>c. Polipropilen</td>
                  <td>{{data_ktp.koofesien_muai_bahan.poripropilen}}</td>
                </tr>
              </table>
              
              <table class="mt-2" style="max-width: 80%">
                <tr>
                  <td class="b">7. Pembacaan Miniskus , ml</td>
                  <td v-for="(item, index) in data_ktp.pembacaan_miniskus" :key="index">{{item}}</td>
                </tr>
              </table>
              
              <table class="mt-2" style="max-width: 80%">
                <tr>
                  <td class="b">8. ketidakpastian Drift timbangan,  ml</td>
                  <td>{{data_ktp.ktp_drift_timbangan}}</td>
                </tr>
              </table>
              
              <table class="mt-2" style="max-width: 80%">
                <tr>
                  <td class="b">9. ketidakpastian Drift thermometer,  ml</td>
                  <td>{{data_ktp.ktp_drift_thermometer}}</td>
                </tr>
              </table>
            </v-layout>

            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : {{data_alat.diperiksa.person}} <br>
                Tanggal :	{{data_alat.diperiksa.date}} <br>
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
    font-size: 9pt;
    border-collapse: collapse;
  } table, th, td {
    border: 1px solid grey;
    padding: 3px
  }
</style>

<script>
import volHeader from '~/components/volumetrik/piknometer.vue'
import durometer from '~/static/durometer.json'

export default {
  components: {
    volHeader
  },

  head: {
    title: 'Lembar Kerja | Bidang Gelas Volumetri',
    meta: [
      {
        hid: 'mass',
        name: 'mass',
        content: 'Bidang Massa'
      }
    ],
  },

  data: () => ({
    no_cert: '-',

    data_alat: {
      dikalibrasi: {
        date: "2020-08-31 14:50:26",
        person: "Satrio O."
      },
      diperiksa: {
        date: "5 Mei 2020",
        person: "Agus Surya P"
      },
    },

    data_ktp:{
      koofesien_muai_bahan:{
        koef_soda_kapur:0,
        koof_borosilikat:0,
        poripropilen:0
      },
      ktp_drift_thermometer:0,
      ktp_drift_timbangan:0,
      ktp_pengukuran:{
        data:{
          komponen: [
            "Penimbangan Massa Air",
            "Densitas udara",
            "Densitas air",
            "Densitas pembacaan timbangan",
            "suhu air destilasi",
            "Koeffisien muai bahan",
            "",
            "Pembacaan Miniskus",
            "Drift timbangan",
            "Drift thermometer"
          ],
          satuan: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          distribusi: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          u: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          pembagi: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          vi: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ui: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ci: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          uici: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          uici2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          uici4_vi: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        derajat_kbbs_efektif: 0,
        faktor_cakupan: 0,
        ktp_bentangan: 0,
        ktp_gab: 0,
        sums: [0, 0]
      },
      massa_air_destilasi: {
          lop_timbangan: [0, 0, 0],
          mg: 0,
          stdev_maks: [0, 0, 0]
      },
      pembacaan_miniskus: [0, 0, 0],
      u_densitas_air: 0,
      u_densitas_pembacaan_timb: "",
      u_densitas_udara: 0,
      u_suhu_air_destilasi: 0
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
        this.data_alat = req_data.data_alat
        this.data_ktp = req_data.data_ktp
      } catch (error) {
        console.log('get LK err: ', error.response);
      }
    },
    convertDate(date_string) {
      // const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date_string).toLocaleDateString('id-ID', options)
    }
  }
}

function hideElement(id) {
  document.getElementById(id).innerHTML = "Hello World";
}
</script>