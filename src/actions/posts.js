import { ADD_POST } from './';
import { ADD_LIKE } from './';

// Action creator for adding a post
export function addPost (post) {
    return {
        type: ADD_POST,
        value: post
    };
}

// Action creator for liking a post
export function addLike (post) {
    return {
        type: ADD_LIKE,
        value: post
    };
}