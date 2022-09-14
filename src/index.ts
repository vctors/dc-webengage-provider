import WebEngage from "react-native-webengage";
import { formatEventData } from "./helpers";


export default class WebEngageProvider {
    private static instance: WebEngageProvider;
    private webEngage: any;

    constructor() {
        this.webEngage = new WebEngage();
    }
    public instantiateClient() {
        this.webEngage = new WebEngage();
    }
    public static getInstance() {
        if (!WebEngageProvider.instance) {
            WebEngageProvider.instance = new WebEngageProvider();
            return WebEngageProvider.instance;
        }
        return WebEngageProvider.instance;
    }
    public login(userId: string) {
        this.webEngage.user.login(userId);

    }
    public logout() {
        this.webEngage.user.logout();
    }
    public update(data: any) {
        this.sendUserContext(data);
    }
    public sendUserContext(data: any, nested = false, constructedObject: any = undefined) {
        const allowed: any = ["first_name", "last_name", "phone", "mobile", "ecommerce_id", "subject_id", "creation_date"];
        let object = constructedObject != undefined ? constructedObject : {};
        for (let entryKey in data) {
            if (typeof data[entryKey] == "object" && data[entryKey] != null) {
                object = { ...object, ...this.sendUserContext(data[entryKey], true, object) };
            } else {
                switch (entryKey) {
                    case "email":
                        console.log("we-email", data[entryKey]);
                        allowed.includes(entryKey) ? this.webEngage.user.setEmail(data[entryKey]) : "";
                        break;
                    case "phone":
                        console.log("we-phone", data[entryKey]);
                        allowed.includes(entryKey) ? this.webEngage.user.setPhone(data[entryKey]) : "";
                        break;
                    case "mobile":
                        console.log("we-mobile", data[entryKey]);
                        allowed.includes(entryKey) ? this.webEngage.user.setPhone(data[entryKey]) : "";
                        break;
                    case "first_name":
                        console.log("we-first_name", data[entryKey]);
                        allowed.includes(entryKey) ? this.webEngage.user.setFirstName(data[entryKey]) : "";
                        break;
                    case "last_name":
                        console.log('we-last_name', data[entryKey]);
                        allowed.includes(entryKey) ? this.webEngage.user.setLastName(data[entryKey]) : "";
                        break;
                    case "company":
                        console.log("we-company", data[entryKey]);
                        allowed.includes(entryKey) ? this.webEngage.user.setLastName(data[entryKey]) : "";
                        break;
                    default:
                        object = allowed.includes(entryKey) ? { ...object, [entryKey]: data[entryKey] } : object
                        data[entryKey] ? this.webEngage.user.setAttribute(entryKey, data[entryKey]) : "";
                        break;
                }
                continue;
            }
        };
        return object;
    }
    public sendEvent(eventName: string, eventData: any) {
        const formattedEventData = formatEventData(eventData);
        this.webEngage.track(eventName, formattedEventData);
    }


}
