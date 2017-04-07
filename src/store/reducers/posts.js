import { ADD_POST, ADD_LIKE } from '../../actions';

const initialState = {};

// The posts reducer function for updating the redux store
export default (state = initialState, action) => {
    const { type, value } = action;

    switch (type) {
        // Inserts the post at the top of the list
        case ADD_POST: 
            return {
                data: [{
                    ...value,
                }, ...(state.data || [])]
            };
        // Adds a like to a post
        case ADD_LIKE:
            return {
                data: state.data.map(post => {
                    return post.id !== value.id ? post : value
                })
            }
        // Always return state if nothing needs to happen
        default:
            return state;
    }
}