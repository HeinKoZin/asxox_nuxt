<template>
  <div :class="'input-container ' + (type === 'checkbox' ? 'checkbox' : '')">
    <label for="input-1">{{ label }}</label>
    <input
      :type="inputType"
      id="input-1"
      class="input-field"
      :class="{ 'input-error': error }"
      :placeholder="'Enter ' + label + ' here'"
      v-model="data[field]"
    />
    <button v-if="showButton" @click="handlePassword">Show</button>
    <span class="input-error-message">{{ error }}</span>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: { Button },
  props: [
    "data",
    "field",
    "type",
    "placeholder",
    "value",
    "label",
    "error",
    "onInput",
    "onFocus",
    "onBlur",
  ],
  data() {
    return {
      //
      inputType: this.type,
    };
  },

  computed: {
    showButton() {
      return this.type === "password" ? true : false;
    },
  },

  methods: {
    //
    handlePassword() {
      this.inputType =
        this.inputType === "password"
          ? "text"
          : this.inputType === "text"
          ? "password"
          : "password";
    },
  },
};
</script>

<style lang="postcss" scoped>
.input-container {
  @apply bg-white p-3 border border-gray-300 rounded-lg flex flex-col justify-start mb-2;
}

.input-container.checkbox {
  @apply border-0 flex-row-reverse items-center justify-end px-0;
}

.input-container label {
  @apply p-2 py-0 text-gray-600 font-sans mb-1 font-semibold;
}

.input-container input {
  @apply p-2  border-b-2 border-gray-300 focus:outline-none focus:border-gray-600;
}

.input-container.checkbox input {
  @apply w-4 md:w-5 h-4 md:h-5 rounded-lg;
}
</style>
