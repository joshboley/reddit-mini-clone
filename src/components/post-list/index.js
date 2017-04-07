import './post-list.scss';

import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import PostLink from '../post-link';
import Like from '../like';

// The post list component lists the posts bound via props
export default class PostList extends Component {
    render() {
        return (
            <div className="post-list">
                {this.props.posts && this.props.posts.length ? 
                    this.renderList(this.props.posts) :
                    <h3>Sorry, there are currently no posts to display.</h3>
                }
            </div>
        );
    }

    // Renders the list of posts
    renderList(posts) {
        return (
            <ListGroup>
                {this.props.posts.map((post) => {
                    return (
                        <ListGroupItem key={post.id}>

                            <Link to={this.props.generateLink(post)}>
                                <h3>{post.title}</h3>
                            </Link>
                            <span>{post.body}</span>
                            <Like count={post.totalLikes} onLikeClick={e => this.props.onLikeClick(post)} />
                            {post.link && <PostLink link={post.link} />}
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        );
    }
}