<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center">Créer un compte</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <main>
        <h1 class="ion-text-center">Créer un compte</h1>
        <form class="ion-padding" @submit.prevent="register">
          <ion-item>
            <ion-input
              type="text"
              placeholder="Nom d'utilisateur ou Email"
              v-model="usernameOrEmail"
              required
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-input
              type="password"
              placeholder="Mot de passe"
              v-model="password"
              required
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-input
              type="password"
              placeholder="Confirmer le mot de passe"
              v-model="confirmPassword"
              required
            ></ion-input>
          </ion-item>
          <p class="ion-text-center terms">
            En cliquant sur le bouton <a href="/register">Inscription</a>, vous acceptez l'offre publique.
          </p>
          <ion-button
            expand="full"
            shape="round"
            type="submit"
            :disabled="!usernameOrEmail || !password || password !== confirmPassword"
            class="register-button"
          >Créer un compte</ion-button>
        </form>
        
        <div class="alternative-login">
          <p>- OU Continuer avec -</p>
          <div class="social-login">
            <ion-button fill="clear">
              <ion-icon name="logo-google"></ion-icon>
            </ion-button>
            <ion-button fill="clear">
              <ion-icon name="logo-apple"></ion-icon>
            </ion-button>
            <ion-button fill="clear">
              <ion-icon name="logo-facebook"></ion-icon>
            </ion-button>
          </div>
        </div>
        
        <div class="create-account">
          <router-link to="/login">J'ai déjà un compte Connexion</router-link>
        </div>
      </main>
    </ion-content>
  </ion-page>
</template>

<script>
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
  IonIcon
} from '@ionic/vue';
import { logoGoogle, logoApple, logoFacebook } from 'ionicons/icons';

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
    IonIcon
  },
  setup() {
    const usernameOrEmail = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const router = useRouter();

    const register = () => {
      if (usernameOrEmail.value && password.value && password.value === confirmPassword.value) {
        // Add registration logic here
        router.push('/homepage');
      } else {
        // Handle registration error
        alert('Veuillez vérifier les champs');
      }
    };

    return {
      usernameOrEmail,
      password,
      confirmPassword,
      register,
      logoGoogle,
      logoApple,
      logoFacebook
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

.terms {
  margin: 1em 0;
  font-size: 0.9em;
}

.register-button {
  --background: #ff4081;
}

.alternative-login {
  text-align: center;
  margin-top: 1em;
}

.social-login {
  display: flex;
  justify-content: center;
  gap: 1em;
}

.create-account {
  text-align: center;
  margin-top: 1em;
}

.create-account a {
  color: #ff4081;
  text-decoration: none;
}
</style>
