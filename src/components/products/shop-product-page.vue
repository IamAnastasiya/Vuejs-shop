<template>
  <div class="shop-product-page">
    <div class="image-wrapper">
      <img
        v-if="product.image"
        class="shop-product-item-image"
        :src=" require('../../assets/images/' + product.image) "
        alt="img"
        width="250"
      >
    </div>
    <div class="info-wrapper">
      <p class="product-info">Product name: {{product.name}}</p>
      <p class="product-info">Category: {{product.type}}</p>
      <p class="product-info">Description: {{product.description}}</p>
      <p class="product-info">Product price: {{product.price}} usd</p>
      <button
        class="shop-product-item-add-to-basket-btn btn"
        @click="addToBasket">
        Add to Basket
      </button>
    </div>

  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "shop-product-page",
    props: {},
    data () {
      return {}
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'BASKET'
      ]),
      product () {
        let result = {};
        let vm = this;
        this.PRODUCTS.map(function(item) {
          if (item.article === vm.$route.query.product) {
            result = item;
          }
        })
        return result;
      },
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_BASKET'
      ]),
      addToBasket () {
        this.ADD_TO_BASKET(this.product)
      }
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API()
    }
  }
</script>

<style>
  .shop-product-page {
    padding-top: 40px;
    display: flex;
    justify-content: space-around;
  }
  .product-info {
    max-width: 250px;
  }
</style>