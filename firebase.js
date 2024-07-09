// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP611YhywGaZLHzx49VIn9zW4suzHYiZE",
  authDomain: "login-1810b.firebaseapp.com",
  projectId: "login-1810b",
  storageBucket: "login-1810b.appspot.com",
  messagingSenderId: "155177410701",
  appId: "1:155177410701:web:d099ea333b2d8bbc3e82c4",
  measurementId: "G-9JJ4XCQRYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();
      // Save the token to local storage
      localStorage.setItem("token", token);
      // Redirect to home page
      window.location.href = "/";
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };

export {app, auth, signInWithGoogle};