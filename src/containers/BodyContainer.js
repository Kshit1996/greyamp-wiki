import React from 'react';
import './BodyContainer.css';
import ListOfContents from "../components/ListOfContents";
import Content from "../components/Content";

export default function BodyContainer(props){
  return(
      <>
        <ListOfContents/>
        <Content />
      </>
  )
}
