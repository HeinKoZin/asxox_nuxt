<template>
  <div class="modal-container">
    <div class="modal-content-container">
      <button
        class="modal-close-btn"
        style="color: #fff"
        @click="SET_IS_ORDER_DETAIL()"
      >
        <font-awesome-icon :icon="['fas', 'times']" />
      </button>
      <div class="modal-header">
        <h2>Order Details</h2>
        <span>Cash on Delivery</span>
      </div>
      <div class="customer-details-container">
        <div class="customer-details">
          <h2>Shipping Address</h2>
          <p><strong>Name: </strong>{{ orderDetail.name }}</p>
          <p><strong>Address: </strong>{{ orderDetail.address }}</p>
          <p><strong>Phone: </strong>{{ orderDetail.phone }}</p>
        </div>
        <!-- <div class="customer-details">
          <h2>Delivery Information</h2>
          <p><strong>ID: </strong>#515</p>
          <p><strong>Name: </strong>ghrgjgt}</p>
        </div> -->
        <div class="customer-details">
          <h2>Order Information</h2>
          <p><strong>Code : </strong>{{ orderDetail.order_code }}</p>
          <p>
            <strong>Status :</strong>
            <span class="status pending">{{ orderDetail.status }}</span>
          </p>
          <p>
            <strong>Ordered Date :</strong>
            {{ formatDatetime(orderDetail.created_at) }}
          </p>
        </div>
      </div>
      <div class="order-details-container">
        <table class="order-details-table" id="order-list-excel">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in orderDetail.products" :key="index">
              <td style="width: 45">
                <img :src="subProductImage(product)" />
              </td>
              <td style="wordwrap: break-word">
                <span>{{ subProductName(product) }}</span
                ><br />
                <span>{{ subProductVarientName(product) }}</span>
              </td>
              <td>{{ subProductSellPrice(product) }} MMK</td>
              <td>{{ subProductQuantity(product) }}</td>
              <td style="width: 160">{{ subProductTotal(product) }} MMK</td>
            </tr>
            <div class="mt-8"></div>
            <tr>
              <th>Sub total</th>
              <td>{{ calculateSubtotal }} MMK</td>
            </tr>
            <tr
              v-if="
                orderDetail.promotions.discount_amount &&
                orderDetail.promotions.discount_amount > 0
              "
            >
              <th>Discount</th>
              <td class="line-through">
                {{ orderDetail.promotions.discount_amount }}
              </td>
            </tr>
            <tr
              v-if="
                orderDetail.promotions.point_amount &&
                orderDetail.promotions.point_amount > 0
              "
            >
              <th>Point Amount</th>
              <td class="line-through">
                {{ orderDetail.promotions.point_amount }} MMK
              </td>
            </tr>
            <tr v-if="calculateCouponAmount && calculateCouponAmount > 0">
              <th>Coupon Amount</th>
              <td class="line-through">{{ calculateCouponAmount }} MMK</td>
            </tr>
            <tr>
              <th>Total amount</th>
              <td>
                {{
                  orderDetail.total - (orderDetail.promotions.point_amount || 0)
                }}
                MMK
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      subTotalAmount: 0,
    };
  },
  methods: {
    ...mapMutations(["SET_ORDER_DETAIL", "SET_IS_ORDER_DETAIL"]),
    formatDatetime(datetime) {
      const newDateTime = new Date(datetime);
      const formattedDate =
        newDateTime.getDate() +
        "/" +
        (newDateTime.getMonth() + 1) +
        "/" +
        newDateTime.getFullYear();
      return formattedDate;
    },
    subProductImage(product) {
      if (product.order_product.is_variant)
        return product.order_product.is_variant.varient_photo;
      return product.product.feature_photos[0].photo;
    },
    subProductName(product) {
      return product.product.name;
    },
    subProductSellPrice(product) {
      if (product.order_product.is_variant) {
        return product.order_product.is_variant.sell_price;
      }
      return product.order_product.original_unit_price;
    },
    subProductQuantity(product) {
      return product.order_product.qty;
    },
    subProductTotal(product) {
      return product.order_product.total_price;
    },
    subProductVarientName(product) {
      let variant_name = "";
      let options = [
        {
          type: "size",
          value: product.order_product.is_variant?.size,
        },
        {
          type: "color",
          value: product.order_product.is_variant?.color,
        },
        {
          type: "pattern",
          value: product.order_product.is_variant?.pattern,
        },
        {
          type: "accessories",
          value: product.order_product.is_variant?.accessories,
        },
      ];
      if (product.order_product.is_variant) {
        options.map((option) => {
          if (option.value) {
            variant_name +=
              (variant_name !== "" ? "/ " : "") +
              product.order_product.is_variant[option.type].name;
          }
        });
      }
      return variant_name;
    },
  },
  computed: {
    ...mapGetters(["orderDetail"]),
    calculateSubtotal() {
      const order = this.orderDetail;
      let subTotalAmount = 0;
      // for (let i = 0; i < order.products.length; i++) {
      //   subTotalAmount += order.products[i].order_product.total_price;
      // }
      order.products.map((product) => {
        subTotalAmount += product.order_product.total_price;
      });
      return subTotalAmount;
    },
    calculateCouponAmount() {
      return this.calculateSubtotal - this.orderDetail.total;
    },
  },
};
</script>

