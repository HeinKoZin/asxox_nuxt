<template>
  <div
    :class="'group ' +
      (isAdsProduct ? 'ads-product' : 'product-card-container-wrapper ')
    "
  >
    <div
      class="transition-[translate] product-card-container group-hover:shadow-slate-300 group-hover:-translate-y-[0.05rem] group-hover:shadow-md"
    >
      <div class="card-header">
        <div class="card-header-buttons">
          <button class="w-10 h-10 bg-white rounded-full">
            <font-awesome-icon
              :icon="['fas', 'heart']"
              class="text-slate-500 hover:text-slate-700"
            />
          </button>
          <button class="w-10 h-10 bg-white rounded-full">
            <font-awesome-icon
              :icon="['fas', 'shopping-cart']"
              class="text-slate-500 hover:text-slate-700"
            />
          </button>
          <button class="w-10 h-10 bg-white rounded-full">
            <font-awesome-icon
              :icon="['fas', 'eye']"
              class="text-slate-500 hover:text-slate-700"
            />
          </button>
        </div>
        <img class="card-header-image" :src="data.image" />
      </div>
      <div class="card-body">
        <a href="#" class="card-header-title">
          {{ data.title }}
        </a>
        <p class="product-description">{{ data.description }}</p>
        <div class="product-price">
          <span class="text-orange-600">$</span>
          <span class="text-orange-600">{{ data.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { data: Object, isAdsProduct: Boolean },
  data() {
    return {
      //
    };
  },
  methods: {
    //
  },
  computed: {
    //
  },
  mounted() {
    //
  },
};
</script>

<style lang="postcss" scoped>
.product-card-container-wrapper {
  @apply w-6/12 md:w-[20%] xl:w-[12.5%] h-auto p-1;
}

.ads-product {
  @apply min-w-[60%] max-w-[60%] md:min-w-[25%] md:max-w-[25%] xl:min-w-[14.285%] xl:max-w-[14.285%] h-auto p-1 text-slate-800;
}

.product-card-container {
  @apply p-4 rounded-lg  bg-white;
}

.card-header {
  @apply relative;
}

.card-header .card-header-buttons {
  @apply absolute top-0 right-0 w-full h-full rounded-lg bg-opacity-0 bg-slate-900 hidden justify-evenly items-center group-hover:flex group-hover:bg-opacity-50 group-hover:animate-fadeIn;
}

.card-header .card-header-image {
  @apply w-full h-auto object-cover rounded-lg;
}

.product-card-container .product-price {
  @apply text-sm font-semibold mt-2;
}

..product-card-container .card-body {
  @apply h-40 flex flex-col justify-between;
}
.product-card-container .card-body .card-header-title {
  @apply text-sm  line-clamp-2 mt-2 hover:underline hover:underline-offset-2 h-10 font-comfortaa font-bold;
}

.product-card-container .product-description {
  @apply text-sm font-semibold line-clamp-4 mt-2 text-slate-500 h-20 font-quicksand;
}
</style>
