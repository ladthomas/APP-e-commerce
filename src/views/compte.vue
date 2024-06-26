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
          <img :src="user.avatar ? user.avatar : 'https://avatars.dicebear.com/api/male/john.png'" alt="Profile Picture" />
        </div>

        <h2 class="section-title">Personal Details</h2>
        <ion-item>
          <ion-label>Email Address</ion-label>
          <ion-input type="text" v-model="user.email" disabled></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Password</ion-label>
          <ion-input type="password" v-model="password" disabled></ion-input>
        </ion-item>
        <div class="change-password">
          <router-link to="/ResetPassword">Change Password</router-link>
        </div>

        <h2 class="section-title">Business Address Details</h2>
        <ion-item>
          <ion-label>Pincode</ion-label>
          <ion-input type="text" v-model="user.pincode"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Address</ion-label>
          <ion-input type="text" v-model="user.address"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>City</ion-label>
          <ion-input type="text" v-model="user.city"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>State</ion-label>
          <ion-input type="text" v-model="user.state"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Country</ion-label>
          <ion-input type="text" v-model="user.country"></ion-input>
        </ion-item>

        <h2 class="section-title">Bank Account Details</h2>
        <ion-item>
          <ion-label>Bank Account Number</ion-label>
          <ion-input type="text" v-model="user.bankAccountNumber"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Account Holder's Name</ion-label>
          <ion-input type="text" v-model="user.accountHolderName"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>IFSC Code</ion-label>
          <ion-input type="text" v-model="user.ifscCode"></ion-input>
        </ion-item>

        <ion-button expand="full" shape="round" @click="saveDetails">Save</ion-button>
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
import { ref } from "vue";

export default {
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
    const user = ref({
      avatar: 'https://avatars.dicebear.com/api/male/john.png',
      email: 'john.doe@example.com',
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

    const saveDetails = () => {
      alert("Details saved successfully (simulated)");
    };

    return {
      user,
      password,
      saveDetails,
    };
  },
};
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
