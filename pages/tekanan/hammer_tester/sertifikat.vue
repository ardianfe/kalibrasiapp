<template>
  <v-layout column justify-center>
    <v-flex xs12 sm8 md6>
      <tekananHeader></tekananHeader>

      <v-layout row>
        <v-card width="100%" class="mt-4 v-main-card elevation-8">
          <v-card-title>
            <p class="accent--text lato font-weight-bold title ma-0">Cetak Sertifikat</p>
          </v-card-title>
          <v-card-text class="py-0">
            <v-checkbox v-model="kan" label="Tampilkan Logo KAN"></v-checkbox>

            <!-- <v-layout row wrap>
              <v-select 
                :items="signatories" v-model="signatory" 
                item-text="data.name" item-value="data" 
                label="Penandatangan"
                append-icon="expand_more"
              ></v-select>
            </v-layout> -->
            <v-flex xs12 sm6 md4>
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="published_date"
                persistent
                lazy
                full-width
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="published_date"
                    label="Tanggal diterbitkan"
                    prepend-icon="event"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="published_date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialog.save(published_date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            </v-flex>
          </v-card-text>
          <v-card-actions class="pa-2">
            <v-spacer></v-spacer>
            <v-btn class="primary elevation-0" @click="uploadPDF">
              upload
            </v-btn> &nbsp;
            <v-btn class="primary elevation-0" @click="printWrapper">
              cetak <v-icon right>print</v-icon>
            </v-btn> &nbsp;
          </v-card-actions>
        </v-card>
      </v-layout>

      <v-layout justify-center>
        <v-card width="210mm" class="mt-3 v-main-card elevation-8">        
          <v-card-text style="height: 300mm" class="pt-0">
            <div id="printable" style="margin: auto; margin-top: 0px; min-width: 190mm; max-width: 190mm; height: 280mm;">
              <no-ssr>
                <v-card-title style="z-index: 2; height: 75px; padding: 10mm 0 0 0">
                  <img contain src="/kemenperin.png" height="auto" width="133px" style="object-fit: contain; margin: 3mm 0 0 3mm">
                  <v-spacer/>
                  <img v-if="kan" contain src="/kan.png" height="auto" width="95" style="object-fit: contain; margin: 3mm 5mm 0 0">
                </v-card-title>
                <div id="header" style="margin-top: -75px; padding-top: 10mm">
                  <p class="helve c" style="margin-bottom: 1px; font-size: 9pt; margin-top: 3mm">BADAN PENELITIAN DAN PENGEMBANGAN INDUSTRI</p>
                  <p class="helve c b" style="margin-bottom: 1px; font-size: 10pt;">BALAI BESAR BAHAN DAN BARANG TEKNIK</p>
                  <p class="helve c" style="margin-bottom: 1px; font-size: 6.5pt">Jl. Sangkuriang No. 14 Bandung 40135 JAWA BARAT - INDONESIA</p>
                  <p class="helve c" style="margin-bottom: 1px; font-size: 6.5pt">Telp. 022 - 2504088, 2510682, 2504828, 2507626 Fax. 022 - 2502027</p>
                  <p class="helve c" style="margin-bottom: 1px; font-size: 6.5pt">E-mail : b4t@b4t.go.id  Website : http://www.b4t.go.id</p>
                </div>
                <div id="body-content" style="border: 1px solid black; background: white; margin-top: 2mm; padding: 2.7mm 4mm">
                  <p class="helve b c u" style="margin: 0; height: 4.2mm; font-size: 11pt;">SERTIFIKAT KALIBRASI</p>
                  <p class="helve i c" style="margin-bottom: 2mm; font-size: 10pt;">CALIBRATION CERTIFICATE</p>
                  <div style="margin: auto; width: 40mm;">
                    <v-layout>
                      <v-flex>
                        <p class="helve u c" style="font-size: 9pt; margin: 0; height: 4.2mm;">Nomor</p>
                        <p class="helve i c" style="font-size: 7.5pt; margin: 0; height: 18px;">Number</p>
                      </v-flex>
                      <v-flex>
                        <p class="helve c i" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate_number }}</p>
                      </v-flex>
                    </v-layout>
                  </div>

                  <!-- Alat / Equipment -->
                  <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">A L A T</p>
                  <p class="helve i" style="margin-bottom: 1mm; font-size: 7.5pt;">Equipment</p>
                  <v-layout>
                    <v-flex xs6>
                      <v-layout row>
                        <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">1.</p>
                        <div style="width: 32mm">
                          <p class="helve u b" style="font-size: 9pt; margin: 0; height: 4.2mm;">Nama</p>
                          <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Name</p>
                        </div>
                        <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate.equipment.name }}</p>
                      </v-layout>

                      <v-layout>
                        <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">2.</p>
                        <div style="width: 32mm">
                          <p class="helve u b" style="font-size: 9pt; margin: 0; height: 4.2mm;">Kapasitas</p>
                          <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Capacity</p>
                        </div>
                        <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate.equipment.capacity }}</p>
                      </v-layout>

                      <v-layout>
                        <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">3.</p>
                        <div style="width: 32mm">
                          <p class="helve u b" style="font-size: 9pt;margin: 0; height: 4.2mm;">Tipe/Model</p>
                          <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Type/Model</p>
                        </div>
                        <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate.equipment.model }}</p>
                      </v-layout>

                    </v-flex>
                    <v-flex xs6>
                      <v-layout>
                        <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">4.</p>
                        <v-flex xs5>
                          <p class="helve u b" style="font-size: 9pt; margin: 0; height: 4.2mm;">Nomor Seri</p>
                          <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Serial Number</p>
                        </v-flex>
                        <v-flex xs6>
                          <p contenteditable="true" class="roman" style="font-size: 9pt; margin: 7px -14px 7px 0; height: 4.2mm;">: {{ certificate.equipment.serial_number }}</p>
                        </v-flex>
                      </v-layout>

                      <v-layout>
                        <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">5.</p>
                        <v-flex xs5>
                          <p class="helve u b" style="font-size: 9pt; margin: 0; height: 4.2mm;">Merk/Buatan</p>
                          <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Manufacture</p>
                        </v-flex>
                        <v-flex xs6>
                          <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate.equipment.manufacture }}</p>
                        </v-flex>
                      </v-layout>
                      <!-- <v-layout>
                        <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">6.</p>
                        <v-flex xs5>
                          <p class="helve u b" style="font-size: 9pt; margin: 0; height: 4.2mm;">Ukuran Dalam</p>
                          <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Internal Dimension</p>
                        </v-flex>
                        <v-flex xs6>
                          <p contenteditable="true" class="roman" style="font-size: 9pt; margin: 7px -14px 7px 0; height: 4.2mm;">: 460mm(l)x250mm(p)x340mm(t)</p>
                        </v-flex>
                      </v-layout>

                      <v-layout>
                        <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">7.</p>
                        <v-flex xs5>
                          <p class="helve u b" style="font-size: 9pt; margin: 0; height: 4.2mm;">Pengontrol Suhu</p>
                          <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Temperature Control</p>
                        </v-flex>
                        <v-flex xs6>
                          <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate.equipment.temperature }}</p>
                        </v-flex>
                      </v-layout>

                      <v-layout>
                        <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">8.</p>
                        <v-flex xs5>
                          <p class="helve u b" style="font-size: 9pt; margin: 0; height: 4.2mm;">Lain-lain</p>
                          <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Others</p>
                        </v-flex>
                        <v-flex xs6>
                          <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate.equipment.others }}</p>
                        </v-flex>
                      </v-layout> -->
                    </v-flex>
                  </v-layout>

                  <!-- Pemilik / Owner -->
                  <p class="helve u" style="margin: 2.5mm 0 0 0; height: 4.2mm; font-size: 9pt;">P E M I L I K</p>
                  <p class="helve i" style="margin-bottom: 1mm; font-size: 7.5pt">Owner</p>
                  <v-layout row>
                    <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">1.</p>
                    <div style="width: 32mm">
                      <p class="helve b u" style="font-size: 9pt; margin: 0; height: 4.2mm;">Nama</p>
                      <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Name</p>
                    </div>
                    <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate.owner.name }}</p>
                  </v-layout>
                  <v-layout>
                    <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">2.</p>
                    <div style="width: 32mm">
                      <p class="helve b u" style="font-size: 9pt; margin: 0; height: 4.2mm;">Alamat</p>
                      <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Address</p>
                    </div>
                    <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate.owner.address }}</p>
                  </v-layout>

                  <!-- Standard -->
                  <p class="helve u" style="margin: 2.5mm 0 0 0; height: 4.2mm; font-size: 9pt;">S T A N D A R</p>
                  <p class="helve i" style="margin-bottom: 1mm; font-size: 7.5pt;">Standard</p>
                  <v-layout row>
                    <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">1.</p>
                    <div style="width: 32mm">
                      <p class="helve b u" style="font-size: 9pt; margin: 0; height: 4.2mm;">Nama</p>
                      <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Name</p>
                    </div>
                    <p class="helve" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: &nbsp;</p>
                    <div>
                      <p class="roman" style="font-size: 9pt; margin: 0; height: 4.2mm; width: 300px;">{{certificate.standard.name}}</p>
                      <!-- <p class="roman" style="font-size: 9pt; margin: 0; height: 4.2mm;">2. Thermocouple Wire Tipe K, S/N : K2</p> -->
                    </div>
                  </v-layout>
                  <v-layout>
                    <p class="helve" style="width: 5mm; font-size: 9pt; margin: 7px 0; height: 4.2mm;">2.</p>
                    <div style="width: 32mm">
                      <p class="helve b u" style="font-size: 9pt; margin: 0; height: 4.2mm;">Ketelusuran</p>
                      <p class="helve i" style="font-size: 7pt; margin: 0; height: 18px;">Traceability</p>
                    </div>
                    <p class="helve" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: &nbsp;</p>
                    <div>
                      <p class="roman" style="font-size: 9pt; margin: 0; height: 4.2mm; width: 380px;">{{certificate.standard.traceability}}</p>
                    </div>
                  </v-layout>

                  <!-- Tanggal -->
                  <v-layout>
                    <v-flex xs6>
                      <v-layout row style="margin-top: 3mm">
                        <div style="width: 37mm">
                          <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">TANGGAL DITERIMA</p>
                          <p class="helve i" style="margin-bottom: 1mm; font-size: 7.5pt;">Date of acceptance</p>
                        </div>
                        <div>
                          <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ convertDate(certificate.acceptance_date) }}</p>
                        </div>
                      </v-layout>
                    </v-flex>
                    <v-flex xs6>
                      <v-layout row style="margin-top: 3mm">
                        <div style="width: 37mm">
                          <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">TANGGAL KALIBRASI</p>
                          <p class="helve i" style="margin-bottom: 1mm; font-size: 7.5pt;">Date of Calibration</p>
                        </div>
                        <div>
                          <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ convertDate(certificate.calibration_date) }}</p>
                        </div>
                      </v-layout>
                    </v-flex>
                  </v-layout>

                  <!-- Kondisi -->
                  <p class="helve u" style="margin: 2mm 0 0 0; height: 4.2mm; font-size: 9pt;">KONDISI LINGKUNGAN KALIBRASI</p>
                  <p class="helve i" style="margin-bottom: 1mm; font-size: 7.5pt;">Environtment condition of Calibration</p>
                  <v-layout>
                    <v-flex xs6>
                      <v-layout row>
                        <p class="helve" style="width: 5mm; font-size: 9pt; margin: 0; height: 4.2mm;">1.</p>
                        <div style="width: 32mm">
                          <p class="helve" style="font-size: 9pt; margin: 0; height: 4.2mm;">Suhu Ruang</p>
                        </div>
                        <p class="roman" style="font-size: 9pt; margin: 0; height: 4.2mm;">: <span contenteditable="true">{{certificate.equipment.temperature}}</span></p>
                      </v-layout>
                    </v-flex>
                    <v-flex xs6>
                      <v-layout row>
                        <p class="helve" style="width: 5mm; font-size: 9pt; margin: 0; height: 4.2mm;">2.</p>
                        <div style="width: 32mm">
                          <p class="helve" style="font-size: 9pt; margin: 0; height: 4.2mm;">Kelembapan</p>
                        </div>
                        <p class="roman" style="font-size: 9pt; margin: 0; height: 4.2mm;">: <span contenteditable="true">69 ± 3 %RH</span></p>
                      </v-layout>
                    </v-flex>
                  </v-layout>

                  <!-- Lokasi -->
                  <v-layout row style="margin-top: 2.5mm">
                    <div style="width: 37mm">
                      <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">LOKASI KALIBRASI</p>
                      <p class="helve i" style="margin-bottom: 0; font-size: 7.5pt;">Location of Calibration</p>
                    </div>
                    <div>
                      <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate.calibration_location }}</p>
                    </div>
                  </v-layout>

                  <!-- Metoda -->
                  <v-layout row style="margin-top: 2.5mm">
                    <div style="width: 37mm">
                      <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">METODA KALIBRASI</p>
                      <p class="helve i" style="margin-bottom: 0; font-size: 7.5pt;">Calibration Method</p>
                    </div>
                    <div>
                      <p class="roman" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: {{ certificate.calibration_method }} </p>
                    </div>
                  </v-layout>

                  <!-- Acuan -->
                  <v-layout row style="margin-top: 2.5mm">
                    <div style="width: 37mm">
                      <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">ACUAN</p>
                      <p class="helve i" style="margin-bottom: 0; font-size: 7.5pt;">Refference</p>
                    </div>
                    <p class="helve" style="font-size: 9pt; margin: 7px 0; height: 4.2mm;">: &nbsp;</p>
                    <div>
                      <p class="roman" style="font-size: 9pt; margin: 0; height: 4.2mm;" v-html="certificate.refference"></p>
                      <!-- <p class="roman" style="font-size: 9pt; margin: 0; height: 4.2mm;">Enclosured Temperature Controlled Performance Testing and Grading</p> -->
                    </div>
                  </v-layout>
                  
                  <!-- Hasil -->
                  <v-layout row style="margin-top: 2.5mm">
                    <div>
                      <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">HASIL KALIBRASI DAN KETIDAKPASTIAN KALIBRASI</p>
                      <p class="helve i" style="margin-bottom: 0; font-size: 7.5pt;">Result of Calibration and uncertainity of Calibration</p>
                    </div>
                    <div>
                      <p class="roman u" style="margin: 0 15mm; height: 4.2mm; font-size: 9pt;">(Terlampir)</p>
                      <p class="roman i" style="margin: 0 15mm; font-size: 7.5pt;">(Attached)</p>
                    </div>
                  </v-layout>

                  <!-- Diterbitkan dan Tanda Tangan -->
                  <v-layout style="margin-top: 1mm">
                    <v-flex xs8>
                      <v-layout row>
                        <p class="helve" style="font-size: 9pt; margin: 0; height: 4.2mm;">DITERBITKAN TANGGAL : <span class="helve"> {{ convertDate(published_date) }}</span></p>
                      </v-layout>
                    </v-flex>
                    <v-flex xs4>
                      <p class="helve c" style="font-size: 8pt; margin: 0; height: 4.2mm;">Bidang Standarisasi</p>

                      <!-- {{signatory}} -->
                      <p class="helve c" style="font-size: 8pt; margin: 0; height: 4.2mm;">{{signatory.jabatan}}</p>
                      <p contenteditable class="helve c u" style="font-size: 8pt; margin: 14mm 0 0 0; height: 4.2mm;">{{signatory.name}}</p>
                      <p contenteditable class="helve c" style="font-size: 8pt; margin: 0; height: 4.2mm;">NIP. {{signatory.nip}}</p>
                    </v-flex>
                  </v-layout>

                  <!-- <div>
                    <table style="margin-top: 10px; width: 100%; border: 1px solid black; border-collapse: collapse;">
                      <tr>
                        <td style="border: 1px solid black; padding: 0 5px;">
                          <v-layout>
                            <div>
                              <p class="helve u b" style="font-size: 9pt;margin: 0; height: 4.2mm;">DISETUJUI</p>
                              <p class="helve i" style="font-size: 7pt; margin: 0;">Approved by</p>
                            </div>
                            <p class="roman" style="font-size: 9pt; margin: 7px 10px; height: 4.2mm;">: Tatto Bustomi</p>
                          </v-layout>
                          <v-layout>
                            <div>
                              <p class="helve u b" style="font-size: 9pt;margin: 0; height: 4.2mm;">TANGGAL</p>
                              <p class="helve i" style="font-size: 7pt; margin: 0;">Date</p>
                            </div>
                            <p class="roman" style="font-size: 9pt; margin: 7px 10px; height: 4.2mm;">: __ Juni 2017</p>
                          </v-layout>
                        </td>
                        <td style="border: 1px solid black; padding: 0 5px;">
                          <v-layout>
                            <div>
                              <p class="helve u b" style="font-size: 9pt;margin: 0; height: 4.2mm;">DIPERIKSA</p>
                              <p class="helve i" style="font-size: 7pt; margin: 0;">Checked by</p>
                            </div>
                            <p class="roman" style="font-size: 9pt; margin: 7px 10px; height: 4.2mm;">: Tatto Bustomi</p>
                          </v-layout>
                          <v-layout>
                            <div>
                              <p class="helve u b" style="font-size: 9pt;margin: 0; height: 4.2mm;">TANGGAL</p>
                              <p class="helve i" style="font-size: 7pt; margin: 0;">Date</p>
                            </div>
                            <p class="roman" style="font-size: 9pt; margin: 7px 10px; height: 4.2mm;">: __ Juni 2017</p>
                          </v-layout>
                        </td>
                        <td style="border: 1px solid black; padding: 0 5px;">
                          <v-layout>
                            <div>
                              <p class="helve u b" style="font-size: 9pt;margin: 0; height: 4.2mm;">DISIAPKAN</p>
                              <p class="helve i" style="font-size: 7pt; margin: 0;">Prepared by</p>
                            </div>
                            <p class="roman" style="font-size: 9pt; margin: 7px 10px; height: 4.2mm;">: Agus Surya Permana</p>
                          </v-layout>
                          <v-layout>
                            <div>
                              <p class="helve u b" style="font-size: 9pt;margin: 0; height: 4.2mm;">TANGGAL</p>
                              <p class="helve i" style="font-size: 7pt; margin: 0;">Date</p>
                            </div>
                            <p class="roman" style="font-size: 9pt; margin: 7px 10px; height: 4.2mm;">: __ Juni 2017</p>
                          </v-layout>
                        </td>
                      </tr>
                      <tr>
                        <td style="border: 1px solid black; height: 75px;"></td>
                        <td style="border: 1px solid black; height: 75px;"></td>
                        <td style="border: 1px solid black; height: 75px;"></td>
                      </tr>
                    </table>
                  </div> -->
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
                      <p class="helve" style="margin: 7px 8mm; height: 4.2mm; font-size: 9pt;">1</p>
                      <div>
                        <p class="helve u" style="margin: 0; height: 4.2mm; font-size: 9pt;">Dari</p>
                        <p class="helve i" style="margin-bottom: 0; font-size: 8pt;">of</p>
                      </div>
                      <p class="helve" style="margin: 7px 8mm; height: 4.2mm; font-size: 9pt;">2</p>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </no-ssr>
            </div>
            <div id="elementH"> 
            </div>
          </v-card-text>
        </v-card>
      </v-layout>
    </v-flex>
    <uploadDialog></uploadDialog>
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
    border: 1px solid grey;
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
    /* font-family: Helvetica, sans-serif; */
    font-family: 'Times New Roman', serif;
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
import tekananHeader from '~/components/tekanan/hammer.vue'
import uploadDialog from '~/components/uploadDialog.vue'
import jsPDF from 'jspdf'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
// import cert_data from '~/static/data_cert_v2.json'

