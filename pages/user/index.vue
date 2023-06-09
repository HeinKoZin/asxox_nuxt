<template>
  <div class="user-index-container">
    <div class="profile-layout-container">
      <div class="profile-layout-container-wrapper">
        <div class="user-cover-container">
          <div class="user-profile-avatar">
            <img
              :src="
                userData.photo || require('~/assets/img/default-avatar.png')
              "
              alt="Avatar"
            />
          </div>
        </div>
        <div class="user-profile-info-container">
          <div class="user-profile-name">
            <h2>{{ userData.name }}</h2>
            <span> ({{ userData.point.id }}) </span>
          </div>

          <div class="user-profile-card-container">
            <div class="user-profile-card bg-orange-100">
              <h2>Point Amount</h2>
              <div class="card-details" v-if="userData.point">
                <div class="items-center flex gap-3">
                  <span>{{ userData.point.amount }}</span>
                  <span>-</span>
                  <span>Points</span>
                </div>
                <div class="max-w-fit">
                  <NuxtLink
                    to="/user/points"
                    class="bg-orange-500 text-white font-semibold px-3 py-2 rounded-sm tet-base shadow-lg hover:bg-orange-600"
                  >
                    <i class="fa-solid fa-star-half-stroke"></i>
                    Buy Point
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="user-profile-card bg-orange-100">
              <h2>Total Orders</h2>
              <div class="card-details">
                <div class="items-center flex gap-3">
                  <span>{{ orders.length }}</span>
                  <span>-</span>
                  <span>Orders</span>
                </div>
                <div class="max-w-fit">
                  <NuxtLink
                    to="/user/orders"
                    class="bg-orange-500 text-white font-semibold px-3 py-2 rounded-sm tet-base shadow-lg hover:bg-orange-600"
                    ><i class="fa-solid fa-cart-shopping"></i> Orders</NuxtLink
                  >
                </div>
              </div>
            </div>
            <div class="user-profile-card bg-orange-100">
              <h2>Total Purchases</h2>
              <div class="card-details items-center">
                <span>{{ calculatePurchasedOrder.length }}</span>
                <span>-</span>
                <span>Purchases</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <RecommendedProducts :products="recommendedProducts" />
  </div>
</template>

<script>
import { generalMixins } from "@/mixins/general";
import { mapGetters, mapActions } from "vuex";
export default {
  layout: "ProfileLayout",
  mixins: [generalMixins],
  middleware: ["auth/ifNotAuthRedirectAuth"],
  head() {
    return {
      title: `Asxox | Profile`,
    };
  },
  data() {
    return {
      userData: {},
    };
  },
  computed: {
    ...mapGetters(["orders", "recommendedProducts"]),
    calculatePurchasedOrder() {
      const copletedOrders = this.orders.filter(
        (order) => order.status === "Complete"
      );
      return copletedOrders;
    },
  },
  methods: {
    ...mapActions(["getOrders", "getRecommendedProducts"]),
  },
  async fetch() {
    this.userData = this.$auth.user.data;
    this.getOrders();
    this.getRecommendedProducts();
  },
};
</script>

<style lang="postcss" scoped>
.user-index-container {
  @apply flex flex-col gap-y-4 w-full;
}

.profile-layout-container {
  @apply flex gap-x-2 w-full bg-white shadow-sm p-5 rounded float-right h-auto;
}

.profile-layout-container-wrapper {
  @apply w-full  flex flex-col;
}

.user-cover-container {
  @apply flex items-end h-64 w-full bg-slate-600 px-4 rounded-xl mb-12;
}

.user-profile-avatar {
  @apply relative top-12 md:left-5 mx-auto md:mx-0 w-32 h-32;
}

.user-profile-avatar img {
  @apply rounded-full w-32 h-32 object-cover absolute;
}

.user-profile-info-container {
  @apply w-full p-4;
}

.user-profile-name {
  @apply text-lg md:text-2xl font-bold p-5 font-quicksand text-center md:text-left border-b border-slate-400 w-full flex gap-2 items-center;
}

.user-profile-name span {
  @apply text-base font-bold  text-slate-600  font-quicksand;
}

.user-profile-card-container {
  @apply flex gap-2  w-full pt-4 flex-col md:flex-row;
}

.user-profile-card {
  @apply border border-slate-200 p-5 md:p-10 rounded shadow flex flex-grow flex-col gap-y-4;
}

.user-profile-card h2 {
  @apply text-sm md:text-lg font-semibold  text-slate-500  font-quicksand  w-full;
}

.user-profile-card h5 {
  @apply text-xl font-semibold text-center  font-quicksand text-slate-700 w-full;
}

.user-profile-card .card-details {
  @apply font-quicksand flex text-sm justify-between;
}

.user-profile-card .card-details span {
  @apply first:text-slate-700 first:text-lg first:md:text-2xl first:font-bold font-semibold p-1 font-quicksand text-slate-800 last:text-slate-500;
}

.recommended-products-container {
  @apply flex gap-y-4 w-full;
}
</style>
