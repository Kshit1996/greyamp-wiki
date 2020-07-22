import React, {useState} from 'react';
import './BodyContainer.css';
import ListOfContents from "../components/ListOfContents";
import Content from "../components/Content";
import {Col, Row} from "react-bootstrap";

export default function BodyContainer(props) {

  const [activeLink, setActiveLink] = useState("")

  const orgAndGovernance = [
    ["Community Model", ""],
    ["Strategic OKRs", "https://drive.google.com/embeddedfolderview?id=1Ht8-TR4a8BxutmUSpUSLXJB5g_bHDyrd"],
    ["DSC", ""],
    ["Initiative Level JIRA Dashboards", ""],
    ["BV CV For Strategic and Release OKRs", ""],
    ["Strategic Level Inception", "https://drive.google.com/embeddedfolderview?id=14HtLVqxkwsq4fFo_mT8NEKyUu3hR_wfo"],
    ["Rapid Experimentation for Initiatives", ""],
    ["Roles and Responsibilities", "https://drive.google.com/embeddedfolderview?id=1NkvzIG7cxDwBhRVhgJof6orNt3ggenqD"]
  ]

  const processAndTechnology = [
    ["Epic Standardization", ""],
    ["Delivery Communication Forums", ""],
    ["BV/CV for Strategic and Release Level OKRs", "https://drive.google.com/embeddedfolderview?id=1LRYtewmXrXUA9mRnexPZUHU75oGAVXCJ"],
    ["Tactical OKRs", ""],
    ["CI/CD", ""],
    ["Jira", ""],
    ["Development Tools", ""],
    ["End to End Delivery Process", ""],
    ["Project and Release Inception", "https://drive.google.com/embeddedfolderview?id=1jXaHs4VDyl9tyh91IrIyDhwACBTW5ejw"],
    ["SAF", ""],
    ["Squad Level Roles and Responsibilities", ""]
  ]

  const peopleAndCompetencies = [
    ["Mentoring", ""],
    ["Academy",
      "https://drive.google.com/embeddedfolderview?id=17nKldjOsCg6BWlEd0B6-YT3oPkfIh4MK"],
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

  const resources= [
    ["GA Templates","https://drive.google.com/embeddedfolderview?id=1CXYGP5TfP4jPkmebw5QpYm80o1g9-Daw"],
    ["Decks (AKA Ducks)","https://drive.google.com/embeddedfolderview?id=1XJ2Wr3GMLDd7pUGmUPbKrILJdaaKk_qG"],
    ["Image Library","https://drive.google.com/embeddedfolderview?id=1h0mMQLfK5wZRae9q5uucn_coTCcW2qXF#grid"]
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
    else if (chapter === "Resources"){
      link = (resources.filter((individualSubtopic)=>individualSubtopic[0] === subtopic))
      setActiveLink(link[0][1])
    }
    else if (chapter === "Greyamp Digital Offering"){
      link = (greyampDigitalOffering.filter((individualSubtopic)=>individualSubtopic[0] === subtopic))
      setActiveLink(link[0][1])
    }
    else if (chapter === "About Greyamp"){
      link = (aboutGreyamp.filter((individualSubtopic)=>individualSubtopic[0] === subtopic))
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
                          resources={resources}
                          onClick={onClick}
          />
        </Col>
        <Col md={10}>
          <Content activeLink={activeLink}/>
        </Col>
      </Row>
  )
}
