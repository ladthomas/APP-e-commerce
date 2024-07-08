<template>
  <ion-menu side="start" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item-group>
          <template v-if="isConnected">
            <ion-item-divider>
              <ion-label>Navigation</ion-label>
            </ion-item-divider>
            <ion-menu-toggle auto-hide="true">
              <ion-item button router-link="/homepage" detail>
                <ion-icon slot="start" :icon="homeOutline" class="menu-icon"></ion-icon>
                <ion-label>Accueil</ion-label>
              </ion-item>
            </ion-menu-toggle>
            <ion-menu-toggle auto-hide="true">
              <ion-item button router-link="/abonnement" detail>

                <ion-icon slot="start" :icon="cartOutline" class="menu-icon"></ion-icon>
                <ion-label>Abonnements</ion-label>
              </ion-item>
            </ion-menu-toggle>
            <ion-menu-toggle auto-hide="true">
              <ion-item button router-link="/actualite" detail>
                <ion-icon slot="start" :icon="newspaperOutline" class="menu-icon"></ion-icon>
                <ion-label>Actualités</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </template>
        </ion-item-group>



        <ion-item-group>
          <ion-item-divider>
            <ion-label>Authentification</ion-label>
          </ion-item-divider>
          <template v-if="!isConnected">
            <ion-menu-toggle auto-hide="true">
              <ion-item button router-link="/connexion" detail>
                <ion-icon slot="start" :icon="logInOutline" class="menu-icon"></ion-icon>
                <ion-label>Se connecter</ion-label>
              </ion-item>
            </ion-menu-toggle>
            <ion-menu-toggle auto-hide="true">
              <ion-item button router-link="/inscription" detail>
                <ion-icon slot="start" :icon="personAddOutline" class="menu-icon"></ion-icon>
                <ion-label>S'inscrire</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </template>
          <template v-else>
            <ion-menu-toggle auto-hide="true">
              <ion-item button @click="logout" detail>
                <ion-icon slot="start" :icon="logOutOutline" class="menu-icon"></ion-icon>
                <ion-label>Se déconnecter</ion-label>
              </ion-item>
            </ion-menu-toggle>
            <ion-menu-toggle auto-hide="true">
              <ion-item button router-link="/compte" detail>
                <ion-icon slot="start" :icon="personCircleOutline" class="menu-icon"></ion-icon>
                <ion-label>Mon compte</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </template>
          <template v-if="!isConnected">
            <ion-menu-toggle auto-hide="true">
              <ion-item button router-link="/forgot-password" detail>
                <ion-icon slot="start" :icon="keyOutline" class="menu-icon"></ion-icon>
                <ion-label>Mot de passe oublié</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </template>

        </ion-item-group>

        <ion-item-group>
          <ion-item-divider>
            <ion-label>Informations</ion-label>
          </ion-item-divider>
          <ion-menu-toggle auto-hide="true">
            <ion-item button router-link="/contact" detail>
              <ion-icon slot="start" :icon="mailOutline" class="menu-icon"></ion-icon>
              <ion-label>Contact</ion-label>
            </ion-item>
          </ion-menu-toggle>
          <ion-menu-toggle auto-hide="true">
            <ion-item button router-link="/mentions-legales" detail>
              <ion-icon slot="start" :icon="documentTextOutline" class="menu-icon"></ion-icon>
              <ion-label>Mentions Légales</ion-label>
            </ion-item>
          </ion-menu-toggle>
          <ion-menu-toggle auto-hide="true">
            <ion-item button router-link="/cgv" detail>
              <ion-icon slot="start" :icon="documentTextOutline" class="menu-icon"></ion-icon>
              <ion-label>CGV</ion-label>
            </ion-item>
          </ion-menu-toggle>
          <ion-menu-toggle auto-hide="true">
            <ion-item button router-link="/politique-confidentialite" detail>
              <ion-icon slot="start" :icon="lockClosedOutline" class="menu-icon"></ion-icon>
              <ion-label>Politique de Confidentialité</ion-label>
            </ion-item>
          </ion-menu-toggle>
        </ion-item-group>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonMenuToggle,
  IonItemGroup,
  IonItemDivider
} from '@ionic/vue';

import { defineComponent, ref } from 'vue';
import {
  homeOutline,
  cartOutline,
  newspaperOutline,
  mailOutline,
  personOutline,
  documentTextOutline,
  lockClosedOutline,
  logInOutline,
  logOutOutline,
  personAddOutline,
  keyOutline,
  personCircleOutline
} from 'ionicons/icons';

import { isConnected, clearAllStore } from '../stores/index.js'; // Replace with the actual path to your utils

export default defineComponent({
  name: 'MenuBurger',
  components: {
    IonContent,
    IonHeader,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonMenuToggle,
    IonItemGroup,
    IonItemDivider
  },
  setup() {
    const userIsConnected = ref(isConnected());

    const logout = () => {
      clearAllStore();
      userIsConnected.value = false;
      window.location.href = "/connexion";
    };

    return {
      homeOutline,
      cartOutline,
      newspaperOutline,
      mailOutline,
      personOutline,
      documentTextOutline,
      lockClosedOutline,
      logInOutline,
      logOutOutline,
      personAddOutline,
      keyOutline,
      personCircleOutline,
      isConnected: userIsConnected,
      logout
    };
  }
});
</script>

<style scoped>
.menu-icon {
  color: #3880ff;
  /* Couleur bleue */
  font-size: 24px;
  margin-right: 10px;
}

ion-item {
  --background: #fff;
  --border-color: #f0f0f0;
  --ripple-color: #dcdcdc;
  --ion-item-background-hover: #f9f9f9;
}

ion-item:hover {
  background-color: var(--ion-item-background-hover);
}

ion-list {
  padding: 0;
}

ion-toolbar {
  --background: #3880ff;
  --color: white;
}

ion-title {
  text-align: center;
}

ion-item-divider {
  --background: #f4f4f4;
  --color: #3880ff;
  font-weight: bold;
}
</style>