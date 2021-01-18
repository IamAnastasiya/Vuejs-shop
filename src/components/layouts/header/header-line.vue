<template>
  <div class="header-line">
    <div>
      <span class="header-line-text">FAST SHIPPING</span>
      <span class="mid-point">-</span>
      <span class="header-line-text">50 DAYS RETURN</span>
      <span class="mid-point">-</span>
      <span class="header-line-text">EXCELLENT SUPPORT</span>
    </div>
    <div class="search-field">
      <input
        class="search-input"
        type="text"
        v-model="searchValue"
      >
      <button
        class="search-btn"
        @click="clearSearchField"
      >x
      </button>
      <button
        class="search-btn"
        @click="searchProduct(searchValue)"
      >
        <img
          src="../../../assets/images/search-icon.png"
          alt="search-icon"
          width="10"
          height="12"
        >
      </button>

    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

  export default {
    name: "header-line",
    data() {
      return {
        searchValue: ''
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'SEARCH_VALUE',
      ]),
    },
    methods: {
      ...mapActions([
        'GET_SEARCH_VALUE_TO_VUEX',
      ]),
      searchProduct(value) {
        this.GET_SEARCH_VALUE_TO_VUEX(value);
        if (this.$route.path !== '/products') {
          this.$router.push('/products')
        }
      },
      clearSearchField() {
        this.searchValue = ''
        this.GET_SEARCH_VALUE_TO_VUEX();
        if (this.$route.path !== '/products') {
          this.$router.push('/products')
        }
      },
    }
  }
</script>

<style>

  .header-line {
    background-color: #625f5f;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
  }
  .header-line-text {
    color: white;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    margin-right: 5px;
  }
  .header-line-text:last-of-type {
    margin-right: 0;
  }
  .mid-point {
    color: white;
    font-size: 12px;
    margin-right: 5px;
  }

</style>