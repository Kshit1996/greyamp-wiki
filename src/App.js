import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from "react-bootstrap";
import Navigation from "./components/Navigation";
import BodyContainer from "./containers/BodyContainer"
import Login from "./components/Login"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isSignedIn: false
    }
  }

  render() {
    return (
        <>
          <Container fluid>
            <Navigation/>
            {/*<BodyContainer />*/}
            <Login/>
          </Container>
        </>
    );
  }
}

export default App;
