import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from "react-bootstrap";
import Navigation from "./components/Navigation";
import BodyContainer from "./containers/BodyContainer"

function App() {
  return (
      <>
        <Container fluid>
          <Navigation/>
          <BodyContainer />
        </Container>
      </>
  );
}

export default App;
