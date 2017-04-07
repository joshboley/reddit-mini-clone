import { ADD_POST, ADD_LIKE } from './';
import { db } from '../utils/firebase';

// References to different db objects
const dbRef = db.ref();
const dbPosts = dbRef.child('/posts');
const dbUserLikes = dbRef.child('/userlikes');

// Watches for posts added and dispatches the add post event
export function watchForPosts (dispatch) {
    dbPosts.on('child_added', (snapshot) => {
        dispatch(createAddPost({...snapshot.val()}));
    });
}

// Adds a new post to the db
export function addPost (post) {
    let newEntry = dbPosts.push();
    let key = newEntry.key;
    let value = {
        ...post,
        totalLikes: 0,
        id: key
    };

    return dbPosts.child(`/${key}`).update(value);
}

// Watches for posts to be changed (assuming likes are the only changes)
// and dispatches an add like event
export function watchForLikes (dispatch) {
    dbPosts.on('child_changed', (snapshot) => {
        dispatch(createAddLike({...snapshot.val()}));
    })
}

// Updates the like count on a post
export function addLike (post, uid) {
    if (!post) return;

    // We will read the user's likes
    let userLikes = dbUserLikes.child(`/${uid}`);

    userLikes.once('value').then((snapshot) => {
        let val = snapshot.val();
        
        // Ensure the user only likes a post once
        if (val && val[post.id]) return;

        let newObj = {
            ...post,
            totalLikes: post.totalLikes + 1
        };

        userLikes.child(post.id).set(post.id);
        dbPosts.child(`/${post.id}`).update(newObj);
    });
}

// Action creator for adding a post
function createAddPost (post) {
    return {
        type: ADD_POST,
        value: post
    };
}

// Action creator for liking a post
function createAddLike (post) {
    return {
        type: ADD_LIKE,
        value: post
    };
}