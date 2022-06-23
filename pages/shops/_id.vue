<template>
  <div class="w-full">
    <div class="my-4 rounded-lg shadow-md">
      <div class="w-full aspect-[8/2] relative">
        <img
          src="https://asxox-development-space.nyc3.digitaloceanspaces.com/upload/2021/05/07/seeder/ads/constantads/07-05-2021_Asxox_46094b883ed0742.23638690.jpg"
          alt=""
          class="w-full h-full object-cover absolute rounded-t-lg"
        />
      </div>
      <div class="bg-white rounded-b-lg px-10 h-44">
        <div class="flex relative -top-[4rem] gap-10">
          <div
            class="w-24 h-24 relative border-white shadow-md border-4 rounded-full"
          >
            <img
              src="https://asxox-production-space.nyc3.digitaloceanspaces.com/seeder/assets/logo/asxox.jpeg"
              alt=""
              class="absolute w-full h-full object-cover rounded-full"
            />
          </div>
          <div class="flex flex-col flex-grow">
            <h5
              class="text-xl font-bold bg-orange-500 shadow-md px-4 py-2 rounded-md text-white max-w-fit"
            >
              Asxox
            </h5>
            <div class="star-container">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <span class="text-slate-700 font-bold">(99+)</span>
            </div>
            <div class="mt-3">
              <p class="text-slate-600 flex gap-2 items-center">
                <i class="fa-solid fa-location-dot"></i>
                <span>
                  845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark
                </span>
              </p>
            </div>
            <div class="mt-2">
              <p class="text-slate-600 flex gap-2 items-center">
                <i class="fa-solid fa-phone"></i>
                <span> (613) 343-9004 </span>
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-between">
            <div
              class="flex gap-3 text-2xl bg-white p-3 rounded-full shadow-md"
            >
              <i class="fa-brands fa-facebook text-blue-500"></i>
              <i class="fa-brands fa-instagram text-pink-500"></i>
              <i class="fa-brands fa-youtube text-red-500"></i>
              <i class="fa-brands fa-twitter text-blue-400"></i>
            </div>
            <button
              class="border-2 border-orange-500 bg-transparent p-3 font-bold text-orange-500 rounded-md"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "MainLayout",
};
</script>

<style lang="postcss" scoped>
.star-container {
  @apply mt-10 flex items-center text-yellow-500 gap-1;
}
</style>
