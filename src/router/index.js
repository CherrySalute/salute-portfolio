import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import AOS from "aos";
import 'aos/dist/aos.css';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/mainpage/SecondView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), //해시태그 방지
  routes,
  scrollBehavior(){
    return {top: 0} // 스크롤 위치 상단이동
  }
})

router.beforeEach((to, from, next) => {
  AOS.init(); // Initialize AOS
  next();
});

export default router
