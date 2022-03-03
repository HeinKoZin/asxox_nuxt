<template>
  <div class="address-container-wrapper">
    <div class="address-container">
      <div class="address-title">
        <div class="flex gap-x-2">
          <span>
            <font-awesome-icon
              class="shopping-icon"
              :icon="['fas', 'map-marker-alt']"
            />
          </span>
          <span>Address</span>
        </div>
      </div>
      <div class="body">
        <div class="input-group">
          <label for="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div class="input-group">
          <label for="phone">Phone</label>
          <input type="text" id="phone" />
        </div>
        <div class="input-group">
          <label for="address">Address</label>
          <input type="text" id="address" />
        </div>
        <div class="flex w-full gap-x-2">
          <div class="input-group">
            <label for="city">City</label>
            <select id="city">
              <option value="">Select</option>
              <option value="1">City 1</option>
              <option value="2">City 2</option>
            </select>
          </div>
          <div class="input-group">
            <label for="state">State</label>
            <select id="state">
              <option value="">Select</option>
              <option value="1">State 1</option>
              <option value="2">State 2</option>
            </select>
          </div>
        </div>

        <div class="modal-actions">
          <button class="save" @click="$emit('closeModal')">Save</button>
          <button class="cancel" @click="$emit('closeModal')">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.address-container-wrapper {
  @apply w-full flex justify-center items-center font-quicksand fixed h-screen top-0 left-0 z-50 bg-slate-900 bg-opacity-30;
}

.address-container {
  @apply max-w-md flex flex-col gap-y-2 border border-slate-300 p-5 md:p-10 rounded-lg justify-center bg-opacity-100 bg-slate-50;
}

.address-title {
  @apply text-slate-800 text-base md:text-lg flex justify-between font-bold font-quicksand border-b border-slate-300 py-2 items-center;
}

.body {
  @apply flex-col md:flex-row flex flex-wrap gap-y-1 md:gap-y-2 w-full;
}

.input-group {
  @apply flex w-full flex-col gap-x-2 justify-between flex-grow;
}

.input-group label {
  @apply text-sm md:text-base font-semibold font-quicksand p-1;
}

.input-group input,
select,
option {
  @apply border  border-slate-300 p-2 flex items-center gap-x-2 rounded-lg;
}

.modal-actions {
  @apply flex justify-end gap-x-2 mt-4;
}

.modal-actions button {
  @apply text-sm md:text-base font-semibold font-quicksand bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-slate-50 rounded-lg  p-2 px-4 flex items-center gap-x-2;
}
</style>
