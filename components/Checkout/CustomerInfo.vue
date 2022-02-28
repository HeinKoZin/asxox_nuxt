<template>
  <div class="customer-info-container">
    <div class="customer-data-container">
      <div class="customer-data-title">
        <span>Customer Info</span>
      </div>
      <div class="customer-data-content">
        <div class="customer-data-item">
          <span>Name :</span>
          <span>{{ $auth.user.data.name }}</span>
        </div>
        <div class="customer-data-item" v-if="$auth.user.data.phone">
          <span>Phone :</span>
          <span>{{ $auth.user.data.phone }}</span>
        </div>
        <div class="customer-data-item" v-if="$auth.user.data.email">
          <span>Email :</span>
          <span>{{ $auth.user.data.email }}</span>
        </div>
      </div>
    </div>

    <div class="address-container">
      <div class="address-title">
        <div>
          <span
            ><font-awesome-icon class="icon" :icon="['fas', 'heart']"
          /></span>
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
};
</script>

<style lang="postcss" scoped>
.customer-info-container {
  @apply w-3/4 flex flex-col gap-y-2;
}

.header {
  @apply text-slate-800 text-xl font-bold font-quicksand border border-slate-300 p-2 rounded-lg;
}

.order-note-container {
  @apply w-full flex flex-col gap-y-2  border border-slate-300 p-2 rounded-lg;
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
  @apply text-slate-800 text-xl font-bold font-quicksand border-b border-slate-300 py-2;
}

.address-container {
  @apply w-full flex flex-col gap-y-2  border border-slate-300 p-10 rounded-lg;
}

.address-container .address-title {
  @apply text-slate-800 text-xl flex justify-between font-bold font-quicksand border-b border-slate-300 py-2 items-center;
}

.address-contents-container {
  @apply flex flex-col gap-y-2;
}

.address-title button {
  @apply text-base font-bold font-quicksand border bg-orange-500 text-slate-50 rounded-lg border-slate-300 p-2 px-4;
}
</style>
