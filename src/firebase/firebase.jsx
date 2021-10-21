import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDcZrOFkivCZaZPoFAEcgM0hUmnIRONeRE",
    authDomain: "expensify-app-ce49b.firebaseapp.com",
    databaseURL: "https://expensify-app-ce49b-default-rtdb.firebaseio.com",
    projectId: "expensify-app-ce49b",
    storageBucket: "expensify-app-ce49b.appspot.com",
    messagingSenderId: "1051263072115",
    appId: "1:1051263072115:web:13c2309a6e4355b642f706"
};




firebase.initializeApp(firebaseConfig);
const database= firebase.database()

database.ref().set({
    name: 'oussama',
    age: 20,
    location:{
        country:'Germany',
        city: 'Frankfurt'
    }
})

// database.ref('location/city').set({
//     city : 'Munich'
// })

// database.ref('age').remove().then( () =>
//     console.log('Removed Succesfuly!')
// ).catch(e => console.log(e));


console.log(
    database.ref().get()
)