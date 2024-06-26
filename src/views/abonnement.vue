<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Nos abonnements</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="offer-list">
        <div class="offer-card">
          <p class="offer-title">PAIRE 1</p>
          <h2 class="offer-price">200 $</h2>
          <p class="offer-description"> ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum.</p>
          <ion-button expand="block" class="offer-button" href="#">Choisir</ion-button>
        </div>
        <div class="offer-card">
          <p class="offer-title">PAIRE 3</p>
          <h2 class="offer-price">400 $</h2>
          <p class="offer-description"> ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum.</p>
          <ion-button expand="block" class="offer-button" href="#">Choisir</ion-button>
        </div>
        <div class="offer-card">
          <p class="offer-title">PAIRE 2</p>
          <h2 class="offer-price">600 $</h2>
          <p class="offer-description"> ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum.</p>
          <ion-button expand="block" class="offer-button" href="#">Choisir</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton
  }
});
</script>

<style scoped>
.offer-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}
.offer-card {
  width: 90%;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px 0;
  padding: 16px;
  text-align: center;
}
.offer-title {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}
.offer-price {
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin-bottom: 8px;
}
.offer-description {
  font-size: 16px;
  color: #666;
  margin-bottom: 16px;
}
.offer-button {
  --background: #ff4081; /* Use the pink color from your screenshot */
  --border-radius: 25px; /* Adjusted to match the rounded style */
}
</style>
