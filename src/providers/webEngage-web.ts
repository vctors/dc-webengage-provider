import mapper, { IProviderMapper } from "../interfaces/mapper";
import IProvider from "../interfaces/Provider";
import { WebEngageMapper } from "../mappers/webEngage";

export default class WebEngageWebProvider implements IProvider<any>{
    private static instance: WebEngageWebProvider;
    sdkInstance: any;
    mapper: IProviderMapper = new WebEngageMapper();
    constructor(sdkObject: any) {
        this.sdkInstance = sdkObject;
    }
    public static getInstance(sdkObject: any) {
        if (!WebEngageWebProvider.instance) {
            WebEngageWebProvider.instance = new WebEngageWebProvider(sdkObject)
        }
        return WebEngageWebProvider.instance;
    }
    public instantiateClient() {

    };
    public login(userId: string) {
        this.sdkInstance.user.login(userId);
    };
    public logout() {
        this.sdkInstance.user.logout();
    };
    public update(data: any) {
        this.sendUserContext(data);
    };
    public sendUserContext(data: any, nested = false, constructedObject: any = undefined) {
        const allowed: string[] = ["first_name", "last_name", "phone", "mobile", "ecommerce_id", "subject_id", "creation_date", "email", "company"];
        let object = constructedObject != undefined ? constructedObject : {};
        for (let entryKey in data) {
            if (typeof data[entryKey] == "object" && data[entryKey] != null) {
                object = { ...object, ...this.sendUserContext(data[entryKey], true, object) };
            } else {
                switch (entryKey) {
                    case "email":
                        console.log("we-email", data[entryKey]);
                        allowed.includes(entryKey) ? this.sdkInstance.user.setAttribute("we_email", data[entryKey]) : "";
                        break;
                    case "phone":
                        console.log("we-phone", data[entryKey]);
                        allowed.includes(entryKey) ? this.sdkInstance.user.setAttribute("we_phone", data[entryKey]) : "";
                        break;
                    case "mobile":
                        console.log("we-mobile", data[entryKey]);
                        allowed.includes(entryKey) ? this.sdkInstance.user.setAttribute("we_phone", data[entryKey]) : "";
                        break;
                    case "first_name":
                        console.log("we-first_name", data[entryKey]);
                        allowed.includes(entryKey) ? this.sdkInstance.user.setAttribute("we_first_name", data[entryKey]) : "";
                        break;
                    case "last_name":
                        console.log('we-last_name', data[entryKey]);
                        allowed.includes(entryKey) ? this.sdkInstance.user.setAttribute("we_last_name", data[entryKey]) : "";
                        break;
                    case "company":
                        console.log("we-company", data[entryKey]);
                        allowed.includes(entryKey) ? this.sdkInstance.user.setAttribute("we_company", data[entryKey]) : "";
                        break;
                    default:
                        object = allowed.includes(entryKey) ? { ...object, [entryKey]: data[entryKey] } : object
                        data[entryKey] ? this.sdkInstance.user.setAttribute(entryKey, data[entryKey]) : "";
                        break;
                }
                continue;
            }
        };
        return object;
    }
    public sendEvent(eventName: any, eventData: any) {
        Object.keys(this.mapper.eventMapper).includes(eventName) ? this.mapper.eventMapper[eventName as keyof mapper](eventData, this.sdkInstance) : "";
    };

}