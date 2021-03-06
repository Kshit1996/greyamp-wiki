import React, {useState} from 'react';
import './SubSection.css';
import {ListGroup, Card} from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion'
import {CaretRightFill} from "react-bootstrap-icons";

export default function SubSection(props) {
  const [activeClass, setActiveClass] = useState("caret-down");

  function createListGroup(subtopics) {
    return (
        <ListGroup variant="flush">
          {subtopics.map(
              subtopic => <ListGroup.Item action={true}
                  key={subtopic}
                  onClick={() => props.onClick(props.chapter, subtopic)}>
                {subtopic}
              </ListGroup.Item>
          )}
        </ListGroup>
    )
  }

  const changeActiveClass = () => {
    if (activeClass === "caret-down") {
      setActiveClass("caret-down-click")
    } else {
      setActiveClass("caret-down")
    }
  }

  return (
      <Accordion className={"chapter"}>
        <Card>
          <Accordion.Toggle onClick={changeActiveClass} as={Card.Header}
                            variant="link"
                            eventKey={props.chapter}>
            <CaretRightFill
                className={activeClass}/><b> &nbsp; {props.chapter}</b>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={props.chapter}>
            <Card.Body>{createListGroup(props.subtopics)}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
  )
}
