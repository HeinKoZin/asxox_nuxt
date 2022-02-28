<template>
  <div class="w-full md:w-1/2 p-1">
    <label
      :for="id"
      class="address-content-container"
      :class="isChecked ? 'active' : ''"
    >
      <div class="address-content-checkbox">
        <input
          type="radio"
          name="address"
          :id="id"
          :value="id"
          @change="handleCheckbox($event)"
        />
      </div>
      <div class="flex flex-grow">
        <div class="flex flex-col justify-center flex-grow gap-y-2">
          <div class="address-content-address">
            <span>Anywhere</span>
          </div>
          <div class="address-content-phone">
            <span>09950668891</span>
          </div>
        </div>
        <div class="flex flex-col justify-center gap-y-2">
          <div>
            <span> Yangon, Myanmar </span>
          </div>
          <div>
            <span> No.243, St. 123, Street, </span>
          </div>
        </div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "address-content-item",
      isChecked: false,
    };
  },

  methods: {
    handleCheckbox(e) {
      this.isChecked = e.target.value;
      console.log(e.target.value);
    },
  },

  mounted() {
    this.id = `address-content-item-${this._uid}`;
  },
};
</script>

<style lang="postcss" scoped>
.address-content-container {
  @apply flex w-full bg-slate-100 p-4 px-6 items-center border-2 border-transparent gap-x-4 rounded-lg my-0 font-quicksand font-bold text-sm;
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
</style>
