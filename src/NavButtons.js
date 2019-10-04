import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import BtnHome from './img/btnhome.png';
import BtnFaves from './img/btnfaves.png';
import BtnMost from './img/btnmost.png';
import BtnTrophy from './img/btntrophy.png';

function NavLeft() {
    return (
        <Container className="navrow">
            <NavLink to="/" exact className="navlink-button" activeClassName="navlink-selected">
                <img src={BtnHome} className="nav-button-img" alt="home button" />
            </NavLink>
        
            <NavLink to="/faves/0" className="navlink-button" activeClassName="navlink-selected">
                <img src={BtnFaves} className="nav-button-img" alt="family favorites button" />
            </NavLink>
        
            <NavLink to="/funnybone/0" className="navlink-button" activeClassName="navlink-selected">
                <img src={BtnMost} className="nav-button-img" alt="most funny boned button" />
            </NavLink>
        
            <NavLink to="/participationtrophy/0" className="navlink-button" activeClassName="navlink-selected">
                <img src={BtnTrophy} className="nav-button-img" alt="participation trophies button" />
            </NavLink>
        </Container>
    );
}

export default NavLeft;
