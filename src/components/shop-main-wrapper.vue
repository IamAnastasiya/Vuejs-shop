<template>
  <div class="shop-main-wrapper">
    <shop-header/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <shop-footer/>

  </div>
</template>


<script>
  import shopHeader from './layouts/header/shop-header'
  import shopFooter from './layouts/footer/shop-footer'


  export default {
    name: "shop-main-wrapper",
    components: {
      shopHeader,
      shopFooter
    },
    props: {},
    data() {
      return {
        title: "Main Wrapper",
      }
    },
    computed: {

    },
    methods: {},
    watch: {},
    mounted () {

    }
  }

</script>


<style>

  .shop-main-wrapper {
    max-width: 1300px;
    margin: 0 auto;
  }

</style>




