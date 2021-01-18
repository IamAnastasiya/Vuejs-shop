import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";


import actions from './actions/actions'
import mutations from './mutations/mutations';
import getters from './getters/getters'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    searchValue: '',
    products: [],
    basket: [],
    filterCategory: ''
  },
  plugins: [createPersistedState()],
  mutations,
  actions,
  getters,
});



export default store;