<template>
  <div class="job-card">
    <div class="header_title">
      <h1 class="text-lg font-semibold text-center text-white">
        Job Form (အလုပ်လျှောက်ရန်)
      </h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-4 md:p-6">
      <div class="flex justify-center border-r border-b pb-2">
        <div class="user-profile-img">
          <img :src="profileImage" alt="Profile Photo" />
          <button class="image-upload-btn" @click="$refs.profile.click()">
            <i class="fa-solid fa-camera"></i>
            <input
              type="file"
              ref="profile"
              @change="(e) => upload(e)"
              v-show="false"
            />
          </button>
        </div>
      </div>
      <div>
        <div class="flex flex-col gap-4">
          <div>
            <label class="block">
              <span
                class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
              >
                (အမည်) <b>Full Name</b>
              </span>
              <input
                type="text"
                v-model="jobData.fullName"
                class="job-input border"
              />
            </label>
          </div>
          <div>
            <label class="block">
              <span
                class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
              >
                (အီးမေးလ်) <b>Email</b>
              </span>
              <input
                type="email"
                v-model="jobData.email"
                class="job-input border"
              />
            </label>
          </div>
          <div>
            <label class="block">
              <span
                class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
              >
                (ဖုန်းနံပါတ်) <b>Phone</b>
              </span>
              <input
                type="text"
                v-model="jobData.phone"
                class="job-input border"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-4 md:p-6">
      <div>
        <label class="block">
          <span
            class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
          >
            (တိုင်း/ပြည်နယ်) <b>State</b>
          </span>
          <v-select multiple v-model="jobData.state"></v-select>
        </label>
      </div>
      <div>
        <label class="block">
          <span
            class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
          >
            (မြို့) <b>City</b>
          </span>
          <v-select multiple v-model="jobData.city"></v-select>
        </label>
      </div>
      <div class="col-start-1 col-end-3">
        <label class="block">
          <span
            class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
          >
            (လိပ်စာအပြည့်အစုံ)<b>Address</b>
          </span>
          <textarea class="job-input border" v-model="jobData.address" />
        </label>
      </div>
      <div>
        <label class="block">
          <span
            class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
          >
            (ဌာန) <b>Department</b>
          </span>
          <v-select multiple v-model="jobData.department"></v-select>
        </label>
      </div>
      <div>
        <label class="block">
          <span
            class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
          >
            (ရာထူး) <b>Position</b>
          </span>
          <v-select multiple v-model="jobData.position"></v-select>
        </label>
      </div>
      <div>
        <label class="block">
          <span
            class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
          >
            (မျှော်မှန်းလစာ) <b>Expected Salary</b>
          </span>
          <input
            type="text"
            class="job-input border"
            v-model="jobData.expertedSalary"
          />
        </label>
      </div>
      <div>
        <label class="block">
          <span
            class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
          >
            <b>Facebook</b>
          </span>
          <input
            type="text"
            class="job-input border"
            v-model="jobData.facebook"
          />
        </label>
      </div>
      <div>
        <label class="block">
          <span
            class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
          >
            <b>Skill*</b>
          </span>
          <input type="text" class="job-input border" v-model="jobData.skill" />
        </label>
      </div>
    </div>
    <!-- [Work History] start -->
    <div class="header_title">
      <h1 class="text-lg font-semibold text-white text-center">
        Working History (လုပ်ငန်းအတွေ့ကြုံ)
      </h1>
    </div>
    <!-- <div class="flex justify-end">
      <span class="add-work-btn" @click="addWork()"><i class="fa-solid fa-plus"></i> Add</span>
    </div> -->
    <hr />
    <div v-for="i in workingEpCount" :key="i">
      <div class="flex justify-between">
        <div>
          <h1 class="m-4 md:mx-6">
            Work Experience <span v-if="i != 1">{{ i }}</span>
          </h1>
        </div>
        <div>
          <button
            class="border m-1 px-2 py-1 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 cursor-pointer"
            @click="addWork()"
          >
            <i class="fa-solid fa-plus"></i>
          </button>
          <button
            class="border m-1 px-2 py-1 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 cursor-pointer"
            @click="reduceWork(i)"
            v-if="i != 1"
          >
            <i class="fa-solid fa-minus"></i>
          </button>
        </div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-4 md:p-6 border-b"
      >
        <div>
          <label class="block">
            <span
              class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
            >
              (ရာထူး) <b>Position</b>
            </span>
            <input
              type="text"
              v-model="jobData.workExp.workPosition"
              class="job-input border"
            />
          </label>
        </div>
        <div>
          <label class="block">
            <span
              class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
            >
              (ကုမ္ပဏီနာမည်) <b>Company Name</b>
            </span>
            <input
              type="text"
              v-model="jobData.workExp.companyName"
              class="job-input border"
            />
          </label>
        </div>
        <div>
          <label class="block">
            <span
              class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
            >
              <b>Start Date</b>
            </span>
            <date-picker
              format="YYYY-MM-DD"
              type="date"
              placeholder="Select date"
              class="w-full"
              v-model="jobData.workExp.startDate"
            ></date-picker>
          </label>
        </div>
        <div>
          <label class="block">
            <span
              class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
            >
              <b>End Date</b>
            </span>
            <date-picker
              format="YYYY-MM-DD"
              type="date"
              placeholder="Select date"
              class="w-full"
              v-model="jobData.workExp.endDate"
            ></date-picker>
          </label>
        </div>
        <div class="col-start-1 col-end-3">
          <label class="block">
            <span
              class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
            >
              <b>Job Description</b>
            </span>
            <textarea
              class="job-input border"
              v-model="jobData.workExp.endDate"
            />
          </label>
        </div>
      </div>
    </div>
    <!-- [Work History] end -->

    <!-- [Education] start -->
    <div class="header_title">
      <h1 class="text-lg font-semibold text-white text-center">
        Education (ပညာအရည်ချင်း)
      </h1>
    </div>
    <div class="grid grid-cols-2 gap-2 md:gap-4 p-4 md:p-6">
      <div>
        <label class="block">
          <span
            class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
          >
            <b>Degree/ Diploma or Certificate</b>
          </span>
          <input
            type="text"
            class="job-input border"
            v-model="jobData.education.certificate"
          />
        </label>
      </div>
      <div>
        <label class="block">
          <span
            class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
          >
            (ကျောင်း) <b>School</b>
          </span>
          <input
            type="text"
            class="job-input border"
            v-model="jobData.education.school"
          />
        </label>
      </div>
      <div>
        <label class="block">
          <span
            class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
          >
            <b>Start Date</b>
          </span>
          <date-picker
            v-model="jobData.education.schoolStartDate"
            format="YYYY-MM-DD"
            type="date"
            placeholder="Select date"
            class="w-full"
          ></date-picker>
        </label>
      </div>
      <div>
        <label class="block">
          <span
            class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
          >
            <b>End Date</b>
          </span>
          <date-picker
            v-model="jobData.education.schoolEndDate"
            format="YYYY-MM-DD"
            type="date"
            placeholder="Select date"
            class="w-full"
          ></date-picker>
        </label>
      </div>
      <div class="col-start-1 col-end-3">
        <label class="block">
          <span
            class="after:content-['*:'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-1"
          >
            <b>Note</b>
          </span>
          <textarea class="job-input border" v-model="jobData.education.note" />
        </label>
      </div>
    </div>
    <!-- [Education] start -->
  </div>
