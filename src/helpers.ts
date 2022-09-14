export function formatEventData(data: any, nested = false, constructedObject: any = undefined) {
    let object = constructedObject != undefined ? constructedObject : {};
    for (let entryKey in data) {
        if (typeof data[entryKey] == "object" && data[entryKey] != null) {
            console.log("we-shalab", { [entryKey]: data[entryKey] })
            object = { ...object, ...formatEventData(data[entryKey], true, object) };
        } else {
            object = { ...object, [entryKey]: data[entryKey] };
            continue;
        }
    };
    return object;
}