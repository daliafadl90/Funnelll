 <!-- Login Component -->
<template>
  <transition name="modal-fade">
    <div class="modal-overlay">
      <div class="modal fade show" id="exampleModalCenter" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-modal="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Login</h5>
              <button class="close" data-dismiss="modal" aria-label="Close" @click="$emit('close-modal')">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              <form action="#" class="signup-form">
                <div class="form-group mb-4">
                  <label class="mb-3 text-dark font-700" for="name">Email Address:</label>
                  <input type="text" class="form-control" id="logemail" placeholder="Email Address">
                </div>
                <div class="form-group mb-4">
                  <label class="mb-3 text-dark font-700" for="password">Password:</label>
                  <input type="password" class="form-control" id="logpassword" placeholder="password">
                </div>
                <div class="row justify-content-around">
                  <button type="submit" class="btn-main ">Login</button>
                  <button type="sumit" class="btn-main" @click="login(), $emit('close-modal')"> 
                    Log in Using Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  </transition>
</template>

<script type="module">
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChckTee5eaj5lgEDwyfMvW6TBlXr39zY4",
  authDomain: "funnelll-12.firebaseapp.com",
  projectId: "funnelll-12",
  storageBucket: "funnelll-12.appspot.com",
  messagingSenderId: "562304660484",
  appId: "1:562304660484:web:97b541e0cca3aa02af7151",
  measurementId: "G-9GGJMKJXJX"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);
export default {
  data() {
    return{
    // name:user.displayName
  }
  },
  methods: {
    login() {
      console.log('hi login');
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log('hi')
          const credential = GoogleAuthProvider.credentialFromResult(result);
          console.log(credential);
          const token = credential.accessToken;
          console.log(token)
          const user = result.user;
          alert("Hi" + user.displayName)
          // document.getElementById("login").innerHTML = "Welcome";
          // ...
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          alert("error!");
          // document.getElementById("login").innerHTML = "Welcome";
        });

    }
  }
}
</script>
<style scoped>
.modal {
  display: block;
  padding-right: 17px;
  padding-left: 17px;
  overflow: auto;
  color: #61a22e !important;
}
</style>