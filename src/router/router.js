import Vue from 'vue'
import Router from 'vue-router'

import shopProducts from '../components/products/shop-products'
import shopBasket from '../components/basket/shop-basket'
import shopMainPage from '../components/main-page/shop-main-page'
import shopProductPage from '../components/products/shop-product-page'
import shopOrderForm from '../components/basket/odrer-form/shop-order-form'
import shopOrderConfirmation from '../components/basket/odrer-form/shop-order-confirmation'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'mainPage',
            component: shopMainPage,
        },
        {
            path: '/products',
            name: 'products',
            component: shopProducts,
        },
        {
            path: '/product',
            name: 'product',
            component: shopProductPage,
        },
        {
            path: '/basket',
            name: 'basket',
            component: shopBasket,
            props: true,
        },
        {
            path: '/products/:category',
            name: 'category',
            component: shopProducts,
            props: true,
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: shopOrderForm,
        },
        {
            path: '/checkout/order-done',
            name: 'order-done',
            component: shopOrderConfirmation,
        },
    ]
});

export default router;