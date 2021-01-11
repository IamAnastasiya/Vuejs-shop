<template>
  <div class="shop-header">
    <div class="header-line">
      <div>
        <span class="header-line-text">FAST SHIPPING</span>
        <span class="mid-point">-</span>
        <span class="header-line-text">50 DAYS RETURN</span>
        <span class="mid-point">-</span>
        <span class="header-line-text">EXCELLENT SUPPORT</span>
      </div>
      <div class="search-field">
        <input class="search-input"
            type="text"
            v-model="searchValue"
        >
        <button class="search-btn" @click="clearSearchField">x</button>
        <button class="search-btn" @click="searchProduct(searchValue)"><img src="../../assets/images/search-icon.png" alt="search-icon" width="10" height="12"></button>

      </div>

    </div>
    <div class="header-main-content">
      <div class="logo">
          <router-link :to="{name: 'mainPage'}" class="header-logo-link">
            <h1 class="main-logo">FashionSoul</h1>
          </router-link>
      </div>

      <nav>
        <ul class="header-menu">
          <li class="header-menu-item">
            <router-link :to="{name: 'category', params: {category: 'All'}}" class="header-menu-link">
              <p @click="filterCategory('All')">ALL PRODUCTS</p>
            </router-link>
          </li>
          <li class="header-menu-item">
                <router-link :to="{name: 'category', params: {category: 'Women'}}" class="header-menu-link">
                  <p @click="filterCategory('Women')">WOMEN</p>
                </router-link>
          </li>
          <li class="header-menu-item">
            <router-link :to="{name: 'category', params: {category: 'Men'}}" class="header-menu-link">
              <p @click="filterCategory('Men')">MEN</p>
            </router-link>
          </li>
          <li class="header-menu-item">
            <router-link :to="{name: 'category', params: {category: 'Boys'}}" class="header-menu-link">
              <p @click="filterCategory('Boys')">BOYS</p>
            </router-link>
          </li>
          <li class="header-menu-item">
            <router-link :to="{name: 'category', params: {category: 'Girls'}}" class="header-menu-link">
              <p @click="filterCategory('Girls')">GIRLS</p>
            </router-link>
          </li>
        </ul>
      </nav>

      <div>
        <router-link :to="{name: 'basket', params: {basket_data: BASKET}}" class="basket-link">
          <div class="shop-products-link-to-basket"><img src="../../assets/images/basket-icon.png" alt="basket" width="16">{{BASKET.length}}</div>
        </router-link>
      </div>
    </div>



  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import {mapActions} from "vuex";

  export default {
    name: "shop-header",
    props: {},
    data() {
      return {
        searchValue: ''
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'BASKET',
        'SEARCH_VALUE',
        'FILTER_CATEGORY'
      ]),
    },
    methods: {
      ...mapActions([
        'GET_SEARCH_VALUE_TO_VUEX',
        'GET_REQUIRED_CATEGORY'
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
      filterCategory (category) {
        this.GET_REQUIRED_CATEGORY (category);
        if (this.$route.path !== '/products') {
          this.$router.push('/products')
        }
      }
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


.header-main-content {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  background-color: #540254;
}

.main-logo {
  margin: 0;
  padding: 5px 14px;
}

.header-logo-link {
  text-decoration: none;
  color: white;
  font-family: "Poor Richard", sans-serif;
  font-weight: 700;
  margin: 0;
}

.header-menu {
  display: flex;
  max-width: 700px;
  width: 100%;
  justify-content: space-between;
  list-style: none;
  position: relative;
  padding: 0;
  margin: 0;
}

.header-menu-item {
  margin-right: 33px;
}

.header-menu-item:last-of-type {
  margin-right: 0;
}

.header-menu-link {
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 14px;
}

.header-menu-link:hover {
  color: #540254;
}

.basket-link {
  text-decoration: none;
}

.shop-products-link-to-basket {
  color: white;
  background: #540254;
  padding: 12px 7px 13px;
}


</style>