<template>
  <div
    :class="
      'group ' +
      (isAdsProduct ? 'ads-product' : 'product-card-container-wrapper ')
    "
    v-if="!isWishListProduct"
  >
    <div
      class="
        transition-[translate]
        product-card-container
        group-hover:shadow-slate-300
        group-hover:-translate-y-[0.05rem]
        group-hover:shadow-md
        relative
        overflow-hidden
      "
    >
      <!-- NOTE: Later feature -->
      <!-- <div
        class="absolute z-40 w-full text-center text-white rotate-45 bg-orange-600 top-6 p-1 -right-[35%] md:-right-[30%] text-sm md:text-base"
      >
        Discount
      </div> -->
      <div class="card-header">
        <div class="card-header-buttons">
          <button
            class="w-10 h-10 bg-white rounded-full"
            @click="addToWishList(data.id, data.is_wishlist)"
          >
            <font-awesome-icon
              v-if="!isInWishlist"
              :icon="['far', 'heart']"
              class="icon"
            />
            <font-awesome-icon
              v-if="isInWishlist"
              :icon="['fas', 'heart']"
              class="icon active"
            />
          </button>
          <button
            class="w-10 h-10 bg-white rounded-full"
            @click="data.is_varient ? null : addProductToCart(data)"
            v-if="!data.is_varient"
          >
            <font-awesome-icon :icon="['fas', 'shopping-cart']" class="icon" />
          </button>
          <button
            class="w-10 h-10 bg-white rounded-full"
            @click="$router.push(`/product/${$asxox.asxox_encode(data.id)}`)"
          >
            <font-awesome-icon :icon="['fas', 'eye']" class="icon" />
          </button>
        </div>
        <img class="card-header-image" :src="data.temp_photo" />
      </div>
      <div class="card-body">
        <NuxtLink
          class="card-header-title"
          :to="encodedLink(`/product/${$asxox.asxox_encode(data.id)}`)"
        >
          {{ data.name }}</NuxtLink
        >
        <div class="product-price">
          <span class="text-orange-600">$</span>
          <span class="text-orange-600">{{ data.sell_price }}</span>
        </div>
      </div>
    </div>
  </div>
  <div
    :class="
      'group ' +
      (isAdsProduct ? 'ads-product' : 'product-card-container-wrapper ')
    "
    v-else
  >
    <div
      class="
        transition-[translate]
        product-card-container
        group-hover:shadow-slate-300
        group-hover:-translate-y-[0.05rem]
        group-hover:shadow-md
        relative
        overflow-hidden
      "
    >
      <!-- NOTE: Later feature -->
      <!-- <div
        class="absolute z-40 w-full text-center text-white rotate-45 bg-orange-600 top-6 p-1 -right-[35%] md:-right-[30%] text-sm md:text-base"
      >
        Discount
      </div> -->
      <div class="card-header">
        <div class="card-header-buttons">
          <button
            class="w-10 h-10 bg-white rounded-full"
            @click="addToWishList(data.product.id, data.product.is_wishlist)"
          >
            <font-awesome-icon
              v-if="!isInWishlist"
              :icon="['far', 'heart']"
              class="icon"
            />
            <font-awesome-icon
              v-if="isInWishlist"
              :icon="['fas', 'heart']"
              class="icon active"
            />
          </button>
          <button
            class="w-10 h-10 bg-white rounded-full"
            @click="
              data.product.is_varient ? null : addProductToCart(data.product)
            "
            v-if="!data.product.is_varient"
          >
            <font-awesome-icon :icon="['fas', 'shopping-cart']" class="icon" />
          </button>
          <button
            class="w-10 h-10 bg-white rounded-full"
            @click="
              $router.push(`/product/${$asxox.asxox_encode(data.product.id)}`)
            "
          >
            <font-awesome-icon :icon="['fas', 'eye']" class="icon" />
          </button>
        </div>
        <img class="card-header-image" :src="data.wishlist_product_photo" />
      </div>
      <div class="card-body">
        <NuxtLink
          class="card-header-title"
          :to="encodedLink(`/product/${$asxox.asxox_encode(data.product.id)}`)"
        >
          {{ data.product.name }}</NuxtLink
        >
        <div class="product-price">
          <span class="text-orange-600">$</span>
          <span class="text-orange-600">{{ data.product.sell_price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { generalMixins } from "@/mixins/general";
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  mixins: [generalMixins],
  props: {
    data: Object,
    isAdsProduct: Boolean,
    isInWishlist: Boolean,
    categoryIndex: Number,
    productIndex: Number,
    isWishListProduct: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(["wishListProductList"]),
  },
  methods: {
    ...mapMutations(["SET_CATEGORY_PRODUCT_FAVOURITE"]),
    ...mapActions(["getWishListProducts", "addProductToCart"]),

    //NOTE: add and remove product from wishlist
    async addToWishList(product_id, is_wishlist) {
      if (!this.checkAuthenticated("redirect")) return true;
      let res;
      if (!is_wishlist) {
        res = await this.generalPostApis("/wishlists", { product_id });
      } else {
        // NOTE: get wishlist id by filtering product id
        let wishlistProductId = null;
        this.wishListProductList.map((wishlist) => {
          wishlist.product.id === product_id
            ? (wishlistProductId = wishlist.wishlist_id)
            : null;
        });

        res = await this.generalDeleteApis(`/wishlists/${wishlistProductId}`);
      }
      if (res?.data?.status || res?.status === "success") {
        this.toast(res?.data?.message || res?.message, "success");
        this.SET_CATEGORY_PRODUCT_FAVOURITE({
          categoryIndex: this.categoryIndex,
          productIndex: this.productIndex,
        });
        this.getWishListProducts();
      } else {
        this.toast(res?.data?.message || res?.message, "error");
      }
    },

    encodedLink(data) {
      return data;
    },
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

.product-card-container .card-body {
  @apply h-40 flex flex-col justify-between;
}
.product-card-container .card-body .card-header-title {
  @apply text-sm  line-clamp-2 mt-2 hover:underline hover:underline-offset-2 h-10 font-comfortaa font-bold;
}

.product-card-container .product-description {
  @apply text-sm font-semibold line-clamp-4 mt-2 text-slate-500 h-20 font-quicksand;
}

.icon {
  @apply text-slate-500 hover:text-slate-700;
}

.icon.active {
  @apply text-red-500;
}
</style>
