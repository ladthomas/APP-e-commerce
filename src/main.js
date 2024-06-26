import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { IonicVue } from '@ionic/vue';

// Import de Ionic CSS
import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

// Import des thèmes de variables
import './theme/variables.css';

// Import des icônes
import { addIcons } from 'ionicons';
import { homeOutline, cartOutline, newspaperOutline, mailOutline, personOutline } from 'ionicons/icons';

addIcons({
  'home-outline': homeOutline,
  'cart-outline': cartOutline,
  'newspaper-outline': newspaperOutline,
  'mail-outline': mailOutline,
  'person-outline': personOutline
});

const app = createApp(App)
  .use(IonicVue)
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});
