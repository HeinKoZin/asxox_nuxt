<template>
  <div class="product-cover-container">
    <div class="product-cover-container-wrapper">
      <div class="product-header">
        <div class="product-cover">
          <!-- NOTE: Test -->
          <div class="relative">
            <div class="product-price-and-rating">
              <div class="product-price">
                <span>$</span>
                <span
                  >{{
                    sell_price !== null
                      ? sell_price
                      : Number(product.sell_price.toFixed(1)).toLocaleString()
                  }}
                  {{ product.currency }}</span
                >
              </div>
              <span>|</span>
              <div class="product-rating">
                <span><i class="text-orange-500 fa-solid fa-star"></i></span>
                <span>4.5</span>
                <span>/5</span>
              </div>
            </div>

            <img
              class="feature-photo"
              :src="
                variantPhoto || product.feature_photos[currentImageIndex].photo
              "
            />
            <img
              v-for="(prod, index) in product.product_varients"
              :key="index"
              :src="prod.varient_photo"
              class="hidden"
            />
          </div>

          <div class="product-cover-feature-photos" v-if="isHasFeaturedPhotos">
            <div
              class="product-cover-feature-photos-wrapper"
              ref="featuredImageWrapper"
              v-on:dragscrollstart="dragStartListener"
              v-on:dragscrollend="dragEndListener"
              v-dragscroll
            >
              <div
                class="product-cover-feature-photos-item"
                v-for="(featuredImage, index) in product.feature_photos"
                :key="index"
                @click="isDrag ? null : changeImage(index)"
                :class="{ active: index === currentImageIndex }"
              >
                <img :src="featuredImage.photo" />
              </div>
            </div>
          </div>
        </div>
        <div class="product-name">
          <h2>{{ product.name }}</h2>
        </div>

        <!-- WARNING: Do not remove -->
        <!-- <div class="product-brand">
          <a href="#">Asxox</a>
        </div> -->

        <!-- WARNING: Do not remove -->
        <!-- <div class="product-price-and-rating">
          <div class="product-price">
            <span>$</span>
            <span>{{ product.sell_price }} {{ product.currency }}</span>
          </div>
          <span>|</span>
          <div class="product-rating">
            <span
              ><font-awesome-icon
                class="text-orange-500"
                :icon="['fas', 'star']"
            /></span>
            <span>4.5</span>
            <span>/5</span>
          </div>
        </div> -->
      </div>

      <!-- WARNING: Do not remove -->
      <!-- <div class="product-code">
        <p>Product code: <span>#74324545</span></p>
      </div> -->

      <!-- WARNING: Do not remove -->
      <!-- NOTE: Availability container -->
      <!-- <div class="availability-container">
        <div class="availability-label">Availability:</div>
        <div class="availability-value">In Stock</div>
      </div> -->

      <!-- WARNING: Do not remove -->
      <!-- NOTE: Categories -->
      <!-- <div class="categories-container">
        <p>Categories:</p>

        <div class="categories">
          <a href="#" v-for="(cat, index) in product.categories" :key="index">{{
            cat.name
          }}</a>
        </div>
      </div> -->

      <!-- NOTE: variants -->
      <div class="product-variants">
        <div class="product-variant" v-if="color.length > 0">
          <div class="product-variant-title">
            <span>Color:</span>
          </div>
          <fieldset class="product-variant-options">
            <label
              for="white"
              class="product-variant-option"
              :class="{ active: col.isActive }"
              v-for="(col, index) in color"
              :key="index"
              @click="selectVariant(col, 'color', index)"
              >{{ col.name }}<input type="radio"
            /></label>
          </fieldset>
        </div>

        <div class="product-variant" v-if="size.length > 0">
          <div class="product-variant-title">
            <span>Size:</span>
          </div>
          <fieldset class="product-variant-options">
            <label
              for="white"
              class="product-variant-option"
              :class="{ active: sizeChild.isActive }"
              v-for="(sizeChild, index) in size"
              :key="index"
              @click="selectVariant(sizeChild, 'size', index)"
              >{{ sizeChild.name }}<input type="radio"
            /></label>
          </fieldset>
        </div>

        <div class="product-variant" v-if="pattern.length > 0">
          <div class="product-variant-title">
            <span>Pattern</span>
          </div>
          <fieldset class="product-variant-options">
            <label
              for="white"
              class="product-variant-option"
              :class="{ active: patternChild.isActive }"
              v-for="(patternChild, index) in pattern"
              :key="index"
              @click="selectVariant(patternChild, 'pattern', index)"
              >{{ patternChild.name }}<input type="radio"
            /></label>
          </fieldset>
        </div>

        <div class="product-variant" v-if="accessories.length > 0">
          <div class="product-variant-title">
            <span>Accessories</span>
          </div>
          <fieldset class="product-variant-options">
            <label
              for="white"
              class="product-variant-option"
              :class="{ active: accessory.isActive }"
              v-for="(accessory, index) in accessories"
              :key="index"
              @click="selectVariant(accessory, 'accessories', index)"
              >{{ accessory.name }}<input type="radio"
            /></label>
          </fieldset>
        </div>
      </div>
      <!-- NOTE: Quantity -->
      <div class="product-quantity">
        <div class="product-quantity-label">Quantity :</div>
        <div class="product-quantity-value">
          <button @click="decreaseQuantity()">
            <i class="fa-solid fa-minus icon"></i>
          </button>
          <input type="number" @blur="(e)=> handleQuantity(e)" :value="quantity" />
          <button @click="increaseQuantity()">
            <i class="fa-solid fa-plus icon"></i>
          </button>
        </div>
      </div>
      <div class="footer-btn-group">
        <div class="flex gap-x-2">
          <!-- NOTE: Add to cart -->
          <button
            class="add-to-cart"
            :disabled="product.is_varient && !isVariantHas"
            @click="addToCartFinal(product)"
          >
            <span><i class="fa-solid fa-cart-plus icon"></i></span>
            <span>Add to Cart</span>
          </button>

          <button
            class="favorite"
            :class="{ active: product.is_wishlist }"
            @click="addProductToWishList"
          >
            <i class="fa-solid fa-heart icon"></i>
          </button>
        </div>
        <!-- NOTE: Buy now -->
        <button
          class="buy-now"
          :disabled="product.is_varient && !isVariantHas"
          @click="buyNow(product)"
        >
          <span
            ><span><i class="fa-solid fa-cart-plus icon"></i></span
          ></span>
          <span>Buy now</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { generalMixins } from "@/mixins/general";
