<template>
  <div :class="'input-container ' + (type === 'checkbox' ? 'checkbox' : '')">
    <label :for="label">{{ label }}</label>
    <input
      :type="inputType"
      :id="label"
      class="input-field"
      :class="type === 'password' ? 'password' : ''"
      :placeholder="'Enter ' + label + ' here'"
      v-model="data[field]"
      :disabled="disabled"
    />
    <!-- <button v-if="showButton" class="show-password-btn" @click="handlePassword">
      {{ showPassword ? "Hide" : "Show" }}
    </button> -->
    <font-awesome-icon
      @click="handlePassword"
      v-if="showButton"
      class="show-password-btn"
      :icon="['fas', showPassword ? 'eye-slash' : 'eye']"
    />
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
    "disabled",
    "required",
    "error",
    "onInput",
    "onFocus",
    "onBlur",
  ],
  data() {
    return {
      //
      showPassword: false,
      hidePassword: true,
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
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style lang="postcss" scoped>
.input-container {
  @apply bg-white p-3 border border-gray-300 rounded-lg flex flex-col justify-start mb-2 relative;
}

.input-container.checkbox {
  @apply border-0 flex-row-reverse items-center justify-end px-0;
}

.input-container label {
  @apply p-2 pl-1 py-0 text-gray-600 font-sans mb-1 font-semibold;
}

.input-container input {
  @apply p-2 pl-1  border-b-2 border-gray-300 focus:outline-none focus:border-gray-600;
}

.input-container .input-field.password {
  @apply pr-12;
}

.input-container.checkbox input {
  @apply w-4 md:w-5 h-4 md:h-5 rounded-lg mr-2;
}

.input-container.checkbox {
  @apply bg-inherit;
}

.input-container .show-password-btn {
  @apply p-2 text-gray-600 font-sans mb-1 font-semibold absolute right-2 top-10 cursor-pointer h-11 w-11;
}

.input-container .input-error-message {
  @apply text-red-600 text-sm font-sans font-semibold;
}
</style>
