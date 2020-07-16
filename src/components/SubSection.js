import React, {useState} from 'react';
import './SubSection.css';
import {Button, Collapse, ListGroup, Card} from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion'

export default function SubSection(props) {
  const [open, setOpen] = useState(false);

  function createListGroup(subtopics) {
    return (
        <ListGroup>
          {subtopics.map(
              subtopic => <ListGroup.Item
                  key={subtopic}>{subtopic}</ListGroup.Item>
          )}
        </ListGroup>
    )
  }

  return (
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link"
                            eventKey={props.chapter}>
            {props.chapter}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={props.chapter}>
            <Card.Body>{createListGroup(props.subtopics)}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
  )
}