export default {
  mixins: [generalMixins],
  props: {
    product: Object,
    color: Array,
    size: Array,
    accessories: Array,
    pattern: Array,
    categoryIndex: Number,
    productIndex: Number,
  },

  data() {
    return {
      variantPhoto: null,
      quantity: 1,
      currentImageIndex: 0,
      isDrag: false,
      isVariantSelect: false,
      isVariantHas: false,
      sell_price: this.product.sell_price,
      isVariantObject: {},
      selectedVariant: [],
    };
  },
  computed: {
    ...mapGetters(["wishListProductList"]),

    featurePhoto() {
      return this.product.feature_photos[0]?.photo;
    },
    isHasFeaturedPhotos() {
      if (this.product.feature_photos?.length > 1) return true;
      else return false;
    },
  },
  watch: {
    selectedVariant: {
      deep: true,
      handler() {
        this.selectVarianPhoto();
      },
    },

    quantity(val) {
      if (val < 1) this.quantity = 1;
      else if (val > this.quantity) this.quantity = this.quantity;
    },
  },

  mounted() {
    // this.product.quantity ? this.product.quantity : (this.product.quantity = 1);
  },

  methods: {
    // NOTE: Method from Vuex actions
    ...mapActions(["addProductToCart", "getWishListProducts"]),
    ...mapMutations([
      "SET_CATEGORY_PRODUCT_FAVOURITE",
      // "SET_PRODUCT_FAVOURITE",
      "SELECTED_ALL_PRODUCT_IN_CART",
    ]),

    //NOTE: add and remove product from wishlist
    async addProductToWishList() {
      let product_id = this.product.id;
      let is_wishlist = this.product.is_wishlist;
      let res;

      if (!this.checkAuthenticated("redirect")) return true;

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
        // this.SET_CATEGORY_PRODUCT_FAVOURITE({
        //   categoryIndex: this.categoryIndex,
        //   productIndex: this.productIndex,
        // });
        // this.SET_PRODUCT_FAVOURITE(product_id);
        this.getWishListProducts();
        this.product.is_wishlist = !this.product.is_wishlist;
      } else {
        this.toast(res?.data?.message || res?.message, "error");
      }
    },

    // NOTE: Select variant and if it already selected then remove it
    selectVariant(data, type, index) {
      const mainData = this[type];
      if (mainData[index].isActive) {
        const removedIndex = this.selectedVariant.findIndex(
          (variant) => variant.data === data.name
        );
        this.selectedVariant.splice(removedIndex, 1);
        this.$emit("changeIsActive", {
          type,
          index,
          data: !mainData[index].isActive,
        });
        return false;
      }
      this.$emit("changeIsActive", {
        type,
        index,
        data: !mainData[index].isActive,
      });
      const currentSelectedVariant = this.selectedVariant.filter(
        (variant) => variant.type === type
      );
      if (currentSelectedVariant.length > 0) {
        const currentSelectIndex = mainData.findIndex(
          (variant) => variant.name === currentSelectedVariant[0].data
        );
        this.$emit("changeIsActive", {
          type,
          index: currentSelectIndex,
          data: false,
        });
      }
      const isVariantSelectedIndex = this.selectedVariant.findIndex(
        (variant) => variant.type === type
      );
      if (isVariantSelectedIndex !== -1)
        this.selectedVariant.splice(isVariantSelectedIndex, 1);
      this.selectedVariant.push({ data: data.name, type });
    },

    // NOTE: Change image
    changeImage(index) {
      this.variantPhoto = null;
      this.currentImageIndex = index;
    },

    increaseQuantity() {
      this.quantity >= 100 ? this.quantity : this.quantity++;
    },

    decreaseQuantity() {
      this.quantity > 1 ? this.quantity-- : null;
    },

    addToCartFinal(product) {
      product.isSelected = true;
      product.sell_price = this.sell_price;
      product.quantity = this.quantity;
      !product.is_varient
        ? this.addProductToCart(product)
        : this.addProductToCart({
            ...product,
            ...this.isVariantObject,
          });

      //draft
      this.toast("Added product to cart", "success");
    },

    buyNow(product) {
      this.SELECTED_ALL_PRODUCT_IN_CART(false);
      product.isSelected = true;
      product.is_buy_now = true;
      !product.is_varient
        ? this.addProductToCart(product)
        : this.addProductToCart({
            ...product,
            ...this.isVariantObject,
          });
      this.$router.push("/checkout");
      this.toast("Added product to cart", "success");
    },

    // NOTE: Select variant photo it will work every changes made by user on variant
    selectVarianPhoto() {
      for (let i = 0; i < this.product.product_varients.length; i++) {
        this.isVariantHas = false;
        let variantLength = 0;
        const variant = this.product.product_varients[i];
        let currentVariantLength = this.calculateCurrentVariantLength(
          this.product.product_varients[i]
        );

        this.selectedVariant.map((selectVar) => {
          variant[selectVar.type]?.name === selectVar.data
            ? variantLength++
            : null;

          currentVariantLength === variantLength &&
          currentVariantLength === this.selectedVariant.length
            ? this.setVariantPhotoAndDataToProduct(
                variant,
                JSON.parse(JSON.stringify(this.selectedVariant))
              )
            : (this.isVariantHas = false);
        });
        if (this.isVariantHas) break;
      }
    },

    // NOTE: Set variant photo and set data to product variable
    setVariantPhotoAndDataToProduct(variant, selectedVariant) {
      this.variantPhoto = variant.varient_photo;
      this.sell_price = variant.sell_price;
      this.isVariantHas = true;
      [
        this.isVariantObject.selectedVariantId,
        this.isVariantObject.selectedVariantName,
        this.isVariantObject.selectedVariant,
        this.isVariantObject.variantPhoto,
        this.isVariantObject.variantSellPrice,
      ] = [
        variant.id,
        this.generateVariantName(),
        selectedVariant,
        variant.varient_photo,
        variant.sell_price,
      ];
      this.isVariantSelect = true;
    },

    // NOTE: it will generate variant name selected by user name
    generateVariantName() {
      let variant_name = "";
      this.selectedVariant.map((variant, index) => {
        this.selectedVariant.length === index + 1
          ? (variant_name += variant.data)
          : (variant_name += variant.data + " / ");
      });
      return variant_name;
    },

    calculateCurrentVariantLength(variant) {
      let variantLength = 0;
      variant.color ? variantLength++ : null;
      variant.size ? variantLength++ : null;
      variant.pattern ? variantLength++ : null;
      variant.accessories ? variantLength++ : null;
      return variantLength;
    },

    // NOTE: scroll with mouse wheel
    scrollWithWheel(e) {
      e.deltaY > 0
        ? (this.$refs.featuredImageWrapper.scrollLeft += 100)
        : (this.$refs.featuredImageWrapper.scrollLeft -= 100);
    },

    dragStartListener() {
      this.isDrag = true;
    },

    dragEndListener() {
      setTimeout(() => {
        this.isDrag = false;
      }, 50);
    },

    handleQuantity(e) {
      this.quantity = +e.target.value;
    },
  },
};
</script>

