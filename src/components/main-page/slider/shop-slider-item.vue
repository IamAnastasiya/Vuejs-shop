<template>
  <div class="shop-slider-item">
    <img class="shop-slider-item-img" :src=" require ('../../assets/images/' + item_data.img)" alt="" width="700">
  </div>
</template>

<script>
  export default {
  name: "shop-slider-item",
  props: {
    item_data: {
      type: Object,
      default: () => {},
    }
  },
  }
</script>

<style>
  .shop-slider-item-img {

  }
</style>