const asxox = {
  asxox_encode(data) {
    return btoa("asxox-ecommerce-nuxt-encode-decode-method-" + data);
  },

  asxox_decode(data) {
    let decodedData = atob(data);
    decodedData = decodedData.slice(42);
    return decodedData;
  },
};

export default ({ app }, inject) => {
  inject("asxox", asxox);
};