</template>

<script>
import "vue-select/dist/vue-select.css";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  components: { DatePicker },
  name: "JobDetail",
  data() {
    return {
      jobData: {
        fullName: null,
        email: null,
        phone: null,
        state: null,
        city: null,
        address: null,
        department: null,
        expertedSalary: null,
        position: null,
        facebook: null,
        skill: null,
        workExp: {
          workPosition: null,
          companyName: null,
          startDate: null,
          endDate: null,
          jobDescription: null,
        },
        education: {
          certificate: null,
          school: null,
          schoolStartDate: null,
          schoolEndDate: null,
          note: null,
        },
      },
      value: null,
      profilePhoto: null,
      profilePreview: null,
      workingEpCount: 1,
    };
  },
  computed: {
    profileImage() {
      if (!this.profilePreview && !this.profilePhoto)
        return require("~/assets/img/default-avatar.png");
      return this.profilePreview || this.profilePhoto;
    },
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
    upload(e) {
      this.profilePreview = URL.createObjectURL(e.target.files[0]);
      this.profilePhoto = e.target.files[0];
    },

    addWork() {
      this.workingEpCount++;
    },
    reduceWork(i) {
      this.workingEpCount--;
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
  @apply bg-blue-500 text-white p-1 rounded;
}

.job-body p {
  @apply p-2 text-sm;
}

.job-footer {
  @apply py-2;
}

.job-input {
  @apply mt-1 px-3 py-1 shadow-sm bg-white border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1;
}

.user-profile-img {
  @apply w-36 h-36 rounded-full relative overflow-hidden;
}

.user-profile-img img {
  @apply w-36 h-36 rounded-full object-cover;
}

.image-upload-btn {
  @apply absolute bottom-0 right-0 w-full p-2 bg-slate-800 text-base md:text-lg text-white bg-opacity-50 cursor-pointer;
}

.add-work-btn {
  @apply border m-1 p-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 cursor-pointer;
}
</style>
