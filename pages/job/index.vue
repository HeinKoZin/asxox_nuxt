<template>

  <div class="job-container">
    <div class="job-body">
      <Job />
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
      title: `Asxox | Job`,
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
  @apply w-full p-0 md:p-5 bg-white rounded-lg mt-4;
}
</style>
