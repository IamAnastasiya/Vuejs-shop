<template>
  <div class="order-form">
    <h2 class="form-text">Contact information</h2>
    <h3 class="form-text">Please enter your contact information below</h3>

    <form class="form" @submit.prevent="submit">
<!--      <shop-client-name/>-->
<!--      <shop-client-email/>-->
<!--      <shop-client-phone/>-->

      <label for="first-name"></label><br>
      <div class="error" v-if="$v.form.firstName.$error">First name should contain at least 3 characters</div>
      <input class="input-field" type="text" id="first-name" placeholder="First name"
             v-model.trim="$v.form.firstName.$model">

      <label for="last-name"></label><br>
      <div class="error" v-if="$v.form.lastName.$error">Last name should contain at least 3 characters</div>
      <input class="input-field" type="text" id="last-name"
             v-model.trim="$v.form.lastName.$model" placeholder="Last name">

      <label for="email"></label><br>
      <div class="error" v-if="$v.form.email.$error">Email is invalid</div>
      <input class="input-field" type="email" id="email" name="email" placeholder="Email"
             v-model.trim="$v.form.email.$model">

      <label for="tel"></label><br>
      <div class="error" v-if="$v.form.tel.$error">Phone number should be in format: 380...</div>
      <input class="input-field" type="tel" id="tel" name="tel" placeholder="Phone"
             v-model.trim="$v.form.tel.$model">


      <div class="subscription">
        <label for="yes"></label>
        <input type="checkbox" name="terms" value="yes" id="yes">
        <p class="form-text">Yes please - give me offers and recommendations</p>
      </div>

      <router-link :to="{name: 'order-done'}">
        <button class="submit-btn" :disabled="!$v.$dirty || $v.$anyError" @click="clearFormAndBasketData" type="submit">
          Confirm order
        </button>
      </router-link>
    </form>
  </div>
</template>

<script>
  // import shopClientName from './shop-client-name'
  // import shopClientEmail from './shop-client-email'
  // import shopClientPhone from './shop-client-phone'
  import {mapActions} from 'vuex'
  import {minLength, required, email, helpers} from "vuelidate/lib/validators";

  let validFormat = helpers.regex('validFormat', /^\+?3?8?(0\d{9})$/);

  export default {
  name: "shop-order-form",
  // components: {
    // shopClientName,
    // shopClientEmail,
    // shopClientPhone
  // },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        tel: "",
      }
    }
  },
  validations: {
    form: {
      firstName: {required, minLength: minLength(3)},
      lastName: {required, minLength: minLength(3)},
      email: {required, email},
      tel: {required, minLength: minLength(9), validFormat}
    }
  },
  methods: {
    ...mapActions([
        "CLEAR_BASKET"
    ]),
    clearFormAndBasketData () {
      document.querySelector('form').reset();
      this.CLEAR_BASKET();
    },
  }
}
</script>

<style>
  .order-form {
    padding: 30px 0;
  }
  .form-text {
    margin-top: 0;
    font-family: "Dubai Medium", sans-serif;
  }
  .subscription {
    display: flex;
    padding: 20px 0;
    justify-content: center;
  }
  .submit-btn {
    background-color: #540254;
    color: white;
    font-weight: bold;
    padding: 10px;
  }
  .submit-btn:disabled {
    background-color: #797979;
    color: #000000;
    font-weight: bold;
    padding: 10px;
  }
  .input-field {
    margin-bottom: 20px;
    max-width: 400px;
    width: 100%;
    min-height: 30px;
    border-radius: 10px;
    border: 1px solid #540254;
  }
  .error {
    color: red;
    font-size: small;
  }

</style>