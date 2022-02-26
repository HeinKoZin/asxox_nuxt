<template>
  <div class="customer-info-container">
    <div class="customer-data-container">
      <div class="customer-data-title">
        <div class="flex gap-x-2">
          <span>
            <font-awesome-icon class="shopping-icon" :icon="['fas', 'user']" />
          </span>
          <span>Customer Info</span>
        </div>
        <div>
          <button>
            <font-awesome-icon class="icon" :icon="['fas', 'edit']" />
            Edit
          </button>
        </div>
      </div>
      <div class="customer-data-content">
        <div class="customer-data-item">
          <span>Name:</span>
          <span>Hein</span>
        </div>
        <div class="customer-data-item">
          <span>Phone:</span>
          <span>09950668891</span>
        </div>
      </div>
    </div>

    <div class="address-container">
      <div class="address-title">
        <div class="flex gap-x-2">
          <span>
            <font-awesome-icon
              class="shopping-icon"
              :icon="['fas', 'map-marker-alt']"
            />
          </span>
          <span>Shipping Address</span>
        </div>
        <div>
          <button>
            <font-awesome-icon class="icon" :icon="['fas', 'plus']" />
            Add address
          </button>
        </div>
      </div>
      <div class="address-contents-container">
        <fieldset id="address">
          <AddressContentItem />
          <AddressContentItem />
        </fieldset>
      </div>
    </div>

    <div class="order-note-container">
      <div class="order-note-title">Order Note</div>
      <textarea class="order-note" placeholder="Note here..."></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="postcss" scoped>
.customer-info-container {
  @apply w-[70%] flex flex-col gap-y-2;
}

.header {
  @apply text-slate-800 text-xl font-bold font-quicksand border border-slate-300 p-2 rounded-lg;
}

.order-note-container {
  @apply w-full flex flex-col gap-y-2  border border-slate-300 p-10 rounded-lg;
}

.order-note-container textarea {
  @apply w-full h-64 border-none outline-none min-h-[16rem];
}

.order-note-container .order-note-title {
  @apply text-slate-800 text-xl font-bold font-quicksand border-b border-slate-300 py-2;
}

.customer-data-container {
  @apply w-full flex flex-col gap-y-2 border border-slate-300  p-10 rounded-lg;
}

.customer-data-title {
  @apply text-slate-800 text-lg flex justify-between font-bold font-quicksand border-b border-slate-300 py-2 items-center;
}

.address-container {
  @apply w-full flex flex-col gap-y-2  border border-slate-300 p-10 rounded-lg;
}

.address-container .address-title {
  @apply text-slate-800 text-lg flex justify-between font-bold font-quicksand border-b border-slate-300 py-2 items-center;
}

.address-contents-container {
  @apply flex flex-col gap-y-2;
}

button {
  @apply text-base font-bold font-quicksand border bg-slate-600 active:bg-slate-700 text-slate-50 rounded-lg border-slate-300 p-2 px-4 flex items-center gap-x-2;
}

.shopping-icon {
  @apply text-xl;
}
</style>
