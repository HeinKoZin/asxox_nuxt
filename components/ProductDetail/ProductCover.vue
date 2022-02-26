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
                <span>15,000 MMK</span>
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
            </div>

            <img
              class="feature-photo"
              :src="featuredImages[currentImageIndex].photo"
            />
          </div>

          <div
            class="product-cover-feature-photos"
            v-if="featuredImages.length > 1"
          >
            <div
              class="product-cover-feature-photos-wrapper"
              ref="featuredImageWrapper"
              v-on:dragscrollstart="dragStartListener"
              v-on:dragscrollend="dragEndListener"
              v-dragscroll
            >
              <div
                class="product-cover-feature-photos-item"
                v-for="(featuredImage, index) in featuredImages"
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
          <h3>Folding Saw</h3>
        </div>

        <!-- WARNING: Do not remove -->
        <!-- <div class="product-brand">
          <a href="#">Asxox</a>
        </div> -->

        <!-- WARNING: Do not remove -->
        <!-- <div class="product-price-and-rating">
          <div class="product-price">
            <span>$</span>
            <span>15,000 MMK</span>
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
          <a href="#">Fancy</a>
          <a href="#">Fancy</a>
          <a href="#">Fancy</a>
          <a href="#">Fancy</a>
        </div>
      </div> -->

      <!-- NOTE: variants -->
      <div class="product-variants">
        <div class="product-variant">
          <div class="product-variant-title">
            <span>Color:</span>
          </div>
          <fieldset class="product-variant-options" id="color">
            <label for="white" class="product-variant-option"
              >White<input type="radio" name="color" id="white"
            /></label>
            <label for="red" class="product-variant-option active"
              >Red<input type="radio" name="color" id="red"
            /></label>
            <label for="blue" class="product-variant-option"
              >Blue<input type="radio" name="color" id="blue"
            /></label>
          </fieldset>
        </div>

        <div class="product-variant">
          <div class="product-variant-title">
            <span>Size:</span>
          </div>
          <fieldset class="product-variant-options" id="size">
            <label for="white" class="product-variant-option"
              >Small<input type="radio" name="size" id="small"
            /></label>
            <label for="red" class="product-variant-option"
              >Medium<input type="radio" name="size" id="medium"
            /></label>
            <label for="blue" class="product-variant-option active"
              >Large<input type="radio" name="size" id="large"
            /></label>
          </fieldset>
        </div>

        <div class="product-variant">
          <div class="product-variant-title">
            <span>Pattern</span>
          </div>
          <fieldset class="product-variant-options" id="size">
            <label for="white" class="product-variant-option"
              >Pattern A<input type="radio" name="size" id="small"
            /></label>
            <label for="red" class="product-variant-option"
              >Pattern B<input type="radio" name="size" id="medium"
            /></label>
            <label for="blue" class="product-variant-option active"
              >Pattern C<input type="radio" name="size" id="large"
            /></label>
          </fieldset>
        </div>

        <div class="product-variant">
          <div class="product-variant-title">
            <span>Accessories</span>
          </div>
          <fieldset class="product-variant-options" id="size">
            <label for="white" class="product-variant-option"
              >Accessories A<input type="radio" name="size" id="small"
            /></label>
            <label for="red" class="product-variant-option"
              >Accessories B<input type="radio" name="size" id="medium"
            /></label>
            <label for="blue" class="product-variant-option active"
              >Accessories C<input type="radio" name="size" id="large"
            /></label>
          </fieldset>
        </div>
      </div>

      <!-- NOTE: Quantity -->
      <div class="product-quantity">
        <div class="product-quantity-label">Quantity:</div>
        <div class="product-quantity-value">
          <button @click="decreaseQuantity()">
            <font-awesome-icon class="icon" :icon="['fas', 'minus']" />
          </button>
          <input type="number" :value="quantity" />
          <button @click="increaseQuantity()">
            <font-awesome-icon class="icon" :icon="['fas', 'plus']" />
          </button>
        </div>
      </div>

      <div class="footer-btn-group">
        <div class="flex gap-x-2">
          <!-- NOTE: Add to cart -->
          <button class="add-to-cart" disabled>
            <span
              ><font-awesome-icon class="icon" :icon="['fas', 'cart-plus']"
            /></span>
            <span>Add to Cart</span>
          </button>
          <!-- NOTE: Favorite -->
          <button class="favorite">
            <font-awesome-icon class="icon" :icon="['fas', 'heart']" />
          </button>
        </div>

        <!-- NOTE: Buy now -->
        <button class="buy-now" disabled>
          <span
            ><font-awesome-icon class="icon" :icon="['fas', 'cart-plus']"
          /></span>
          <span>Buy now</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Common/Button.vue";
export default {
  components: { Button },

  data() {
    return {
      quantity: 1,
      currentImageIndex: 0,
      isDrag: false,

      featuredImages: [
        {
          photo:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/02/10/products/feature/10-02-2022_Asxox_46204e7319bf317.66596257.jpg",
        },
        {
          photo:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/02/16/products/feature/16-02-2022_Asxox_4620c81928ca3d5.46644212.jpg",
        },
        {
          photo:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/02/10/products/feature/10-02-2022_Asxox_46204e7319bf317.66596257.jpg",
        },
        {
          photo:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/02/10/products/feature/10-02-2022_Asxox_46204e7319bf317.66596257.jpg",
        },
      ],
    };
  },

  methods: {
    // NOTE: Change image
    changeImage(index) {
      this.currentImageIndex = index;
    },

    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },

    // NOTE: scroll with mouse wheel
    scrollWithWheel(e) {
      if (e.deltaY > 0) {
        this.$refs.featuredImageWrapper.scrollLeft += 100;
      } else {
        this.$refs.featuredImageWrapper.scrollLeft -= 100;
      }
    },

    dragStartListener() {
      this.isDrag = true;
    },

    dragEndListener() {
      setTimeout(() => {
        this.isDrag = false;
      }, 50);
    },
  },
};
</script>

<style lang="postcss" scoped>
.product-cover-container {
  @apply flex w-full h-auto bg-slate-50  py-8 flex-col border border-slate-300 rounded-lg justify-center items-center relative md:sticky md:bottom-0;
}

.product-cover-container-wrapper {
  @apply flex flex-col items-center w-[80%] gap-y-2;
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
  @apply w-full text-center text-slate-800 font-bold text-xl font-quicksand;
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
  @apply flex  gap-x-2 text-base mt-4 font-quicksand items-center  absolute bottom-0 w-full bg-slate-900 bg-opacity-50 text-slate-100 justify-evenly p-2 rounded-b-lg;
}

.product-price-and-rating .product-price {
  @apply text-slate-50 bg-orange-600 rounded-lg p-2 px-4  font-bold  text-base;
}

/* NOTE: Footer btn group */
.footer-btn-group {
  @apply flex flex-col gap-y-2 mt-4 w-full;
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
  @apply flex flex-col gap-x-2;
}

.product-variant-options {
  @apply flex gap-2 flex-wrap;
}

.product-variant-option {
  @apply px-2 py-1 text-base font-quicksand bg-slate-300 cursor-pointer hover:bg-slate-200;
}

.product-variant-title {
  @apply text-base font-quicksand font-semibold;
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
  @apply flex flex-col gap-y-2 w-full;
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
