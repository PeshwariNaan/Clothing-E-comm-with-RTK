import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlxWdN73k8vodA6MevRXiSJkEOUTMw2ME",

  authDomain: "jds-clothing-emporium.firebaseapp.com",

  projectId: "jds-clothing-emporium",

  storageBucket: "jds-clothing-emporium.appspot.com",

  messagingSenderId: "439793486496",

  appId: "1:439793486496:web:ba6b621243face4466d7c5",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
  
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth, 
  additionalInfo = {}
  ) => {
  if(!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) { //If user snapshot doesn't exist - create userDocRef    
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  //if user data exists
  return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}