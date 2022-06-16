<template>
  <div class="job-card">
    <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
      <div class="job">
        <div class="job-header">
          <h1>Customer Service (M/F) | 2 Posts</h1>
          <p><span>Part Time</span> | Asxox Myanmar | Yangon | Hlaing Tar Yar</p>
        </div>
        <hr>
        <div class="job-body">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero facere a, perspiciatis delectus natus ipsam dolorum blanditiis obcaecati.</p>
        </div>
        <hr>
        <div class="job-footer">
          <div class="grid grid-cols-2 gap-2">
            <div>
              <p>12.6.2022</p>
            </div>
            <div class="flex justify-end">
              <button class="learn-more"
              @click="$router.push('/job/jobdetail').catch(() => {})">
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span class="button-text">Apply Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="job">
        <div class="job-header">
          <h1>IT (M/F) | 2 Posts</h1>
          <p><span>Part Time</span> | Asxox Myanmar | Yangon | Hlaing Tar Yar</p>
        </div>
        <hr>
        <div class="job-body">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero facere a, perspiciatis delectus natus ipsam dolorum blanditiis obcaecati.</p>
        </div>
        <hr>
        <div class="job-footer">
          <div class="grid grid-cols-2 gap-2 content-center">
            <div>
              <p>12.6.2022</p>
            </div>
            <div class="flex justify-end">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span class="button-text">Apply Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="job">
        <div class="job-header">
          <h1>UI/UX Designer (M/F) | 2 Posts</h1>
          <p><span>Part Time</span> | Asxox Myanmar | Yangon | Hlaing Tar Yar</p>
        </div>
        <hr>
        <div class="job-body">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero facere a, perspiciatis delectus natus ipsam dolorum blanditiis obcaecati.</p>
        </div>
        <hr>
        <div class="job-footer">
          <div class="grid grid-cols-2 gap-2 content-center">
            <div>
              <p>12.6.2022</p>
            </div>
            <div class="flex justify-end">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span class="button-text">Apply Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="job">
        <div class="job-header">
          <h1>HR (M/F) | 2 Posts</h1>
          <p><span>Part Time</span> | Asxox Myanmar | Yangon | Hlaing Tar Yar</p>
        </div>
        <hr>
        <div class="job-body">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero facere a, perspiciatis delectus natus ipsam dolorum blanditiis obcaecati.</p>
        </div>
        <hr>
        <div class="job-footer">
          <div class="grid grid-cols-2 gap-2 content-center">
            <div>
              <p>12.6.2022</p>
            </div>
            <div class="flex justify-end">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span class="button-text">Apply Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="job">
        <div class="job-header">
          <h1>Security (M/F) | 2 Posts</h1>
          <p><span>Part Time</span> | Asxox Myanmar | Yangon | Hlaing Tar Yar</p>
        </div>
        <hr>
        <div class="job-body">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero facere a, perspiciatis delectus natus ipsam dolorum blanditiis obcaecati.</p>
        </div>
        <hr>
        <div class="job-footer">
          <div class="grid grid-cols-2 gap-2 content-center">
            <div>
              <p>12.6.2022</p>
            </div>
            <div class="flex justify-end">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span class="button-text">Apply Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
