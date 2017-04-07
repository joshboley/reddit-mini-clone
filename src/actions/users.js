import { USER_LOGGED_IN, USER_LOGGED_OUT } from './';

// Action creator for adding a post
export function userLoggedIn (user) {
    return {
        type: USER_LOGGED_IN,
        value: user
    };
}

// Action creator for liking a post
export function userLoggedOut () {
    return {
        type: USER_LOGGED_OUT
    };
}