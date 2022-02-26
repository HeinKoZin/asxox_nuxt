<template>
  <div>
    <label :for="id" class="address-content-container">
      <div class="address-content-checkbox">
        <input type="radio" name="address" :id="id" />
      </div>
      <div class="flex-grow">
        <div class="address-content-address">
          <span>Anywhere</span>
        </div>
        <div class="address-content-phone">
          <span>09950668891</span>
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
    handleCheckbox() {
      this.isChecked = true;
    },
  },

  mounted() {
    this.id = `address-content-item-${this._uid}`;
  },
};
</script>

<style lang="postcss" scoped>
.address-content-container {
  @apply flex bg-slate-100 p-4 px-6 items-center gap-x-4 rounded-lg my-1;
}

.address-content-checkbox {
  @apply flex-shrink-0 flex items-center;
}

.address-content-checkbox input {
  @apply h-5 w-5;
}
</style>
