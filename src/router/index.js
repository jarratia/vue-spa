import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios';

Vue.prototype.$http = axios

import DashboardIndex from '../views/dashboard/Index';
import HomeIndex from '../views/dashboard/children/homes/Index';
import CategoriesIndex from '../views/dashboard/children/categories/Index';



Vue.use(VueRouter)

const routes = [
  {
    path: '/', component: DashboardIndex,
    children: [
      { path: '/', name: 'home_path', component: HomeIndex },
      { path: '/categories', name: 'categories_path', component: CategoriesIndex }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
