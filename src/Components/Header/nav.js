import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (

      <div className="Navigation">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">ECG Toolbox</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Basics</NavItem>
              <NavItem eventKey={2} href="#">Advanced</NavItem>
              <NavItem eventKey={2} href="#">Resources</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Sign in / Sign up</NavItem>
              <NavItem eventKey={1} href="#">{new Date().toLocaleTimeString()}</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
