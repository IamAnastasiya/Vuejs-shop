<template>
  <div class="shop-slider-item">

    <router-link :to="{name: 'category', params: {category: item_data.category}}" class="header-menu-link">
      <img
          @click="filterCategory(item_data.category)"
          class="shop-slider-item-img" :src=" require ('../../../assets/images/' + item_data.img)" alt="" width="900">
    </router-link>

  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import {mapActions} from "vuex";


  export default {
  name: "shop-slider-item",
  props: {
    item_data: {
      type: Object,
      default: () => {},
    }
  },
  computed: {
    ...mapGetters([
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
  .shop-slider-item-img {

  }
</style>