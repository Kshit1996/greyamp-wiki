import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from "react-bootstrap";
import Introduction from "./components/Introduction";
import Navigation from "./components/Navigation";

function App() {
  return (
      <>
        <Container fluid>
          <Navigation/>
          <Introduction />
          {/*</Container>*/}
          {/*<Container fluid>*/}
        </Container>
      </>
  );
}

export default App;
