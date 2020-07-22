import React from 'react';
import './ListOfContents.css';
import SubSection from "../components/SubSection";

export default function ListOfContents(props) {

  const onClick=props.onClick;

  return (
      <div className={"side-navigation-panel"}>
        <SubSection chapter={"Organisation & Governance"}
                    subtopics={props.orgAndGovernance}
                    onClick={onClick}/>
        <SubSection chapter={"Process & Technology"}
                    subtopics={props.processAndTechnology}
                    onClick={onClick}/>
        <SubSection chapter={"People & Competence"}
                    subtopics={props.peopleAndCompetencies}
                    onClick={onClick}/>
        <SubSection chapter={"Culture & Mindset"}
                    subtopics={props.cultureAndMindset}
                    onClick={onClick}/>
        <SubSection chapter={"Resources"}
                    subtopics={props.resources}
                    onClick={onClick}/>
        <SubSection chapter={"Greyamp Digital Offering"}
                    subtopics={props.greyampDigitalOffering}
                    onClick={onClick}/>
        <SubSection chapter={"About Greyamp"}
                    subtopics={props.aboutGreyamp}
                    onClick={onClick}/>
      </div>
  )
}
