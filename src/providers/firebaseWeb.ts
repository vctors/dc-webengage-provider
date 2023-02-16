import FirebaseInstance, { IFirebaseConfig } from "../firebase";
import { PROVIDERS } from "../helpers";
import mapper, { IProviderMapper } from "../interfaces/mapper";
import IProvider from "../interfaces/Provider";
import { firebaseMapper } from "../mappers/firebase";

export default class FirebaseProvider implements IProvider<any> {
    private static instance: FirebaseProvider;
    public sdkInstance: any;
    private config: IFirebaseConfig;

    constructor(firebaseConfig: IFirebaseConfig) {
        this.config = firebaseConfig;
        this.sdkInstance = new FirebaseInstance(firebaseConfig);
    }
    public name: string = PROVIDERS.firebaseWeb;
    mapper: IProviderMapper = new firebaseMapper();
    public instantiateClient() {
        this.sdkInstance = new FirebaseInstance(this.config);
    }
    public static getInstance(firebaseConfig: IFirebaseConfig) {
        if (!FirebaseProvider.instance) {
            FirebaseProvider.instance = new FirebaseProvider(firebaseConfig);
            return FirebaseProvider.instance;
        }
        return FirebaseProvider.instance;
    }
    public login(userId: string) {
        this.sdkInstance.user.login(userId);
    }
    public logout() {
        this.sdkInstance.user.logout();
    }
    public update(data: any) {
        this.sendUserContext(data);
    }
    public sendUserContext(data: any, nested = false, constructedObject: any = undefined) {

    }
    public sendEvent(eventName: string, eventData: any) {
        Object.keys(this.mapper.eventMapper).includes(eventName) ? this.mapper.eventMapper[eventName as keyof mapper](eventData, this.sdkInstance) : "";
    }
}
