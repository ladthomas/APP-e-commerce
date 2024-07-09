<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button defaultHref="/"></ion-back-button>
                </ion-buttons>
                <ion-title>Paiement Réussi</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
            <div class="success-container">
                <ion-card class="success-card">
                    <ion-card-header>
                        <ion-card-title class="ion-text-center"
                            >Paiement Réussi</ion-card-title
                        >
                    </ion-card-header>
                    <ion-card-content>
                        <ion-text class="ion-text-center">
                            votre paiement a été effectuée avec succès.
                        </ion-text>
                        <ion-button
                            expand="full"
                            class="custom-button"
                            router-link="/"
                            >Retour à l'accueil</ion-button
                        >
                    </ion-card-content>
                </ion-card>
            </div>
        </ion-content>
    </ion-page>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

main h1 {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 1em;
}

form {
  width: 100%;
  max-width: 400px;
}

.ion-item {
  margin-bottom: 1em;
}

.forgot-password {
  margin-bottom: 1em;
}

.login-button {
  --background: #ff4081;
}

.alternative-login {
  text-align: center;
  margin-top: 1em;
}

.social-login {
  display: flex;
  justify-content: center;
  gap: 1em;
}

.create-account {
  text-align: center;
  margin-top: 1em;
}

.create-account a {
  color: #ff4081;
  text-decoration: none;
}

/* Additional styles for the success page */
.success-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.success-card {
  width: 100%;
  max-width: 400px;
  text-align: center;
  padding: 2em;
}

.custom-button {
  --background: #ff4081;
  margin-top: 1em;
}

ion-text.ion-text-center {
  display: block;
  margin-bottom: 1em;
}
</style>
