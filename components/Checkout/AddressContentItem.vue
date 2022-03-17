<template>
  <div class="w-full md:w-1/2 p-1">
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
      <div class="flex flex-grow gap-x-1">
        <div class="flex flex-col justify-center flex-grow gap-y-2">
          <div class="address-content-address">
            <span>{{ address.name }}</span>
          </div>
          <div class="address-content-phone">
            <span>{{ address.phone }}</span>
          </div>
        </div>
        <div class="flex flex-col justify-center gap-y-2">
          <div>
            <span> {{ address.state.name }}, {{ address.city.name }} </span>
          </div>
          <div>
            <span> {{ address.address }} </span>
          </div>
        </div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
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
  },

  mounted() {
    this.id = `address-content-item-${this._uid}`;
  },
};
</script>

<style lang="postcss" scoped>
.address-content-container {
  @apply flex w-full bg-slate-100 p-4 px-4 items-center border-2 border-transparent gap-x-4 rounded-lg my-0 font-quicksand font-bold text-sm;
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
</style>
