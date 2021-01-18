<template>
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
</template>

<script>
  import {mapActions, mapGetters} from "vuex";

  export default {
    name: "header-menu",
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'FILTER_CATEGORY'
      ]),
    },
    methods: {
      ...mapActions([
        'GET_REQUIRED_CATEGORY'
      ]),
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

</style>