export default {
  components: {
    tekananHeader,
    uploadDialog
  },

  head: {
    title: 'Sertifikat | Bidang Tekanan',
    meta: [
      {
        hid: 'gaya',
        name: 'gaya',
        content: 'Bidang Gaya'
      }
    ],

    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js' }
    ]
  },

  data: () => ({
    active: null,
    certificate_number: '3-01-19-00472',
    certificate: {
      equipment: {
        name: '',
        capacity: '',
        model: '',
        serial_number: '',
        manufacture: '',
        internal_dimension: '',
        temperature: '',
        others: '-',
      },
      owner: {
        name: '',
        address: ''
      },
      standard: {
        name: '',
        traceability: ''
      },
      acceptance_date: '',
      calibration_date: '',
      env_condition: {
        room_temp: '',
        humidity: ''
      },
      calibration_location: '',
      calibration_method: '',
      refference: '',
      result: '',
      published_date: '',
      director_name: '',
      director_nip: '',
    },
    data: {
      alat: {},
      co: {}
    },

    signatories: [
      { id: 1, data: {name: 'AJI MAHMUD SOLIH', nip: '19720802 200701 1 003', jabatan: 'Kepala Seksi Kalibrasi'} },
      { id: 2, data: {name: 'ELIS SOFIANTI', nip: '19710930 199403 2 001', jabatan: 'Kepala Bidang Standarisasi'} },
    ],

    kan: true,
    signatory: {name: 'ELIS SOFIANTI', nip: '19710930 199403 2 001', jabatan: 'Kepala Bidang Standarisasi'},

    published_date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false
  }),

  mounted() {
    this.getCertData()
  },

  methods: {
    downloadPDF() {
      var doc = new jsPDF();
      var elementHTML = $('#printable').html();
      var specialElementHandlers = {
          '#elementH': function (element, renderer) {
              return true;
          }
      };
      doc.fromHTML(elementHTML, 0, 0, {
          'width': 170,
          'elementHandlers': specialElementHandlers
      });

      // Save the PDF
      setTimeout(() => {
        doc.save('sample-document.pdf');
      }, 500);

      console.log(elementHTML);
      
    },

    async getCertData() {
      try {
        const req = await this.$category.getLembarKerja({id: this.$route.query.id})

        console.log('get LK: ', req);
        let req_data = req.results[0]

        // this.data.alat = req_data.data_alat
        // this.data.alat = req_data.data_co

        this.certificate_number = req_data.no_laporan

        this.elementMapping(req_data.data_alat, req_data.data_co)        
      } catch (error) {
        console.log(error);
      }
    },

    elementMapping(alat, co) {
      this.certificate.equipment.name = alat['Deskripsi Alat']
      this.certificate.equipment.capacity = alat['Kapasitas'] + ' Unit'
      this.certificate.equipment.model = alat['Merek']
      this.certificate.equipment.serial_number = alat['No Seri']
      this.certificate.equipment.manufacture = alat['No Seri'] + ' / ' + alat['Buatan']
      this.certificate.equipment.temperature = alat['Suhu']
      this.certificate.owner.name = co.nama_co
      this.certificate.owner.address = co.alamat
      this.certificate.standard.name = alat['Standar dipakai']
      this.certificate.standard.traceability = ''
      this.certificate.acceptance_date = alat.tanggal_diterima
      this.certificate.calibration_date = alat['Tanggal kalibrasi']
      this.certificate.env_condition.room_temp = ''
      this.certificate.env_condition.humidity = ''
      this.certificate.calibration_location = alat['Lokasi Kalibrasi']
      this.certificate.calibration_method = 'PC-309-10'
      this.certificate.refference = alat['Standar acuan']
    },

    printWrapper() {
      var printContents = document.getElementById('printable').innerHTML;
      var originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;
      window.print();
      // document.body.innerHTML = originalContents; 
      // location.reload()
      this.changeStatus()
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
    },

    async uploadPDF() {
      console.log('upload');
      this.$store.commit('openDialog', {
        sample_name: 'PDF',
        order_number: 0,
        sample_number: this.$route.query.id
      })
    },

    convertDate(date_string) {
      // const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date_string).toLocaleDateString('id-ID', options)
    }
  },
}
</script>
