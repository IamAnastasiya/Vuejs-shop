<template>
  <div class="shop-client-name">
    <label for="first-name"></label><br>
    <input
        class="name-field"
        type="text"
        id="first-name"
        name="first-name"
        placeholder="First name"
        required
        v-model="firstName"
    >
    <div class="error" v-if="$v.firstName.$invalid">
      Last name should contain at least 3 characters
    </div>

    <br>

<!--    <label for="last-name"></label><br>-->
<!--    <input-->
<!--        class="name-field"-->
<!--        type="text"-->
<!--        id="last-name"-->
<!--        v-model="lastName"-->
<!--        placeholder="Last name"-->
<!--    >-->
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
        // lastName: null,
      }
    },
    validations: {
      firstName: {
        required,
        minLength: minLength(3)
      },
      // lastName: {
      //   required,
      //   minLength: minLength(3)
      // },
    }
}
</script>

<style>
  .shop-client-name {
    padding: 20px 0 0;
  }
  .name-field {
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