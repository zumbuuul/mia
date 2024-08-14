// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXGeVM4L2koxMe985HDjVoT0-b-FTz5Zo",
    authDomain: "mia-dev-e5236.firebaseapp.com",
    projectId: "mia-dev-e5236",
    storageBucket: "mia-dev-e5236.appspot.com",
    messagingSenderId: "553281811218",
    appId: "1:553281811218:web:d0d2819d1098a21ca639cb"
}


// Initialize Firebase
const db = getFirestore(initializeApp(firebaseConfig))

export default db