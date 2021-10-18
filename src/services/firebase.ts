import { initializeApp, getApps, getApp } from 'firebase/app';
import { firebaseConfig } from '@shared/configs/index';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const database = getFirestore();
const storage = getStorage();

export { app, database, storage };