<style lang="postcss" scoped>
.product-cover-container {
  @apply flex w-full h-auto bg-slate-50 py-0 pb-5 md:pb-8 md:pt-8  md:py-8 flex-col border border-slate-300 rounded-lg justify-center items-center relative md:sticky md:bottom-0 md:max-h-[calc(100vh_-_4rem)] md:overflow-hidden md:overflow-y-scroll;
}

.product-cover-container::-webkit-scrollbar {
  @apply hidden;
}

.product-cover-container-wrapper {
  @apply flex flex-col items-center w-full md:w-[80%] gap-y-2;
}

.availability-container {
  @apply flex w-full gap-x-2 items-center font-quicksand flex-wrap;
}

.availability-container .availability-label {
  @apply font-semibold;
}

.availability-container .availability-value {
  @apply p-2  bg-green-600 text-white text-sm font-medium;
}

.product-header {
  @apply rounded-lg w-full flex flex-col items-center justify-center  gap-y-2;
}

.product-cover {
  @apply w-full h-auto rounded-full relative;
}

.product-cover .feature-photo {
  @apply w-full h-auto rounded-lg object-cover;
}

.product-cover .product-cover-feature-photos-wrapper {
  @apply flex mt-4 gap-x-2 overflow-hidden overflow-x-scroll;
}

