const asxox = {
  asxox_encode(data) {
    const buffer = new Buffer("asxox-ecommerce-nuxt-method-" + data);
    const base64Data = buffer.toString("base64");
    return base64Data;
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
