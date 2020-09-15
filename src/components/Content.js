import React, { Fragment } from 'react';
import {Container, Row, ListGroup, ListGroupItem} from "react-bootstrap";
import './Content.css';
export const Content =props =>{
    return(
        <Container>
        <Row>
        {props.documents.length === 0 ?
                    <h1>Select a chapter and a topic under it to see the
                        resources.</h1> : <Fragment>
                <ListGroup variant={"flush"}>
                    {props.documents.map((doc)=>{
                        return <ListGroupItem>
                            <a href={doc.link} target={"_blank"} rel="noopener noreferrer">{doc.title}</a>
                        </ListGroupItem>
                    })};
                </ListGroup>
            </Fragment>}
        </Row>
      </Container>
    );
};

export default Content;