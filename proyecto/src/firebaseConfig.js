import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8-5P0LFhU5-FzzE941h87coiL3JhOHQE",
  authDomain: "pokeapi2-3c906.firebaseapp.com",
  projectId: "pokeapi2-3c906",
  storageBucket: "pokeapi2-3c906.firebasestorage.app",
  messagingSenderId: "419723306021",
  appId: "1:419723306021:web:3a8883fbd182a551a50bcc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!

export { auth, db };