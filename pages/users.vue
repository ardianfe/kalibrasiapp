<template>
  <v-layout column>
    <v-dialog v-model="edit_dialog" width="400px" persistent>
      <v-card>
        <v-card-title class="pb-0">{{edit_data.username}}
          <v-spacer></v-spacer>
          <v-btn @click="()=> {edit_dialog = false, edit_data = {}}" small icon class="primary" flat>
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-select 
            box width="100px" 
            background-color="white" 
            :items="role_data" 
            v-model="edit_data.role" 
            label="Ubah Role"
            item-text="text"
            item-value="id"
          ></v-select>
          <v-switch
            color="primary"
            v-model="edit_data.disabled"
            :label="edit_data.disabled ? 'Disabled' : 'Enabled'"
          ></v-switch>
        </v-card-text>
        <v-card-actions>
          <v-btn class="primary" @click="save(edit_data)">Simpan</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-flex xs12 sm8 md6>
      <v-card-title>
        <p class="headline lato font-weight-bold title mt-3">
          List User
        </p>
        <v-spacer></v-spacer>
        <!-- <v-spacer></v-spacer>
        <v-spacer></v-spacer> 
        <v-select box width="100px" background-color="white" :items="perpage_list" v-model="perpage" @change="()=> {page = 1, getListOrder()}" label="Jumlah Data Per-halaman"></v-select> -->
      </v-card-title>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <p class="text-xs-left">Jumlah data ditampilkan : {{showed_item_count}}</p>
        </v-flex>
      </v-layout>
      <template v-if="$store.state.isLoggedIn">
        <table style="width: 100%" class="f-table my-2">
          <tr class="tr-head white--text pt-sans font-weight-bold">
            <td class="primary td-header">Username</td>
            <td class="primary td-header">Email</td>
            <td class="primary td-header">Role</td>
            <td class="primary td-header">Status</td>
            <td class="primary td-header">Aksi</td>
          </tr>
          
          <template v-if="!loading">
            <tr class="tr-body" v-for="item in lu" :key="item.id">
              <td class="td-body">
                <v-hover>
                  <div class="pointer"
                    :style="`${ hover ? 'color: blue' : 'color: black'}`" 
                    slot-scope="{ hover }"
                  >
                    <span>{{item.username}}</span>
                  </div>
                </v-hover>
              </td>
              <td class="td-body">{{item.email}}</td>
              <td class="td-body">{{roles[item.role]}}</td>
              <td class="td-body">{{item.disabled ? 'disabled' : 'enabled'}}</td>
              <td class="td-body">
                <v-btn small class="success" icon @click="showEdit(item)"><v-icon small>edit</v-icon></v-btn>
              </td>
            </tr>
          </template>

          <tr class="tr-body" v-else>
            <td class="td-body" colspan="6">
              <v-progress-linear indeterminate color="primary"></v-progress-linear>
            </td>
          </tr>
        </table>

        <!-- <v-card-actions>
          <v-spacer />
          <div class="text-xs-center pt-2">
            <v-pagination @change="getListOrder" total-visible="5" v-model="page" :length="pages"
            @next="getListOrder"
            @previous="getListOrder"
            @input="getListOrder"
            ></v-pagination>
          </div>
          <v-spacer />
        </v-card-actions> -->

      </template>
    </v-flex>
    <uploadDialog></uploadDialog>
  </v-layout>
</template>

<style>
  #wrapper {
    overflow-x: scroll;
    /* overflow: scroll; */
  } table {
    border-collapse: collapse;
  } table, th, td {
    padding: 7px;
  }
</style>

<script>
import uploadDialog from '~/components/uploadDialog.vue'
export default {
  head: {
    title: 'List Order | B4T Kalibrasi',
    meta: [
      {
        hid: 'list-order',
        name: 'list-order',
        content: 'List Order B4T'
      }
    ]
  },

  components:{
    uploadDialog
  },

  data: () => ({
    lu: {},
    sample_name: '',
    sample_number: '',
    order_number: '',
    dialog: false,

    pagination: {},

    perpage: 50,
    perpage_list: [
      10,
      25,
      50,
      75,
      100
    ],
    totalItems: 100,
    showed_item_count: 0,
    page: 1,
    pags: 10,
    file: {},

    loading: false,

    roles: ['Admin', 'Petugas', 'Kasi', 'Koordinator'],
    role_data: [
      {id: 0, text: 'Admin'},
      {id: 1, text: 'Petugas'},
      {id: 3, text: 'Koordinator'},
      {id: 2, text: 'Kasi'},
    ],

    edit_dialog: false,
    edit_data: {}
  }),

  mounted() {
    this.getListOrder()
  },

  computed: {
    // pages () {
    //   if (this.perpage == null ||
    //     this.totalItems == null
    //   ) return 0
    //   return Math.ceil(this.totalItems / this.perpage)
    // }
  },

  methods: {
    async getListOrder() {
      this.loading = true
      try {
        const req = await this.$user.getUsers()

        console.log('test cors', req);
        this.lu = req
        this.showed_item_count = req.length
        // this.totalItems = req.total_order

        this.loading = false
      } catch (error) {
        this.loading = false
        alert('gagal mengambil daftar user')
        this.lu = [{"username": 'Tidak ada data', "email": "Tidak ada data", "role": "-", "disabled": "-"}]
        console.log(error.response);
      }
    },

    showEdit(item) {
      this.edit_dialog = true
      this.edit_data = item
    }, 

    async save(item) {
      this.loading = true
      try {
        console.log(item);
        const req = await this.$user.edit({data: item})
        console.log('edit req', req);
        alert(req.message);

        this.getListOrder()

        this.edit_dialog = false
        this.edit_data = {}

        setTimeout(() => {
          this.loading = false
          this.edit_dialog = false
          this.edit_data = {}
        }, 500);
      } catch (error) {
        alert('gagal mengubah data user')
        console.log('error when edit user', error.response);

        setTimeout(() => {
          this.loading = false
          this.edit_dialog = false
          this.edit_data = {}
        }, 500);
      }
    } 
  },
}
</script>
