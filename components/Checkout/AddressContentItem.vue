<template>
  <div class="relative w-full">
    <label
      :for="id"
      class="address-content-container"
      :class="address.status ? 'active' : ''"
    >
      <div class="address-content-checkbox">
        <input
          type="radio"
          name="address"
          :id="id"
          :value="id"
          @change="$emit('changeAddress', addressIndex)"
          :checked="address.status"
        />
      </div>
      <div
        class="flex flex-col flex-grow md:gap-x-1 gap-y-2 md:gap-y-0 md:flex-row"
      >
        <div class="flex flex-col justify-center flex-grow md:gap-y-2 gap-y-0">
          <div class="address-content-address">
            <span>{{ address.name }}</span>
          </div>
          <div class="address-content-phone text-slate-500 md:text-slate-900">
            <span>{{ address.phone }}</span>
          </div>
        </div>
        <div class="flex flex-col justify-center md:gap-y-2 gap-y-0">
          <div>
            <span> {{ address.state.name }}, {{ address.city.name }} </span>
          </div>
          <div class="text-slate-500 md:text-slate-900">
            <span> {{ address.address }} </span>
          </div>
        </div>
      </div>
    </label>
    <button class="remove-btn" @click="removeShippingAddress">
      <i class="fa-solid fa-xmark"></i>
    </button>
  </div>
</template>

<script>
import { generalMixins } from "@/mixins/general";
export default {
  mixins: [generalMixins],
  props: {
    address: {
      type: Object,
    },
    addressIndex: {
      type: Number,
    },
  },
  data() {
    return {
      id: "address-content-item",
      isChecked: false,
    };
  },

  methods: {
    handleCheckbox(e) {
      this.isChecked = e.target.value;
    },
    async removeShippingAddress() {
      try {
        const res = await this.$axios.delete(
          `/shipping_address/${this.address.id}`
        );
        this.toast("Shipping address deleted Successfully", "success");
        this.$emit("removeAddress");
        await this.$auth.fetchUser();
        // console.log(this.$auth.user?.data?.customer);
      } catch (error) {
        this.toast("Something wrong", "error");
      }
    },
  },

  mounted() {
    this.id = `address-content-item-${this._uid}`;
  },
};
</script>

<style lang="postcss" scoped>
.address-content-container {
  @apply flex w-full bg-white p-4 px-4 items-center border-2 border-transparent gap-x-4 rounded-lg my-0 font-quicksand font-bold text-sm;
}

.address-content-checkbox {
  @apply flex-shrink-0 flex items-center;
}
.address-content-checkbox input {
  @apply h-5 w-5 checked:bg-orange-500 accent-orange-500 border relative border-orange-500 outline-none appearance-none rounded-full;
}

.active {
  @apply border-orange-500;
}

span {
  @apply line-clamp-1;
}

.remove-btn {
  @apply flex-shrink-0 flex items-center justify-center text-sm absolute -top-2 -right-2 bg-red-600 text-white rounded-full h-6 w-6;
}
</style>
