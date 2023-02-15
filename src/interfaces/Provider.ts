import IEventMapper, { IProviderMapper } from "./mapper";

export default interface IProvider<sdkInstanceType> {
    name: string,
    sdkInstance: sdkInstanceType,
    instantiateClient: () => any,
    // getInstance: () => sdkInstanceType;
    login: (userId: string) => any,
    logout: () => any,
    update: (data: any) => any,
    sendEvent: (eventName: string, eventData: any) => any,
    mapper: IProviderMapper,
}