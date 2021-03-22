import React, { useContext, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { userContext } from '../../App';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const linkStyle = { textDecoration: 'none', color: 'white', fontWeight: 'bold' }
  const history = useHistory();
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Navbar.Brand><Link to="/home" style={linkStyle}>Urban riders</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">

        </Nav>
        <Nav>
          <Nav.Link> <Link to="/home" style={linkStyle}>Home</Link></Nav.Link>
          <Nav.Link> <Link to="/destination" style={linkStyle}>Destination</Link></Nav.Link>
          <Nav.Link> <Link to="/contact" style={linkStyle}>Contact</Link></Nav.Link>
          <Nav.Link> <Link to="/blog" style={linkStyle}>Blog</Link></Nav.Link>
          <Nav.Link eventKey={2} href="#memes" style={linkStyle}>
            <span>{loggedInUser.email ? loggedInUser.email : ''}</span>
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes" style={linkStyle}>
            <div className="user-login">
              {loggedInUser.email || loggedInUser.name ? <span onClick={() => setLoggedInUser({})}>Log out</span> : <span onClick={() => history.push('/user')}>Login</span>}
            </div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;