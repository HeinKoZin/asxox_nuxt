<template>
  <div class="footer-container">
    <div class="footer-images-container">
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
    <div class="footer-content-container">
      <div class="footer-content-wrapper">
        <div class="footer-content-item">
          <h3>Get to know us</h3>
          <div class="content-body">
            <a href="#">About Us</a>
            <a href="#">Terms and conditions</a>
          </div>
        </div>
        <div class="footer-content-item">
          <h3>Shipping and Payment</h3>
          <div class="content-body">
            <a href="#">Payment methods</a>

            <a href="#">Shipping Guide</a>
            <a href="#">Locations We Ship To</a>
          </div>
          <h3 class="mt-2">Subscribe</h3>
          <div class="content-body">
            <div class="subscribe-container">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your email..."
              />
              <button>
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="footer-content-item">
          <h3>Follow us</h3>
          <div class="content-body">
            <a href="#">Facebook</a>
            <a href="#">TikTok</a>
            <a href="#">Youtube</a>
          </div>
        </div>
        <div class="footer-content-item">
          <h3>Download App</h3>
          <div class="content-body">
            <div class="download-app">
              <i class="fa-brands fa-google-play icon"></i>
              <div>
                <p>Download our app on</p>
                <h1>Play Store</h1>
              </div>
            </div>
            <div class="download-app">
              <i class="fa-brands fa-app-store icon"></i>
              <div>
                <p>Download our app on</p>
                <h1>App Store</h1>
              </div>
            </div>
          </div>
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
  @apply flex flex-wrap w-full  items-center justify-center  h-auto  bg-orange-500;
}

.footer-images-container {
  @apply flex flex-wrap justify-center w-full sm:items-center bg-slate-50 py-5 md:py-16;
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

.footer-content-container {
  @apply flex w-full py-10 px-10;
}

.footer-content-wrapper {
  @apply flex flex-wrap w-full;
}

.footer-content-item {
  @apply w-full lg:w-1/4 mx-auto p-5;
}

.footer-content-item h3 {
  @apply text-base md:text-lg font-bold font-quicksand text-white;
}

.footer-content-item .content-body {
  @apply flex flex-col text-sm mt-2 gap-1;
}

.footer-content-item .content-body a {
  @apply hover:underline w-fit text-slate-200;
}

.footer-content-item .content-body .subscribe-container {
  @apply relative  lg:max-w-[90%];
}

.footer-content-item .content-body .subscribe-container input {
  @apply w-full  p-4 border-0 rounded-lg focus:outline-none text-slate-900 placeholder:text-slate-700;
}

.footer-content-item .content-body .subscribe-container button {
  @apply absolute right-0 top-0 p-4 px-6 border-l-2 rounded-lg focus:outline-none text-slate-900;
}

.download-app {
  @apply flex gap-2 items-center md:text-base font-semibold my-2 font-quicksand bg-slate-50 border border-slate-800 text-slate-800 rounded-lg p-4 max-w-fit;
}

.download-app .icon {
  @apply text-lg md:text-3xl lg:text-4xl;
}

.download-app h1 {
  @apply text-base md:text-2xl font-bold font-quicksand text-slate-900;
}
</style>
