"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatEventData = void 0;
function formatEventData(data, nested, constructedObject) {
    var _a, _b;
    if (nested === void 0) { nested = false; }
    if (constructedObject === void 0) { constructedObject = undefined; }
    var object = constructedObject != undefined ? constructedObject : {};
    for (var entryKey in data) {
        if (typeof data[entryKey] == "object" && data[entryKey] != null) {
            console.log("we-shalab", (_a = {}, _a[entryKey] = data[entryKey], _a));
            object = __assign(__assign({}, object), formatEventData(data[entryKey], true, object));
        }
        else {
            object = __assign(__assign({}, object), (_b = {}, _b[entryKey] = data[entryKey], _b));
            continue;
        }
    }
    ;
    return object;
}
exports.formatEventData = formatEventData;
