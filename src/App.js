import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from "react-bootstrap";
import Navigation from "./components/Navigation";
import BodyContainer from "./containers/BodyContainer"
import Login from "./components/Login"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSignedIn: false
    }
  }

  onSuccess = () => {
    this.setState({
      isSignedIn: true
    })
    console.log(this.state.isSignedIn);
  }

  getContent() {
    if (this.state.isSignedIn) {
      return <BodyContainer/>
    } else {
      return (
          <Login onSuccess={this.onSuccess}/>
      )
    }

  }

  render() {
    return (
        <>
          <Container fluid>
            <Navigation/>
            {this.getContent()}
          </Container>
        </>
    );
  }
}

export default App;
