<template>
  <div class="shop-client-name">
    <label for="first-name"></label><br>
    <div
      class="error"
      v-if="$v.firstName.$error"
    >
      First name should contain at least 3 characters
    </div>
    <input
      class="input-field"
      type="text"
      id="first-name"
      placeholder="First name"
      v-model.trim="$v.firstName.$model"
    >

    <label for="last-name"></label><br>
    <div
      class="error"
      v-if="$v.lastName.$error"
    >
      Last name should contain at least 3 characters
    </div>
    <input
      class="input-field"
      type="text"
      id="last-name"
      v-model.trim="$v.lastName.$model"
      placeholder="Last name"
      ref="lastName"
    >
    <br>

  </div>
</template>

<script>
  import { required, minLength} from 'vuelidate/lib/validators'

  export default {
    name: "shop-client-name",
    data() {
      return {
        firstName: null,
        lastName: null,
      }
    },
    validations: {
      firstName: {
        required,
        minLength: minLength(3)
      },
      lastName: {
        required,
        minLength: minLength(3)
      },
    },
    methods: {
    }
}
</script>

<style>
  .shop-client-name {
    padding: 20px 0 0;
  }
  .input-field {
    max-width: 400px;
    width: 100%;
    min-height: 30px;
    border-radius: 10px;
    border: 1px solid #540254;
  }
  .error {
    color: red;
  }
</style>