<template>
  <div class="user-setting-container-wrapper">
    <div class="user-setting-container">
      <div class="user-setting">
        <div class="w-full">
          <div class="user-profile-img">
            <img src="https://picsum.photos/150" alt="Profile Photo" />
            <button class="image-upload-btn">
              <font-awesome-icon :icon="['fas', 'camera']" />
            </button>
          </div>
        </div>
        <div class="user-setting-input-group">
          <div class="user-setting-input">
            <label>Name</label>
            <input type="text" placeholder="Name" />
          </div>
          <div class="user-setting-input">
            <label>Email</label>
            <input type="text" placeholder="Name" />
          </div>
          <div class="user-setting-input">
            <label>Phone</label>
            <input type="text" placeholder="Name" />
          </div>
          <div class="user-setting-input">
            <label for="">Gender</label>
            <fieldset name="gender">
              <input type="radio" id="male" name="gender" value="male" />
              <label for="male">Male</label><br />
              <input type="radio" id="female" name="gender" value="female" />
              <label for="female">Female</label><br />
              <input type="radio" id="other" name="gender" value="other" />
              <label for="other">Other</label>
            </fieldset>
          </div>
          <div class="user-setting-input">
            <label>Password</label>
            <input type="text" placeholder="Password" />
          </div>
          <div class="user-setting-input">
            <label>Password</label>
            <input type="text" placeholder="Password" />
          </div>
        </div>
      </div>

      <div class="user-address-container">
        <CustomerAddressCard isInProfile />
      </div>
      <div class="user-setting-actions">
        <button class="save-btn">Save</button>
        <button class="cancel-btn">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.user-setting-container-wrapper {
  @apply w-full h-full flex p-4;
}

.user-setting-container {
  @apply flex md:flex-row flex-col gap-y-6  rounded-lg w-full flex-wrap;
}

.user-profile-img {
  @apply w-36 h-36 rounded-full relative overflow-hidden;
}

.user-profile-img img {
  @apply w-36 h-36 rounded-full;
}

.image-upload-btn {
  @apply absolute bottom-0 right-0 w-full p-2 bg-slate-800 text-white bg-opacity-40 cursor-pointer;
}

.user-setting {
  @apply flex flex-col gap-y-6 md:w-[40%] w-full md:pr-4 font-quicksand;
}

.user-setting-input {
  @apply flex items-center w-full p-2 px-3;
}

.user-setting-input label {
  @apply text-slate-900 text-base font-bold w-1/4;
}

.user-setting-input input[type="text"] {
  @apply p-2 rounded-lg bg-slate-100 border border-slate-300 w-3/4;
}

.user-setting-input fieldset label {
  @apply p-2 rounded-lg bg-slate-100 font-semibold text-sm text-slate-700;
}

.user-setting-input-group {
  @apply flex flex-col flex-wrap gap-y-1 w-full;
}

.user-address-container {
  @apply md:w-[60%] w-full;
}

.user-setting-actions {
  @apply flex gap-x-2 px-3 mt-10 text-sm w-full;
}

.save-btn {
  @apply bg-blue-500 text-white p-2 px-4 rounded-lg;
}

.cancel-btn {
  @apply bg-red-500 text-white p-2 px-4 rounded-lg;
}
</style>
