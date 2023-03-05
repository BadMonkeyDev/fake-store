import firebaseConfig from './firebase.config';
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import 'firebase/firestore';

const firebaseApp = initializeApp(firebaseConfig);
const firebaseDb = getFirestore(firebaseApp);
const firebaseAuth = getAuth(firebaseApp);

export {firebaseApp, firebaseDb, firebaseAuth}