<style lang="postcss" scoped>
.order-details-container-wrapper {
  @apply flex flex-col fixed w-full h-full top-0 left-0 z-50 bg-slate-800 bg-opacity-30 justify-center items-center;
}

.order-details-model-container {
  @apply bg-slate-50 p-4 rounded-lg max-w-md mx-auto;
}

.modal-container {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 800px;
  /* max-height: 800px;
	overflow: hidden auto;
	scrollbar-width: thin; */
  background: #fff;
  padding: 20px;
  padding-top: 50px;
  box-sizing: border-box;
  border-radius: 5px;
}

.modal-content-container .modal-header {
  margin: 0;
  background-color: #f2f2f2;
  font-family: "Ubuntu", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @apply p-2;
}

.modal-content-container .modal-header h2 {
  /* font-size: 1.3rem; */
  font-weight: bold;
  color: #333;

  @apply text-base;
}

.modal-content-container .modal-header span {
  /* font-size: 1.1rem; */
  /* color: #fff; */
  /* padding: 10px; */
  /* background-color: #f59e0b; */
  /* border-radius: 5px; */
  letter-spacing: 0.5px;

  @apply p-1 text-base text-slate-50 bg-yellow-500 rounded-lg px-3 font-semibold;
}

.modal-content-container p {
  margin-top: 10px;
  padding: 0 20px;
  font-size: 1.2rem;
  color: #333;
}

.modal-close-btn {
  position: absolute;
  top: 0;
  right: 0;
  height: 35px;
  width: 35px;
  /* padding: 10px; */
  font-size: 1.7rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  border: none;
  border-top-right-radius: 5px;
  background: #dc3545;
  box-shadow: 0px 0px 5px #333;
  z-index: 400;
  font-size: 1rem;
}

.order-details-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #fff;
  /* padding: 0px 20px; */
  box-sizing: border-box;
  border-radius: 5px;
}

.order-details-table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  /* border: 1px solid #ccc; */
  text-align: center;

  @apply text-sm;
}

.order-details-table th {
  padding: 10px;
  border: 1px solid #ccc;
  /* font-size: 1.05rem; */

  @apply text-sm;
}

.order-details-table td {
  padding: 10px;
  border: 1px solid #ccc;
  /* font-size: 1.1rem; */

  @apply text-sm;
}

thead tr,
tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed; /* even columns width , fix width of table too*/
}

.order-details-table tbody::-webkit-scrollbar {
  width: 2px;
}
.order-details-table tbody::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(158, 158, 158);
  border-radius: 0;
}

.order-details-table tbody::-webkit-scrollbar-thumb {
  background: rgb(156, 156, 156);
  border-radius: 5px;
}

.order-details-table tbody {
  display: block;
  max-height: 400px;
  overflow: auto;
}

.customer-details-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: #fff;
  /* padding: 5px 20px; */
  box-sizing: border-box;
  border-radius: 5px;
}

.customer-details-container .customer-details {
  /* width: 33.33%; */
  font-family: "Roboto", sans-serif;
  padding: 2px;

  @apply w-1/2;
}

.customer-details-container .customer-details p {
  margin: 10px 0px;
  padding: 0px 10px;
  /* font-size: 1rem; */
  /* color: grey; */

  /* font-weight: bold; */

  @apply text-sm text-slate-600;
}

.customer-details-container .customer-details strong {
  margin: 5px 0px;
  padding: 0 0px;
  /* font-size: 1rem; */
  letter-spacing: 1px;
  color: #333;
}

.customer-details-container .customer-details h2 {
  margin-top: 10px;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #f2f2f2;
  /* font-size: 1.2rem; */
  color: #333;
  font-family: "Ubuntu", sans-serif;

  @apply text-base font-semibold;
}

.status {
  /* font-size: 1rem; */
  font-weight: bold;
  color: #fff;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  margin-top: 10px;
  margin-button: 20px;
  letter-spacing: 1.5px;
  line-height: 2;

  @apply text-sm;
}

.status.pending {
  background-color: #f59e0b;
}

.status.payment-pending {
  background-color: #f59e0b;
}

.status.delivered {
  background-color: #28a745;
}

.status.cancelled {
  background-color: #dc3545;
}

.status.completed {
  background-color: #007bff;
}

.status.pre-order {
  background-color: #ec4899;
}

.status.order-delay {
  background-color: #05f2c7;
}

.export-btn {
  padding: 10px 20px;
  text-align: center;
  font-size: 1.3rem;
  color: #fff;
  background-color: #3b82f6;
  border-radius: 0.5rem;
  border: 0;
  margin-right: 20px;
  font-weight: bold;
  margin-top: 30px;
  float: right;
  cursor: pointer;
}
</style>
