<template>
  <div
    class="group"
    :class="[
      isAdsProduct ? 'ads-product' : 'product-card-container-wrapper ',
      isPromotionProduct
        ? 'promotion-product'
        : 'product-card-container-wrapper',
    ]"
    v-if="!isWishListProduct"
  >
    <div
      class="transition-[translate] product-card-container group-hover:shadow-slate-300 group-hover:-translate-y-[0.05rem] group-hover:shadow-md relative overflow-hidden"
    >
      <!-- NOTE: Later feature -->
      <!-- <div
        class="absolute z-40 w-full text-center text-white rotate-45 bg-orange-600 top-6 p-1 -right-[35%] md:-right-[30%] text-sm md:text-base"
      >
        Discount
      </div> -->
      <div class="card-header">
        <div
          class="card-header-buttons"
          @click.self="
            isAdsProduct
              ? ''
              : $router.push(`/product/${$asxox.asxox_encode(data.id)}`)
          "
        >
          <button @click="addToWishList(data.id, data.is_wishlist)">
            <!-- <font-awesome-icon
              v-if="!isInWishlist"
              :icon="['fas', 'heart']"
              class="icon"
              :class="product.is_wishlist ? 'active' : ''"
            /> -->
            <div v-show="data.is_wishlist">
              <i class="fa-solid fa-heart icon active"></i>
            </div>

            <div v-show="!data.is_wishlist">
              <i class="fa-solid fa-heart icon"></i>
            </div>
            <!-- <font-awesome-icon
              v-if="isInWishlist"
              :icon="['fas', 'heart']"
              class="icon"
            /> -->
          </button>
          <!-- WARNING: Temporary hidden -->
          <button @click="finalAddToCart(data)" v-if="!data.is_varient">
            <i class="fa-solid fa-cart-shopping icon"></i>
          </button>
          <button
            @click="$router.push(`/product/${$asxox.asxox_encode(data.id)}`)"
          >
            <i class="fa-solid fa-eye icon"></i>
          </button>
        </div>
        <div class="card-header-image-wrapper">
          <nuxt-img
            class="card-header-image lazyload"
            format="webp"
            loading="lazy"
            src="https://via.placeholder.com/193x245?text=Asxox"
            :data-src="
              data.temp_photo ? data.temp_photo : data.feature_photos[0].photo
            "
            @click.native="
              isAdsProduct
                ? ''
                : $router.push(`/product/${$asxox.asxox_encode(data.id)}`)
            "
            quality="50"
          />
        </div>
      </div>
      <div class="card-body">
        <NuxtLink
          class="card-header-title"
          :class="isAdsProduct ? ' pointer-events-none' : ''"
          :to="encodedLink(`/product/${$asxox.asxox_encode(data.id)}`)"
        >
          {{ data.name }}</NuxtLink
        >
        <div class="product-price">
          <span class="text-orange-600">{{
            priceFormat(data.sell_price)
          }}</span>
          <span class="text-orange-600">{{ data.currency }}</span>
        </div>
      </div>
    </div>
  </div>
  <div
    class="group"
    :class="[
      isAdsProduct ? 'ads-product' : 'product-card-container-wrapper ',
      isPromotionProduct
        ? 'promotion-product'
        : 'product-card-container-wrapper',
    ]"
    v-else
  >
    <div
      class="transition-[translate] product-card-container group-hover:shadow-slate-300 group-hover:-translate-y-[0.05rem] group-hover:shadow-md relative overflow-hidden"
    >
      <!-- NOTE: Later feature -->
      <!-- <div
        class="absolute z-40 w-full text-center text-white rotate-45 bg-orange-600 top-6 p-1 -right-[35%] md:-right-[30%] text-sm md:text-base"
      >
        Discount
      </div> -->
      <div class="card-header">
        <div
          class="card-header-buttons"
          @click.self="
            isAdsProduct
              ? ''
              : $router.push(`/product/${$asxox.asxox_encode(data.product.id)}`)
          "
        >
          <button
            @click="addToWishList(data.product.id, data.product.is_wishlist)"
          >
            <div>
              <i class="fa-solid fa-heart icon active"></i>
            </div>
          </button>
          <!-- WARNING: Temporary hidden -->
          <button
            @click="finalAddToCart(data.product)"
            v-if="!data.product.is_varient"
          >
            <i class="fa-solid fa-cart-shopping icon"></i>
          </button>
          <button
            @click="
              $router.push(`/product/${$asxox.asxox_encode(data.product.id)}`)
            "
          >
            <i class="fa-solid fa-eye icon"></i>
          </button>
          {{ data.product.wishlist_product_photo }}
        </div>

        <div class="card-header-image-wrapper">
          <nuxt-img
            class="card-header-image lazyload"
            src="https://via.placeholder.com/500?text=Asxox"
            :data-src="data.wishlist_product_photo"
            @click="
              isAdsProduct
                ? ''
                : $router.push(
                    `/product/${$asxox.asxox_encode(data.product.id)}`
                  )
            "
            v-if="data.wishlist_product_photo"
            quality="10"
            format="webp"
            loading="lazy"
          />
          <nuxt-img
            v-else
            quality="10"
            format="webp"
            loading="lazy"
            src="https://via.placeholder.com/500?text=Asxox"
          />
        </div>
      </div>
      <div class="card-body">
        <NuxtLink
          class="card-header-title"
          :to="encodedLink(`/product/${$asxox.asxox_encode(data.product.id)}`)"
        >
          {{ data.product.name }}</NuxtLink
        >
        <div class="product-price">
          <span class="text-orange-600">{{
            priceFormat(data.product.sell_price)
          }}</span>
          <span class="text-orange-600">{{ data.product.currency }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { generalMixins } from "@/mixins/general";
import aosMixin from "@/mixins/aos";
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  mixins: [generalMixins, aosMixin],
  props: {
    data: Object,
    isAdsProduct: Boolean,
    isPromotionProduct: Boolean,
    isInWishlist: Boolean,
    categoryIndex: Number,
    productIndex: Number,
    wishListIndex: Number,
    isWishListProduct: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      product: {},
    };
  },
  computed: {
    ...mapGetters(["wishListProductList"]),
  },
  methods: {
    ...mapMutations(["REMOVE_WISHLISH_PRODUCTS"]),
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
        if (!this.isWishListProduct) {
          this.data = JSON.parse(JSON.stringify(this.data));
          this.data.is_wishlist = !is_wishlist;
        } else {
          this.$emit("removeWishlist", this.wishListIndex);
        }
        this.getWishListProducts();
      } else {
        this.toast(res?.data?.message || res?.message, "error");
      }
    },
    encodedLink(data) {
      return data;
    },
    priceFormat(x) {
      var d = parseInt(x);
      return d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    finalAddToCart(product) {
      this.product = product;
      this.product.quantity = 1;
      this.addProductToCart(this.product);
      this.toast("Added to cart", "success");
    },
  },
};
</script>

