import React from 'react';
import './Login.css';
import {Button, Col, Row} from "react-bootstrap";
import logo from '../assets/GreyampLogo.png'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <Row>
          <Col>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" width={'100'}
                   height={'100'}/>

              <p>You are not signed in. Click here to sign in.</p>
              <Button id="loginButton">Login with Google</Button>
            </header>
          </Col>
        </Row>
    )
  }
}
