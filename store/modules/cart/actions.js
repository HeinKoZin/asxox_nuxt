// ==== actions =====
const actions = {
  addProductToCart({ commit }, data) {
    console.log('addProductToCart', data);
    const newData = {
      id: data.id,
      qty: data.quantity || 1,
      parent_product_name: data.name,
      variant_name: data.selectedVariantName,
      selectedVariant: data.selectedVariant,
      cover_photo:
        data.variantPhoto || data.temp_photo || data.feature_photos[0].photo,
      currency: data.currency,
      is_article: data.is_article_promotion ? true : null,
      is_flashsale: data.is_flashsale_promotion ? true : null,
      original_unit_price: data.sell_price,
      sell_price: data.variantSellPrice || data.sell_price,
      is_variant: data.selectedVariantId,
      isSelected: false,
      shop_id: data.shop.id,
    };
    commit("SET_PRODUCT_TO_CART", newData);
    this.commit("REFRESH_ORDER");
  },

  updateProductInCart({ commit }, { cartId, productQty }) {
    commit("UPDATE_PRODUCT_IN_CART", { cartId, productQty });
    this.commit("REFRESH_ORDER");
  },
};

export default actions;
