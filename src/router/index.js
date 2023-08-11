import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Home from "../views/home/Home.vue";
import Billing from "../views/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Register from "../views/register/Register.vue";
import Login from "../views/login/Login.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/login",
  },
  {
    path: "/dash",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  }
];

const privateRoutes = [
  'Home',
  'Profile',
  'RTL',
  'Tables',
  'Billing',
  'Dashboard'
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});


router.beforeEach((to, from, next) => {
  console.log(to);
  
  if (privateRoutes.includes(to.name)) {
    if (!localStorage.getItem('access_token')) {
      next(`${'/login?next='}${to.fullPath}`);
    }  
  }

  // redirect to dashboard page if user is already logged in
  if (to.name === 'login') {
    if (localStorage.getItem('access_token')) {
      next('/dashboard');
    }
  }
 
  next();
});

export default router;
