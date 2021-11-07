import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes=[
{
  path:'/',
  name:'Home',
  component: () => import("@/views/Index.vue"),
},
{
  path:'/About_us',
  name:'About',
  component: () => import("@/views/About.vue")
},
{
  path:'/Our_goals',
  name:'Goals',
  component: () => import("@/views/Goals.vue")
}

];


const router = new VueRouter ({
 linkActiveClass: "active",
  routes,
  mode: "history",
});

export default router;