import WebEngage from "react-native-webengage";
import { IProviderMapper } from "../interfaces/mapper";
import IProvider from "../interfaces/Provider";
export default class WebEngageProvider implements IProvider<typeof WebEngage> {
    private static instance;
    sdkInstance: any;
    constructor();
    name: string;
    mapper: IProviderMapper;
    instantiateClient(): void;
    static getInstance(): WebEngageProvider;
    login(userId: string): void;
    logout(): void;
    update(data: any): void;
    sendUserContext(data: any, nested?: boolean, constructedObject?: any): any;
    sendEvent(eventName: string, eventData: any): void;
}
