import './view-post.scss';

import React, { Component } from 'react';

import PostLink from '../post-link';
import Like from '../like';

// The component for viewing a single post
export default class ViewPost extends Component {
    render() {
        return (
            <div className="view-post">
                {this.props.post ? 
                    this.renderPost(this.props.post) :
                    <h3>Sorry, post not found.</h3>
                }
            </div>
        );
    }

    // Renders the post markup
    renderPost(post) {
        return (
            <div>
                <h3>
                    {post.title}
                    <Like count={post.totalLikes} onLikeClick={e => this.props.onLikeClick(post)} />
                    {post.link && <PostLink link={post.link} />}
                </h3>
                <p>{post.body}</p>
            </div>
        );
    }
}