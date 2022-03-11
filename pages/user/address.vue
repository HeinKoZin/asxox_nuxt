<template>
  <div class="address-container">
    <CustomerAddressCard isInProfile @openModal="openModal" />
    <CreateAddressModal @closeModal="closeModal" v-if="isModalOpen" />
  </div>
</template>

<script>
export default {
  layout: "ProfileLayout",

  data() {
    return {
      isModalOpen: false,
    };
  },

  methods: {
    // open modal box
    openModal() {
      this.isModalOpen = true;
    },

    // close modal box
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
