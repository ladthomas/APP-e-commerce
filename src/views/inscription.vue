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
            <ion-input type="text" placeholder="Nom" v-model="name" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-input type="text" placeholder="Email" v-model="Email" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-input type="password" placeholder="Mot de passe" v-model="password" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-input type="password" placeholder="Confirmer le mot de passe" v-model="confirmPassword"
              required></ion-input>
          </ion-item>
          <p class="ion-text-center terms">
            En cliquant sur le bouton <a href="/register">Inscription</a>, vous
            acceptez l'offre publique.
          </p>
          <ion-button expand="full" shape="round" type="submit" :disabled="!name || !Email || !password || password !== confirmPassword
            " class="register-button">Créer un compte</ion-button>
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
import { defineComponent, ref, watch, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { logoGoogle, logoApple, logoFacebook } from "ionicons/icons";
import { SignUp } from "../services/auth.js";
import { setLocalStorage, isConnected, setSessionStorage } from "../stores";
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
    IonIcon,
  },
  setup() {
    const Email = ref("");
    const name = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const router = useRouter();
    onMounted(() => {
      if (isConnected()) {
        return router.push("/homepage");
      }
      // Perform actions when the component mounts
    });
    const register = async () => {
      if (
        Email.value &&
        name.value &&
        password.value &&
        password.value === confirmPassword.value
      ) {
        let dataToSend = {
          email: Email.value,
          name: name.value,
          password: password.value,
          confirmPassword: confirmPassword.value
        }
        try {
          // Add registration logic here
          if (!Object.values(dataToSend).includes(undefined)) {
            // Ajouter la logique d'authentification ici
            let response = await SignUp(dataToSend);
            console.log('response', response.data)
            if (response?.data?.message) {
              setLocalStorage("auth", response?.data?.user)
              setSessionStorage("token", response.data?.token)
              router.push("/homepage");
              window.location.reload()
            } else {
              alert("Ce compte existe déjà")
            }
          }
        } catch (error) {
          alert(error.response?.data?.message)
          console.log(error.response?.data?.message)
        }

      } else {
        // Handle registration error
        alert("Veuillez vérifier les champs");
      }
    };
    return {
      Email,
      name,
      password,
      confirmPassword,
      register,
      logoGoogle,
      logoApple,
      logoFacebook,
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
