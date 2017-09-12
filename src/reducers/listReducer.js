import { GET_LIST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_LIST:
            console.log(action.payload);
            return action.payload;

        default:
            return state;
    }
}