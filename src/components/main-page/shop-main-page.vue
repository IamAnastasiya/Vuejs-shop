<template>
  <div class="shop-main-page">
    <shop-slider
        class = "slider"
        v-bind:slider_data="sliderItems"
        :interval="4000"
    />
    <div class="advantages-block">

        <img src="../../assets/images/delivery-icon.png" width="50"  alt="truck" class="point-img">
        <img src="../../assets/images/gift-icon.png"  width="30" alt="gift-box" class="point-img">
        <img src="../../assets/images/stars-icon.png"  width="50" alt="stars" class="point-img">
        <img src="../../assets/images/shirt-icon.png"  width="30" alt="t-shirt" class="point-img">

        <h2 class="point-heading">FAST DELIVERY</h2>
        <h2 class="point-heading">GIFTS EXCHANGE UNTIL 1. FEB</h2>
        <h2 class="point-heading">5 STARS ON TRUSTPILOT</h2>
        <h2 class="point-heading">SHOP AS A FAMILY</h2>

        <p class="point-text">With safe packaging</p>
        <p class="point-text">Smart reusable box</p>
        <p class="point-text">Trustworthy online store</p>
        <p class="point-text">Your favorite brands</p>

    </div>
    <router-link :to="{name: 'products'}" class="header-menu-link">
    <div class="sale-content">
      <img src="../../assets/images/sale-img.jpg" alt="sale" class="sale-image">
      <p class="sale-text">Last chance!</p>
      <h3 class="sale-heading">Save 10% on ALL items</h3>
    </div>
    </router-link>
  </div>
</template>

<script>
  import shopSlider from "@/components/main-page/slider/shop-slider";

  export default {
    name: "shop-main-page",
    components: {shopSlider},
    props: {},
    data () {
      return {
        sliderItems: [
          {id: 1, name: '1-img', img: 'slide-img-1.jpg', category: 'Women'},
          {id: 2, name: '2-img', img: 'slide-img-2.jpg', category: 'Men'},
          {id: 3, name: '3-img', img: 'slide-img-3.jpg', category: 'Girls'},
          {id: 4, name: '4-img', img: 'slide-img-4.jpg', category: 'Boys'},
        ]
      }
    },
    computed: {},
    methods: {}
  }
</script>

<style>
    .slider {
      padding: 20px 0 20px;
    }
    .advantages-block {
      display: grid;
      grid-template-rows: 50px 20px 20px;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      align-items: center;
      justify-items: center;
      padding-bottom: 20px;
    }
    .point-heading {
      font-family: "Kaushan Script", sans-serif;
      font-size: 11px;
      margin: 0;
    }
    .point-text {
      font-family: "Kaushan Script", sans-serif;
      font-size: 10px;
    }
    .sale-content {
      position: relative;
      padding-bottom: 10px;
    }
    .sale-image {
      max-width: 900px;
      width: 100%;
    }
    .sale-text {
      color: white;
      position: absolute;
      top: 30px;
      left: 440px;
      font-size: 25px;
      margin: 0;

    }
    .sale-heading {
      color: white;
      position: absolute;
      top: 80px;
      left: 320px;
      font-size: 35px;
      max-width: 400px;
      width: 100%;
      margin: 0;
    }
</style>