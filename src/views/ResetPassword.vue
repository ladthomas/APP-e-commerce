<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/homepage"></ion-back-button>
          </ion-buttons>
          <ion-title class="ion-text-center ion-align-items-center">Forgot Passwordss?</ion-title>
        </ion-toolbar>
      </ion-header>

      <main>
        <h1 class="ion-text-center">Forgot Password?</h1>
        <form class="ion-padding" @submit.prevent="sendResetLink">
          <ion-item>
            <ion-input type="email" placeholder="Enter your email address" v-model="email" required></ion-input>
          </ion-item>
          <p class="ion-text-center info">
            * We will send you a message to set or reset your new password
          </p>
          <ion-button expand="full" shape="round" type="submit" :disabled="!email"
            class="submit-button">Submit</ion-button>
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
          <h2>Success</h2>
          <p>Check your email inbox to reset your password. The new password is already send.</p>
          <ion-button expand="full" shape="round" routerLink="/login">
            Login
          </ion-button>
        </div>
      </main>
    </ion-content>
  </ion-page>
</template>

<script>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import {
  useForm,
  defineRule,
  configure,
} from "vee-validate";
import { required } from "@vee-validate/rules";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonButton,
  IonSpinner,
  IonButtons,
  IonBackButton,
} from '@ionic/vue';
import { ResetPasswordUsers } from "../services/auth.js";

defineRule("required", required);

configure({
  generateMessage: (ctx) => {
    const messages = {
      required: "Ce champ est obligatoire",
    };
    // return messages[ctx.rule.name as keyof typeof messages] ?? "This field is invalid";
  },
});

export default {
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonItem,
    IonButton,
    IonSpinner,
    IonButtons,
    IonBackButton,
  },
  setup() {
    const email = ref('');
    const activeSpinner = ref(false);
    const error = ref(false);
    const errorMessage = ref('');
    const resetLinkSent = ref(false);
    const authStore = useAuthStore();
    const router = useRouter();

    const sendResetLink = async () => {
      alert("Oui")
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
