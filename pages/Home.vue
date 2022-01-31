<template>
  <div>
    <div>{{ $auth.$storage.getLocalStorage("user") }}</div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
};
</script>