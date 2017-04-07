import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import ViewPost from '../components/view-post';
import { addLike } from '../actions/posts';

// The post component is connected to the redux store and is
// made for viewing a single post.  It simply passes the post to the ViewPost component
class Post extends React.Component {

  render () {
    return (
        <div>
            <ViewPost post={this.props.post} onLikeClick={this.props.onLikeClick} />
        </div>
    );
  }
}

// Binds the post whose id is in the URL to the 'post' property on state
const mapStateToProps = (state, ownProps) => ({
    post: state.posts.data.find(post => post.id.toString() === ownProps.match.params.id)
});

// Binds functions to props allowing us to wrap them in a dispatch call.
const mapDispatchToProps = dispatch => ({
    onLikeClick: (post) => dispatch(addLike(post))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));