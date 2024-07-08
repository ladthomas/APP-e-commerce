import { createRouter, createWebHistory } from "@ionic/vue-router";
//import { useAuthStore } from "@/stores/auth.js";

const routes = [
  {
    path: "/homepage",
    name: "Homepage",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/subscriptions",
    name: "Subscriptions",
    component: () => import("@/views/Subscription.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
  },
  {
    path: "/mentions-legales",
    name: "MentionsLegales",
    component: () => import("@/views/MentionsLegales.vue"),
  },
  {
    path: "/cgv",
    name: "CGV",
    component: () => import("@/views/CGV.vue"),
  },
  {
    path: "/politique-confidentialite",
    name: "PolitiqueConfidentialite",
    component: () => import("@/views/PolitiqueConfidentialite.vue"),
  },
  {
    path: "/abonnement",
    name: "abonnement",
    component: () => import("@/views/abonnement.vue"),
  },
  /*{
   path: "/news",
    name: "News",
    component: () => import("@/views/News.vue"),
  },*/
  {
    path: "/actualite",
    name: "actualite",
    component: () => import("@/views/actualite.vue"),
  },
  {
    path: "/actualite/:id",
    name: "Article",
    component: () => import("@/views/Article.vue"),
  },
  {
    path: "/compte",
    name: "compte",
    component: () => import("@/views/compte.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/Dashboard.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/connexion",
    name: "connexion",
    component: () => import("@/views/connexion.vue"),
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/inscription",
    name: "inscription",
    component: () => import("@/views/inscription.vue"),
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("@/views/ForgotPassword.vue"),
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/forgot-password/:token",
    name: "ResetPassword",
    component: () => import("@/views/ResetPassword.vue"),
  },
  //{
   // path: "/checkout/success",
   // name: "CheckoutSuccess",
   // component: () => import("@/views/checkout/CheckoutSuccess.vue"),
 // },
 //{
  //  path: "/checkout/failed",
    //name: "CheckoutFail",
   // component: () => import("@/views/checkout/CheckoutFail.vue"),
  //},
  {
    path: "/:catchAll(.*)",
    redirect: "/homepage",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

/*router.beforeEach((to, from, next) => {
  //const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.loggedIn) {
    return next({
      path: "/login",
    });
  }

  if (to.meta.requiresGuest && authStore.loggedIn) {
    return next({
      path: "/homepage",
    });
  }

  next();
});*/

export default router;
