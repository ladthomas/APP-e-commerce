<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center">Actualités</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <main class="ion-padding">
        <ion-card
          v-for="(article, index) in articles"
          :key="index"
          class="news-card"
          @click="goToArticle(index)"
        >
          <img :src="article.image" />
          <ion-card-content>
            <p>{{ article.date }}</p>
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
            <a href="#" @click.stop.prevent="goToArticle(index)">Lire la suite...</a>
          </ion-card-content>
        </ion-card>
      </main>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent
} from '@ionic/vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
  },
  setup() {
    const router = useRouter();
    //api dois recup cela =>
    const articles = ref([
      {
        image: 'https://via.placeholder.com/150',
        date: '12/06/2024',
        title: 'Sneakers de luxe : une influence toujours plus puissante.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe repellendus aliquam sunt, ullam aperiam iusto in autem ut ex!',
      },
      {
        image: 'https://via.placeholder.com/150',
        date: '13/06/2024',
        title: 'Tendances 2024 : les baskets blanches sont concurrencées par ces sneakers faciles à porter.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe repellendus aliquam sunt, ullam aperiam iusto in autem ut ex!',
      },
      {
        image: 'https://via.placeholder.com/150',
        date: '14/06/2024',
        title: 'L\'odyssee de la basket: Comment les sneakers ont marché sur le monde',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe repellendus aliquam sunt, ullam aperiam iusto in autem ut ex!',
      },
    ]);

    const goToArticle = (index) => {
      router.push({ name: 'Article', params: { id: index } });
    };

    return {
      articles,
      goToArticle,
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
}

.news-card {
  width: 100%;
  max-width: 400px;
  margin: 1em 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.news-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

ion-card-content {
  padding: 1em;
}

ion-card-content h2 {
  font-size: 1.2em;
  font-weight: bold;
  margin: 0.5em 0;
}

ion-card-content p {
  margin: 0.5em 0;
}

ion-card-content a {
  color: #d9534f;
  text-decoration: none;
  font-weight: bold;
}
</style>
