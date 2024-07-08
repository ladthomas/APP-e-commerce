<template>
  <ion-app>
    <!-- menu burger partout dans le code -->
    <MenuBurger />
    <ion-page id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>
            stylish
            <!-- logo partout dans le code -->
           <!--<img src="http://fakeimg.pl/80x50/ff0000/" alt="Stylish" /> --> 
          </ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-router-outlet></ion-router-outlet>
    </ion-page>
  </ion-app>
</template>

<script>
import MenuBurger from './components/MenuBurger.vue';
import { IonApp, IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonRouterOutlet } from '@ionic/vue';

export default {
  name: 'App',
  components: {
    MenuBurger,
    IonApp,
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonRouterOutlet
  }
};
</script>

<style>
@import './theme/variables.css';
</style>
