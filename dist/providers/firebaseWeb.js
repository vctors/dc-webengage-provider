"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = __importDefault(require("../firebase"));
const helpers_1 = require("../helpers");
const firebase_2 = require("../mappers/firebase");
class FirebaseProvider {
    constructor(firebaseConfig) {
        this.name = helpers_1.PROVIDERS.firebaseWeb;
        this.mapper = new firebase_2.firebaseMapper();
        this.config = firebaseConfig;
        this.sdkInstance = new firebase_1.default(firebaseConfig);
    }
    instantiateClient() {
        this.sdkInstance = new firebase_1.default(this.config);
    }
    static getInstance(firebaseConfig) {
        if (!FirebaseProvider.instance) {
            FirebaseProvider.instance = new FirebaseProvider(firebaseConfig);
            return FirebaseProvider.instance;
        }
        return FirebaseProvider.instance;
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
        this.sdkInstance.setUserContext(data);
    }
    sendEvent(eventName, eventData) {
        Object.keys(this.mapper.eventMapper).includes(eventName) ? this.mapper.eventMapper[eventName](eventData, this.sdkInstance) : "";
    }
}
exports.default = FirebaseProvider;
