<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title class="ion-text-center">Article</ion-title>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="shareOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <main class="ion-padding">
        <ion-img :src="article.image"></ion-img>
        <div class="article-content">
          <h1>{{ article.title }}</h1>
          <div class="article-meta">
            <img :src="article.authorImage" alt="Author" />
            <p>By {{ article.author }}</p>
            <p>{{ article.time }}</p>
          </div>
          <p class="article-body">{{ article.body }}</p>
        </div>
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
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonImg
} from '@ionic/vue';
import { shareOutline } from 'ionicons/icons';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon,
    IonImg,
  },
  setup() {
    const route = useRoute();
    const articleId = route.params.id;
    const articles = [
      {
        image: 'https://via.placeholder.com/150',
        title: 'Sneakers de luxe : une influence toujours plus puissante.',
        author: 'Andy Corbley',
        authorImage: 'https://via.placeholder.com/50',
        time: '1m ago',
        body: `Avec une valeur estimée à 185.9 milliards de dollars en 2022, le marché du sportswear pourrait atteindre quelque 356 milliards d'ici dix ans,
        selon une récente étude de Market.us. Signe d'un plébiscite international pour l'activité physique ? Pas seulement.
        Si la crise du Covid a bel et bien boosté l'intérêt des consommateurs pour les activités liées au bien-être en général, elle a également stimulé la demande pour des vêtements faciles à porter, 
        chez soi comme à l'extérieur, signant l'avènement de l'athleisure. Chaussettes en éponge, pantalon de yoga, leggings ultra tech... "Le vêtement de sport ne se limite plus au domaine de la performance et des activités sportives ; il s'est parfaitement intégré dans le vestiaire du quotidien grâce à son aspect fonctionnel,
        son caractère confortable, et son style", résume Michael Jaïs, CEO de la société de brand performance Launchmetrics, à l'origine du rapport "Sportswear Insights".`,
      },
      {
        image: 'https://via.placeholder.com/150',
        title: 'Tendances 2024 : les baskets blanches sont concurrencées par ces sneakers faciles à porter',
        author: 'John Doe',
        authorImage: 'https://via.placeholder.com/50',
        time: '2m ago',
        body: `Les baskets vertes, les modèles marron et les très colorés connaissent leur heure de gloire mais elles ne remplacent évidemment pas les baskets blanches. 
        Le blanc va avec tout, est indémodable et on s'accorde sur un point : tout le monde possède une paire de baskets blanches, juste au cas où ! Même s'il est difficile de s'en lasser, avoir des baskets légèrement plus pigmentées apporte parfois la touche d'originalité dont votre look avait besoin et vous démarque également des autres. 
        Ça tombe bien, les baskets blanches entre en compétition avec ces trois coloris neutres qui ont tout pour nous plaire !`,
      },
      {
        image: 'https://via.placeholder.com/150',
        title: 'L\'odyssee de la basket: Comment les sneakers ont marché sur le monde',
        author: 'Jane Smith',
        authorImage: 'https://via.placeholder.com/50',
        time: '3m ago',
        body: `Baskets, sneakers, tennis, ou même pompes... Peu importe le nom qu'on leur donne, ces chaussures ont colonisé nos placards en l'espace de quelques décennies.
        Riches et pauvres, hommes et femmes, jeunes et vieux, la communauté des convertis grandit à 
        vue d'œil et s'affranchit de toutes les barrières sociales. À l'origine conçues pour pratiquer une activité sportive, elles se portent désormais en toutes circonstances ou presque. Chaque jour, 
        de nouveaux modèles de sneakers débarquent en magasin, proposés par des marques devenues de puissantes multinationales qui se battent pour avoir leur part d'un gâteau mondial évalué à plus de 80 milliards d'euros.
        Comment une simple chaussure de sport est-elle devenue à la fois un objet indispensable du quotidien et un accessoire de mode planétaire ? Des usines chinoises aux défilés de la Fashion Week parisienne, des boutiques tendance de New York aux marchés de la fripe d'Afrique de l'Ouest, 
        des laboratoires de recherche des grandes marques aux cargos du port de Dubaï, Pierre Demoux a suivi les traces de la basket à travers le monde pour raconter l'histoire de cette chaussure née sur les parcs et terrains de jeux de la seconde moitié du 19ème siècle. Tout au long de ce chemin se croiseront des aventures de pionniers, des rivalités familiales, 
        des succès inattendus, des échecs cuisants, des guerres marketing, des épopées industrielles, des destins de stars et d'anonymes, et parfois même de villes entières, étroitement liés à cet objet à première vue anodin. À première vue seulement. Car derrière le côté cool et ludique, l'histoire de la basket est aussi celle de la mondialisation économique 
        et de la globalisation culturelle.`,
      },
    ];
    const article = ref(articles[articleId]);

    return {
      article,
      shareOutline,
    };
  },
});
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

ion-img {
  width: 100%;
  height: auto;
}

.article-content {
  width: 100%;
  max-width: 600px;
  margin-top: 1em;
}

.article-content h1 {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 0.5em;
}

.article-meta {
  display: flex;
  align-items: center;
  margin-bottom: 1em;
}

.article-meta img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 0.5em;
}

.article-meta p {
  margin: 0;
  margin-right: 0.5em;
  font-size: 0.9em;
  color: #666;
}

.article-body {
  font-size: 1em;
  line-height: 1.5em;
}
</style>
