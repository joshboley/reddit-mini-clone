import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Accordion, Panel } from 'react-bootstrap';

import PostList from '../components/post-list';
import PostForm from '../components/post-form';
import { addPost, addLike } from '../actions/posts';

// The Posts component is a connected component for displaying the new post form
// as well as the post list.
class Posts extends React.Component {

    render () {
        return (
            <div>
                <Accordion>
                    <Panel header="Add New Post">
                        <PostForm onSubmit={this.props.onSubmit} />
                    </Panel>
                </Accordion>
                <PostList posts={this.props.posts.data} generateLink={this.generateLink} onLikeClick={this.props.onLikeClick} />
            </div>
        );
    }

    // The function passed to PostList
    // Builds the link for a single post so that the
    // PostList component doesn't need to have routing knowledge
    generateLink (post) {
        return `/post/${post.id}`;
    }
}

// Binds posts from state to the component's props
const mapStateToProps = state => ({
    posts: state.posts
});

// Binds functions to props allowing us to wrap them in a dispatch call.
const mapDispatchToProps = dispatch => ({
    onSubmit: (post) => dispatch(addPost(post)),
    onLikeClick: (post) => dispatch(addLike(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);