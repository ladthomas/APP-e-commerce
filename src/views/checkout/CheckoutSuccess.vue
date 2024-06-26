<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-back-button default-href="/homepage"></ion-back-button>
            </ion-buttons>
            <ion-title class="ion-text-center ion-align-items-center">
              Checkout Success
            </ion-title>
          </ion-toolbar>
        </ion-header>
        <main class="ion-padding">
          <div class="header-article">
            <div class="success-message">
              <img src="@/assets/success.png" alt="Success Icon" />
              <h2>Payment done successfully.</h2>
            </div>
            <div class="info">
              <p>Your email: {{ user?.email }}</p>
              <p>Your Session ID: {{ sessionId }}</p>
            </div>
          </div>
        </main>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import axios from "axios";
  import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonBackButton,
    IonButtons,
  } from "@ionic/vue";
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import { useAuthStore } from "../../stores/auth";
  
  export default {
    name: "CheckoutSuccess",
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
      IonBackButton,
      IonButtons,
    },
  
    setup() {
      const route = useRoute();
      const sessionId = ref(route.query.session_id);
      const user = ref(null);
  
      const authStore = useAuthStore();
  
      onMounted(async () => {
        try {
          await authStore.getUser();
          user.value = authStore.user;
        } catch (error) {
          console.error("An error occurred:", error);
        }
      });
  
      return {
        sessionId,
        user,
      };
    },
  };
  </script>
  
  <style scoped>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  .header-article {
    text-align: center;
  }
  
  .success-message {
    margin-top: 2em;
    margin-bottom: 2em;
    padding: 2em;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }
  
  .success-message img {
    width: 80px;
    height: 80px;
  }
  
  .success-message h2 {
    font-size: 1.5em;
    color: #000;
    margin-top: 1em;
    font-weight: bold;
  }
  
  .info {
    font-size: 0.9em;
    color: #000;
  }
  </style>
  