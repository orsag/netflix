import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAHlMDpTAHFQHJC7EYYnOdmcBkCMh62SHc',
  authDomain: 'netflix-f1488.firebaseapp.com',
  projectId: 'netflix-f1488',
  storageBucket: 'netflix-f1488.appspot.com',
  messagingSenderId: '270708763570',
  appId: '1:270708763570:web:6e68b518f24a5c69da52ab',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
