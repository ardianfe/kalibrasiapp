<template>
  <v-layout
    column
  >
    <v-flex xs12 sm8 md6>
      <suhuHeader></suhuHeader>

      <v-layout row>
        <v-card width="100%" class="mt-4 v-main-card elevation-8">
          <v-card-title>
            <p class="accent--text lato font-weight-bold title ma-0">Cetak Lampiran</p>
          </v-card-title>
          <v-card-text class="py-0">
            <v-checkbox v-model="kan" label="Tampilkan Logo KAN"></v-checkbox>
          </v-card-text>
          <v-card-title class="pt-0">
            <v-spacer></v-spacer>
            <v-btn class="primary elevation-0" @click="printWrapper">
              cetak <v-icon right>print</v-icon>
            </v-btn> &nbsp;
          </v-card-title>
        </v-card>
      </v-layout>

      <!-- <pre>{{data[110]}}</pre> -->

      <v-layout row class="mt-5">
        <v-flex class="text-xs-right">
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-card width="210mm" class="mt-3 pt-3 v-main-card elevation-8">
          <div id="xprintable">
            <v-card-text style="height: 300mm" class="pa-0">
              <div id="printable" style="margin: auto; min-width: 190mm; max-width: 190mm; height: 240mm;">
                <v-card-title style="z-index: 2; height: 75px; padding-top: 12mm">
                  <img contain src="/kemenperin.png" height="auto" width="133px" style="object-fit: contain; margin: 3mm 0 0 3mm">
                  <v-spacer/>
                  <img v-if="kan" contain src="/kan.png" height="auto" width="95" style="object-fit: contain; margin: 3mm 5mm 0 0">
                </v-card-title>
                <div id="header" style="margin-top: -75px; padding-top: 12mm">
                  <p class="helve c" style="margin-bottom: 1px; font-size: 9pt; margin-top: 3mm">BADAN PENELITIAN DAN PENGEMBANGAN INDUSTRI</p>
                  <p class="helve c b" style="margin-bottom: 1px; font-size: 10pt;">BALAI BESAR BAHAN DAN BARANG TEKNIK</p>
                  <p class="helve c" style="margin-bottom: 1px; font-size: 6.5pt">Jl. Sangkuriang No. 14 Bandung 40135 JAWA BARAT - INDONESIA</p>
                  <p class="helve c" style="margin-bottom: 1px; font-size: 6.5pt">Telp. 022 - 2504088, 2510682, 2504828, 2507626 Fax. 022 - 2502027</p>
                  <p class="helve c" style="margin-bottom: 1px; font-size: 6.5pt">E-mail : b4t@b4t.go.id  Website : http://www.b4t.go.id</p>
                </div>
                <div id="body-content" style="border: 1px solid black; background: white; margin-top: 2mm; padding: 2.7mm 4mm; height: 231mm">
                  <p class="helve b c u" style="margin: 0; height: 4.2mm; font-size: 11pt;">LAMPIRAN SERTIFIKAT KALIBRASI</p>
                  <p class="roman i c" style="margin-bottom: 2mm; font-size: 12pt;">Attachment of Calibration Certificate</p>

                  <div style="width: 40mm; margin: 12px 0">
                    <v-layout>
                      <v-flex>
                        <p class="helve u" style="font-size: 9pt; margin: 0; height: 4.2mm;">Nomor</p>
                        <p class="helve i" style="font-size: 7.5pt; margin: 0; height: 18px;">Number</p>
                      </v-flex>
                      <v-flex>
                        <p class="helve i" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate_number }}</p>
                      </v-flex>
                    </v-layout>
                  </div>

                  <v-layout row wrap>
                    <v-flex xs7>
                      <div style="width: 40mm; margin: 12px 0">
                        <v-layout>
                          <v-flex>
                            <p class="helve u b" style="font-size: 9pt; margin: 0; height: 4.2mm;">HASIL KALIBRASI</p>
                            <p class="helve i" style="font-size: 9pt; margin: 0; height: 18px;">Calibration of Result</p>
                          </v-flex>
                          <v-flex>
                            <p class="helve i" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: </p>
                          </v-flex>
                        </v-layout>
                      </div>

                      <div style="padding-bottom: 60px">
                        <v-layout>
                          <v-flex>
                            <p class="helve u" style="font-size: 9pt; margin: 0; height: 4.2mm;">a. Posisi Pengukuran Suhu :</p>
                            <p class="helve i" style="font-size: 9pt; margin: 0; height: 18px;">Position of Temperature Meassurement</p>
                          </v-flex>
                          <v-flex>
                            <p class="helve i" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: </p>
                          </v-flex>
                        </v-layout>
                      </div>
                    </v-flex>

                    <v-flex xs5>
                      <img contain src="/calibration-certificate.png" height="auto" width="180" style="object-fit: contain;">
                    </v-flex>
                  </v-layout>

                  <div style="">
                    <v-layout>
                      <v-flex>
                        <p class="helve" style="font-size: 9pt; margin: 0; height: 4.2mm;">b. Karakteristik Keadaan Tunak / <span class="i">Steady-state Characteristics </span>:</p>
                      </v-flex>
                    </v-layout>
                  </div>

                  <div>
                    <table width="80%" border='1' style="margin-bottom: 60px">
                      <tr>
                        <td>PARAMETER</td>
                        <td>Posisi</td>
                        <td colspan="2">SUHU (°C)</td>
                      </tr>
                      <tr>
                        <td class="i">Parameters</td>
                        <td class="i">Position</td>
                        <td class="b">SET 150°C</td>
                        <td class="b">SET 200°C</td>
                      </tr>

                      <tr v-for="(item, index) in data_kal.lampiran_sert150.measure_value.length" :key="index">
                        <td v-if="index == 0" :rowspan="data_kal.lampiran_sert150.measure_value.length">Measured Value</td>
                        <td>{{index+1}}</td>
                        <td>{{data_kal.lampiran_sert150.measure_value[index]}}</td>
                        <td>{{data_kal.lampiran_sert200.measure_value[index]}}</td>
                      </tr>

                      <tr>
                        <td colspan="2">Measured Enclosure Temperature (MET)</td>
                        <td>{{data_kal.lampiran_sert150.met.toFixed(2)}}</td>
                        <td>{{data_kal.lampiran_sert200.met.toFixed(2)}}</td>
                      </tr>

                      <tr>
                        <td colspan="2">Indicated enclosure temperature (IET)</td>
                        <td>{{data_kal.lampiran_sert150.iet.toFixed(2)}}</td>
                        <td>{{data_kal.lampiran_sert200.iet.toFixed(2)}}</td>
                      </tr>

                      <tr>
                        <td colspan="2">Measured spatial variation (MSV)</td>
                        <td>{{data_kal.lampiran_sert150.msv.toFixed(2)}}</td>
                        <td>{{data_kal.lampiran_sert200.msv.toFixed(2)}}</td>
                      </tr>

                      <tr>
                        <td colspan="2">Measured temporal variation (MTV)</td>
                        <td>{{data_kal.lampiran_sert150.mtv}}</td>
                        <td>{{data_kal.lampiran_sert200.mtv}}</td>
                      </tr>

                      <tr>
                        <td colspan="2">Maximum measured temperature (MAX)</td>
                        <td>{{data_kal.lampiran_sert150.max.toFixed(2)}}</td>
                        <td>{{data_kal.lampiran_sert200.max.toFixed(2)}}</td>
                      </tr>

                      <tr>
                        <td colspan="2">Minimum measured temperature (MIN)</td>
                        <td>{{data_kal.lampiran_sert150.min.toFixed(2)}}</td>
                        <td>{{data_kal.lampiran_sert200.min.toFixed(2)}}</td>
                      </tr>

                      <tr>
                        <td colspan="2">Overall variation (OV)</td>
                        <td>{{data_kal.lampiran_sert150.ov.toFixed(2)}}</td>
                        <td>{{data_kal.lampiran_sert200.ov.toFixed(2)}}</td>
                      </tr>

                      <tr>
                        <td class="b" colspan="2">Ketidakpastian</td>
                        <td class="b">{{data_kal.ktp_150.ktp_bentangan}}</td>
                        <td class="b">{{data_kal.ktp_200.ktp_bentangan}}</td>
                      </tr>
                    </table>
                
                    <p style="font-size: 10pt; margin-bottom: 60px">
                      *) Ketidakpastian yang dilaporkan adalah ketidakpastian bentangan pada tingkat <br>
                      kepercayaan 95% pada faktor cakupan k=2
                    </p>
                
                  </div>
                </div>

                <!-- Keterangan -->
                <div style="border-style: solid; border-width: 0 1px 1px 1px; background: white; margin-top: 0; padding: 1mm 4mm">
                  <v-layout row>
                    <v-flex style="width: 37px">
                      <p class="helve" style="font-size: 8pt;">Keterangan :</p>
                    </v-flex>
                    <v-flex>
                      <p class="helve" style="font-size: 8pt; height: 14px; margin: 0">
                        1. Dilarang memproduksi sertifikat ini tanpa izin tertulis dari B4T kecuali secara keseluruhan.
                      </p>
                      <p class="helve" style="font-size: 8pt; height: 14px; margin: 0">
                        2. Hasil kalibrasi ini tidak untuk diumumkan dan hanya berlaku untuk alat yang bersangkutan.
                      </p>
                      <!-- <p class="helve" style="font-size: 8pt; height: 14px; margin: 0">
                        3. Laboratorium ini diakreditasi KAN LK-022-IDN.
                      </p> -->
                    </v-flex>
                  </v-layout>
                </div>
                
                <!-- Footer -->
                <v-layout row style="margin-top: 2mm">
                  <v-flex>
                    <p class="helve" style="font-size: 8pt;">F. 02 b/05</p>
                  </v-flex>
                  <v-flex>
                    <v-layout right>
                      <div>
                        <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">Halaman</p>
                        <p class="helve i" style="margin-bottom: 0; font-size: 8pt;">Page</p>
                      </div>
                      <p class="helve" style="margin: 7px 8mm; height: 4.2mm; font-size: 9pt;">2</p>
                      <div>
                        <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">Dari</p>
                        <p class="helve i" style="margin-bottom: 0; font-size: 8pt;">of</p>
                      </div>
                      <p class="helve" style="margin: 7px 8mm; height: 4.2mm; font-size: 9pt;">3</p>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </div>
            </v-card-text>

            <v-card-text style="height: 300mm" class="pa-0">
              <div id="printable2" style="margin: auto; min-width: 190mm; max-width: 190mm; height: 240mm;">
                <v-card-title style="z-index: 2; height: 75px; padding: 0; padding-top: 12mm">
                  <img contain src="/kemenperin.png" height="auto" width="133px" style="object-fit: contain; margin: 3mm 0 0 3mm">
                  <v-spacer/>
                  <img v-if="kan" contain src="/kan.png" height="auto" width="95" style="object-fit: contain; margin: 3mm 5mm 0 0">
                </v-card-title>
                <div id="header" style="margin-top: -75px; padding-top: 12mm">
                  <p class="helve c" style="margin-bottom: 1px; font-size: 9pt; margin-top: 3mm">BADAN PENELITIAN DAN PENGEMBANGAN INDUSTRI</p>
                  <p class="helve c b" style="margin-bottom: 1px; font-size: 10pt;">BALAI BESAR BAHAN DAN BARANG TEKNIK</p>
                  <p class="helve c" style="margin-bottom: 1px; font-size: 6.5pt">Jl. Sangkuriang No. 14 Bandung 40135 JAWA BARAT - INDONESIA</p>
                  <p class="helve c" style="margin-bottom: 1px; font-size: 6.5pt">Telp. 022 - 2504088, 2510682, 2504828, 2507626 Fax. 022 - 2502027</p>
                  <p class="helve c" style="margin-bottom: 1px; font-size: 6.5pt">E-mail : b4t@b4t.go.id  Website : http://www.b4t.go.id</p>
                </div>
                <div id="body-content" style="border: 1px solid black; background: white; margin-top: 2mm; padding: 2.7mm 4mm; height: 220mm">
                  <p class="helve b c u" style="margin: 0; height: 4.2mm; font-size: 11pt;">LAMPIRAN SERTIFIKAT KALIBRASI</p>
                  <p class="roman i c" style="margin-bottom: 2mm; font-size: 12pt;">Attachment of Calibration Certificate</p>

                  <div style="width: 40mm; margin: 12px 0">
                    <v-layout>
                      <v-flex>
                        <p class="helve u" style="font-size: 9pt; margin: 0; height: 4.2mm;">Nomor</p>
                        <p class="helve i" style="font-size: 7.5pt; margin: 0; height: 18px;">Number</p>
                      </v-flex>
                      <v-flex>
                        <p class="helve i" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate_number }}</p>
                      </v-flex>
                    </v-layout>
                  </div>

                  <div style="width: 40mm; margin: 20px 0">
                    <v-layout>
                      <v-flex>
                        <p class="helve u b" style="font-size: 9pt; margin: 0; height: 4.2mm;">HASIL KALIBRASI</p>
                        <p class="helve i" style="font-size: 9pt; margin: 0; height: 18px;">Calibration of Result</p>
                      </v-flex>
                      <v-flex>
                        <p class="helve i" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: </p>
                      </v-flex>
                    </v-layout>
                  </div>

                  <p class="helve" style="font-size: 9pt; margin-bottom: 8px; height: 4.2mm;">c.  Jarak yang ditetapkan terhadap ( mm ) / <span class="i"> Direction to ( mm )</span></p>

                  <div>
                    <table width="100%" border='1' style="margin-bottom: 60px">
                      <tr>
                        <td style="width: 20%" class="c">Pintu</td>
                        <td style="width: 20%" class="c">Dinding</td>
                        <td style="width: 20%" class="c">Bag. Belakang</td>
                        <td style="width: 20%" class="c">Bag. Atas</td>
                        <td style="width: 20%" class="c">Bag. Bawah</td>
                      </tr>
                      <tr>
                        <td class="i c">( Door )</td>
                        <td class="i c">( Wall )</td>
                        <td class="i c">( Rear )</td>
                        <td class="i c">( Up )</td>
                        <td class="i c">( Down )</td>
                      </tr>
                      <tr>
                        <td style="padding: 20px 4px; " class="c">{{lebar / 4}}</td>
                        <td style="padding: 20px 4px; " class="c">{{panjang / 4}}</td>
                        <td style="padding: 20px 4px; " class="c">{{lebar / 4}}</td>
                        <td style="padding: 20px 4px; " class="c">{{tinggi / 4}}</td>
                        <td style="padding: 20px 4px; " class="c">{{tinggi / 4}}</td>
                      </tr>
                    </table>
                  </div>

                  <div style="width: 40mm; margin: 20px 0">
                    <v-layout>
                      <v-flex>
                        <p class="helve b" style="font-size: 9pt; margin: 0; height: 4.2mm;">d. <span class="u"> KONDISI PENGUJIAN</span></p>
                        <p class="helve i" style="font-size: 9pt; margin: 0; height: 18px;">Testing Condition</p>
                      </v-flex>
                      <v-flex>
                        <p class="helve i" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: </p>
                      </v-flex>
                    </v-layout>
                  </div>

                  <div style="margin: 20px 0">
                    <v-layout row wrap>
                      <v-flex xs4>
                        <p class="helve" style="font-size: 10pt; margin: 0;">a. Beban Panas / Heat Load</p>
                      </v-flex>
                      <v-flex xs8>
                        <p class="helve" style="font-size: 10pt; margin: 0;">: Kondisi tanpa beban, dalam keadaan tunak / un-loaded, steady state condition</p>
                      </v-flex>
                      
                      <v-flex xs4>
                        <p class="helve" style="font-size: 10pt; margin: 0;">b. Periode Stabilisasi dan Interval</p>
                      </v-flex>
                      <v-flex xs8>
                        <p class="helve" style="font-size: 10pt; margin: 0;">: 1 jam setelah setting atau 5 siklus stabilisasi suhu / 1 hour or 5 cycles.</p>
                      </v-flex>

                      <v-flex xs12>
                        <p class="helve" style="font-size: 10pt; margin: 4px 0mm;">Pengujian / Interval</p>
                      </v-flex>

                      <v-flex xs4>
                        <p class="helve" style="font-size: 10pt; margin: 0;">c. Sensor Pengujian / Sensor</p>
                      </v-flex>
                      <v-flex xs8>
                        <p class="helve" style="font-size: 10pt; margin: 0;">: Termokopel tipe / T/C type K</p>
                      </v-flex>
                      
                      <v-flex xs4>
                        <p class="helve" style="font-size: 10pt; margin: 0;">d. Tempat Pengukuran Suhu /</p>
                      </v-flex>
                      <v-flex xs8>
                        <p class="helve" style="font-size: 10pt; margin: 0;">: Seluruhnya terdapat / all {{titik_uji}} titik ukur.</p>
                      </v-flex>
                    </v-layout>
                  </div>
                  
                </div>


                <!-- Keterangan -->
                <div style="border-style: solid; border-width: 0 1px 1px 1px; background: white; margin-top: 0; padding: 1mm 4mm">
                  <v-layout row>
                    <v-flex style="width: 37px">
                      <p class="helve" style="font-size: 8pt;">Keterangan :</p>
                    </v-flex>
                    <v-flex>
                      <p class="helve" style="font-size: 8pt; height: 14px; margin: 0">
                        1. Dilarang memproduksi sertifikat ini tanpa izin tertulis dari B4T kecuali secara keseluruhan.
                      </p>
                      <p class="helve" style="font-size: 8pt; height: 14px; margin: 0">
                        2. Hasil kalibrasi ini tidak untuk diumumkan dan hanya berlaku untuk alat yang bersangkutan.
                      </p>
                      <!-- <p class="helve" style="font-size: 8pt; height: 14px; margin: 0">
                        3. Laboratorium ini diakreditasi KAN LK-022-IDN.
                      </p> -->
                    </v-flex>
                  </v-layout>
                </div>
                
                <!-- Footer -->
                <v-layout row style="margin-top: 2mm">
                  <v-flex>
                    <p class="helve" style="font-size: 8pt;">F. 02 b/05</p>
                  </v-flex>
                  <v-flex>
                    <v-layout right>
                      <div>
                        <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">Halaman</p>
                        <p class="helve i" style="margin-bottom: 0; font-size: 8pt;">Page</p>
                      </div>
                      <p class="helve" style="margin: 7px 8mm; height: 4.2mm; font-size: 9pt;">3</p>
                      <div>
                        <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">Dari</p>
                        <p class="helve i" style="margin-bottom: 0; font-size: 8pt;">of</p>
                      </div>
                      <p class="helve" style="margin: 7px 8mm; height: 4.2mm; font-size: 9pt;">3</p>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </div>
              <div style="margin-top: -130px;" > 
              </div>
            </v-card-text>
          </div>
        </v-card>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<style scoped>
