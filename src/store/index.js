import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';

import rootReducer from './reducers';

// Set up the redux store and middleware
export const store = applyMiddleware(thunk)(createStore)(rootReducer);
// Set up the history to be passed to the router
export const history = syncHistoryWithStore(createBrowserHistory(), store);