.product-cover-feature-photos-wrapper::-webkit-scrollbar {
  @apply hidden;
}

.product-cover-feature-photos-wrapper .product-cover-feature-photos-item {
  @apply min-w-[25%] max-w-[25%]  h-auto   rounded-lg border-slate-500;
}

.product-cover-feature-photos-wrapper
  .product-cover-feature-photos-item.active {
  @apply border-orange-600 border-2;
}

.product-cover-feature-photos-item img {
  @apply w-full h-full object-cover rounded-md;
}

.product-name {
  @apply w-full text-center text-slate-800 font-bold text-lg font-quicksand mt-3;
}

.product-brand {
  @apply w-full text-justify text-blue-500 font-semibold text-xl  underline font-zen-kurenaido;
}

.product-price-and-rating-old {
  @apply flex  gap-x-2 text-base mt-4 font-quicksand items-center font-semibold;
}

.product-price-and-rating-old .product-price {
  @apply text-slate-50 px-4 p-2 font-semibold text-base bg-orange-500 rounded-lg;
}

/* NOTE: New */
.product-price-and-rating {
  @apply flex  gap-x-2 text-sm mt-4 font-quicksand items-center  absolute bottom-0 w-full bg-slate-900 bg-opacity-50 text-slate-100 justify-evenly p-2 rounded-b-lg;
}

.product-price-and-rating .product-price {
  @apply text-slate-50 bg-orange-600 rounded-lg p-2 px-4  font-bold  text-sm;
}

/* NOTE: Footer btn group */
.footer-btn-group {
  @apply flex flex-col gap-y-2 mt-4 w-full px-5 md:px-0;
}

.buy-now {
  @apply h-12 flex gap-x-3 bg-orange-500 text-slate-50 rounded-lg items-center flex-grow justify-center font-semibold disabled:bg-slate-500 disabled:cursor-not-allowed;
}

.favorite {
  @apply border-2 border-slate-500 text-slate-500 text-xl md:text-2xl h-12 w-12 rounded-lg;
}

.favorite.active {
  @apply border-red-600 text-red-500;
}

.add-to-cart {
  @apply h-12 flex gap-x-3 bg-slate-200 text-slate-800 rounded-lg text-base items-center flex-grow justify-center disabled:bg-slate-300 disabled:cursor-not-allowed;
}

.footer-btn-group span {
  @apply font-bold;
}

.product-variants {
  @apply flex flex-col gap-y-2 w-full;
}

.product-variants .product-variant {
  @apply flex flex-col gap-x-2 px-5 md:px-0 text-sm;
}

.product-variant-options {
  @apply flex gap-2 flex-wrap;
}

.product-variant-option {
  @apply px-2 py-1 text-base font-quicksand bg-slate-300 cursor-pointer hover:bg-slate-200;
}

.product-variant-title {
  @apply font-quicksand font-semibold;
}

.product-variant-option.active {
  @apply bg-slate-700 text-slate-50;
}

.product-variant-option input {
  @apply hidden;
}

.product-code {
  @apply text-slate-800 font-semibold text-base font-quicksand w-full;
}

.product-code span {
  @apply font-medium;
}

.categories-container {
  @apply flex flex-col gap-y-2 w-full font-quicksand font-semibold;
}

.categories {
  @apply flex flex-wrap gap-2;
}

.categories a {
  @apply px-2 py-1 bg-slate-50 text-slate-800 border border-slate-300 text-sm rounded-full;
}

.product-quantity {
  @apply flex flex-col gap-y-2 w-full px-5 md:px-0;
}

.product-quantity-label {
  @apply text-base font-quicksand font-semibold;
}

.product-quantity-value {
  @apply flex w-full;
}

.product-quantity-value input {
  @apply w-full text-center p-2 focus:outline-slate-500 border border-slate-400 font-bold;
}

.product-quantity-value button {
  @apply px-4 py-1 bg-slate-300;
}
</style>
