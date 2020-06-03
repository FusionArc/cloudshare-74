import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data.
const config = {
  apiKey: 'AIzaSyDzRhWbIyyySOEZ6VomZ35am0CaUahOVmk',
  authDomain: 'cloudshare-74.firebaseapp.com',
  databaseURL: 'https://cloudshare-74.firebaseio.com',
  projectId: 'cloudshare-74',
  storageBucket: 'cloudshare-74.appspot.com',
  messagingSenderId: '1050660809007',
  appId: '1:1050660809007:web:d4c81385e562c24707d9da',
  measurementId: 'G-8JEXJ0Q10N'
}
firebase.initializeApp(config)
