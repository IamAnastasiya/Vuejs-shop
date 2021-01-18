<template>
  <div class="header-logo">
    <router-link :to="{name: 'mainPage'}" class="header-logo-link">
<!--      <h1 class="main-logo">FashionSoul</h1>-->
      <img src="../../../assets/images/logo-img.png" alt="logo" width="230">
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "header-logo",
  }
</script>

<style>

  .header-logo {
    /*background-color: #540254;*/
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

</style>