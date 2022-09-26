import WebEngage from "react-native-webengage";
import { formatEventData } from "../helpers";
import mapper, { IProviderMapper } from "../interfaces/mapper";
import IProvider from "../interfaces/Provider";
import { WebEngageMapper } from "../mappers/webEngage";
import WebEngageWebProvider from "../providers/webEngage-web";

export default class WebEngageProvider implements IProvider<typeof WebEngage> {
    private static instance: WebEngageProvider;
    public sdkInstance: any;

    constructor() {
        this.sdkInstance = new WebEngage();
    }
    mapper: IProviderMapper = new WebEngageMapper();
    public instantiateClient() {
        this.sdkInstance = new WebEngage();
    }
    public static getInstance() {
        if (!WebEngageProvider.instance) {
            WebEngageProvider.instance = new WebEngageProvider();
            return WebEngageProvider.instance;
        }
        return WebEngageProvider.instance;
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
        const allowed: string[] = ["first_name", "last_name", "phone", "mobile", "ecommerce_id", "subject_id", "creation_date", "email", "company"];
        let object = constructedObject != undefined ? constructedObject : {};
        for (let entryKey in data) {
            if (typeof data[entryKey] == "object" && data[entryKey] != null) {
                object = { ...object, ...this.sendUserContext(data[entryKey], true, object) };
            } else {
                switch (entryKey) {
                    case "email":
                        console.log("we-email", data[entryKey]);
                        allowed.includes(entryKey) ? this.sdkInstance.user.setEmail(data[entryKey]) : "";
                        break;
                    case "phone":
                        console.log("we-phone", data[entryKey]);
                        allowed.includes(entryKey) ? this.sdkInstance.user.setPhone(data[entryKey]) : "";
                        break;
                    case "mobile":
                        console.log("we-mobile", data[entryKey]);
                        allowed.includes(entryKey) ? this.sdkInstance.user.setPhone(data[entryKey]) : "";
                        break;
                    case "first_name":
                        console.log("we-first_name", data[entryKey]);
                        allowed.includes(entryKey) ? this.sdkInstance.user.setFirstName(data[entryKey]) : "";
                        break;
                    case "last_name":
                        console.log('we-last_name', data[entryKey]);
                        allowed.includes(entryKey) ? this.sdkInstance.user.setLastName(data[entryKey]) : "";
                        break;
                    case "company":
                        console.log("we-company", data[entryKey]);
                        allowed.includes(entryKey) ? this.sdkInstance.user.setLastName(data[entryKey]) : "";
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
    public sendEvent(eventName: string, eventData: any) {
        Object.keys(this.mapper.eventMapper).includes(eventName) ? this.mapper.eventMapper[eventName as keyof mapper](eventData, this.sdkInstance) : "";
    }
}
