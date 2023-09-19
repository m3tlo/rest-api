import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


export default   new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    
    {
      path: '/login',
      name: 'login',
      meta: {layout: 'empty'},
      component: () => import("@/views/UserLogin.vue")
    },
    {
      path: "/",
      name: "home",
      meta: {layout: 'main'},
      component: () => import('@/views/HomePage.vue'),
    },
    {
      path: '/register',
      name: 'register',
      meta: {layout: 'empty'},
      component: () => import("@/views/UserRegister.vue")
    },
    {
      path: '/categories',
      name: 'categories',
      meta: {layout: 'main'},
      component: () => import("@/views/MyCategories.vue")
    },
    {
      path: '/record',
      name: 'record',
      meta: {layout: 'main'},
      component: () => import("@/views/MyRecord.vue")
    },
    {
      path: '/detail',
      name: 'detail',
      meta: {layout: 'main'},
      component: () => import("@/views/DetailRecord.vue")
    },
    {
      path: '/history',
      name: 'history',
      meta: {layout: 'main'},
      component: () => import("@/views/MyHistory.vue")
    },
    {
      path: '/planning',
      name: 'planning',
      meta: {layout: 'main'},
      component: () => import("@/views/MyPlanning.vue")
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {layout: 'main'},
      component: () => import("@/views/UserProfile.vue")
    },
  ]
});


