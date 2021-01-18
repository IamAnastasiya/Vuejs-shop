<template>
  <div class="shop-header">
    <header-line/>
    <div class="header-main-content">
    <header-logo/>
      <nav>
        <header-menu/>
      </nav>
      <div>
        <router-link :to="{name: 'basket', params: {basket_data: BASKET}}"
                     class="basket-link"
        >
          <div class="shop-products-link-to-basket">
            <img
              src="../../../assets/images/basket-icon.png"
              alt="basket"
              width="16"
            >
            {{BASKET.length}}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import headerLine from './header-line'
  import headerLogo from './header-logo'
  import headerMenu from './header-menu'

  export default {
    name: "shop-header",
    props: {},

    components: {
      headerLine,
      headerLogo,
      headerMenu
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'BASKET',
      ]),
    },
  }
</script>

<style>

  .header-main-content {
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .basket-link {
    text-decoration: none;
  }

  .shop-products-link-to-basket {
    color: white;
    background: #540254;
    padding: 13px 7px 12px;
  }

</style>