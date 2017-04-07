import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

// The post link component that links to the external
// link provided in the post
export default class PostLink extends Component {
    render() {
        return (
            <span className="post-link">
                {this.props.link && 
                    <Button href={this.props.link} target="_blank">
                        Go To Link
                        <i className="glyphicon glyphicon-chevron-right"></i>
                    </Button>}
            </span>
        );
    }
}