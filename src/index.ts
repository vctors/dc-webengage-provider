import WebEngage from "react-native-webengage";


class WebEngageProvider {
    webEngage: any;

    constructor() {
        this.webEngage = new WebEngage();
    }

    public login(userId: string) {
        this.webEngage.user(userId);
        
    }

}
