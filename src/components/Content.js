import React, { Fragment } from 'react';
import {Container, Row, ListGroup, ListGroupItem} from "react-bootstrap";
import './Content.css';
export const Content =props =>{
    return(
        <Container>
        <Row>
        {props.activeLinks.length === 0 ?
                    <h1>Select a chapter and a topic under it to see the
                        resources.</h1> : <Fragment>
                <ListGroup variant="flush">
                    {props.activeLinks.map((link)=>{
                        return <ListGroupItem>
                            <a href={link.link} target={"_blank"} rel="noopener noreferrer">{link.title}</a>
                        </ListGroupItem>
                    })};
                </ListGroup>
            </Fragment>}
        </Row>
      </Container>
    );
};

export default Content;