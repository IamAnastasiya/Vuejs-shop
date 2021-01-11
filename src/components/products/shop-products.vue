<template>
  <div class="shop-products">
    <router-link :to="{name: 'basket', params: {basket_data: BASKET}}">
      <div class="shop-products-link-to-basket">Basket: {{BASKET.length}}</div>
    </router-link>

    <h1>Products</h1>
    <div class="shop-products-list">
      <shop-product-item
          v-for="product in PRODUCTS"
          :key = "product.article"
          v-bind:product_data="product"
          @addToBasket = "addToBasket"
      />
    </div>
  </div>
</template>

<script>
  import shopProductItem from './shop-product-item'
  import {mapActions, mapGetters} from 'vuex'

  export default {
  name: "shop-products",
  components: {
    shopProductItem
  },
  props: {},
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
        'PRODUCTS',
        'BASKET'
    ]),
  },
  methods: {
    ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_BASKET'
    ]),
    addToBasket (data) {
      this.ADD_TO_BASKET(data);
    }
  },
  watch: {},
  mounted () {
    this.GET_PRODUCTS_FROM_API()
    .then((response) => {
      if (response.data) {
        console.log ("Data received")
      }
    })
  }
}


</script>

<style>
  .shop-products-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
     }
  .shop-products-link-to-basket {
    position: absolute;
    color: white;
    top: 10px;
    right: 10px;
    padding: 8px;
    border: 1px solid #4e076d;
    background: #4e076d;
  }

</style>