<template>
  <div class="modal-container">
    <div class="modal-content-container">
      <button class="modal-close-btn" style="color: #fff">
        <font-awesome-icon :icon="['fas', 'times']" />
      </button>
      <div class="modal-header">
        <h2>Order Details</h2>
        <span>Cash on Delivery</span>
      </div>
      <div class="customer-details-container">
        <div class="customer-details">
          <h2>Shipping Address</h2>
          <p><strong>Name: </strong>Hein</p>
          <p><strong>Address: </strong>No.253, 33Dfe</p>
          <p><strong>Phone: </strong>097777777</p>
        </div>
        <!-- <div class="customer-details">
          <h2>Delivery Information</h2>
          <p><strong>ID: </strong>#515</p>
          <p><strong>Name: </strong>ghrgjgt}</p>
        </div> -->
        <div class="customer-details">
          <h2>Order Information</h2>
          <p><strong>Code: </strong>4542</p>
          <p>
            <strong>Status:</strong> <span class="status pending">fgf</span>
          </p>
          <p><strong>Date:</strong> 31/10/2022</p>
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
            <tr>
              <td style="width: 45">
                <img
                  src="https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/03/05/products/feature/05-03-2022_Asxox_46223152e7cf716.51686359.jpg"
                />
              </td>
              <td style="wordwrap: break-word">Hair</td>
              <td>3500 MMK</td>
              <td>4</td>
              <td style="width: 160">2500 MMK</td>
            </tr>
            <div class="mt-8"></div>
            <tr>
              <th>Sub total</th>
              <td>44774 MMK</td>
            </tr>
            <tr>
              <th>Discount</th>
              <td>5355 MMK</td>
            </tr>
            <tr>
              <th>Point Amount</th>
              <td>4544</td>
            </tr>
            <tr>
              <th>Advance Payment Price</th>
              <td>555 MMK</td>
            </tr>
            <tr>
              <th>Total amount</th>
              <td>55 MMK</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
