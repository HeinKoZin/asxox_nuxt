<template>
  <div class="shop-product-card-container-wrapper">
    <div class="shop-product-card-container" ref="productContainer">
      <div class="shop-product-card-image-container">
        <img
          :src="product.temp_photo"
          alt=""
          srcset=""
          :ref="id + 'image'"
          class="shop-product-card-image"
          crossorigin="anonymous"
        />
      </div>
      <div class="product-details-container">
        <h1>{{ product.name + "." }}</h1>
        <p>{{ product.sell_price + " " + product.currency }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ColorThief from "colorthief";

export default {
  props: {
    product: {
      type: Object,
    },
  },

  data() {
    return {
      bgColor: "",
      id: this._uid,
    };
  },

  computed: {
    backgroundColor() {
      return `bg-[${this.bgColor}]`;
    },
  },

  methods: {
    //  get hex color from rgb
    getHexColor(r, g, b) {
      return (
        "#" +
        ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1) +
        "88"
      );
    },

    async getPalette() {
      if (process.browser) {
        const colorThief = new ColorThief();
        const img = this.$refs[this.id + "image"];
        // Make sure image is finished loading
        this.$nextTick(() => {
          if (img.complete) {
            console.log("success");
          } else {
            img.addEventListener("load", () => {
              const color = colorThief.getColor(img);
              this.bgColor = this.getHexColor(color[0], color[1], color[2]);
              this.$refs.productContainer.style.backgroundColor = this.bgColor;
            });
          }
        });
      }
    },
  },

  mounted() {
    this.getPalette();
  },
};
</script>

<style lang="postcss" scoped>
.shop-product-card-container-wrapper {
  @apply p-1 min-w-[100%] max-w-[100%] md:min-w-[33.33%] md:max-w-[33.33%] h-auto;
}

.shop-product-card-container {
  @apply flex text-slate-100 rounded-xl shadow-sm flex-col justify-center items-center;
}

.shop-product-card-image-container {
  @apply h-auto w-full;
}

.shop-product-card-image {
  @apply object-cover w-full h-full rounded-t-xl;
}

.product-details-container {
  @apply flex flex-col  flex-grow items-center justify-center gap-3 pl-2;
}

.product-details-container h1 {
  @apply md:text-base font-bold text-black w-full text-center mt-2 mb-0 pb-0;
}

.product-details-container p {
  @apply text-sm md:text-base font-bold font-quicksand py-2 mb-3 mt-0 px-4 bg-black rounded-lg text-white text-center;
}
</style>
