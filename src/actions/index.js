export const CLICK = "CLICK";

export function clickButton(text) {
    console.log("action: ", text);
    return {
        type: CLICK,
        payload: text
    }
}