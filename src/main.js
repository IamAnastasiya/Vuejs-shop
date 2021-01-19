import Vue from 'vue';
import App from './App.vue';
import store from './vuex/store';
import './assets/styles/styles.scss';
import router from "@/router/router";
import Vuelidate from 'vuelidate';


Vue.config.productionTip = false;
Vue.use(Vuelidate);


new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');
