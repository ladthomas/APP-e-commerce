import { createRouter, createWebHistory } from "@ionic/vue-router";


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
  {
   path: "/cancel",
    name: "cancel",
    component: () => import("@/views/cancel.vue"),
  },
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
    path: "/success",
    name: "success",
    component: () => import("@/views/success.vue"),
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
  
  {
    path: "/:catchAll(.*)",
    redirect: "/homepage",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});



export default router;
