<template>
  <div class="w-full pb-10">
    <div class="w-full font-semibold font-sans text-2xl py-5 text-slate-800">
      <h3>Trusted Shops for you</h3>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 w-full py-2">
      <ShopCard v-for="(shop, index) in shops" :key="index" :shop="shop" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  layout: "MainLayout",

  computed: {
    ...mapGetters(["shops"]),
  },

  methods: {
    ...mapActions(["getShops"]),
  },

  async fetch() {
    await this.getShops();
  },
};
</script>

<style lang="postcss" scoped></style>
