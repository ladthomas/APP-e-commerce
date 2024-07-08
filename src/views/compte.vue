<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-toolbar>
          <ion-title class="ion-text-center ion-align-items-center">Account</ion-title>
        </ion-toolbar>
      </ion-header>

      <main class="ion-padding">
        <div class="profile-picture">
          <img :src="user.avatar ? user.avatar : 'https://avatars.dicebear.com/api/male/john.png'"
            alt="Profile Picture" />
        </div>

        <h2 class="section-title">Personal Details</h2>
        <ion-item>
          <ion-label>Nom</ion-label>
          <ion-input type="text" v-model="user.name"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Email Address</ion-label>
          <ion-input type="text" v-model="user.email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Password</ion-label>
          <ion-input type="password" v-model="password"></ion-input>
        </ion-item>
        <br />
        <div class="change-password">
          <router-link to="/ResetPassword">Change Password</router-link>
        </div>
        <br />
        <ion-button expand="full" shape="round" @click="saveDetails">Update</ion-button>
        <br />
        <br />
        <template v-if="user.subscriptionEnd">
          <h2 class="section-title">Abonnement</h2>
          <ion-item>
            <ion-label>Abonnement actuelle</ion-label>
            <ion-input type="text" v-model="user.currentSubscription">{{ user.subscriptionPlan }}</ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Date de renouvellement</ion-label>
            <ion-input type="text" v-model="user.dateRenewSubscription">{{ user.subscriptionEnd }}</ion-input>
          </ion-item>

          <ion-button expand="full" shape="round" @click="cancelSubscription">Cancel subscription</ion-button>
          <br />
          <br />
        </template>
        <br />
        <ion-button class="" expand="full" shape="round" @click="deleteAccount">Supprimer mon compte</ion-button>
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
  IonButton,
  IonInput,
  IonItem,
  IonLabel
} from "@ionic/vue";
import { defineComponent, ref, reactive, onMounted } from "vue";
import { UpdateUser, DeleteUser, GetUser } from "../services/user.js";
import { useRouter } from "vue-router";
import { isConnected, getLocalStorage, clearAllStore } from '../stores/';
import { CancelSubscription } from '../services/subscription.js'; // Replace with your actual service path

export default defineComponent({
  name: "Account",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonInput,
    IonItem,
    IonLabel
  },
  setup() {
    const user = reactive({
      avatar: 'https://avatars.dicebear.com/api/male/john.png',
      name: "",
      email: "",
      currentSubscription: "",
      dateRenewSubscription: "",
      pincode: '123456',
      address: '123 Main St',
      city: 'Anytown',
      state: 'Anystate',
      country: 'Anycountry',
      bankAccountNumber: '123456789',
      accountHolderName: 'John Doe',
      ifscCode: 'IFSC0001'
    });

    const password = ref("********");
    const router = useRouter();

    const saveDetails = async () => {
      const userData = {
        name: user.name,
        email: user.email,
        password: password.value === "********" ? null : password.value
      };
      try {


        const response = await UpdateUser(userData);

        if (response?.data) {
          alert("Details saved successfully");
          console.log(response);
          if (userData.password) {
            clearAllStore();
          }
          window.location.reload();
        }
      } catch (error) {
        console.log(error);
        console.log(userData);
        alert("Failed to save details");
      }
    };

    const cancelSubscription = async () => {
      try {
        let resonse = await CancelSubscription()
        console.log("resonse", resonse.data?.message)
        if (resonse.data?.message) {
          alert(resonse.data?.message)
          setTimeout(() => {
            window.location.reload()
          }, 1000);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const deleteAccount = async () => {
      try {
        const response = await DeleteUser({ userId: user.id });

        if (response.data.message) {
          alert("Account deleted successfully");
          clearAllStore();
          window.location.reload();
        }
      } catch (error) {
        alert("Failed to delete account");
      }
    };

    const getDetailsUser = async (userId) => {
      try {
        const response = await GetUser(userId);

        if (response.data.id) {
          Object.assign(user, response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      if (!isConnected()) {
        router.push("/connexion");
      }
      getDetailsUser(getLocalStorage("auth")?.id);
    });

    return {
      user,
      password,
      saveDetails,
      cancelSubscription,
      deleteAccount
    };
  },
});
</script>

<style scoped>
.profile-picture {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.profile-picture img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.section-title {
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 20px;
}

.change-password {
  text-align: right;
  margin-top: 10px;
}

.change-password a {
  color: #ff4081;
  text-decoration: none;
}
</style>
