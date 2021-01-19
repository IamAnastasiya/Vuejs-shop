<template>
  <div class="shop-footer">
    <div class="footer-content">
      <footer-address/>
      <footer-menu/>
      <footer-customer-service/>
    </div>
    <footer-payment-methods/>
    <p class="copyright-text">COPYRIGHT BY FASHIONSOUL © 2000-2021</p>
  </div>
</template>

<script>
  import footerPaymentMethods from './footer-payment-methods'
  import footerCustomerService from './footer-customer-service'
  import footerMenu from './footer-menu'
  import footerAddress from './footer-address'

  export default {
    name: "shop-footer",
    components: {
      footerPaymentMethods,
      footerCustomerService,
      footerMenu,
      footerAddress
    }
  }
</script>

<style>
  .shop-footer {
    background-color: #f8f4f4;
    padding-bottom: 5px;
  }
  .footer-content {
    display: flex;
    justify-content: space-around;
  }
  .copyright-text {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 9px;
    border-top: 1px solid #cabfbf;
    padding-top: 20px;
    margin: 0;
  }
</style>