import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyBlxWdN73k8vodA6MevRXiSJkEOUTMw2ME",
  
    authDomain: "jds-clothing-emporium.firebaseapp.com",
  
    projectId: "jds-clothing-emporium",
  
    storageBucket: "jds-clothing-emporium.appspot.com",
  
    messagingSenderId: "439793486496",
  
    appId: "1:439793486496:web:ba6b621243face4466d7c5"
  
  };
  
  
  // Initialize Firebase
  
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider;
  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  