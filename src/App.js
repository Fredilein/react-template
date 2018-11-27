import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  render() {
    return (
      <div>
        <Navbar fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Cheatsheets</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
                <Nav>
                  <NavItem onClick={this.goTo.bind(this, 'home')}>Home</NavItem>
                  <NavItem onClick={this.goTo.bind(this, 'sheets')}>Sheets</NavItem>
                </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default App;
