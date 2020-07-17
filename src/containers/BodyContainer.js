import React from 'react';
import './BodyContainer.css';
import ListOfContents from "./ListOfContents";
import Content from "../components/Content";
import {Col, Row} from "react-bootstrap";

export default function BodyContainer(props) {
  return (
      <Row>
        <Col md={2}>
          <ListOfContents/>
        </Col>
        <Col md={10}>
          <Content/>
        </Col>
      </Row>
  )
}
