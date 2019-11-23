import { FileLoader } from "/lib/ReactThreeFiber";
import { getErrorEventMessage } from "/utils/GetErrorEventMessage";

export function loadTextFileAsync(url: string) {
    return new Promise<string>((resolve, reject) => {
        const loader = new FileLoader();
        loader.setResponseType("text");

        const onLoad = (response: string | ArrayBuffer) => {
            typeof response === "string" ? resolve(response) : reject(new Error("Invalid state"));
        };

        const onError = (event: ErrorEvent) => reject(new Error(getErrorEventMessage(event)));

        loader.load(url, onLoad, undefined, onError);
    });
}
