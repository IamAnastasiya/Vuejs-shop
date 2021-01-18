<template>
  <div class="shop-client-phone">
    <label for="tel"></label><br>
    <input
      class="phone-field"
      type="tel"
      id="tel"
      name="tel"
      placeholder="Phone"
      v-model.lazy="$v.tel.$model"
    >
    <div
      class="error"
      v-if="$v.tel.$error"
    >
      Phone number should contain at least 9 characters
    </div>
    <br>
  </div>
</template>

<script>
import {helpers, minLength, required} from "vuelidate/lib/validators";
let validFormat = helpers.regex('validFormat', /^\+?3?8?(0\d{9})$/);

export default {
  name: "shop-client-phone",
  data() {
    return {
        tel: null,
    }
  },
  validations: {
      tel: {
        required,
        minLength: minLength(9),
        validFormat
    }
  }
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