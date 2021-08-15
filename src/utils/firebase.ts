import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDqZvo3uqrqclPxPiYjS7E8hf3xSIoYWBI',
  authDomain: 'auth-development-faab3.firebaseapp.com',
  databaseURL: 'https://auth-development-faab3-default-rtdb.firebaseio.com',
  projectId: 'auth-development-faab3',
  storageBucket: 'auth-development-faab3.appspot.com',
  messagingSenderId: '838575164828',
  appId: '1:838575164828:web:33a42eca722e76a0e60c59',
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
} else {
    firebase.app()
}

const firestore = firebase.firestore()

export const mealdb = firestore.collection('mealdb')