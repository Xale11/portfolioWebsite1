import React from 'react'
import "./ProjectCard.css"
import amazonRobot from "./img/amazonRobot.jpg"
import teslaBot from "./img/teslaBot.jpg"
import bostonRobot from "./img/bostonDyna.jpg"
import { BsChevronDown, BsGithub } from "react-icons/bs"
import {BiCodeAlt} from "react-icons/bi"


const ProjectCard = ({img, title, desc, liveLink, gitHub}) => {
  return (
    <div className="projectCard">
        <div id="projectImg">
          <img src={img} alt=""/>
          <div className="layer1"><BiCodeAlt onClick={() => {window.open(liveLink)}}/><BsGithub onClick={() => {window.open(gitHub)}}/></div>
        </div>
        <div className="projectDet">
          <div id="projectName">
            <h2>{title}</h2>
          </div>
          <div id="projectDesc">
            <p>{desc}</p>
          </div>
        </div>
    </div>
  )
}

export default ProjectCard
