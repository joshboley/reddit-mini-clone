import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MainNav from './components/main-nav';
import Posts from './connected-components/posts';
import Post from './connected-components/post';

// The main app class that defines the base layout and routes
export default class App extends Component {

    render() {
        return (
            <div>
                <MainNav />
                
                <Route exact path="/" component={Posts} />
                <Route path="/posts" component={Posts} />
                <Route path="/post/:id" component={Post} />
            </div>
        );
    }
}