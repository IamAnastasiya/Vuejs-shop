<template>
  <div class="shop-client-phone">
    <label for="tel"></label><br>
    <input class="phone-field" type="tel" id="tel" name="tel" placeholder="Phone"><br>
  </div>
</template>

<script>
  export default {
    name: "shop-client-phone"
}
</script>

<style>
  .phone-field {
    max-width: 400px;
    width: 100%;
    min-height: 30px;
    border-radius: 10px;
    border: 1px solid #540254;
  }
</style>