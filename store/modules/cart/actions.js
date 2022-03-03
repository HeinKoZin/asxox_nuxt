// ==== actions =====
const actions = {
  addProductToCart({ commit }, data) {
    const newData = {
      id: data.id,
      qty: data.quantity || 1,
      parent_product_name: data.name,
      variant_name: data.selectedVariantName,
      selectedVariant: data.selectedVariant,
      cover_photo:
        data.variantPhoto || data.temp_photo || data.feature_photos[0].photo,
      currency: data.currency,
      is_article: data.is_article_promotion,
      is_flashsale: data.is_flashsale_promotion,
      original_unit_price: data.sell_price,
      sell_price: data.variantSellPrice || data.sell_price,
      is_variant: data.selectedVariantId,
    };
    console.log(data);
    commit("SET_PRODUCT_TO_CART", newData);
  },

  updateProductInCart({ commit }, { cartId, productQty }) {
    commit("UPDATE_PRODUCT_IN_CART", { cartId, productQty });
  },
};

export default actions;
