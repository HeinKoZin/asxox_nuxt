<template>
  <div class="w-full bg-white rounded-md">
    <div class="relative w-full overflow-hidden">
      <!-- <nuxt-img
          src="https://cdn.asxox.com.mm/upload/2021/08/06/category/image/06-08-2021_Asxox_4610c9d03c36755.32122801.png"
          format="webp"
          quality="20"
        /> -->
      <div class="relative group overflow-hidden">
        <nuxt-img
          :src="shop.banner"
          format="webp"
          quality="20"
          class="aspect-[5/2] object-cover group-hover:scale-110 duration-700 transition-transform rounded-t-md"
        />
        <!-- <div
            class="absolute w-full h-full bg-slate-900 bg-opacity-20 top-0 flex justify-center items-center"
          >
            <h3 class="text-white text-2xl font-bold">အမျိုးအစားများ</h3>
          </div> -->
        <div
          class="absolute bottom-0 right-0 bg-blue-500 px-4 py-1 text-white border-t-0 font-quicksand font-semibold lg:text-sm text-xs"
        >
          Official Shop
        </div>
      </div>
      <div
        class="relative w-full rounded-full flex flex-col -top-12 h-auto items-center px-4"
      >
        <div class="relative overflow-hidden rounded-full">
          <nuxt-img
            :src="shop.logo"
            format="webp"
            quality="20"
            class="aspect-[1/1] w-24 rounded-full object-cover border-2 border-slate-100 hover:scale-110 duration-700 transition-transform"
          />
        </div>
        <div class="flex flex-grow h-full items-center px-2 line-clamp-1">
          <h3
            class="font-bold text-slate-700 font-quicksand text-lg mt-3 text-center"
          >
            {{ shop.shop_name }}
          </h3>
        </div>
        <!-- <div class="w-full grid grid-cols-3 gap-3">
            <div class="p-3 bg-blue-500">
              <h3 class="text-white text-center font-bold">Official Shop</h3>
            </div>
          </div> -->
      </div>
      <div class="grid w-full grid-cols-3 gap-5 pb-5 px-5 -mt-5">
        <CategoryShopProductCard
          v-for="(product, index) in shopProducts ? shopProducts : []"
          :key="index"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    shopProducts: [],
  }),

  async fetch() {
    const res = await this.$axios.get(
      `products/shop/${this.shop.id}?sortColumn=id&sortDirection=desc&limit=3`
    );
    this.shopProducts = res.data.data;
  },
};
</script>

<style lang="scss" scoped></style>
