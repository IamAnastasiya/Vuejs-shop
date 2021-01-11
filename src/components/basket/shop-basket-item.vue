<template>
  <div class="shop-basket-item">
    <img class="shop-basket-item__image" :src="require('../assets/images/' + basket_item_data.image)" alt="" >
    <div class="shop-basket-item-info">
      <p>{{basket_item_data.name}}</p>
      <p>Price: {{basket_item_data.price}} грн.</p>
      <p>{{basket_item_data.article}}</p>
    </div>
    <div class="shop-basket-item_quantity">
      <p>Кол-во:</p>
      <span>
        <span class="quantity-btn" @click="decrementItem">-</span>
              {{basket_item_data.quantity}}
        <span class="quantity-btn" @click="incrementItem">+</span>
      </span>

    </div>
    <button @click="deleteFromBasket">Delete</button>
<!--    <p class="shop-product-item-price">Price: {{ product_data.price }} грн.</p>-->
  </div>
</template>

<script>

export default {
  name: "shop-basket-item",
  props: {
    basket_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {

    decrementItem () {
      this.$emit ('decrement');
    },
    incrementItem () {
      this.$emit ('increment');
    },
    deleteFromBasket () {
      this.$emit ('deleteFromBasket')
    }
  },
  mounted () {
    this.$set(this.basket_item_data, 'quantity', 1)
  }

}
</script>

<style lang="scss">
  .shop-basket-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    &__image {
      width: 100px;
    }

    .quantity-btn {
      cursor: pointer;
      box-shadow: 0 0 8px 0 #e0e0e0;
      padding: 4px;
      margin: 0 5px;
    }
  }
</style>