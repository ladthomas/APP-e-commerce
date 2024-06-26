<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-toolbar>
          <ion-title class="ion-text-center">CONNEXION</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <main class="main-content">
        <h1 class="ion-text-center">Bon retour</h1>
        <form class="ion-padding" @submit.prevent="login">
          <ion-item>
            <ion-input
              type="text"
              placeholder="Nom d'utilisateur ou Email"
              v-model="email"
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
          <div class="ion-text-end forgot-password">
            <router-link to="/forgot-password">Mot de passe oublié ?</router-link>
          </div>
          <ion-button
            expand="full"
            shape="round"
            type="submit"
            :disabled="!email || !password"
            class="login-button"
          >Connexion</ion-button>
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
          <router-link to="/inscription">Créer un compte Inscription</router-link>
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
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonInput,
  IonButton,
  IonIcon
} from '@ionic/vue';

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonItem,
    IonInput,
    IonButton,
    IonIcon,
  },
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const login = () => {
      if (email.value && password.value) {
        // Ajouter la logique d'authentification ici
        router.push('/homepage');
      } else {
        // Gérer l'erreur de connexion
        alert('Veuillez remplir les deux champs');
      }
    };

    return {
      email,
      password,
      login,
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

.forgot-password {
  margin-bottom: 1em;
}

.login-button {
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
