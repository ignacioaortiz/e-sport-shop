import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAuIUofUF_o9XSD7hyclCoKO0xPSP5L5Hc',
  authDomain: 'e-sports-shop.firebaseapp.com',
  projectId: 'e-sports-shop',
  storageBucket: 'e-sports-shop.appspot.com',
  messagingSenderId: '108125733341',
  appId: '1:108125733341:web:9063734d27e0c95283f634',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
