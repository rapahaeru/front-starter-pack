import { CLICK } from '../actions/index';

const contentClicked = "alecrim dourado";

export default function(state = contentClicked, action) {
    switch(action.type) {
        case CLICK:
            return action.payload;
        default:
            return state;
    }
}