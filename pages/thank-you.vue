<template>
  <div class="model-box-content-wrapper">
    <div class="model-box-content max-w-lg">
      <img src="~/assets/img/thankspp.png" alt="" />
      <div class="w-full text-center">
        Order တင်ခြင်း ‌အောင်မြင်ပါသည်... <br />
        အားပေးမှု အတွက် ကျေးဇူးတင်ရှိပါသည်..<br />
        လူကြီးမင်း ဝယ်ထားသော ကုန်ပစ္စည်းများကို မကြာခင် ပို့ဆောင်ပေးပါမည်။
      </div>
      <div class="model-action-buttons">
        <!-- <button><i class="fa-solid fa-house"></i> Go to home</button> -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.model-box-content-wrapper {
  @apply w-full h-full absolute flex justify-center items-center;
}
.model-box-content {
  @apply font-quicksand text-sm md:text-base flex flex-col lg:text-lg py-2 gap-3;
}

.model-box-content img {
  /* @apply w-40 md:w-80  lg:w-[400px] h-auto mx-auto; */
  @apply w-full h-auto mx-auto;
}

.model-box-content div {
  @apply text-slate-900 font-bold  text-sm md:text-xl lg:text-xl tracking-widest leading-7 lg:leading-10;
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
