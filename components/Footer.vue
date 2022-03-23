<template>
  <div class="footer-container">
    <div class="flex flex-wrap justify-center w-full sm:items-center">
      <div class="footer-item">
        <div class="w-32">
          <img
            class="footer-img"
            src="https://asxox.com.mm/assets/photo/logo/prize.svg"
          />
        </div>
        <div class="description">
          <h3>Quantity and Saving</h3>
          <p>Comprehensive quality control and affordable prices</p>
        </div>
      </div>
      <div class="footer-item">
        <div class="w-32">
          <img
            class="footer-img"
            src="https://asxox.com.mm/assets/photo/logo/home.svg"
          />
        </div>
        <div class="description">
          <h3>Local Warehouse</h3>
          <p>37 overseas warehouses</p>
        </div>
      </div>
      <div class="footer-item">
        <div class="w-32">
          <img
            class="footer-img"
            src="https://asxox.com.mm/assets/photo/logo/car.svg"
          />
        </div>
        <div class="description">
          <h3>Fast and convenient logistics</h3>
          <p>Fast and convenient door to door delivery</p>
        </div>
      </div>
      <div class="footer-item">
        <div class="w-32">
          <img
            class="footer-img"
            src="https://asxox.com.mm/assets/photo/logo/$%20ed.svg"
          />
        </div>
        <div class="description">
          <h3>Payment Security</h3>
          <p>More than 40 different secure payment methods</p>
        </div>
      </div>
      <div class="footer-item">
        <div class="w-32">
          <img
            class="footer-img"
            src="https://asxox.com.mm/assets/photo/logo/microphone.svg"
          />
        </div>
        <div class="description">
          <h3>Professional service</h3>
          <p>24/7 Customer Service</p>
        </div>
      </div>
    </div>
    <div class="flex w-full px-10 mt-10 md:px-20">
      <div class="flex justify-between w-full border-t border-slate-400">
        <!-- Copyright -->
        <div class="w-full py-3 text-center footer-copyright">
          © 2020 Copyright:
          <a href="https://asxox.com.mm"> asxox.com.mm</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.footer-container {
  @apply flex flex-wrap w-full  items-center justify-center  h-auto  bg-slate-50 py-5 md:py-16;
}

.footer-item {
  @apply w-[50%]  sm:w-[33.33%] lg:w-[20%]  flex flex-col items-center   h-auto text-center;
}
.footer-item .description {
  @apply max-w-[60%] h-auto text-center;
}

.footer-item .description h3 {
  @apply text-base md:text-lg font-bold font-zen-kurenaido;
}

.footer-item .description p {
  @apply text-xs md:text-base text-slate-500;
}

.footer-item .footer-img {
  @apply w-12 h-auto mx-auto;
}
</style>
