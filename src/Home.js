import React from 'react';
import { Container } from 'react-bootstrap';
import './css/Home.css';

//debug only
import SampleCartoon from './img/samplecartoon.png';

function Home() {
  return (
    <Container>
        <h3>Featured Cartoon</h3>
        <img className="cartoon-cont" src={SampleCartoon} alt="debug" />
        <h4>About this website</h4>
        <p>
            Maybe some cartoon will hit your funny bone
            blah blah blah
        </p>
        <h4>About the drawing dude</h4>
        <p>
            this is a section a little about the artist, 
            and you should definitely have this, dad
        </p>
    </Container>
  );
}

export default Home;

