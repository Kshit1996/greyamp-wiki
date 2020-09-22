import React from 'react';
import './ListOfContents.css';
import SubSection from "../components/SubSection";
import {topics} from "../utils/Topics";

export default function ListOfContents(props) {

    const onClick = props.onClick;

    return (
        <div className={"side-navigation-panel"}>
            {topics.map((chapter, index)  => {
                return <SubSection key={index}
                                   chapter={chapter.title}
                                   subtopics={chapter.subTopics}
                                   onClick={onClick}/>
            })}
        </div>
    )
}
