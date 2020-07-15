import React from 'react';
import logo from '../assets/GreyampLogo.png'
import {Navbar} from "react-bootstrap";

export default function Navigation(props) {
  return (
      <>
        <Navbar fixed={"top"} bg="dark" variant={"dark"}>
          <Navbar.Brand href="#home">
            <img
                src={logo}
                width={50}
                height={50}
                className={"d-inline-block align-top"}
                alt={"Greyamp logo"}
            />{' '}
            <Navbar.Text style={{fontColor:"white"}}>
              Greyamp Consulting : Notion Dashboard</Navbar.Text>
          </Navbar.Brand>
        </Navbar>
      </>
  )
}
