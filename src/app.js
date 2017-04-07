import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import MainNav from './components/main-nav';
import Posts from './connected-components/posts';

import { fb } from './utils/firebase';
import { userLoggedIn, userLoggedOut } from './actions/users';

// The main app class that defines the base layout and routes
class App extends Component {

    // When the component mounts, watch for changes in the auth state
    componentDidMount () {
        this.props.watchAuthChange();
    }

    render() {
        return (
            <div>
                <MainNav isLoggedIn={this.props.isLoggedIn} onLogIn={this.props.onLogIn} onLogOut={this.props.onLogOut} />

                {/* This container holds the firebase UI login widget */}
                <div id="login-container"></div>
                
                <Route exact path="/" component={Posts} />
            </div>
        );
    }
}

// Binds state to props
const mapStateToProps = state => {
    return {isLoggedIn: state.user};
};

// Binds functions to props allowing us to wrap them in a dispatch call.
const mapDispatchToProps = dispatch => {
    return {
        onLogIn: () => fb.loginUI('#login-container'),
        onLogOut: () => {
            fb.logout()
                .then(() => dispatch(userLoggedOut()))
                .catch((err) => alert(err));
        },
        watchAuthChange: () => {
            fb.watchAuthChange(user => {
                if (user) {
                    dispatch(userLoggedIn(user));
                } else {
                    dispatch(userLoggedOut());
                }
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);