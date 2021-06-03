import Home from './components/Home.vue';
import ProductScreen from './components/ProductScreen.vue';

export default [
    {
        path: '/',
        component: Home,
        name: "home"
    },
    {
        path: '/product/:id',
        component: ProductScreen,
        name: "productscreen"
    }
]