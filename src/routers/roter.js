import {createRouter, createWebHistory} from 'vue-router';

import MainProducts from "../components/Products";
import ShowProduct from "../components/Show";
import CharProduct from "../components/Character";
import ReviewProduct from "../components/Review";
import ChildrenProduct from "../components/Child";
import HomeProduct from "../components/Home";

const routes = [

    {
        path: '/',
        name: "main-products",
        component: MainProducts,
    },
    {
        path: '/show/:id',
        name: "show-product",
        component: ShowProduct,
        props: true,
    },
    {
        path: '/char/:id',
        name: "char-product",
        component: CharProduct,
        props: true
    },
    {
        path: '/review',
        name: "review-product",
        component: ReviewProduct,
        children: [
            {
                path: 'home',
                name: "home-product",
                component: HomeProduct,
            },
            {
                path: 'children',
                name: "children-product",
                component: ChildrenProduct,
            }
        ]
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;