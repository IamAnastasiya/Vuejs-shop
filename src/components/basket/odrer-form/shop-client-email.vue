<template>
  <div class="shop-client-email">
    <label for="email"></label><br>
    <input
      class="email-field"
      type="email"
      id="email"
      name="email"
      placeholder="Email"
      v-model.lazy="$v.email.$model"
    >
    <div
      class="error"
      v-if="$v.email.$error"
    >
      Email is invalid
    </div>
    <br>
  </div>
</template>

<script>
import {minLength, required, email} from "vuelidate/lib/validators";

export default {
  name: "shop-client-email",
  data() {
    return {
      email: null,
    }
  },
  validations: {
    email: {
      required,
      minLength: minLength(5),
      email
  }
  }
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