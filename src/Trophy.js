import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './css/Home.css';

//debug only
import SampleCartoon from './img/samplecartoon.png';

//bootstrap sizes
const Xs = 12;
const Sm = 12;
const Md = 6;
const Lg = 4;



function Trophy() {
    //after mount
    useEffect(() => {
        fetchPics();
    });

    //set up the useState empty array
    const[ pics, setPics ] = useState([]);

    const fetchPics = async () => {

    };

    return (
        <Container>
            <h3>Participation Trophies</h3>
            <h5>(Gallery)</h5>
        </Container>
    );
}

export default Trophy;
