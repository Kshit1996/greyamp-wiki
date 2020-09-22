import React from 'react';
import './Login.css';
import {Col, Row} from "react-bootstrap";
import logo from '../assets/GreyampLogo.png'

export default class Login extends React.Component {

  insertGapiScript() {
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/platform.js'
    script.onload = () => {
      this.initializeGoogleSignIn()
    }
    document.body.appendChild(script)
  }

  initializeGoogleSignIn() {
    window.gapi.load('client:auth2', () => {
      // eslint-disable-next-line no-undef
      this.auth2 = gapi.auth2.init({
        client_id: '600276182087-pr5eu2cp57t6k2ag60g7cgld0ajkkt7t.apps.googleusercontent.com',
      })

      window.gapi.load('signin2', () => {
        const params = {
          onsuccess: () => {
            this.props.onSuccess()
          }
        }
        window.gapi.signin2.render('loginButton', params)
      })

    })

  }

  componentDidMount() {
    this.insertGapiScript();
  }

  render() {
    return (
        <Row>
          <Col md={{span: 4, offset: 4}} className={'login'}>
            <img src={logo} className="App-logo" alt="logo" width={'100'}
                 height={'100'}/>

            <p>You are not signed in. Click here to sign in.</p>
            <a id="loginButton">Login with Google</a>
          </Col>
        </Row>
    )
  }
}

