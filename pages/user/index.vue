<template>
  <div class="user-index-container">
    <div class="profile-layout-container">
      <div class="profile-layout-container-wrapper">
        <div class="user-cover-container">
          <div class="user-profile-avatar">
            <img src="https://picsum.photos/150" alt="Avatar" />
          </div>
        </div>

        <div class="user-profile-info-container">
          <div class="user-profile-name">
            <h2>Hein Ko Zin</h2>
          </div>

          <div class="user-profile-card-container">
            <div class="user-profile-card">
              <h2>Point Amount</h2>
              <div class="card-details">
                <span>0</span>
                <span>-</span>
                <span>Points</span>
              </div>
            </div>
            <div class="user-profile-card">
              <h2>Total Orders</h2>
              <div class="card-details">
                <span>0</span>
                <span>-</span>
                <span>Orders</span>
              </div>
            </div>
            <div class="user-profile-card">
              <h2>Total Purchases</h2>
              <div class="card-details">
                <span>0</span>
                <span>-</span>
                <span>Purchases</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <RecommendedProducts />
  </div>
</template>

<script>
export default {
  layout: "ProfileLayout",
};
</script>

<style lang="postcss" scoped>
.user-index-container {
  @apply flex flex-col gap-y-4 w-[82%];
}

.profile-layout-container {
  @apply flex gap-x-2 w-full bg-slate-100 p-5 rounded-lg float-right h-auto;
}

.profile-layout-container-wrapper {
  @apply w-full  flex flex-col;
}

.user-cover-container {
  @apply flex items-end h-64 w-full bg-slate-600 px-4 rounded-lg mb-12;
}

.user-profile-avatar {
  @apply relative top-12 md:left-5 mx-auto md:mx-0;
}

.user-profile-avatar img {
  @apply rounded-full;
}

.user-profile-info-container {
  @apply w-full p-4;
}

.user-profile-name {
  @apply text-2xl font-bold p-5 font-quicksand border-b border-slate-400 w-full;
}

.user-profile-card-container {
  @apply flex gap-2  w-full pt-4;
}

.user-profile-card {
  @apply bg-slate-200 border border-slate-300 p-10 rounded-lg flex flex-grow flex-col gap-y-4;
}

.user-profile-card h2 {
  @apply text-lg font-bold  text-slate-800  font-quicksand  w-full;
}

.user-profile-card h5 {
  @apply text-lg font-semibold text-center  font-quicksand text-slate-700 w-full;
}

.user-profile-card .card-details {
  @apply font-quicksand flex-col;
}

.user-profile-card .card-details span {
  @apply first:text-slate-700 first:text-lg font-semibold p-1 font-quicksand text-slate-800 last:text-slate-500;
}

.recommended-products-container {
  @apply flex gap-y-4 w-full;
}
</style>
