import React, { Component } from 'react';
import { Navbar, FormGroup, FormControl } from 'react-bootstrap';

// The main nav component for the title bar
export default class MainNav extends Component {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        Reddit Mini Clone
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
            </Navbar>
        );
    }
}