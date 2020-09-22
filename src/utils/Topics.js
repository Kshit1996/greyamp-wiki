import {
  aboutGreyampSubTopics,
  cultureAndMindsetSubTopics, greyampDigitalOfferingSubTopics,
  orgAndGovernanceSubTopics,
  peopleAndCompetenciesSubTopics,
  processAndTechnologySubTopics, researchSubTopics, resourcesSubTopics
} from "./SubTopics";
import {
  aboutGreyamp,
  cultureAndMindset, greyampDigitalOffering,
  orgAndGovernanceLinks,
  peopleAndCompetencies,
  processAndTech, research, resources
} from "./Documents";

export const topics = [{
  title: "Organisation & Governance",
  subTopics: orgAndGovernanceSubTopics,
  documents: orgAndGovernanceLinks
},
  {
    title: "People & Competencies",
    subTopics: peopleAndCompetenciesSubTopics,
    documents: peopleAndCompetencies
  },
  {
    title: "Process & Technology",
    subTopics: processAndTechnologySubTopics,
    documents: processAndTech
  },
  {
    title: "Culture & Mindset",
    subTopics: cultureAndMindsetSubTopics,
    documents: cultureAndMindset
  },
  {
    title: "Research",
    subTopics: researchSubTopics,
    documents: research
  },

  {
    title: "Greyamp Digital Offerings",
    subTopics: greyampDigitalOfferingSubTopics,
    documents: greyampDigitalOffering
  },
  {
    title: "About Greyamp",
    subTopics: aboutGreyampSubTopics,
    documents: aboutGreyamp
  },
  {
    title: "Resources",
    subTopics: resourcesSubTopics,
    documents: resources
  },
];
