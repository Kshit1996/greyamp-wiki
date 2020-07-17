import React from 'react';
import './ListOfContents.css';
import SubSection from "../components/SubSection";

export default function ListOfContents(props) {

  const onClick=props.onClick;

  return (
      <div className={"side-navigation-panel"}>
        <SubSection chapter={"Process & Technology"}
                    subtopics={props.processAndTechnology}
                    onClick={onClick}/>
        <SubSection chapter={"Organisation & Governance"}
                    subtopics={props.orgAndGovernance}
                    onClick={onClick}/>
        <SubSection chapter={"People & Competence"}
                    subtopics={props.peopleAndCompetencies}
                    onClick={onClick}/>
        <SubSection chapter={"Culture & Mindset"}
                    subtopics={props.cultureAndMindset}
                    onClick={onClick}/>
      </div>
  )
}
