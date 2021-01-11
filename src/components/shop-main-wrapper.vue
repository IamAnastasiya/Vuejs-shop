<template>
  <div class="shop-main-wrapper">
    <p>{{title}}</p>
    <shop-products/>
    <shop-basket/>
  </div>
</template>


<script>
  import shopProducts from './shop-products'
  import shopBasket from './shop-basket'

  export default {
    name: "fs-main-wrapper",
    components: {
      shopProducts,
      shopBasket,
    },
    props: {},
    data() {
      return {
        title: "Main Wrapper"
      }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted () {
      console.log("Hello I am alive!")
    }
  }

</script>


<style>
  .fs-main-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
  }

</style>




