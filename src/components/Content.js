import React from 'react';
import './Content.css';
import Iframe from "react-iframe";

export default function Content(props){
  return(
      <>
        {/*<h1>Content will appear here</h1>*/}
        <Iframe
            id={"drive-link"}
            url={props.activeLink}
            width={'100%'}
            height={'100%'}
            frameBorder={0}
        />
      </>
  )
}
