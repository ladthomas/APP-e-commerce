<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/homepage"></ion-back-button>
        </ion-buttons>
        <ion-title class="ion-text-center ion-align-items-center">Mentions Légales</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <main class="ion-margin-horizontal legal-content">
        <section>
          <h2>Éditeur du site</h2>
          <div class="info-item">
            <ion-icon name="business-outline"></ion-icon>
            <p><strong>Nom de la société :</strong> Webstart</p>
          </div>
          <div class="info-item">
            <ion-icon name="location-outline"></ion-icon>
            <p><strong>Adresse :</strong> 19 rue Yves Toudic, 75010 Paris</p>
          </div>
          <div class="info-item">
            <ion-icon name="call-outline"></ion-icon>
            <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
          </div>
          <div class="info-item">
            <ion-icon name="mail-outline"></ion-icon>
            <p><strong>Email :</strong> contact@webstart.com</p>
          </div>
        </section>

        <section>
          <h2>Hébergement du site</h2>
          <div class="info-item">
            <ion-icon name="server-outline"></ion-icon>
            <p><strong>Nom de l'hébergeur :</strong> Hébergeur XYZ</p>
          </div>
          <div class="info-item">
            <ion-icon name="location-outline"></ion-icon>
            <p><strong>Adresse :</strong> Adresse de l'hébergeur</p>
          </div>
          <div class="info-item">
            <ion-icon name="call-outline"></ion-icon>
            <p><strong>Téléphone :</strong> +33 1 98 76 54 32</p>
          </div>
          <div class="info-item">
            <ion-icon name="mail-outline"></ion-icon>
            <p><strong>Email :</strong> support@hebergeurxyz.com</p>
          </div>
        </section>

        <section>
          <h2>Conditions d'utilisation</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.</p>
        </section>
      </main>
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
  IonBackButton,
  IonButtons,
  IonIcon,
} from "@ionic/vue";

export default {
  name: "MentionsLegales",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonIcon,
  },
};
</script>

<style scoped>
.ion-page {
  background-color: white;
}

.ion-content {
  --background: white;
}

.legal-content {
  padding: 1em;
  font-size: 1em;
  line-height: 1.5;
  color: #333;
}

.legal-content section {
  margin-bottom: 2em;
}

.legal-content h2 {
  font-size: 1.5em;
  margin-bottom: 0.5em;
  color: #ff4081;
  border-bottom: 2px solid #ff4081;
  padding-bottom: 0.5em;
}

.legal-content p {
  margin: 0.5em 0;
}

.legal-content p strong {
  font-weight: bold;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 1em;
}

.info-item ion-icon {
  font-size: 1.2em;
  margin-right: 0.5em;
  color: #666;
}

.info-item p {
  margin: 0;
  font-size: 1em;
}
</style>
