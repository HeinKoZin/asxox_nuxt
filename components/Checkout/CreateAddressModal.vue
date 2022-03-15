<template>
  <div class="address-container-wrapper" @click.self="$emit('closeModal')">
    <div class="address-container">
      <div class="address-title">
        <div class="flex gap-x-2">
          <span>
            <i class="fa-solid fa-location-dot shopping-icon"></i>
          </span>
          <span>Address</span>
        </div>
      </div>
      <div class="body">
        <div class="input-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="newAddress.name" />
          <span class="text-red-500 text-sm" v-if="errors ? errors['name'] : ''"
            ><b>{{ errors["name"][0] }}</b></span
          >
        </div>
        <div class="input-group">
          <label for="phone">Phone</label>
          <input
            type="text"
            id="phone"
            v-model="newAddress.phone"
            @keydown.space.prevent
          />
          <span class="text-red-500 text-sm" v-if="errors ? errors.phone : ''"
            ><b>{{ errors.phone[0] }}</b></span
          >
        </div>
        <div class="input-group">
          <label for="address">Address</label>
          <input type="text" id="address" v-model="newAddress.address" />
          <span class="text-red-500 text-sm" v-if="errors ? errors.address : ''"
            ><b>{{ errors.address[0] }}</b></span
          >
        </div>
        <div class="flex w-full gap-x-2">
          <div class="input-group">
            <label for="state">State</label>
            <select id="state" v-model="newAddress.state_id">
              <option
                :value="state.id"
                v-for="(state, index) in states"
                :key="index"
              >
                {{ state.name }}
              </option>
            </select>
          </div>
          <div class="input-group">
            <label for="city">City</label>
            <select id="state" v-model="newAddress.city_id">
              <option
                :value="city.id"
                v-for="(city, index) in cities"
                :key="index"
              >
                {{ city.name }}
              </option>
            </select>
          </div>
        </div>

        <div class="modal-actions">
          <button class="save" @click="addNewAddress">Save</button>
          <button class="cancel" @click="$emit('closeModal')">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { generalMixins } from "@/mixins/general";
import { mapMutations } from "vuex";
export default {
  mixins: [generalMixins],
  data() {
    return {
      states: [],
      cities: [],
      newAddress: {
        name: null,
        phone: null,
        address: null,
        state_id: null,
        city_id: null,
        status: 1,
      },
      errors: {},
    };
  },
  methods: {
    // NOTE: Method from Vuex actions
    ...mapMutations(["ADD_NEW_ADDRESS"]),
    async addNewAddress() {
      try {
        const response = await this.generalPostApis(
          "shipping_address",
          this.newAddress
        );
        this.errors = response.errors || {};

        const selectedState = this.states.find(
          (state) => state.id === this.newAddress.state_id
        );
        const selectedCity = this.cities.find(
          (city) => city.id === this.newAddress.city_id
        );
        this.newAddress.state = selectedState;
        this.newAddress.city = selectedCity;

        if (Object.keys(this.errors).length > 0) return true;

        this.ADD_NEW_ADDRESS(this.newAddress);
        this.toast("Address added successfully");
        this.$emit("closeModal");
      } catch (error) {
        console.log(error);
      }
    },
  },
  watch: {
    async "newAddress.state_id"() {
      const citiesRes = await this.generalGetApis(
        `cities?state_id=${this.newAddress.state_id}`
      );
      this.cities = citiesRes.data.data;
      this.newAddress.city_id = citiesRes.data.data[0].id;
    },
  },
  async fetch() {
    const statesRes = await this.generalGetApis("states");
    this.newAddress.state_id = statesRes.data.data[0].id;

    this.states = statesRes.data.data;
  },
};
</script>

<style lang="postcss" scoped>
.address-container-wrapper {
  @apply w-full flex justify-center items-center font-quicksand fixed h-screen top-0 left-0 z-50 bg-slate-900 bg-opacity-30;
}

.address-container {
  @apply max-w-md flex flex-col gap-y-2 border border-slate-300 p-5 md:p-10 rounded-lg justify-center bg-opacity-100 bg-slate-50;
}

.address-title {
  @apply text-slate-800 text-base md:text-lg flex justify-between font-bold font-quicksand border-b border-slate-300 py-2 items-center;
}

.body {
  @apply flex-col md:flex-row flex flex-wrap gap-y-1 md:gap-y-2 w-full;
}

.input-group {
  @apply flex w-full flex-col gap-x-2 justify-between flex-grow;
}

.input-group label {
  @apply text-sm md:text-base font-semibold font-quicksand p-1;
}

.input-group input,
select,
option {
  @apply border  border-slate-300 p-2 flex items-center gap-x-2 rounded-lg;
}

.modal-actions {
  @apply flex justify-end gap-x-2 mt-4;
}

.modal-actions button {
  @apply text-sm md:text-base font-semibold font-quicksand bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-slate-50 rounded-lg  p-2 px-4 flex items-center gap-x-2;
}
</style>
