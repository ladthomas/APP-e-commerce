<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center">Mot de passe oublié ?</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <main>
        <h1 class="ion-text-center">Mot de passe oublié ?</h1>
        <form class="ion-padding" @submit.prevent="sendResetLink">
          <ion-item>
            <ion-input type="email" placeholder="Entrez votre adresse email" v-model="email" required></ion-input>
          </ion-item>
          <p class="ion-text-center info">
            * Nous vous enverrons un message pour définir ou réinitialiser votre nouveau mot de passe
          </p>
          <ion-button expand="full" shape="round" type="submit" :disabled="!email"
            class="submit-button">Soumettre</ion-button>
          <div class="ion-text-center" v-if="activeSpinner">
            <br />
            <br />
            <ion-spinner color="primary"></ion-spinner>
          </div>
          <div v-if="error" class="error ion-text-center">
            {{ errorMessage }}
          </div>
        </form>
        <div v-if="resetLinkSent" class="ion-text-center success-message">
          <h2>Succès</h2>
          <p>Votre mot de passe vous à été transmis par e-mail.</p>
          <ion-button expand="full" shape="round" routerLink="/login">
            Se connecter
          </ion-button>
        </div>
      </main>
    </ion-content>
  </ion-page>
</template>

<script>
//
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  IonButton,
  IonSpinner,
} from '@ionic/vue';
import { ResetPasswordUsers } from "../services/auth.js";
export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonItem,
    IonButton,
    IonSpinner,
  },
  setup() {
    const email = ref('');
    const activeSpinner = ref(false);
    const error = ref(false);
    const errorMessage = ref('');
    const resetLinkSent = ref(false);
    const router = useRouter();

    const sendResetLink = async () => {
      activeSpinner.value = true;
      try {
        let response = await ResetPasswordUsers({
          email: email.value
        })
        if (response.data.message) {
          resetLinkSent.value = true;
        } else {
          error.value = true;
          errorMessage.value = err.response?.data?.message;
        }
        console.log(response.data)
        // Add logic to send reset link here
        r
      } catch (err) {
        error.value = true;
        errorMessage.value = err.response?.data?.message;
      }
      activeSpinner.value = false;
      setTimeout(() => {
        errorMessage.value = "";
      }, 3000);
    };

    return {
      email,
      activeSpinner,
      error,
      errorMessage,
      sendResetLink,
      resetLinkSent,
    };
  },
});
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

main h1 {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 1em;
}

form {
  width: 100%;
  max-width: 400px;
}

.ion-item {
  margin-bottom: 1em;
}

.info {
  margin: 1em 0;
  font-size: 0.9em;
}

.submit-button {
  --background: #ff4081;
}

.success-message {
  margin-top: 2em;
}

.success-message h2 {
  font-size: 1.5em;
  margin-bottom: 1em;
}

.error {
  color: red;
}
</style>
