<template>
  <div class="shop-product-card-container-wrapper">
    <div class="shop-product-card-container" ref="productContainer">
      <div class="shop-product-card-image-container">
        <img
          :src="product.temp_photo"
          alt=""
          srcset=""
          ref="productCover"
          class="shop-product-card-image"
          crossorigin="anonymous"
        />
      </div>
      <div class="product-details-container">
        <h3>{{ product.name + "." + palette }}</h3>
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
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },

    async getPalette() {
      // run on server

      if (process.server) {
        const colorThief = new ColorThief();
        // const img = document.querySelector("img");

        // Make sure image is finished loading
        if (img.complete) {
          const color = colorThief.getColor(this.product.temp_photo);
          this.bgColor = this.getHexColor(color[0], color[1], color[2]);
          // apply this color to ref productCover
          this.$refs.productContainer.style.backgroundColor = this.bgColor;
        } else {
          image.addEventListener("load", function () {
            const color = colorThief.getColor(this.product.temp_photo);
            this.bgColor = this.getHexColor(color[0], color[1], color[2]);
            this.$refs.productContainer.style.backgroundColor = this.bgColor;
          });
        }
        // const img =
        //   "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/04/26/products/feature/26-04-2022_Asxox_46267b31ccebee2.51432099.jpg";
        // colorThief
        //   .getColor(img)
        //   .then((color) => {
        //     console.log(color);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });

        // colorThief
        //   .getPalette(img, 5)
        //   .then((palette) => {
        //     console.log(palette);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
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

.product-details-container h3 {
  @apply text-sm md:text-base font-bold font-quicksand text-orange-500 w-full text-center;
}

.product-details-container p {
  @apply text-sm md:text-base font-bold font-quicksand py-2 px-4 bg-orange-500 text-white text-center;
}
</style>
