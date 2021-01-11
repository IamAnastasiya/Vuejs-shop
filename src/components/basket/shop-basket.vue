<template>
    <div class="shop-basket">
      <router-link :to="{name: 'products'}">
        <div class="shop-products-link-to-basket">Back to products</div>
      </router-link>
      <h1>Your basket</h1>
      <p v-if="!basket_data.length">Your basket is empty...</p>
      <shop-basket-item
          v-for="(item, index) in basket_data"
          :key="item.article"
          v-bind:basket_item_data="item"
          @increment="increment(index)"
          @decrement="decrement(index)"
          @deleteFromBasket="deleteFromBasket(index)"
      />
      <div class="basket-total">
        <p class="basket-name">Total:</p>
        <p class="basket-amount">{{basketTotalCost}} грн.</p>
      </div>
  </div>
</template>

<script>

import shopBasketItem from './shop-basket-item'
import {mapActions} from 'vuex'

export default {
  name: "shop-basket",
  components: {
    shopBasketItem
  },
  props: {
    basket_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    basketTotalCost () {
      let result = [];
      if (this.basket_data.length > 0) {
      for (let item of this.basket_data) {
        result.push(item.price * item.quantity)
      }
      result = result.reduce(function (sum, elem) {
        return sum+elem;
      }, 0)
        return result;
      } else {
        return 0;
      }

    }
  },
  methods: {
    ...mapActions([
        'DELETE_FROM_BASKET',
        'INCREMENT_BASKET_ITEM',
        'DECREMENT_BASKET_ITEM'
    ]),
    increment (index) {
      this.INCREMENT_BASKET_ITEM(index);
    },
    decrement (index) {
      this.DECREMENT_BASKET_ITEM(index);
    },
    deleteFromBasket (index) {
      this.DELETE_FROM_BASKET(index);
    }
  },

}
</script>

<style lang="scss">
    .shop-basket-item {
      margin-bottom: 15px;
      box-shadow: 0 0 8px 0 #e0e0e0;
      padding: 7px;
    }
    .basket-total {
      padding: 5px;
      display: flex;
      justify-content: center;
      background: #553066;
    }
    .basket-name {
      margin-right: 10px;
      color: white;
      font-weight: bold;
    }
    .basket-amount {
      color: white;
      font-weight: bold;
    }
</style>