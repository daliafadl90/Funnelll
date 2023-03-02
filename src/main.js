import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/main.css'
// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getAuth, 
         GoogleAuthProvider,
         signInWithRedirect, 
         getRedirectResult, 
         signInWithPopup } from "firebase/auth";





createApp(App).mount('#app')
