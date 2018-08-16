export const CLICK = "CLICK";

export function clickButton(text) {
    return {
        type: CLICK,
        payload: text
    }
}