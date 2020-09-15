import React, {useState} from 'react';
import './BodyContainer.css';
import ListOfContents from "../components/ListOfContents";
import Content from "../components/Content";
import {Col, Row} from "react-bootstrap";
import {chapters} from "../utils/Chapters";

export default function BodyContainer() {

    const [documents, setDocuments] = useState([]);

    const onClick = (selectedChapter, subtopic) => {
        chapters.forEach(chapter => {
                if (chapter.title === selectedChapter) {
                    const documentLinks = chapter.documents.filter(individualSubtopic => individualSubtopic.subTopic === subtopic)[0]?.documents;
                    documentLinks ? setDocuments(documentLinks) : setDocuments([]);
                }
            }
        );
    }

    return (
        <Row>
            <Col md={2}>
                <ListOfContents
                    onClick={onClick}
                />
            </Col>
            <Col md={10}>
                <Content documents={documents}/>
            </Col>
        </Row>
    )
}
