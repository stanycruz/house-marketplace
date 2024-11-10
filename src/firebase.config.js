import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCwkoIRmmMBj4nkP72ePD26kOFeYeqOeEo',
  authDomain: 'house-marketplace-app-6216e.firebaseapp.com',
  projectId: 'house-marketplace-app-6216e',
  storageBucket: 'house-marketplace-app-6216e.appspot.com',
  messagingSenderId: '721930718776',
  appId: '1:721930718776:web:ac723bdcf218a0dbfce0cd',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
