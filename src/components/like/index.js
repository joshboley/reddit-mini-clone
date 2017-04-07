import './like.scss';

import React, { Component } from 'react';

// The like component that allows users to like things
export default class Like extends Component {
    render() {
        return (
            <span className="like" onClick={e => this.props.onLikeClick(e)}>
                {this.props.count || 0}
                <i className="glyphicon glyphicon-thumbs-up"></i>
            </span>
        );
    }
}