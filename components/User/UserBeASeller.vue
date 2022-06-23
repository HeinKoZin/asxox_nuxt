<template>
  <div class="wrapper">
    <div class="header_title">
      <h2 class="text-white">လုပ်ငန်းဆိုင်ရာ အချက်အလက်များ</h2>
    </div>
    <div class="grid gap-4 grid-cols-2 p-5">
      <div>
        <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              အမည် (လုပ်ငန်းအမည်) <b>Business Name</b>
            </span>
            <input type="text" v-model="sellerData.shop_name"  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
        </label>
      </div>
      <div>
        <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              လုပ်ငန်း <b>Phone Number</b>
            </span>
            <input type="text" v-model="sellerData.shop_phone" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
        </label>
      </div>
      <div>
        <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              လုပ်ငန်း <b>Email</b>
            </span>
            <input type="email" v-model="sellerData.shop_email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
        </label>
      </div>
      <div>
        <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              လုပ်ငန်းစတင်သည့်ခုနှစ် <b>Company Registration Date</b>
            </span>
            <input type="date" v-model="sellerData.company_registration_date" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
        </label>
      </div>
      <div>
        <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              <b>Facebook Page Link</b>
            </span>
            <input type="text" v-model="sellerData.facebook_url" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
          </label>
      </div>
      <div>
        <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              <b>Website Link</b>
            </span>
            <input type="text" v-model="sellerData.website_url" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
          </label>
      </div>
      <div>
        <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              လုပ်ငန်း Company <b>Registration No</b>
            </span>
            <input type="text" v-model="sellerData.company_registration_no" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
        </label>
      </div>
      <div>
        <label class="block">
          <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
            ရောင်းလိုသည့် ပစ္စည်းများ <b>Products to Sell</b>
          </span>
          <v-select class="mt-1 bg-white shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" multiple v-model="sellerData.product_to_sell" :options="categories" label="name" :reduce="(category) => category.name"></v-select>
        </label>
      </div>

      <div class="col-start-1 col-end-3">
        <label class="block">
          <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
            <b>Address</b>
          </span>
          <textarea v-model="sellerData.shop_address" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
        </label>
      </div>
    </div>

    <!-- Personal Information -->
    <div class=" header_title">
      <h2 class="text-white">လူပုဂ္ဂိုလ်(ပိုင်ရှင်) ဆိုင်ရာ အချက်အလက်များ</h2>
    </div>
    <div class="grid gap-4 grid-cols-2 p-5">
      <div>
        <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              လုပ်ငန်း <b>Owner Name</b>
            </span>
            <input type="text" v-model="sellerData.owner_name" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
          </label>
      </div>
      <div>
        <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              လုပ်ငန်း <b>Owner Phone</b>
            </span>
            <input type="text" v-model="sellerData.owner_phone" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
          </label>
      </div>
      <div class="col-start-1 col-end-3">
        <label class="block">
          <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
            <b>Address</b>
          </span>
          <textarea v-model="sellerData.owner_address" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
        </label>
      </div>
    </div>
    <!-- Register -->
    <div class="header_title">
      <h2 class="text-white">အကောင့်ဖွင့်ရန် အချက်အလက်များ</h2>
    </div>
    <div class="grid gap-4 grid-cols-2 p-5">
      <div class="col-start-1 col-end-3">
        <label class="block">
          <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
            <b>Email</b>
          </span>
          <input type="email" v-model="sellerData.account_email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
        </label>
      </div>
      <div class="col-start-1 col-end-3">
        <label class="block">
          <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
            <b>Password</b>
          </span>
          <input type="password" v-model="sellerData.account_password" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
        </label>
      </div>
      <div class="col-start-1 col-end-3">
        <label class="block">
          <Button
            class="user-bas block"
            @click.native="submitBeASeller()"

          >
          <i class="mr-2 fa-solid fa-paper-plane icon"></i>
            Send
          </Button>
        </label>
      </div>
      <input type="text" hidden v-model="sellerData.user_id">
    </div>
  </div>

</template>

<script>
import 'vue-select/dist/vue-select.css';
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      sellerData: {

        user_id: null,
        shop_name: null,
        shop_address: null,
        shop_phone: null,
        shop_email: null,
        product_to_sell: null,
        company_registration_no: null,
        company_registration_date: null,
        facebook_url: null,
        website_url: null,
        owner_name: null,
        owner_phone: null,
        owner_address: null,
        account_email: null,
        account_password: null,
      }

    }
  },

  computed: {
    // NOTE: Method from Vuex getters
    ...mapGetters([
      "categories",
      "isAuthenticated",
      "loggedInUser"
    ]),

    userId() {
      return this.loggedInUser.data.id;
    }
  },
  methods: {
    ...mapActions([
      "getCategories",
    ]),

    async fetch() {
       await this.getCategories();
    },
    async submitBeASeller() {
      try {
        this.sellerData.product_to_sell = JSON.stringify(this.sellerData.product_to_sell);
      const res = await this.$axios.post("be_a_seller",this.sellerData);
      if(res.data.status_code === 200){
        alert(res.data.status);
      }
      // this.sellerData = null;
    } catch (error) {
      console.log(error);
    }
    }
  },

  mounted(){
    this.sellerData.user_id = this.userId;

  }
};
</script>

<style lang="postcss" scoped>
.header_title {
  @apply bg-orange-500 p-4;
}
.user-bas {
  @apply w-32 bg-orange-500 text-white text-sm md:text-base font-bold py-3  rounded-lg font-quicksand mt-6 hover:bg-orange-600 ;
}
.icon {
  @apply text-lg;
}
</style>
