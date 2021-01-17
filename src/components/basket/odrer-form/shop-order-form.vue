<template>
    <div class="order-form">
      <h2 class="form-text">Contact information</h2>
      <h3 class="form-text">Please enter your contact information below</h3>

      <form class="form">
        <shop-client-name/>
        <shop-client-email/>
        <shop-client-phone/>

        <div class="subscription">
          <label for="yes"></label>
          <input type="checkbox" name="terms" value="yes" id="yes">
          <p class="form-text">Yes please - give me offers and recommendations</p>
        </div>
        <div>
          <label for="user-comments">Any comments? Add here</label><br>
          <textarea name="user-comments" id="user-comments" cols="48" rows="5" class="textarea"></textarea>
        </div>

        <router-link :to="{name: 'order-done'}">
          <button
              class="submit-btn"
              @click="clearFormAndBasketData"
              type="submit" :disabled="$v.$invalid"
          >
            Confirm order
          </button>
        </router-link>
      </form>
    </div>
</template>

<script>
  import shopClientName from './shop-client-name'
  import shopClientEmail from './shop-client-email'
  import shopClientPhone from './shop-client-phone'
  import {mapActions} from 'vuex'
  import {minLength, required} from "vuelidate/lib/validators";


  export default {
    name: "shop-order-form",
  //   data() {
  //     return {
  //       form: {}
  //     }
  // },
  components: {
      shopClientName,
      shopClientEmail,
      shopClientPhone
    },
    validations: {
      // form: {
        firstName: {
          required,
          minLength: minLength(3)
        },
      // }
    },
    methods: {
      ...mapActions([
          "CLEAR_BASKET"
      ]),
      clearFormAndBasketData () {
        document.querySelector('form').reset();
        this.CLEAR_BASKET();
      }
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
  .textarea {
    margin-bottom: 40px;
    font-family: "Dubai Medium", sans-serif;
    font-size: 12px;
  }
  .submit-btn {
    background-color: #540254;
    color: white;
    font-weight: bold;
    padding: 10px;
  }
</style>