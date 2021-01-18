<template>
  <div class="shop-product-item" >
    <img
      @click="productClick"
      class="shop-product-item-image"
      :src=" require('../../assets/images/' + product_data.image) "
      alt="img"
      width="150"
    >
    <p class="shop-product-item-name">{{ product_data.name }}</p>
    <p class="shop-product-item-price">Price: {{ product_data.price }} usd</p>
    <button
      class="shop-product-item-add-to-basket-btn btn"
      @click="addToBasket">
      Add to Basket
    </button>
  </div>
</template>

<script>
export default {
  name: "shop-product-item",
  components: {},
  props: {
    product_data: {
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
    addToBasket () {
      this.$emit('addToBasket', this.product_data);
    },
    productClick () {
      this.$emit ('productClick', this.product_data.article)
    }
  },
  watch: {},
  mounted () {
    this.$set(this.product_data, 'quantity', 1)
  }
}


</script>

<style>

  .shop-product-item {
    flex-basis: 23%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 5px 5px 10px;
    margin-bottom: 10px;
  }
  image {
      width: 150px;
    }

</style>