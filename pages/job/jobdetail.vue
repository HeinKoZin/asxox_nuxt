<template>

  <div class="job-container">
    <div class="job-body">
      <JobDetail />
    </div>
  </div>

</template>

<script>
import { generalMixins } from "@/mixins/general";
export default {
  layout: "MainLayout",
  mixins: [generalMixins],
  name: "JobPage",
  head() {
    return {
      title: `Asxox | JobDetail`,
    };
  },

  data() {
    return {
      isLoading: true,
    };
  },


};
</script>

<style lang="postcss" scoped>
.job-body {
  @apply w-full bg-white rounded-lg mt-4;
}
.header_title {
  @apply bg-orange-500 p-4;
}
</style>
