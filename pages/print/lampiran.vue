<template>
  <v-layout
    column
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card width="210mm">
        <v-card-title class="headline">
          <v-btn icon large class="primary" @click="$router.go(-1)">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn> &nbsp;
          Cetak Lampiran

          <v-spacer />

          <v-btn class="primary elevation-0" @click="printWrapper">
            cetak <v-icon right>print</v-icon>
          </v-btn> &nbsp;
        </v-card-title>
        <!-- <table>
          <tr><td><div contenteditable>I'm editable</div></td><td><div contenteditable>I'm also editable</div></td></tr>
          <tr><td>I'm not editable</td></tr>
        </table> -->
        
        <v-card-text style="height: 300mm">
          <div id="printable" style="margin: auto; margin-top: 20px; min-width: 190mm; max-width: 190mm; height: 280mm;">
            <v-card-title style="z-index: 2; height: 75px; padding: 0">
              <img contain src="/kemenperin.png" height="auto" width="133px" style="object-fit: contain; margin: 3mm 0 0 3mm">
              <v-spacer/>
              <img contain src="/kan.png" height="auto" width="95" style="object-fit: contain; margin: 3mm 5mm 0 0">
            </v-card-title>
            <div id="header" style="margin-top: -75px;">
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
                    <!-- <p class="helve i" style="font-size: 9pt; margin: 0; height: 18px;">Position of Temperature Meassurement</p> -->
                  </v-flex>
                </v-layout>
              </div>

              <div>
                <table width="80%" border='1' v-if="data['110'].measure_value && data['150'].measure_value" style="margin-bottom: 60px">
                  <tr>
                    <td>PARAMETER</td>
                    <td>Posisi</td>
                    <td colspan="2">SUHU (°C)</td>
                  </tr>
                  <tr>
                    <td class="i">Parameters</td>
                    <td class="i">Position</td>
                    <td class="b">SET 110°C</td>
                    <td class="b">SET 150°C</td>
                  </tr>

                  <tr v-for="(item, index) in data['110'].measure_value" :key="index">
                    <td v-if="index == 0" :rowspan="data['110'].measure_value.length">Measured Value</td>
                    <td>{{index+1 }}</td>
                    <td>{{item}}</td>
                    <td>{{data['150'].measure_value[index]}}</td>
                  </tr>

                  <tr>
                    <td colspan="2">Measured Enclosure Temperature (MET)</td>
                    <td>{{data['110'].met}}</td>
                    <td>{{data['150'].met}}</td>
                  </tr>

                  <tr>
                    <td colspan="2">Indicated enclosure temperature (IET)</td>
                    <td>{{data['110'].iet}}</td>
                    <td>{{data['150'].iet}}</td>
                  </tr>

                  <tr>
                    <td colspan="2">Measured spatial variation (MSV)</td>
                    <td>{{data['110'].msv}}</td>
                    <td>{{data['150'].msv}}</td>
                  </tr>

                  <tr>
                    <td colspan="2">Measured temporal variation (MTV)</td>
                    <td>{{data['110'].mtv}}</td>
                    <td>{{data['150'].mtv}}</td>
                  </tr>

                  <tr>
                    <td colspan="2">Maximum measured temperature (MAX)</td>
                    <td>{{data['110'].hasil_max}}</td>
                    <td>{{data['150'].hasil_max}}</td>
                  </tr>

                  <tr>
                    <td colspan="2">Minimum measured temperature (MIN)</td>
                    <td>{{data['110'].hasil_min}}</td>
                    <td>{{data['150'].hasil_min}}</td>
                  </tr>

                  <tr>
                    <td colspan="2">Overall variation (OV)</td>
                    <td>{{data['110'].ov}}</td>
                    <td>{{data['150'].ov}}</td>
                  </tr>

                  <tr>
                    <td class="b" colspan="2">Ketidakpastian</td>
                    <td class="b">{{data['110'].ketidakpastian}}</td>
                    <td class="b">{{data['150'].ketidakpastian}}</td>
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
                  <p class="helve" style="font-size: 8pt; height: 14px; margin: 0">
                    3. Laboratorium ini diakreditasi KAN LK-022-IDN.
                  </p>
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
            <div style="margin-top: -130px;" > 
            </div>
        </v-card-text>
      </v-card>
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
  } .roman {
    font-family: 'Times New Roman', serif;
  } .helve {
    font-family: Helvetica, sans-serif;
  } .c {
    text-align: center;
  }
</style>

<script>

export default {
  data: () => ({
    active: null,
    certificate_number: '3-01-19-00472',
    
    data: {
      '110': {},
      '150': {}
    }
  }),

  mounted() {
    this.getLampiran(110)
    this.getLampiran(150)

    console.log(this.data['110']);
    
    
    if (!this.$store.state.isLoggedIn) {
      // this.$router.push('/')
    }
  },

  methods: {
    async getLampiran(_temp) {
      try {
        const req = await this.$calibrate.getLampiran({
          no_cert: this.certificate_number,
          temperature: _temp
        })

        _temp == 110 ? this.data['110'] = req : this.data['150'] = req 
        console.log(this.data);

        // this.elementMapping()
        
      } catch (error) {
        alert('gagal mendapatkan data lampiran')
      }
    },

    elementMapping() {
    },

    printWrapper() {
      var printContents = document.getElementById('printable').innerHTML;
      var originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents; 
    }
  },
}
</script>
