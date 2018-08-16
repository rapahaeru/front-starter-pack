import { CLICK } from '../actions/index';

export default function(state = "", action) {
    // console.log("reducer: ", action);
    switch(action.type) {
        case CLICK:
            return action.payload;
        default:
            return state;
    }
}