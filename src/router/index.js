import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('../components/Log_in/Sign_up/SignUpPage.vue')
  },
  {
    path: '/home',
    name: 'homePage',
    component: () => import('../components/Home/HomePage.vue')
  },
  {
    path: '/trips',
    name: 'trips',
    component: () => import('../components/Trips/TripsPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/About_us/AboutUsPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Log_in/logInPage.vue')
  },
  {
    path: '/booking',
    name: 'bookingLink',
    component: () => import('../components/Home/header/booking/bookingLink.vue')
  },
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router