"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_webengage_1 = __importDefault(require("react-native-webengage"));
const helpers_1 = require("../helpers");
const webEngage_1 = require("../mappers/webEngage");
class WebEngageProvider {
    constructor() {
        this.name = helpers_1.PROVIDERS.wegMobile;
        this.mapper = new webEngage_1.WebEngageMapper();
        this.sdkInstance = new react_native_webengage_1.default();
    }
    instantiateClient() {
        this.sdkInstance = new react_native_webengage_1.default();
    }
    static getInstance() {
        if (!WebEngageProvider.instance) {
            WebEngageProvider.instance = new WebEngageProvider();
            return WebEngageProvider.instance;
        }
        return WebEngageProvider.instance;
    }
    login(userId) {
        this.sdkInstance.user.login(userId);
    }
    logout() {
        this.sdkInstance.user.logout();
    }
    update(data) {
        this.sendUserContext(data);
    }
    sendUserContext(data, nested = false, constructedObject = undefined) {
        const allowed = ["first_name", "last_name", "phone", "mobile", "ecommerce_id", "subject_id", "creation_date", "email", "company"];
        let object = constructedObject != undefined ? constructedObject : {};
        for (let entryKey in data) {
            if (typeof data[entryKey] == "object" && data[entryKey] != null) {
                object = Object.assign(Object.assign({}, object), this.sendUserContext(data[entryKey], true, object));
            }
            else {
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
                        object = allowed.includes(entryKey) ? Object.assign(Object.assign({}, object), { [entryKey]: data[entryKey] }) : object;
                        data[entryKey] ? this.sdkInstance.user.setAttribute(entryKey, data[entryKey]) : "";
                        break;
                }
                continue;
            }
        }
        ;
        return object;
    }
    sendEvent(eventName, eventData) {
        Object.keys(this.mapper.eventMapper).includes(eventName) ? this.mapper.eventMapper[eventName](eventData, this.sdkInstance) : "";
    }
}
exports.default = WebEngageProvider;
