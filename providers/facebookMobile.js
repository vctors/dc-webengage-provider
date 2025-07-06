"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const facebookMobile_1 = require("../mappers/facebookMobile");
const helpers_1 = require("../helpers");
class FacebookMobileProvider {
    constructor(sdkInstance) {
        this.name = helpers_1.PROVIDERS.fbMobile;
        this.mapper = new facebookMobile_1.facebookMobileMapper();
        this.instantiateClient = () => { };
        this.login = (userId) => { };
        this.logout = () => { };
        this.update = (data) => { };
        this.sendEvent = (eventName, eventData) => {
            Object.keys(this.mapper.eventMapper).includes(eventName) ? this.mapper.eventMapper[eventName](eventData, this.sdkInstance) : "";
        };
        this.sdkInstance = sdkInstance;
    }
    static getInstance(sdkInstance) {
        if (!FacebookMobileProvider.instance) {
            FacebookMobileProvider.instance = new FacebookMobileProvider(sdkInstance);
            return FacebookMobileProvider.instance;
        }
        else {
            return FacebookMobileProvider.instance;
        }
    }
}
exports.default = FacebookMobileProvider;
