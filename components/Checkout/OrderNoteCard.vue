<template>
  <div class="order-note-container-wrapper">
    <div class="order-note-container">
      <div class="order-note-title">
        <span>
          <i class="fa-solid fa-note-sticky icon"></i>
        </span>
        <span>Order Note</span>
      </div>
      <textarea
        class="order-note"
        placeholder="Note here..."
        @input="orderNoteChange($event)"
      ></textarea>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["SET_ORDER"]),
    orderNoteChange(e) {
      this.SET_ORDER({ type: "order_note", data: e.target.value });
    },
  },
};
</script>

<style lang="postcss" scoped>
.order-note-container-wrapper {
  @apply w-full p-1 font-quicksand order-4 md:order-none;
}
.order-note-container {
  @apply w-full flex flex-col gap-y-2 border border-slate-300 p-5 md:p-10 rounded-lg;
}

.order-note-container textarea {
  @apply w-full h-64  outline-none min-h-[16rem] placeholder:text-slate-700 border border-slate-300 p-2 rounded-lg;
}

.order-note-container .order-note-title {
  @apply text-slate-800 text-base md:text-lg font-bold font-quicksand  py-2 flex gap-x-2;
}
</style>
