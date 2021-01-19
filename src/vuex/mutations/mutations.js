export const SET_PRODUCTS_TO_STATE = 'SET_PRODUCTS_TO_STATE';
export const SET_BASKET = 'SET_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
export const CLEAR_ALL_FROM_BASKET = 'CLEAR_ALL_FROM_BASKET';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT ';
export const SET_SEARCH_VALUE_TO_VUEX = 'SET_SEARCH_VALUE_TO_VUEX';
export const SET_REQUIRED_CATEGORY = 'SET_REQUIRED_CATEGORY';


export default {
  [SET_PRODUCTS_TO_STATE] (state, products) {
    state.products = products;
  },
  [SET_BASKET] (state, product) {
    if (state.basket.length) {
      let productExists = false;
      state.basket.map (function (item) {
        if (item.article === product.article) {
          productExists = true;
          item.quantity++
        }
      })
        if (!productExists) {
          state.basket.push(product);
        }
    } else {
      state.basket.push(product);
    }
  },
  [REMOVE_FROM_BASKET] (state, index) {
    state.basket.splice(index, 1);
  },
  [CLEAR_ALL_FROM_BASKET] (state) {
    state.basket.splice(0, state.basket.length);
  },
  [INCREMENT] (state, index) {
    state.basket[index].quantity++
  },
  [DECREMENT] (state, index) {
    if (state.basket[index].quantity > 1) {
      state.basket[index].quantity--
    }
  },
  [SET_SEARCH_VALUE_TO_VUEX] (state, value) {
    state.searchValue = value;
  },
  [SET_REQUIRED_CATEGORY] (state, category) {
    state.filterCategory = category;
  }
}