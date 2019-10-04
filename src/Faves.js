import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './css/Home.css';

//debug only
import SampleCartoon from './img/samplecartoon.png';

//bootstrap sizes
const Xs = 12;
const Sm = 12;
const Md = 6;
const Lg = 4;

//debug only
//const fnCount = new Set();

function Faves( {match} ) {
    //modal set, close, and the info inside
    const[ show, setShow ] = useState(false);
    const handleClose = () => setShow(false);
    const[ modalInfo, setModalInfo ] = useState({
        title: 'a',
        src: 'b'
    });

    //show modal
    const handleShow = useCallback((e) => { 
        //the increment happens because index starts at 0, but 0 is reserved for the page home
        //console.dir(e);

        //update state
        setModalInfo({
            title: pics[e].name,
            src: pics[e].src
        });

        //debug only
        /*fnCount.add(handleShow);
        console.log(fnCount);*/

        //finally, show modal
        setShow(true);
    }, []); //when this is empty it will only run once when value change

    useEffect(() => {
        //after mount, if not 0 show modal, it has to be a string since it is not the number 0 but "0"
        //console.log( match.params.id );
        if( match.params.id !== "0" ){
            handleShow( 0 );
        }
    },[]);

    //baked-in-page img array
    const pics = [ 
        { name: 'Artist Dad(Sam)', src: SampleCartoon }, 
        { name: 'Artist #2', src: SampleCartoon }, 
        { name: 'Webmäster Emily', src: SampleCartoon }, 
        { name: 'Auntie Viv', src: SampleCartoon },
        { name: 'Auntie Karen', src: SampleCartoon },
        { name: 'Cousin JT', src: SampleCartoon },
        { name: 'Cousin Landon', src: SampleCartoon },
        { name: 'Cousin Daniel', src: SampleCartoon },
        { name: 'Friend Karis', src: SampleCartoon }
    ];

    

    return (
        <Container>
            <h3>Faves</h3>
            <Row>
                {
                    pics.map((item, index) => (
                    <Col key={index} xs={Xs} sm={Sm} md={Md} lg={Lg}>
                        <h5>{item.name}</h5>
                        <NavLink to={ '/faves/' + ( index + 1 ) }>
                            <img className='cartoon-cont' src={item.src} onClick={ () => handleShow(index) } alt='gallery view' />
                        </NavLink>
                    </Col>
                ))}
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalInfo.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className='cartoon-modal' src={modalInfo.src} alt='cartoon closeup' />
                    
                </Modal.Body>
            </Modal>
        </Container>
    );
}



export default Faves;
