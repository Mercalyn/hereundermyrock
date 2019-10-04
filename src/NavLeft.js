import React from 'react';
import { Container } from 'react-bootstrap';
import NavButtons from './NavButtons';

function NavLeft() {
    return (
        <Container id="nav-left-container">
            <NavButtons />
        </Container>
    );
}

export default NavLeft;
