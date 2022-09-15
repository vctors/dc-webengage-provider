import { IProviderMapper } from "./mapper";
export default interface IProvider<sdkInstanceType> {
    sdkInstance: sdkInstanceType;
    instantiateClient: () => any;
    login: (userId: string) => any;
    logout: () => any;
    update: (data: any) => any;
    mapper: IProviderMapper;
}
