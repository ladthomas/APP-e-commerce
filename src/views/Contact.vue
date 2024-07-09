<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Contact</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="container">
        <h2>Contact</h2>

        <form @submit.prevent="onSubmit">
          <ion-item>
            <ion-label position="stacked">Name</ion-label>
            <ion-input v-model="contact.name"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Email</ion-label>
            <ion-input type="email" v-model="contact.email"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Message</ion-label>
            <ion-textarea v-model="contact.message"></ion-textarea>
          </ion-item>

          <ion-button expand="block" type="submit">
            Envoyer un message
          </ion-button>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonTextarea, 
  IonButton 
} from '@ionic/vue';

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton
  },
  data() {
    return {
      contact: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    onSubmit() {
      if (this.contact.name && this.contact.email && this.contact.message) {
        console.log('Contact Form Data:', this.contact);
        
      } else {
        alert('Veuillez remplir tous les champs');
      }
    }
  }
});
</script>

<style scoped>
.container {
  padding: 20px;
  text-align: center;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

ion-item {
  margin-bottom: 15px;
}

ion-button {
  --background: #ff4081;
  --border-radius: 8px;
  margin-top: 20px;
}

p {
  margin-top: 20px;
}
</style>
