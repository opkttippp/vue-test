import {createRouter, createWebHistory} from 'vue-router';

import MainPage from "@/pages/MainPage";
import UserReviews from "@/pages/UserReviews";
import MainAbout from "@/pages/MainAbout";
import ReviewId from "@/pages/ReviewId";

const routes = [
    {
        path: '/',
        name: "main-page",
        component: MainPage,
    },
    {
        path: '/reviews',
        name: 'user-reviews',
        component: UserReviews
    },
    {
        path: '/reviews/:id',
        name: 'reviews-id',
        component: ReviewId
    },
    {
        path: '/about',
        name: 'main-about',
        component:MainAbout
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;