import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../../actions';

const initialState = false;

// The posts reducer function for updating the redux store
export default (state = initialState, action) => {
    const { type, value } = action;

    switch (type) {

        case USER_LOGGED_IN: 
            return value;
        
        case USER_LOGGED_OUT:
            return false;
        
        default:
            return state;
    }
}