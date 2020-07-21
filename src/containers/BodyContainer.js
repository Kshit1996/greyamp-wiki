import React, {useState} from 'react';
import './BodyContainer.css';
import ListOfContents from "../components/ListOfContents";
import Content from "../components/Content";
import {Col, Row} from "react-bootstrap";

export default function BodyContainer(props) {

  const [activeLink, setActiveLink] = useState("")

  const orgAndGovernance = [
    ["Community Model", ""],
    ["Strategic OKRs", ""],
    ["DSC", ""],
    ["Initiative Level JIRA Dashboards", ""],
    ["BV CV For Initiative Prioritization", ""],
    ["Initiative Inception", ""],
    ["Rapid Experimentation for Initiatives", ""],
    ["Squad Level Roles and Responsibilities", ""]
  ]

  const processAndTechnology = [
    ["Epic Standardization", ""],
    ["Delivery Communication Forums", ""],
    ["BV/CV for Project and Stories", ""],
    ["Tactical OKRs", ""],
    ["CI/CD", ""],
    ["Jira", ""],
    ["Development Tools", ""],
    ["End to End Delivery Process", ""],
    ["Project and Release Inception", ""],
    ["SAF", ""],
    ["Squad Level Roles and Responsibilities", ""]
  ]

  const peopleAndCompetencies = [
    ["Mentoring", ""],
    ["Academy",
      "https://drive.google.com/embeddedfolderview?id=1hMh75kwWG9JIc2Y5UbSS8vXatHvfxnIF"],
    ["IDP", ""],
    ["Career Path", ""],
    ["360 Feedback and PA", ""],
    ["Competencies for Roles", ""]
  ]

  const cultureAndMindset = [
    ["Leadership Training", ""],
    ["Digital Mindset", ""],
    ["Recognition", ""]
  ]

  const greyampDigitalOffering = [
  ]

  const aboutGreyamp= [

  ]

  const onClick=(chapter, subtopic)=>{
    let link = ""
    if(chapter === "Organisation & Governance"){
      link = (orgAndGovernance.filter((individualSubtopic)=>individualSubtopic[0] === subtopic))
      setActiveLink(link[0][1])
    }
    else if (chapter === "Process & Technology"){
      link = (processAndTechnology.filter((individualSubtopic)=>individualSubtopic[0] === subtopic))
      setActiveLink(link[0][1])
    }
    else if (chapter === "People & Competence"){
      link = (peopleAndCompetencies.filter((individualSubtopic)=>individualSubtopic[0] === subtopic))
      setActiveLink(link[0][1])
    }
    else if (chapter === "Culture & Mindset"){
      link = (cultureAndMindset.filter((individualSubtopic)=>individualSubtopic[0] === subtopic))
      setActiveLink(link[0][1])
    }

  }

  return (
      <Row>
        <Col md={2}>
          <ListOfContents orgAndGovernance={orgAndGovernance}
                          processAndTechnology={processAndTechnology}
                          peopleAndCompetencies={peopleAndCompetencies}
                          cultureAndMindset={cultureAndMindset}
                          greyampDigitalOffering={greyampDigitalOffering}
                          aboutGreyamp={aboutGreyamp}
                          onClick={onClick}
          />
        </Col>
        <Col md={10}>
          <Content activeLink={activeLink}/>
        </Col>
      </Row>
  )
}
