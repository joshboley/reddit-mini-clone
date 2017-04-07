import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Accordion, Panel } from 'react-bootstrap';

import PostList from '../components/post-list';
import PostForm from '../components/post-form';
import { watchForPosts, watchForLikes, addPost, addLike } from '../actions/posts';

// The Posts component is a connected component for displaying the new post form
// as well as the post list.
class Posts extends React.Component {

    // When the component mounts, set up our watchers for posts and likes
    componentDidMount () {
        this.props.watchForPostAdds();
        this.props.watchForPostLikes();
    }

    render () {
        return (
            <div>
                <Accordion>
                    <Panel header="Add New Post">
                        <PostForm onSubmit={this.props.onSubmit} />
                    </Panel>
                </Accordion>
                <PostList posts={this.props.posts.data} onLikeClick={post => this.props.onLikeClick(post, this.props.user)} />
            </div>
        );
    }
}

// Binds posts from state to the component's props
const mapStateToProps = state => ({
    posts: state.posts,
    user: state.user
});

// Binds functions to props allowing us to wrap them in a dispatch call.
const mapDispatchToProps = dispatch => ({
    onSubmit: (post) => {
        addPost(post).catch((err) => {
            // A less than fancy way to let
            // the user know to log in
            alert(err);
        });
    },
    onLikeClick: (post, user) => addLike(post, user.uid),
    watchForPostAdds: () => watchForPosts(dispatch),
    watchForPostLikes: () => watchForLikes(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);