import React, { Component } from 'react';
import { Nav, NavItem, Navbar, FormGroup, FormControl } from 'react-bootstrap';

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
                <Navbar.Collapse>
                    <Nav pullRight>
                        {!this.props.isLoggedIn && <NavItem onClick={this.props.onLogIn}>Log In</NavItem>}
                        {this.props.isLoggedIn && <NavItem onClick={this.props.onLogOut}>Log Out</NavItem>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}