"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROVIDERS = exports.formatEventData = void 0;
function formatEventData(data, nested = false, constructedObject = undefined) {
    let object = constructedObject != undefined ? constructedObject : {};
    for (let entryKey in data) {
        if (typeof data[entryKey] == "object" && data[entryKey] != null) {
            console.log("we-shalab", { [entryKey]: data[entryKey] });
            object = Object.assign(Object.assign({}, object), formatEventData(data[entryKey], true, object));
        }
        else {
            object = Object.assign(Object.assign({}, object), { [entryKey]: data[entryKey] });
            continue;
        }
    }
    ;
    return object;
}
exports.formatEventData = formatEventData;
var PROVIDERS;
(function (PROVIDERS) {
    PROVIDERS["wegMobile"] = "webengageMobile";
    PROVIDERS["wegWeb"] = "webengageWeb";
    PROVIDERS["firebaseMobile"] = "firebaseMobile";
    PROVIDERS["firebaseWeb"] = "firebaseWeb";
    PROVIDERS["fbMobile"] = "facebookMobile";
})(PROVIDERS = exports.PROVIDERS || (exports.PROVIDERS = {}));
