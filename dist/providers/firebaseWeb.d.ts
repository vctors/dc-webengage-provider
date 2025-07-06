import { IFirebaseConfig } from "../firebase";
import { IProviderMapper } from "../interfaces/mapper";
import IProvider from "../interfaces/Provider";
export default class FirebaseProvider implements IProvider<any> {
    private static instance;
    sdkInstance: any;
    private config;
    constructor(firebaseConfig: IFirebaseConfig);
    name: string;
    mapper: IProviderMapper;
    instantiateClient(): void;
    static getInstance(firebaseConfig: IFirebaseConfig): FirebaseProvider;
    login(userId: string): void;
    logout(): void;
    update(data: any): void;
    sendUserContext(data: any, nested?: boolean, constructedObject?: any): void;
    sendEvent(eventName: string, eventData: any): void;
}
