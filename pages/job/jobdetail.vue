<template>

  <div class="job-container">
    <div class="job-body">
      <JobDetail />
    </div>
  </div>

</template>

<script>
export default {
  layout: "MainLayout",
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
.job-container {
  @apply  my-4 lg:mx-40 sm:mx-2;
}

.job-body {
  @apply w-full bg-white rounded-lg;
}
.header_title {
  @apply bg-orange-500 p-4;
}
</style>
