import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUwcprFr0vKWNQTf5qYIr1OBzj_OInn3A",
    authDomain: "coffee-store-project-61d2f.firebaseapp.com",
    projectId: "coffee-store-project-61d2f",
    storageBucket: "coffee-store-project-61d2f.firebasestorage.app",
    messagingSenderId: "82781581899",
    appId: "1:82781581899:web:4b2ed50c961cd21c6713ce"
};

const app = initializeApp(firebaseConfig);

export default app;