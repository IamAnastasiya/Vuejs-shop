import axios from "axios";

export default {
    GET_PRODUCTS_FROM_API({commit}) {
        return axios ('http://localhost:3000/products', {
            method: 'GET',

        })
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
    },
    ADD_TO_BASKET({commit}, product) {
        commit('SET_BASKET', product);
    },
    INCREMENT_BASKET_ITEM ({commit}, index) {
        commit('INCREMENT', index);
    },
    DECREMENT_BASKET_ITEM ({commit}, index) {
        commit('DECREMENT', index);
    },
    DELETE_FROM_BASKET({commit}, index) {
        commit('REMOVE_FROM_BASKET', index);
    },
    GET_SEARCH_VALUE_TO_VUEX({commit}, value) {
        commit('SET_SEARCH_VALUE_TO_VUEX', value);
    },
    GET_REQUIRED_CATEGORY ({commit}, category) {
        commit('SET_REQUIRED_CATEGORY', category);
    }
}