import { GET_CONFIG } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_CONFIG:
            return action.payload;

        default:
            return state;
    }
}