import React, {useState} from 'react';
import './SubSection.css';
import {Button, Collapse, ListGroup, Card} from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion'
import {CaretRightFill} from "react-bootstrap-icons";

export default function SubSection(props) {
  const [activeClass, setActiveClass] = useState("caret-down");

  function createListGroup(subtopics) {
    return (
        <ListGroup variant="flush">
          {subtopics.map(
              subtopic => <ListGroup.Item
                  key={subtopic}>{subtopic}</ListGroup.Item>
          )}
        </ListGroup>
    )
  }

  const changeActiveClass = () => {
    console.log(activeClass)
    if (activeClass === "caret-down") {
      setActiveClass("caret-down-click")
    } else {
      setActiveClass("caret-down")
    }
  }

  return (
      <Accordion>
        <Card>
          <Accordion.Toggle onClick={changeActiveClass} as={Card.Header}
                            variant="link"
                            eventKey={props.chapter}>
            <CaretRightFill className={activeClass}/> &nbsp; {props.chapter}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={props.chapter}>
            <Card.Body>{createListGroup(props.subtopics)}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
  )
}
