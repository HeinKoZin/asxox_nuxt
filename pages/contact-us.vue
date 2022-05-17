<template>
  <div class="contact-us-container">
    <div class="header">
      <h2>Contact Us</h2>
    </div>
    <div class="body">
      <div class="contact-us-form">
        <div class="flex gap-2">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter name"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Enter title"
          />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea class="form-control" id="message" rows="5"></textarea>
        </div>
        <button
          type="submit"
          class="max-w-fit bg-orange-500 text-white px-4 p-2 rounded-lg mt-4"
        >
          Submit
        </button>
      </div>
      <div class="info-container-wrapper">
        <div class="info-container">
          <div class="flex gap-3 items-center">
            <i class="fa-solid fa-location-dot icon"></i>
            <p>
              No(165), Tapin Shwe Htee Road, Hlaing Thar Yar Township, Yangon,
            </p>
          </div>
        </div>
        <div class="info-container">
          <div class="flex gap-3 items-center">
            <i class="fa-solid fa-phone icon"></i>
            <p>
              <a href="tel:09-966-907777">09 966 907777,</a>
              <a href="tel:09-966906666">09 966906666</a>
            </p>
          </div>
        </div>
        <div class="info-container">
          <div class="flex gap-3 items-center">
            <i class="fa-solid fa-envelope icon"></i>
            <p>
              <a href="mailto:app@asxox.com"> app@asxox.com </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full mt-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30489.03981479602!2d96.4602958!3d17.2124828!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1951a22ab3f19%3A0x4ee3872256ed81a!2sAsxox%20Online%20Shopping!5e0!3m2!1smy!2smm!4v1612967742924!5m2!1smy!2smm"
        width="100%"
        height="300"
        frameborder="0"
        style="border: 0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
        bis_size='{"x":62,"y":766,"w":1270,"h":300,"abs_x":62,"abs_y":766}'
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  layout: "MainLayout",
  data() {
    return {};
  },
};
</script>

<style lang="postcss" scoped>
.contact-us-container {
  @apply flex flex-col  w-full h-full py-2;
}

.header {
  @apply font-bold py-4 text-2xl;
}

.body {
  @apply flex flex-col md:flex-row  w-full h-full gap-2;
}

.contact-us-form {
  @apply flex flex-col  gap-2 w-full md:w-3/5 p-5 bg-white rounded-md;
}

.contact-us-form .form-group {
  @apply flex gap-2 flex-col  w-full;
}

.contact-us-form .form-group label {
  @apply font-bold w-full p-2;
}

.contact-us-form .form-group input {
  @apply w-full p-2 border border-slate-300 text-lg rounded-lg focus:outline-none;
}

.contact-us-form .form-group textarea {
  @apply w-full p-2 border border-slate-300 text-lg rounded-lg focus:outline-none;
}

.info-container {
  @apply flex flex-col  gap-2 w-full p-5 bg-white rounded-md max-h-fit;
}

.info-container .icon {
  @apply text-2xl text-blue-500;
}

.info-container p {
  @apply font-semibold text-slate-800 text-base;
}

.info-container p a {
  @apply hover:text-blue-500;
}
</style>
