import { IProviderMapper } from "../interfaces/mapper";
import IProvider from "../interfaces/Provider";
export default class WebEngageWebProvider implements IProvider<any> {
    private static instance;
    sdkInstance: any;
    mapper: IProviderMapper;
    constructor(sdkObject: any);
    static getInstance(sdkObject: any): WebEngageWebProvider;
    instantiateClient(): void;
    login(userId: string): void;
    logout(): void;
    update(data: any): void;
    sendUserContext(data: any, nested?: boolean, constructedObject?: any): any;
    sendEvent(eventName: any, eventData: any): void;
}
