<template>
  <div class="points-container">
    <div class="points-detail-container">
      <div class="points-item">
        <h2>My Points</h2>
        <p>
          You have <span class="points">{{ points }}</span> points.
        </p>
      </div>
      <div class="points-item">
        <h2>My Points</h2>
        <p>
          You have <span class="points">{{ points }}</span> points.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "ProfileLayout",

  data() {
    return {
      points: 0,
    };
  },
};
</script>

<style lang="postcss" scoped>
.points-container {
  @apply flex w-full bg-slate-100 lg:p-4 p-1 rounded-lg flex-col;
}

.points-detail-container {
  @apply flex  items-center gap-2;
}

.points-item {
  @apply bg-slate-100 w-1/2 font-quicksand font-bold text-center p-4 py-6 border-2 border-slate-300 rounded-md;
}
</style>
