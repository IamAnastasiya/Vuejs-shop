import Vue from 'vue'
import Router from 'vue-router'

import shopProducts from '../components/products/shop-products'
import shopBasket from '../components/basket/shop-basket'
import shopMainPage from '../components/main-page/shop-main-page'
import shopProductPage from '../components/products/shop-product-page'
import shopOrderForm from '../components/basket/odrer-form/shop-order-form'
import shopOrderConfirmation from '../components/basket/odrer-form/shop-order-confirmation'

Vue.use(Router);
import {MAIN_PAGE, PRODUCTS, PRODUCT, BASKET, CATEGORY, CHECKOUT, ORDER_DONE} from './paths-consts'

let router = new Router({
  routes: [
    {
    path: MAIN_PAGE,
    name: 'mainPage',
    component: shopMainPage,
    },
    {
    path: PRODUCTS,
    name: 'products',
    component: shopProducts,
    },
    {
    path: PRODUCT,
    name: 'product',
    component: shopProductPage,
    },
    {
    path: BASKET,
    name: 'basket',
    component: shopBasket,
    props: true,
    },
    {
    path: CATEGORY,
    name: 'category',
    component: shopProducts,
    props: true,
    },
    {
    path: CHECKOUT,
    name: 'checkout',
    component: shopOrderForm,
    },
    {
    path: ORDER_DONE,
    name: 'order-done',
    component: shopOrderConfirmation,
    },
  ]
});

export default router;