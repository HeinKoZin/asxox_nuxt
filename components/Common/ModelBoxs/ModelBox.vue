<template>
  <div class="model-box-container-wrapper animate-fadeIn" v-if="isModel">
    <div
      class="model-box-container"
      :class="isLoader ? 'loader' : ''"
      v-click-outside="closeModel"
    >
      <div class="model-box-icon">
        <i class="fa-solid fa-check" v-if="!isLoader"></i>
        <i class="fa-solid fa-circle-notch animate-spin" v-if="isLoader"></i>
      </div>
      <div class="model-box-content">
        <h3 class="w-full text-center">
          {{ content ? content : "Loading..." }}
        </h3>
        <div class="model-action-buttons">
          <!-- <button><i class="fa-solid fa-house"></i> Go to home</button> -->
          <slot></slot>
        </div>
      </div>

      <!-- NOTE: close model -->
      <div class="model-box-close-btn" @click="closeModel">
        <i class="fa-solid fa-times"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  props: {
    isLoader: {
      type: Boolean,
      default: false,
      required: false,
    },
    content: {
      type: String,
      required: false,
    },
  },
  computed: {
    ...mapGetters(["isModel"]),
  },
  methods: {
    ...mapMutations(["SET_MODEL"]),
    closeModel() {
      this.SET_MODEL(!this.isModel);
      this.$router.push("/");
    },
  },
};
</script>

<style lang="postcss" scoped>
.model-box-container-wrapper {
  @apply w-full h-full flex justify-center items-center fixed top-0 left-0 z-50 bg-slate-900 bg-opacity-10;
}

.model-box-container {
  @apply p-6 px-10  flex flex-col items-center justify-center bg-slate-50  text-white rounded-lg border border-slate-300 gap-3 min-w-[300px] relative;
}

.model-box-container.loader {
  @apply border-0;
}

.model-box-content {
  @apply font-quicksand text-sm md:text-base flex flex-col lg:text-lg py-2 gap-3;
}

.model-box-content h3 {
  @apply text-slate-900 font-bold;
}

.model-box-icon {
  @apply text-lg md:text-xl lg:text-2xl text-slate-50 rounded-full flex justify-center items-center h-16 w-16 bg-orange-500;
}

.model-action-buttons {
  @apply flex  items-center justify-center gap-2 mt-5;
}

.model-action-buttons button {
  @apply flex-grow p-2 px-4 rounded-lg bg-orange-500 text-slate-50 hover:text-white text-base;
}

.model-box-close-btn {
  @apply bg-red-500 text-slate-50 hover:text-white text-base absolute -top-1 -right-1 w-6 h-6 flex justify-center items-center rounded-full shadow-sm;
}
</style>
