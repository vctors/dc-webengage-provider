import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";

export interface IFirebaseConfig {
    apiKey: string,
    authDomain: string,
    databaseURL: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string,
    measurementId: string,
}
export default class FirebaseInstance {
    private config: IFirebaseConfig;
    private static instance: FirebaseInstance;
    public app: FirebaseApp;
    public analytics: Analytics;
    constructor(config: IFirebaseConfig) {
        this.config = config;
        this.app = initializeApp(this.config);
        this.analytics = getAnalytics(this.app);
    }
    public static getInstance(config: IFirebaseConfig) {
        if (!FirebaseInstance.instance) {
            FirebaseInstance.instance = new FirebaseInstance(config);
        }
        return FirebaseInstance.instance;
    }

}