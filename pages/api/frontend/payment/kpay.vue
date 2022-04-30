<template>
  <div>
    <h2>Kpay Point successfull page</h2>
    <button @click="$router.push('/')">To home page</button>
  </div>
</template>
<script>
export default {
  methods: {
    async updateUserData() {
      try {
        const res = await this.$auth.fetchUser();
        this.$auth.setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    },
    async pointBuy() {
      try {
        if (process.browser) {
          let orderId = window.localStorage.getItem("orderId");
          orderId = orderId.toString();
          const realOrderId = orderId.substr(3);
          const amount = window.localStorage.getItem("pointAmount");
          if (this.$route.query.merch_order_id == orderId) {
            const res = this.$axios.post(
              `/point_buy?amount=${amount}&status=success&point_order_id=${realOrderId}`
            );
          }
          window.localStorage.removeItem("orderId");
          window.localStorage.removeItem("pointAmount");
          this.updateUserData();
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.pointBuy();
    console.log("helo");
  },
};
</script>
