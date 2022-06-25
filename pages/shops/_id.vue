<template>
  <div class="w-full p-2">
    <div class="xs:mt-0 xl:my-4 shadow-md">
      <div class="w-full aspect-[8/4] lg:aspect-[8/2] relative">
        <img
          src="https://asxox-development-space.nyc3.digitaloceanspaces.com/upload/2021/05/07/seeder/ads/constantads/07-05-2021_Asxox_46094b883ed0742.23638690.jpg"
          alt=""
          class="w-full h-full object-cover absolute"
        />
      </div>
      <div class="bg-white rounded-b-lg px-5 2xl:px-10 h-auto">
        <div
          class="flex flex-col lg:flex-row relative -top-[3rem] xl:-top-[4rem] gap-10"
        >
          <div
            class="h-20 w-20 xl:w-24 xl:h-24 relative border-white shadow-md border-4 rounded-full"
          >
            <img
              src="https://asxox-production-space.nyc3.digitaloceanspaces.com/seeder/assets/logo/asxox.jpeg"
              alt=""
              class="absolute w-full h-full object-cover rounded-full"
            />
          </div>
          <div class="flex flex-grow">
            <div class="flex flex-col flex-grow">
              <h5
                class="text-xl font-bold px-2 py-1 xl:px-4 xl:py-2 bg-orange-500 text-white max-w-fit"
              >
                Asxox
              </h5>
              <div class="star-container text-sm 2xl:text-base">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span class="text-slate-700 font-bold">(99+)</span>
              </div>
              <div class="mt-3">
                <p
                  class="text-slate-600 flex gap-2 items-center text-sm 2xl:text-base"
                >
                  <i class="fa-solid fa-location-dot"></i>
                  <span>
                    845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark
                  </span>
                </p>
              </div>
              <div class="mt-2">
                <p
                  class="text-slate-600 flex gap-2 items-center text-sm 2xl:text-base"
                >
                  <i class="fa-solid fa-phone"></i>
                  <span> (613) 343-9004 </span>
                </p>
              </div>
            </div>
            <div class="flex flex-col justify-between">
              <div
                class="flex gap-3 text-xl xl:text-2xl bg-white p-3 rounded-full shadow-md"
              >
                <i class="fa-brands fa-facebook text-blue-500"></i>
                <i class="fa-brands fa-instagram text-pink-500"></i>
                <i class="fa-brands fa-youtube text-red-500"></i>
                <i class="fa-brands fa-twitter text-blue-400"></i>
              </div>
              <button
                class="border-2 border-orange-500 bg-transparent p-2 2xl:p-3 font-bold text-orange-500 rounded-md text-sm 2xl:text-base"
              >
                Contact
              </button>
            </div>
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
