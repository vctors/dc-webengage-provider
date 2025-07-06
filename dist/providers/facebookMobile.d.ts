import { IProviderMapper } from "../interfaces/mapper";
import IProvider from "../interfaces/Provider";
export default class FacebookMobileProvider implements IProvider<any> {
    private static instance;
    sdkInstance: any;
    constructor(sdkInstance: any);
    name: string;
    mapper: IProviderMapper;
    static getInstance(sdkInstance: any): FacebookMobileProvider;
    instantiateClient: () => void;
    login: (userId: string) => void;
    logout: () => void;
    update: (data: any) => void;
    sendEvent: (eventName: string, eventData: any) => void;
}
