<template>
  <NuxtLink :to="'/product/' + $asxox.asxox_encode(product.id)">
    <div class="flex flex-col gap-y-2 group">
      <div class="relative w-full overflow-hidden">
        <nuxt-img
          format="webp"
          quality="50"
          loading="lazy"
          fit="cover"
          :src="product.temp_photo"
          alt=""
          class="object-cover object-top group-hover:scale-110 duration-700 transition-transform aspect-[1/1]"
          v-if="product.temp_photo"
        />
        <nuxt-img
          format="webp"
          quality="20"
          loading="lazy"
          fit="cover"
          src="https://via.placeholder.com/500?text=Asxox"
          alt=""
          class="object-cover object-top group-hover:scale-110 duration-700 transition-transform aspect-[1/1]"
          v-else
        />
      </div>
      <div class="flex flex-col py-2 gap-y-2">
        <!-- <NuxtLink to="#" class="text-sm">
        <h3 class="line-clamp-1">{{ product.name }}</h3></NuxtLink
      > -->
        <p class="sm:text-xs lg:text-sm font-semibold text-slate-700">
          {{ priceFormat(product.sell_price) + " " + product.currency }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  methods: {
    priceFormat(x) {
      var d = parseInt(x);
      return d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style lang="scss" scoped></style>
