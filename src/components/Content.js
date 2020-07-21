import React, {useState} from 'react';
import './Content.css';
import Iframe from "react-iframe";
import Spinner from 'react-spinkit';

export default class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isLoading: true}
  }

   hideSpinner =() => {
    this.setState({
      isLoading: false
    });
  };

   showSpinner = ()=>  {
    this.setState({
      isLoading: true
    });
  };

  render() {
    const {activeLink} = this.props
    const {isLoading} = this.state
    return (
        <>
          {activeLink == "" ?
              <h1>Select a chapter and a topic under it to see the
                resources.</h1> : this.showSpinner}
          {isLoading ?
              <Spinner
                  className="loading text-center"
                  name="three-bounce"
                  color="#282c34"
                  fadeIn="none"
              /> : null}

          <Iframe
              id={"drive-link"}
              url={this.props.activeLink}
              width={'100%'}
              height={'100%'}
              frameBorder={0}
              onLoad={this.hideSpinner}
          />
        </>
    )
  }
}
