import { IProviderMapper } from "../interfaces/mapper";
import IProvider from "../interfaces/Provider";
import { facebookMobileMapper } from "../mappers/facebookMobile";
import mapper from "../interfaces/mapper";
import { PROVIDERS } from "../helpers";

export default class FacebookMobileProvider implements IProvider<any>{
    private static instance: FacebookMobileProvider;
    public sdkInstance: any;
    constructor(sdkInstance: any) {
        this.sdkInstance = sdkInstance;
    }
    public name: string = PROVIDERS.fbMobile;
    mapper: IProviderMapper = new facebookMobileMapper();
    public static getInstance(sdkInstance: any) {
        if (!FacebookMobileProvider.instance) {
            FacebookMobileProvider.instance = new FacebookMobileProvider(sdkInstance);
            return FacebookMobileProvider.instance;
        } else {
            return FacebookMobileProvider.instance;
        }
    }
    instantiateClient = () => { };
    login = (userId: string) => { };
    logout = () => { };
    update = (data: any) => { };
    sendEvent = (eventName: string, eventData: any) => {
        Object.keys(this.mapper.eventMapper).includes(eventName) ? this.mapper.eventMapper[eventName as keyof mapper](eventData, this.sdkInstance) : "";

    };

}