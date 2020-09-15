import React from 'react';
import './ListOfContents.css';
import SubSection from "../components/SubSection";
import {chapters} from "../utils/Chapters";

export default function ListOfContents(props) {

    const onClick = props.onClick;

    return (
        <div className={"side-navigation-panel"}>
            {chapters.map((chapter,index)  => {
                return <SubSection key={index}
                                   chapter={chapter.title}
                                   subtopics={chapter.subTopics}
                                   onClick={onClick}/>
            })}
        </div>
    )
}
