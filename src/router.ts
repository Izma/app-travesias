import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home/Home';
import Layout from '@/components/layout/Layout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/admin/dashboard',
    },
    {
      path: '/admin',
      component: Layout,
      redirect: '/admin/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Home,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/login/Login'),
    },
  ],
});
