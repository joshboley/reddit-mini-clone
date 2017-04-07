import { ADD_POST, ADD_LIKE } from '../../actions';

const initialState = {
    data: [{
        id: 1,
        title: "Post 1",
        body: "This is post 1",
        link: "https://www.google.com",
        totalLikes: 0
    }, {
        id: 2,
        title: "Post 2",
        body: "This is post 2",
        link: "https://www.yahoo.com",
        totalLikes: 0
    }]
};

// The posts reducer function for updating the redux store
export default (state = initialState, action) => {
    const { type, value } = action;

    switch (type) {
        // Inserts the post at the top of the list
        case ADD_POST: 
            return {
                data: [{
                    ...value,
                    id: state.data.length + 1,
                    totalLikes: 0
                }, ...state.data]
            };
        // Adds a like to a post
        case ADD_LIKE:
            return {
                data: state.data.map(post => {
                    return post.id !== value.id ? post : {
                        ...post,
                        totalLikes: post.totalLikes + 1
                    }
                })
            }
        // Always return state if nothing needs to happen
        default:
            return state;
    }
}