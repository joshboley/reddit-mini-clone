import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';

// Combine any reducers here.
// All new reducers will need to be manually added.
export default combineReducers({
    posts,
    routing: routerReducer
})
