import React from 'react';
import './ListOfContents.css';
import SubSection from "../components/SubSection";

export default function ListOfContents(props) {

  const orgAndGovernance = [
    "Community Model",
    "Strategic OKRs",
    "DSC",
    "Initiative Level JIRA Dashboards",
    "BV CV For Initiative Prioritization",
    "Initiative Inception",
    "Rapid Experimentation for Initiatives",
    "Squad Level Roles and Responsibilities"
  ]

  const processAndTechnology = [
    "Epic Standardization",
    "Delivery Communication Forums",
    "BV/CV for Project and Stories",
    "Tactical OKRs",
    "CI/CD",
    "Jira",
    "Development Tools",
    "End to End Delivery Process",
    "Project and Release Inception",
    "SAF",
    "Squad Level Roles and Responsibilities",
  ]

  const peopleAndCompetencies = [
    "Mentoring",
    "Academy",
    "IDP",
    "Career Path",
    "360 Feedback and PA",
    "Competencies for Roles",
  ]

  const cultureAndMindset = [
    "Leadership Training",
    "Digital Mindset",
    "Recognition",
  ]

  return (
      <div className={"side-navigation-panel"}>
        <SubSection chapter={"Process & Technology"}
                    subtopics={processAndTechnology}/>
        <SubSection chapter={"Organisation & Governance"}
                    subtopics={orgAndGovernance}/>
        <SubSection chapter={"People & Competence"}
                    subtopics={peopleAndCompetencies}/>
        <SubSection chapter={"Culture & Mindset"}
                    subtopics={cultureAndMindset}/>
      </div>
  )
}
