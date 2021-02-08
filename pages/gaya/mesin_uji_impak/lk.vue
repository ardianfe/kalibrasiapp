<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <gayaHeader></gayaHeader>

      <v-layout justify-center column>
        <v-card class="elevation-8 v-main-card mt-4" style="margin: auto" width="210mm">
          <v-card-text>
            <p class="text-xs-center b title my-4">LEMBAR KERJA VERIFIKASI MESIN UJI IMPAK</p>

            <p>No. Laporan: 3-09-18-0157</p>
            <table>
              <tr>
                <td>Nama alat :</td>
                <td>{{data_alat.nama_alat}}</td>
                <td>Kapasitas :</td>
                <td>{{data_alat.kapasitas.nilai}} {{data_alat.kapasitas.besaran}}</td>
              </tr>
              <tr>
                <td>Daerah Ukur :</td>
                <td>{{data_alat.daerah_ukur}}</td>
                <td>Resolusi :</td>
                <td>1 digit = 0.01°</td>
              </tr>
              <tr>
                <td>Tipe/Model :</td>
                <td>{{data_alat.tipe_model}}</td>
                <td>Nomor seri :</td>
                <td>{{data_alat.no_seri}}</td>
              </tr>
              <tr>
                <td>Merek :</td>
                <td>{{data_alat.merek}}</td>
                <td>Buatan :</td>
                <td>{{data_alat.buatan}}</td>
              </tr>
              <tr>
                <td>Suhu ruangan :</td>
                <td colspan="3">{{data_alat.suhu}}</td>
              </tr>
              <tr>
                <td>Lokasi :</td>
                <td colspan="3">{{data_alat.lokasi_verifikasi}}</td>
              </tr>
            </table>

            <p class="b mb-0 mt-2">Alat Verifikasi : </p>
            <div class="ml-3">
              Proving Ring No. {{data_alat.alat_verifikasi.proving_ring}} <br>
              Stop Watch No. {{data_alat.alat_verifikasi['stop watch']}} <br>
              Meteran Standar No. {{data_alat.alat_verifikasi.meteran_standar}} <br>
              Alat ukur sudut No. {{data_alat.alat_verifikasi.alat_ukur_sudut}} <br>
              Jangka sorong No. {{data_alat.alat_verifikasi.jangka_sorong}} <br>
              Dial Gauge No. {{data_alat.alat_verifikasi.dial_gauge}} <br>
              Termometer No. {{data_alat.alat_verifikasi.termometer}} <br>
              Alat ukur Radius No. {{data_alat.alat_verifikasi.alat_ukur_radius}} 
            </div>

            <p class="mb-0 mt-2"><span class="b">Standar Acuan : </span>{{data_alat.standar_acuan}}</p>
            <p class="mb-0 mt-2"><span class="b">Metoda Verifikasi : </span>{{data_alat.metode_verifikasi}}</p>

            <p class="mb-0 mt-2 b">Metoda Langsung :</p>
            <div class="px-4 py-2">
              <table>
                <tr>
                  <td colspan="5">1. {{metode_langsung[0]}}</td>
                </tr>
                <tr>
                  <td colspan="5">2. Pergeseran bantalan</td>
                </tr>
                <tr>
                  <td class="pl-4">- arah samping</td>
                  <td>
                    <span v-for="(item, index) in metode_langsung[1].pergeseran_bantalan.arah_samping.nilai" :key="index">{{item}} </span>
                  </td>
                  <td>syarat max</td>
                  <td>
                    <span v-for="(item, index) in metode_langsung[1].pergeseran_bantalan.arah_samping.syarat_max" :key="index">{{item}} </span>
                  </td>
                </tr>
                <tr>
                  <td class="pl-4">- arah radial :</td>
                  <td>
                    <span v-for="(item, index) in metode_langsung[1].pergeseran_bantalan.arah_radial.nilai" :key="index">{{item}} </span>
                  </td>
                  <td>syarat max</td>
                  <td>
                    <span v-for="(item, index) in metode_langsung[1].pergeseran_bantalan.arah_radial.syarat_max" :key="index">{{item}} </span>
                  </td>
                </tr>
                <tr>
                  <td>3. Sudut jatuh :</td>
                  <td>
                    <span v-for="(item, index) in metode_langsung[2][0].sudut_jatuh.nilai" :key="index">{{item}} </span>
                  </td>
                  <td> syarat  :</td>
                  <td><span v-for="(item, index) in metode_langsung[2][0].sudut_jatuh.syarat" :key="index">{{item}} </span></td>
                </tr>
                <tr>
                  <td class="pl-3">Sudut palu :</td>
                  <td>
                    <span v-for="(item, index) in metode_langsung[2][0].sudut_palu.nilai" :key="index">{{item}} </span>
                  </td>
                  <td> syarat  :</td>
                  <td><span v-for="(item, index) in metode_langsung[2][0].sudut_palu.syarat" :key="index">{{item}} </span></td>
                </tr>
                <tr>
                  <td colspan="2">4. Panjang lengan pendulum (L)</td>
                  <td colspan="2"><span v-for="(item, index) in metode_langsung[3].panjang_lengan_pendulum" :key="index">{{item}} </span></td>
                </tr>
                <tr>
                  <td>5. Radius pemukul 2.0 mm</td>
                  <td><span v-for="(item, index) in metode_langsung[4].radius_pemukul_2mm" :key="index">{{item}} </span></td>
                  <td>syarat max</td>
                  <td>{{metode_langsung[4].syarat_max}}</td>
                </tr>
                <tr>
                  <td>6. Pergeseran lokasi pendulum :</td>
                  <td><span v-for="(item, index) in metode_langsung[5].pergeseran_lokasi_pendulum" :key="index">{{item}} </span></td>
                  <td>syarat max.</td>
                  <td>{{metode_langsung[5].syarat_max}}</td>
                </tr>
              </table>

              <p class="mt-4 mb-1">
                7. Menentukan gaya dengan proving ring (G)
              </p>
              <table class="text-xs-center">
                <tr>
                  <td rowspan="3">Pembacaan Ke</td>
                  <td colspan="2">Pembacaan Proving Ring</td>
                  <td colspan="3">Beban Sebenarnya</td>
                </tr>
                <tr>
                  <td>Sebenarnya</td>
                  <td>Koreksi nol</td>
                  <td>Koreksi suhu</td>
                  <td>Individual</td>
                  <td>Rata-rata</td>
                </tr>
                <tr>
                  <td>(div)</td>
                  <td>(div)</td>
                  <td>(div)</td>
                  <td>( N.)</td>
                  <td>( N.)</td>
                </tr>
                <tr v-for="(item, index) in metode_langsung[6].menentukan_gaya_dg_pr.pembacaan_ke" :key="index">
                  <td>{{item}}</td>
                  <td>{{metode_langsung[6].menentukan_gaya_dg_pr.pembacaan_PV_sebenarnya[index]}}</td>
                  <td>{{metode_langsung[6].menentukan_gaya_dg_pr.pembacaan_PV_koreksi_nol[index]}}</td>
                  <td>{{metode_langsung[6].menentukan_gaya_dg_pr.beban_sebenarnya_koreksi_suhu[index]}}</td>
                  <td>{{metode_langsung[6].menentukan_gaya_dg_pr.beban_sebenarnya_individual[index]}}</td>
                  <td>{{metode_langsung[6].menentukan_gaya_dg_pr.rata_rata[index]}}</td>
                </tr>
              </table>

              <p class="mt-4 mb-1">
                8.  Menentukan momen (M) = G x L = {{data_kal.momen}}	Joule
              </p>

              <p class="mt-4 mb-1">
                9. Menentukan Energi potensial awal (A) = M (1 - cos a)
              </p>
              <table class="text-xs-center"> 
                <tr>
                  <td>Daerah Ukur</td>
                  <td>Sudut a</td>
                  <td colspan="2">Energi Potensial Awal [Joule]</td>
                </tr>
                <tr>
                  <td>(%)</td>
                  <td>[ o ]</td>
                  <td>Pengamatan</td>
                  <td>Persyaratan </td>
                </tr>
                <tr v-for="(item, index) in data_kal.menentukan_energi_potensial_awal.daerah_ukur" :key="index">
                  <td>{{item}}</td>
                  <td>{{data_kal.menentukan_energi_potensial_awal.sudut_alpha[index]}}</td>
                  <td>{{data_kal.menentukan_energi_potensial_awal.ep_awal_pengamatan[index]}}</td>
                  <td>{{data_kal.menentukan_energi_potensial_awal.ep_awal_persyaratan[index]}}</td>
                </tr>
              </table>

              <p class="mt-4 mb-1">
                10. Mengukur waktu ayun setiap 100 ayunan dengan sudut jatuh a = 5°
              </p>
              <table class="text-xs-center" width="80%">
                <tr>
                  <th>Pemeriksaan</th>
                  <th>Waktu (T)</th>
                  <th>Waktu rata-rata </th>
                </tr>
                <tr>
                  <td>ke</td>
                  <td>[ s ]</td>
                  <td>[ s ]</td>
                </tr>
                <tr v-for="(item, index) in data_kal.waktu_ayun_sudut_5_degree.table.pemeriksaan_ke" :key="index">
                  <td>{{item}}</td>
                  <td>{{data_kal.waktu_ayun_sudut_5_degree.table.waktu[index]}}</td>
                  <td>{{data_kal.waktu_ayun_sudut_5_degree.table.waktu_rata[index]}}</td>
                </tr>
              </table>
              <p class="mt-2 mb-1">
                Waktu (t) untuk tiap satu ayunan = T/100 =	{{data_kal.waktu_ayun_sudut_5_degree.waktu_utk_tiap_satu_ayunan.nilai}}	s <br>
                persyaratan maksikum Tmax - Tmin = 0,2  [ s ]				
              </p>

              <p class="mt-4 mb-1">
                11. Menentukan pusat perkusi (P) = gt2 / 4 p2 = [m] <br>
                Persyaratan ± 1% dari = <br>
              </p>
              <p class="mt-1 mb-1 ml-4">
                P =	<span v-for="(item, index) in data_kal.pusat_perkusi.p" :key="index">{{item}} </span> <br>
                L =	<span v-for="(item, index) in data_kal.pusat_perkusi.persyaratan_L" :key="index">{{item}} </span> 
              </p>
              
              <p class="mt-4 mb-1">
                12. Menentukan kecepatan impak (v) = Ö 2gL(1-cos a) [m/s]
              </p>
              <p class="mt-1 mb-1 ml-4">
                v  =	<span v-for="(item, index) in data_kal.kecepatan_impak.v_impak" :key="index">{{item}} </span>  <br>
                v  =	<span v-for="(item, index) in data_kal.kecepatan_impak.v_impak_pembulatan" :key="index">{{item}} </span> <br>
                Persyaratan maksimum : V = 5,0 m/s sampai dengan 5,5 m/s
              </p>
              
              <p class="mt-4 mb-1"> 
                13. Menentukan energi yang diserap akibat gesekan (Av) <br>
              </p>
              <p class="mt-1 mb-1 ml-4">
                diketahui resolusi 1 digit = 0.01°
              </p>
              <table class="text-xs-center" width="80%">
                <tr>
                  <th>Ayunan</th>
                  <th>Kerugian akibat gesekan	</th>
                  <th>Rata-rata </th>
                  <th>Sudut Sisa</th>
                </tr>
                <tr>
                  <td>ke</td>
                  <td>[ ° ]</td>
                  <td>[ ° ]</td>
                  <td>[ ° ]</td>
                </tr>
                <tr v-for="(item, index) in data_kal.energi_terserap_gesekan.table.ayunan_ke" :key="index">
                  <td>{{item}}</td>
                  <td>{{data_kal.energi_terserap_gesekan.table.kerugian_akibat_gesekan[index]}}</td>
                  <td>{{data_kal.energi_terserap_gesekan.table.rata_rata[index]}}</td>
                  <td>{{data_kal.energi_terserap_gesekan.table.sudut_sisa[index]}}</td>
                </tr>
              </table>
              <p class="mt-1 mb-1">
                Energi yang diserap (Av) = M (cos b - cos (a - b))
              </p>
              <p class="mt-1 mb-1 ml-4">=	<span v-for="(item, index) in data_kal.energi_terserap_gesekan.energi_yg_diserap" :key="index">{{item}} </span></p>
              <p class="mt-1 mb-1">Persyaratan maksimum adalah + 1% dari A = -750 ± <span v-for="(item, index) in data_kal.energi_terserap_gesekan.syarat_maksimum" :key="index">{{item}} </span></p>

              <p class="mt-4 mb-1"> 14. Kerugian energi akibat gesekan = Av1 - Av2 </p>
              <div class="pl-4">
                <p class="mb-1">Av1 = M (cos b1 - cos (a - b1))</p>
                <p class="ml-4">=	<span v-for="(item, index) in data_kal.kerugian_e_akibat_gesekan.av1" :key="index">{{item}} </span></p>

                <p class="mb-1">Av2 = M (cos b2 - cos (a - b2))</p>
                <p class="ml-4">=	<span v-for="(item, index) in data_kal.kerugian_e_akibat_gesekan.av2" :key="index">{{item}} </span></p>
                    
                <p class="mb-1">Av1 - Av2 =	0.11 Joule</p>

                <p class="mb-1">Persyaratan maksimum : Av1 - Av2 = 0,5% dari A</p>
                <p class="ml-4">=	<span v-for="(item, index) in data_kal.kerugian_e_akibat_gesekan.syarat_max_av" :key="index">{{item}} </span></p>
              </div>
            </div>
          </v-card-text>

          <v-card-text>
            <v-layout row class='mt-4'>
              <v-flex xs6>
                Diperiksa oleh : {{data_alat.diperiksa.person}} <br>
                Tanggal :	{{data_alat.diperiksa.date}} <br>
                Tanda Tangan :	

                <hr style="width: 50%; margin-top: 100px">	
              </v-flex>
              <v-flex xs6>
                Dikalibrasi oleh : {{data_alat.diverifikasi.person}} <br>
                Tanggal :	{{convertDate(data_alat.diverifikasi.date)}} <br>
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
    width: 100%
  } table, th, td {
    border: 1px solid grey;
    padding: 3px
  } .no-border {
    border: 0px !important;
  }
