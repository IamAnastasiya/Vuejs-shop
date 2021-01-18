<template>
  <div class="shop-basket">
    <router-link :to="{name: 'products'}">
      <div class="shop-products-link-to-catalog">Back to products</div>
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
      <p class="basket-amount">{{basketTotalCost}} usd</p>
    </div>
    <router-link :to="{name: 'checkout'}" v-if="basket_data.length">
      <button class="checkout-btn">Go to checkout</button>
    </router-link>

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

  .shop-basket {
    position: relative;
    padding-bottom: 20px;
  }
  .shop-basket-item {
    margin-bottom: 15px;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 7px;
  }
  .basket-total {
    padding: 4px;
    display: flex;
    justify-content: center;
    border: 1px solid #540254;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .basket-name {
    margin-right: 10px;
    font-weight: bold;
  }
  .basket-amount {
    font-weight: bold;
  }
  .checkout-btn {
    background-color: #540254;
    color: white;
    font-weight: bold;
    padding: 10px;
  }
  .shop-products-link-to-catalog {
    position: absolute;
    top: -72px;
    right: 0;
    background: #540254;
    padding: 17px 7px;
    color: white;
    font-size: 14px;
  }
</style>