<template>
  <div class="job-card">
    <div class="header_title">
      <h1 class="text-lg font-semibold text-center text-white">Job Form (အလုပ်လျှောက်ရန်)</h1>
    </div>
    <div class="grid grid-cols-2 gap-4 p-4">
      <div class="col-start-1 col-end-3 justify-center items-center">
        <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
             ဓာတ်ပုံ <b>Profile Image</b>
            </span>
            <input type="file" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
        </label>
      </div>
      <div>
        <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              အမည် <b>Full Name</b>
            </span>
            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
        </label>
      </div>
      <div>
        <label class="block">
          <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
            အီးမေးလ် <b>Email</b>
          </span>
          <input type="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
        </label>
      </div>
      <div>
        <label class="block">
          <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
           ဌာန <b>Department</b>
          </span>
          <v-select class="mt-1 bg-white shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" multiple ></v-select>
        </label>
      </div>
      <div>
        <label class="block">
          <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
           ရာထူး <b>Position</b>
          </span>
          <v-select class="mt-1 bg-white shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" multiple></v-select>
        </label>
      </div>
      <div>
        <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              ဖုန်းနံပါတ် <b>Phone</b>
            </span>
            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
          </label>
      </div>
      <div>
        <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
               <b>Facebook</b>
            </span>
            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
        </label>
      </div>
      <div>
        <label class="block">
          <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
           တိုင်း/ပြည်နယ် <b>State</b>
          </span>
          <v-select class="mt-1 bg-white shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" multiple></v-select>
        </label>
      </div>
      <div>
        <label class="block">
          <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
           မြို့ <b>City</b>
          </span>
          <v-select class="mt-1 bg-white shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" multiple></v-select>
        </label>
      </div>
      <div class="col-start-1 col-end-3">
        <label class="block">
          <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
            <b>Address</b>
          </span>
          <textarea class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
        </label>
      </div>
      <div>
        <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              မျှော်မှန်းလစာ <b>Expected Salary</b>
            </span>
            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
          </label>
      </div>
      <div>
        <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
               <b>Skill*</b>
            </span>
            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
          </label>
      </div>
    </div>
    <div class="header_title">
      <h1 class="text-lg font-semibold text-white">Working History (လုပ်ငန်းအတွေ့ကြုံ)</h1>
    </div>
    <div class="grid grid-cols-2 gap-4 p-4">
      <div>
        <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              ရာထူး <b>Position</b>
            </span>
            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
        </label>
      </div>
      <div>
        <label class="block">
            <span class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1">
              ကုမ္ပဏီနာမည် <b>Company Name</b>
            </span>
            <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-select/dist/vue-select.css';
import { generalMixins } from "@/mixins/general";
export default {
  mixins: [generalMixins],
  data() {
    return {
      isSpin: false,
    };
  },
  methods: {
    linkIsActive(link) {
      const paths = Array.isArray(link) ? link : [link];
      const res = paths.some((path) => this.$route.path === path);
      if (res) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="postcss" scoped>

.job {
  @apply border rounded-sm shadow-md;
}

.header_title {
  @apply bg-orange-500 p-4;
}

.job-header {
  @apply border-l-4 border-orange-500 py-3;
}

.job-header h1 {
  @apply text-slate-600 font-semibold text-lg p-2;
}

.job-header p {
  @apply px-2 text-sm;
}

.job-header span {
  @apply bg-blue-500 text-white p-1 rounded
}

.job-body p{
  @apply p-2 text-sm;
}

.job-footer {
  @apply py-2
}

button {
 position: relative;
 display: inline-block;
 cursor: pointer;
 outline: none;
 border: 0;
 vertical-align: middle;
 text-decoration: none;
 background: transparent;
 padding: 0;
}

button.learn-more {
 width: 11rem;
 height: auto;
}

button.learn-more .circle {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: relative;
 display: block;
 margin: 0;
 width: 2rem;
 height: 2rem;
 background: rgb(249 115 22);
 border-radius: 1.625rem;
}

button.learn-more .circle .icon {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: absolute;
 top: 0;
 bottom: 0;
 margin: auto;
 background: #fff;
}

button.learn-more .circle .icon.arrow {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 left: 0.625rem;
 height: 0.13rem;
 background: none;
}

button.learn-more .circle .icon.arrow::before {
 position: absolute;
 content: "";
 top: -0.33rem;
 width: 0.628rem;
 height: 0.628rem;
 border-top: 0.125rem solid #fff;
 border-right: 0.125rem solid #fff;
 transform: rotate(45deg);
}

button.learn-more .button-text {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 padding: 0.23rem 0;
 color: rgb(249 115 22);
 font-weight: 600;
 text-align: center;
 text-transform: uppercase;
}

button:hover .circle {
 width: 100%;
}

button:hover .circle .icon.arrow {
 background: #fff;
 transform: translate(1rem, 0);
}

button:hover .button-text {
 color: #fff;
}
</style>
