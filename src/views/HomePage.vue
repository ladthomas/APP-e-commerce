<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>

        <ion-title>
          <img src="" alt="Stylish" />
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <!-- New Section -->
      <section class="new-section">
        <h2>LIVRAISON GRATUITE À PARTIR DE 200€ !</h2>
        <img src="@/ressources/top1.png" alt="New Section Image" />
        <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
          <strong>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant
            impression.</strong>
        </p>
      </section>

      <!-- Existing Content -->
      <section class="events">
        <!-- <h3>Event</h3> -->
        <ion-card>
          <ion-card-content>
            <h4>Lorem Ipsum is simply dummy text of the printing.</h4>
            <div class="center-button">
              <ion-button href="/connexion" class="pink-button">Accès Membre Stylish</ion-button>
            </div>
            <img src="@/ressources/top2.png" alt="Event" />
          </ion-card-content>
        </ion-card>
      </section>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Special Offers</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p>We make sure you get the best offers at the best prices.</p>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>New Arrivals</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p>Summer '25 Collections</p>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Sponsored</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <img src="@/ressources/top5.png" alt="Sponsored" />
        </ion-card-content>
      </ion-card>

      <section class="community">
        <!--<h3>ABONNEMENT</h3> -->
        <ion-card>
          <ion-card-content>
            <h4>ABONNEMENT</h4>
            <div class="center-button">
              <ion-button href="/abonnement" class="pink-button">abonnement</ion-button>
            </div>
            <img src="@/ressources/top6.png" alt="abonnement" />
          </ion-card-content>
        </ion-card>
      </section>
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
  IonButtons,
  IonButton,
  IonMenuButton,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from "@ionic/vue";
import { useRouter } from "vue-router";
import { defineComponent, ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { isConnected } from '../stores/'
export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonMenuButton,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  },
  setup() {
    const message = ref('Hello, Vue with Ionic!');
    const description = ref('This is a description.');
    const router = useRouter();


    const changeMessage = () => {
      message.value = 'Hello, World!';
    };

    // Similar to useEffect(() => { ... }, [])
    onMounted(() => {
      console.log('Component mounted');
      if (!isConnected()) {
        return router.push("/connexion");
      }
      // Perform actions when the component mounts
    });

    // Similar to useEffect(() => { return () => { ... } }, [])
    onBeforeUnmount(() => {
      console.log('Component will be destroyed');
      // Perform cleanup actions
    });

    // Similar to useEffect(() => { ... }, [message])
    watch(message, (newVal, oldVal) => {
      console.log(`Message changed from "${oldVal}" to "${newVal}"`);
    });

    return {
      message,
      description,
      changeMessage
    };
  }
});
</script>

<style scoped>
.new-section {
  text-align: center;
  padding: 20px;
}

.new-section img {
  width: 100%;
  border-radius: 10px;
  margin: 10px 0;
}

.events,
.community {
  padding: 16px 0;
}

.events img,
.community img {
  width: 100%;
  border-radius: 8px;
}

.center-button {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.pink-button {
  --background: #ff4081;
  --border-radius: 25px;
  color: white;
}

.pink-button:hover {
  --background: #e04080;
}
</style>
