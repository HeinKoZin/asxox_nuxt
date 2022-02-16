const asxox = {
  asxox_encode(data) {
    return btoa("asxox-ecommerce-nuxt-method-" + data);
  },

  asxox_decode(data) {
    let decodedData = Buffer.from(data, "base64").toString();
    decodedData = decodedData.slice(28);
    return decodedData;
  },
};

export default ({ app }, inject) => {
  inject("asxox", asxox);
};