<style lang="postcss" scoped>
.product-card-container-wrapper {
  @apply h-auto;
}

.ads-product {
  @apply min-w-[60%] max-w-[60%] md:min-w-[33.33%] md:max-w-[33.33%] xl:min-w-[20%] xl:max-w-[20%] h-auto p-1 text-slate-800;
}

.promotion-product {
  @apply h-auto p-1 text-slate-800;
}

.product-card-container {
  @apply p-0   bg-white;
}

.card-header {
  @apply relative;
}

.card-header .card-header-buttons {
  @apply absolute top-0 right-0 w-full h-full z-30  rounded-b-none bg-opacity-0 bg-slate-900 hidden gap-x-2 justify-center items-center md:group-hover:flex md:group-hover:bg-opacity-50 md:group-hover:animate-fadeIn;
}

.card-header-image-wrapper {
  @apply w-full overflow-hidden  rounded-b-none;
}

.card-header .card-header-image {
  @apply w-full h-auto object-cover  rounded-b-none   group-hover:scale-110 transition-transform;
}

.product-card-container .product-price {
  @apply text-base xl:text-lg font-semibold mt-2;
}

.product-card-container .card-body {
  @apply flex-grow flex flex-col justify-between p-3;
}
.product-card-container .card-body .card-header-title {
  @apply text-sm  line-clamp-2 mt-2 hover:underline hover:underline-offset-2 h-10 font-comfortaa text-slate-700;
}

.promotion-product .product-card-container .product-price {
  @apply text-sm;
}

.ads-product .product-card-container .product-price {
  @apply text-sm;
}

.product-card-container .product-description {
  @apply text-sm font-semibold line-clamp-4 mt-2 text-slate-500 h-20 font-quicksand;
}

.icon {
  @apply text-slate-500 hover:text-slate-700 text-base;
}

.ads-product .icon {
  @apply text-slate-500 hover:text-slate-700 text-sm;
}

.promotion-product .icon {
  @apply text-slate-500 hover:text-slate-700 text-xs;
}

.promotion-product .card-header-buttons button {
  @apply w-7 h-7 lg:w-8 lg:h-8 bg-white rounded-full;
}

.card-header-buttons button {
  @apply w-9 h-9 lg:w-10 lg:h-10 bg-white rounded-full;
}

.ads-product .card-header-buttons button {
  @apply w-9 h-8 lg:w-9 lg:h-9 bg-white rounded-full;
}

.icon.active {
  @apply text-red-500;
}
</style>
