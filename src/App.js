import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Spinner, Row, Col } from 'react-bootstrap';
import Nav from './Nav';
import NavLeft from './NavLeft';
import './css/App.css';
import './css/Nav.css';

//lazy loads
const Home = lazy(() => import('./Home'));
const Faves = lazy(() => import('./Faves'));
const FunnyBone = lazy(() => import('./FunnyBone'));
const ParticipationTrophy = lazy(() => import('./Trophy'));
const Admin = lazy(() => import('./Admin'));

function App() {
  return (
    <Router>
      <Nav />
      <Row>
        <Col id="nav-left-col">
          <NavLeft />
        </Col>
        <Col>
          <Suspense fallback={
              <Spinner animation="grow" variant="primary">
                  <span className="sr-only">Loading...</span>
              </Spinner>
          }>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/faves/:id" component={Faves} />
                <Route path="/funnybone/:id" component={FunnyBone} />
                <Route path="/participationtrophy/:id" component={ParticipationTrophy} />
                <Route path="/admin" component={Admin} />
              </Switch>
          </Suspense>
        </Col>
      </Row>
    </Router>
  );
}

export default App;


