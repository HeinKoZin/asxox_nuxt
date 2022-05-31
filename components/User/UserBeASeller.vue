<template>
  <div class="wrapper">
    <div class="flex flex-col ... p-5 gap-5">
      <!-- Job Information -->
      <div class="header_title">
        <h2 class="text-white">လုပ်ငန်းဆိုင်ရာ အချက်အလက်များ</h2>
      </div>
      <div>
        <div class="columns-2 ...">
          <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              အမည် (လုပ်ငန်းအမည်) <b>Business Name</b>
            </span>
            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
          </label>
          <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              ရောင်းလိုသည့် ပစ္စည်းများ <b>Products to Sell</b>
            </span>
            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
          </label>
        </div>
      </div>
      <div>
        <div class="columns-2 ...">
          <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              လုပ်ငန်း <b>Phone Number</b>
            </span>
            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
          </label>
          <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              လုပ်ငန်း <b>Email</b>
            </span>
            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
          </label>
        </div>
      </div>
      <div>
        <div class="columns-2 ...">
          <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              လုပ်ငန်းစတင်သည့်ခုနှစ် <b>Company Registration Date</b>
            </span>
            <input type="date" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
          </label>
          <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              လုပ်ငန်း Company <b>Registration No</b>
            </span>
            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
          </label>
        </div>
      </div>
      <div>
        <div class="columns-2 ...">
          <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              <b>Facebook Page Link</b>
            </span>
            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
          </label>
          <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              <b>Website Link</b>
            </span>
            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
          </label>
        </div>
      </div>
      <div>
        <label class="block">
          <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
            <b>Address</b>
          </span>
          <textarea class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
        </label>
      </div>
      <!-- Personal Information -->
      <div class=" header_title">
        <h2 class="text-white">လူပုဂ္ဂိုလ်(ပိုင်ရှင်) ဆိုင်ရာ အချက်အလက်များ</h2>
      </div>
      <div>
        <div class="columns-2 ...">
          <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              လုပ်ငန်း <b>Phone Number</b>
            </span>
            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
          </label>
          <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              လုပ်ငန်း <b>Email</b>
            </span>
            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
          </label>
        </div>
      </div>
      <div>
        <label class="block">
          <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
            <b>Address</b>
          </span>
          <textarea class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
        </label>
      </div>
      <!-- Register -->
      <div class="header_title">
        <h2 class="text-white">အကောင့်ဖွင့်ရန် အချက်အလက်များ</h2>
      </div>
      <div>
        <label class="block">
          <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
            <b>Email</b>
          </span>
          <input type="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
        </label>
      </div>
      <div>
        <label class="block">
          <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
            <b>Password</b>
          </span>
          <input type="password" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
        </label>
      </div>
      <!-- Button -->
      <div>
          <Button
            variant="primary"
            class="user-bas"
          >
          <i class="mr-2 fa-solid fa-paper-plane icon"></i>
            Send
          </Button>
      </div>
    </div>
  </div>

</template>

<script>

</script>

<style lang="postcss" scoped>
.header_title {
  @apply bg-orange-500 p-4;
}
.user-bas {
  @apply w-32 bg-orange-500 text-white text-sm md:text-base font-bold py-3  rounded-lg font-quicksand mt-6 hover:bg-orange-600 hidden md:block;
}
.icon {
  @apply text-lg;
}
</style>
