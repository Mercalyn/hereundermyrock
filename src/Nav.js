import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import NavLogo from './img/logo.png';
import NavButtons from './NavButtons';
import './css/Nav.css';

function Nav() {
    return (
        <Navbar expand="sm">
            <Navbar.Brand>
                <NavLink to="/" className="navlink-button" activeClassName="navlink-selected">
                    <img src={NavLogo} id="brand-logo" alt="here under my rock logo" />
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="nav-buttons-top">
                <NavButtons />
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Nav;
