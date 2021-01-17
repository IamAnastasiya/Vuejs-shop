<template>
  <div class="shop-client-email">
    <label for="email"></label><br>
    <input class="email-field" type="email" id="email" name="email" placeholder="Email"><br>
  </div>
</template>

<script>
  export default {
    name: "shop-client-email"
}
</script>

<style>
  .email-field {
    max-width: 400px;
    width: 100%;
    min-height: 30px;
    border-radius: 10px;
    border: 1px solid #540254;
  }
</style>