p{
  letter-spacing: .1pt;
}
  #wrapper {
    overflow-x: scroll hidden;
  } table {
    border-collapse: collapse;
    font-family: 'Times New Roman', serif;
  } table, th, td {
    border: 1px solid grey;
    padding: 1px 4px;
  }

  .b {
    font-weight: bold;
  } .i {
    font-style: italic;
  } .u {
    text-decoration: underline;
  } .c {
    text-align: center;
  }

  @page {
    /* auto is the initial value */
    size: auto;   
    /* this affects the margin in the printer settings */
    margin: 0mm 12mm 0mm 12mm;  
  }
</style>

<script>
import suhuHeader from '~/components/suhu/water_bath.vue'

export default {
  components: {
    suhuHeader
  },

  head: {
    title: 'Lampiran Sertifikat | Bidang Suhu',
    meta: [
      {
        hid: 'Suhu',
        name: 'Suhu',
        content: 'Bidang Suhu'
      }
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js' }
    ]
  },

  data: () => ({
    active: null,
    certificate_number: '',
    data_kal: {
      lampiran_sert200: {
        iet: 0,
        max: 0,
        measure_value: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        met: 0,
        min: 0,
        msv: 0,
        ov: 0
      },
      lampiran_sert150: {
        iet: 0,
        max: 0,
        measure_value: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        met: 0,
        min: 0,
        msv: 0,
        ov: 0
      },

      ktp_200: {ktp_bentangan: 0},
      ktp_150: {ktp_bentangan: 0},
    },
    signatories: [
      { id: 1, data: {name: 'AJI MAHMUD SOLIH', nip: '19720802 200701 1 003', jabatan: 'Kepala Seksi Kalibrasi'} },
      { id: 2, data: {name: 'ELIS SOFIANTI', nip: '19710930 199403 2 001', jabatan: 'Kepala Bidang Standarisasi'} },
    ],

    kan: true,
    signatory: {name: 'ELIS SOFIANTI', nip: '19710930 199403 2 001', jabatan: 'Kepala Bidang Standarisasi'},

    titik_uji: '',
    lebar: 0,
    panjang: 0,
    tinggi: 0
  }),

  mounted() {
    this.getCertData()
  },

  // watch: {
  //   data: {
  //     handler() {
  //       this.refreshData()
  //     }
  //   }
  // },

  methods: {
    // refreshData() {
    //   console.log(this.data);
    //   this.data = this.data
    // },

    async getCertData() {
      try {
        const req = await this.$category.getLembarKerja({id: this.$route.query.id})
        let req_data = req.results[0]

        this.certificate_number = req_data.no_laporan
        this.data_kal = req_data.data_kal

        this.data_kal.ktp_200 = req_data.data_ktp.ktp_200
        this.data_kal.ktp_150 = req_data.data_ktp.ktp_150

        this.titik_uji = req_data.data_alat.deskripsi.jumlah_titik

        this.lebar = req_data.data_alat.deskripsi.dimensi.lebar
        this.tinggi = req_data.data_alat.deskripsi.dimensi.tinggi
        this.panjang = req_data.data_alat.deskripsi.dimensi.panjang

      } catch (error) {
        console.log(error);
      }
    },

    groupLampiran(_data) {
      var data = _data
      var length = Math.ceil(data.length / 2)

      for (let index = 0; index < length; index++) {
        const element = data[index];
        const element2 = data[index+length];

        console.log('element2', element2 == undefined);
        

        if (element2 == undefined) {
          this.pages.push({ element:element, element2:'kosong' })  
        } else {
          this.pages.push({ element:element, element2:element2})  
        }
        // element2 ? this.pages.push({ element:element, element2:element2}) : this.pages.push({ element:element })
      }

      console.log(this.pages);
      
    },

    async getLampiran(_temp) {
      try {
        const req = await this.$calibrate.getAttachment({
          id: this.certificate_number,
          temperature: _temp
        })

        // _temp == 110 ? this.data['110'] = req : this.data['150'] = req 
        this.data[_temp] = req
        console.log(this.data);


        // this.elementMapping()
        
      } catch (error) {
        alert('gagal mendapatkan data lampiran')
      }
    },

    elementMapping() {
    },

    printWrapper() {
      var printContents = document.getElementById('xprintable').innerHTML;
      var originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;
      window.print();

      this.changeStatus()
      // document.body.innerHTML = originalContents; 
    },

    async changeStatus() {
      try {
        const req = await this.$calibrate.updateCertifStatus({
          id: this.certificate_number, status: 'certified'
        })

        console.log(this.certificate_number+' status :', req);
        location.reload()
      } catch (error) {
        console.log(error.response);
        location.reload()
      }
    }
  },
}

    function isOdd(num) { return num % 2;}
</script>
