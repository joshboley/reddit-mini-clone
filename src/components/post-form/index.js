import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

// This post form for adding a new post to the list
export default class PostForm extends Component {
    render () {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <FormGroup>
                    <ControlLabel>Title</ControlLabel>
                    <FormControl name="title" type="text" placeholder="Enter Title" required />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Link</ControlLabel>
                    <FormControl name="link" type="text" placeholder="Enter Link" />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Post</ControlLabel>
                    <FormControl componentClass="textarea" name="body" placeholder="Enter Post" />
                </FormGroup>
                <Button type="submit">Save</Button>
            </form>
        );
    }

    // On submit, call the bound onSubmit function passing
    // the input values as an object and reset the form.
    onSubmit (e) {
        e.preventDefault();

        this.props.onSubmit({
            title: e.target.title.value,
            link: e.target.link.value,
            body: e.target.body.value
        });

        e.target.reset();  
    }
}