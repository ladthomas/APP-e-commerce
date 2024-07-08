<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Nos abonnements</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="offer-list">
        <div v-for="subscription in subscriptions" :key="subscription.id" class="offer-card">
          <p class="offer-title">{{ subscription.label }}</p>
          <h2 class="offer-price">{{ subscription.amount }}</h2>
          <p class="offer-description">{{ subscription.description }}</p>
          <ion-button @click="handleSubscription(subscription.id, subscription.label)" expand="block"
            class="offer-button">Choisir</ion-button>
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
  IonButton,
  IonLoading
} from '@ionic/vue';
import { defineComponent, ref, onMounted } from 'vue';
import { SubscriptionConfig, SubscriptionCreateCheckoutSession } from '../services/subscription.js'; // Replace with your actual service path

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonLoading
  },
  setup() {
    const subscriptions = ref([]);
    const isLoading = ref(false);

    const fetchSubscriptions = async () => {
      try {
        isLoading.value = true;
        const response = await SubscriptionConfig();
        subscriptions.value = response.data.abonnemantList.map((sub, index) => ({
          id: sub.id,
          label: sub.label,
          amount: sub?.price,
          description: sub?.description
        }));
      } catch (error) {
        console.error('Error fetching subscriptions:', error);
      } finally {
        isLoading.value = false;
      }
    };

    const handleSubscription = async (priceId, packageName) => {
      const success_url = 'http://localhost:5173/homepage';
      const cancel_url = 'http://localhost:5173/homepage';
      try {
        const response = await SubscriptionCreateCheckoutSession(priceId, success_url, cancel_url, packageName);
        console.log('Checkout session created:', response.data);

        if (response.data && response.data) {
          window.open(response.data?.session?.url, '_blank');
        } else {
          console.error('No redirect URL found in response:', response);
        }
      } catch (error) {
        console.error('Error creating checkout session:', error);
      }
    };

    onMounted(fetchSubscriptions);

    return {
      subscriptions,
      isLoading,
      handleSubscription
    };
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
  --background: #ff4081;
  /* Use the pink color from your screenshot */
  --border-radius: 25px;
  /* Adjusted to match the rounded style */
}
</style>