</style>

<script>
import gayaHeader from '~/components/gaya/mesin_uji_impak.vue'
import durometer from '~/static/durometer.json'

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
    no_cert: '',
    
    data_alat: {
      alat_verifikasi: {
        alat_ukur_radius: "",
        alat_ukur_sudut: "",
        dial_gauge: "",
        jangka_sorong: "",
        meteran_standar: "",
        proving_ring: 0,
        stopwatch: "",
        termometer: ""
      },
      buatan: "",
      daerah_ukur: "",
      diperiksa: {
        date: "",
        person: ""
      },
      diverifikasi: {
        date: "",
        person: ""
      },
      kapasitas: {
        besaran: "",
        nilai: ""
      },
      lokasi_verifikasi: "",
      merek: "",
      metode_verifikasi: "",
      nama_alat: "",
      no_seri: 0,
      standar_acuan: "",
      suhu: "",
      tipe_model: ""
    },

    metode_langsung: [
      "",
      {
        pergeseran_bantalan: {
          arah_radial: {
            nilai: [0, "mm"],
            syarat_max: [0, "mm"]
          },
          arah_samping: {
            nilai: [0, "mm"],
            syarat_max: [0, "mm"]
          }
        }
      },
      [
        {
          sudut_jatuh: {
            nilai: [150, "derajat"],
            syarat: ["-", ""]
          },
          sudut_palu: {
            nilai: [0, "derajat"],
            syarat: ["-", ""]
          }
        }
      ],
      {
        panjang_lengan_pendulum: [0, "m"]
      },
      {
        radius_pemukul_2mm: ["-", "mm"],
        syarat_max: "-"
      },
      {
        pergeseran_lokasi_pendulum: [0.2, "mm"],
        syarat_max: "0.5 mm"
      },
      {
        menentukan_gaya_dg_pr: {
          beban_sebenarnya_individual: [],
          beban_sebenarnya_koreksi_suhu: [],
          pembacaan_PV_koreksi_nol: [],
          pembacaan_PV_sebenarnya: [],
          pembacaan_ke: [],
          rata_rata: []
        }
      }
    ],

    data_kal: {
      energi_terserap_gesekan: {
        energi_yg_diserap: {
          nilai: 0,
          satuan: ""
        },
        syarat_maksimum: {
          nilai: 0,
          satuan: ""
        },
        table: {
          ayunan_ke: [],
          kerugian_akibat_gesekan: [],
          rata_rata: [],
          sudut_sisa: []
        }
      },
      kecepatan_impak: {
        v_impak: {
          nilai: 0,
          satuan: ""
        },
        v_impak_pembulatan: {
          nilai: 0,
          satuan: ""
        }
      },
      kerugian_e_akibat_gesekan: {
          av1: {
            nilai: 0,
            satuan: ""
          },
          av2: {
            nilai: 0,
            satuan: ""
          },
          syarat_max_av: {
            nilai: 0,
            satuan: ""
          }
      },
      menentukan_energi_potensial_awal: {
          daerah_ukur: [],
          ep_awal_pengamatan: [],
          ep_awal_persyaratan: [],
          sudut_alpha: []
      },
      momen: 0,
      pusat_perkusi: {
        p: {
          nilai: 0,
          satuan: "m"
        },
        persyaratan_L: {
          nilai_1: 0,
          nilai_2: 0,
          satuan: "m"
        }
      },
      waktu_ayun_sudut_5_degree: {
        table: {
          pemeriksaan_ke: [],
          waktu: [],
          waktu_rata: []
        },
        waktu_utk_tiap_satu_ayunan: {
          nilai: 0,
          satuan: "s"
        }
      }
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
        this.data_alat = req_data.data_alat.data_alat
        this.data_kal = req_data.data_kal
        this.metode_langsung = req_data.data_kal.metode_langsung
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