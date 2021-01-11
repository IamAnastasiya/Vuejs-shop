<template>
  <div class="shop-products">

    <h1>Products</h1>
    <shop-select
      v-bind:options="options"
      @select="sortByCategory"
      v-bind:selected="selected"
    />
    <div class="shop-products-list">
      <shop-product-item
          v-for="product in filteredProducts"
          :key = "product.article"
          v-bind:product_data="product"
          @addToBasket = "addToBasket"
          @productClick="productClick"
      />
    </div>
  </div>
</template>

<script>
  import shopProductItem from './shop-product-item'
  import {mapActions, mapGetters} from 'vuex'
  import shopSelect from '../shop-select'

  export default {
  name: "shop-products",
  components: {
    shopProductItem,
    shopSelect
  },
  props: {},
  data() {
    return {
      options: [
        {category: "All", value: "all"},
        {category: "Women", value: "w"},
        {category: "Men", value: "m"},
        {category: "Girls", value: "g"},
        {category: "Boys", value: "b"},
      ],
      selected: "All",
      sortedProducts: []
    }
  },
  computed: {
    ...mapGetters([
        'PRODUCTS',
        'BASKET',
        'SEARCH_VALUE',
        'FILTER_CATEGORY'
    ]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    }
  },
  methods: {
    ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_BASKET'
    ]),
    addToBasket (data) {
      this.ADD_TO_BASKET(data);
    },
    productClick (article) {
      this.$router.push({name: 'product', query: {'product': article}})
    },
    sortByCategory (option) {
      this.sortedProducts = [];
      let vm = this;
      this.PRODUCTS.map (function (item) {
        if (item.category === option.category) {
          vm.sortedProducts.push(item);
        }
      })
      this.selected = option.category;
      this.$router.push(option.category);
    },
    sortProductsBySearchValue (value) {
      this.sortedProducts = [...this.PRODUCTS];
      if (value) {
        this.sortedProducts = this.sortedProducts.filter (function (item) {
          return item.name.toLowerCase().includes(value.toLowerCase());
        })
        } else {
        this.sortedProducts = this.PRODUCTS;
      }
    },
    showCategory (category) {
      this.sortedProducts = [...this.PRODUCTS];
      this.sortedProducts = this.sortedProducts.filter (function (item) {
        return item.category === (category);
      })
      this.selected = category;
    }
  },
  watch: {
    SEARCH_VALUE() {
      this.sortProductsBySearchValue (this.SEARCH_VALUE);
    },
    FILTER_CATEGORY() {
      this.showCategory (this.FILTER_CATEGORY);
    }
  },
  mounted () {
    this.GET_PRODUCTS_FROM_API()
    .then((response) => {
      if (response.data) {
        // this.sortByCategory();
        this.sortProductsBySearchValue (this.SEARCH_VALUE);
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

</style>