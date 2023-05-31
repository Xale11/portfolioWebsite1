import React, { useEffect, useRef }from 'react'
import ProjectCard from './ProjectCard'
import "./Projects.css"
import {BsChevronDown, BsChevronUp} from "react-icons/bs"
import amazonRobot from "./img/amazonRobot.jpg"
import teslaBot from "./img/teslaBot.jpg"
import bostonRobot from "./img/bostonDyna.jpg"
import asimo from "./img/asimoHondaRon.jpg"
import starship from "./img/starshipBot.jpg"
import windrobo from "./img/windrobo.png"
import { useStateContext } from './context/context'
import { Link } from 'react-router-dom'

const Projects = () => {

const myRef = useRef(null)
const scrollPix = useRef(0)
const projects = useRef()
const {projectData, setScrollProjects, scrollProjects, setHoverProject} = useStateContext()

console.log(projectData)

function scrollProject(dir){
  let windowHeight = myRef.current.clientHeight
  let scrollNum = scrollPix.current + dir
  if (scrollNum > windowHeight){
    scrollNum = windowHeight
  }
  if (scrollNum < 0){
    scrollNum = 0
  }
  scrollPix.current = scrollNum
  myRef.current.scroll(0,scrollNum)
}

const autoScroll = () => {
  if (!scrollProject) {
    projects.current.scrollIntoView()
    setScrollProjects(false)
  }
    
}

useEffect(() => {
  autoScroll()
}, [scrollProjects])


  return (
    <div id="projects" ref={projects} onMouseEnter={() => setHoverProject(true)} onMouseLeave={() => setHoverProject(false)}>
      <h1 className="projectsHeader">Projects</h1>
      <div ref={myRef} id="projectContainer">
        
        {projectData.map(project =>{
          let imgData = project.img
          return <ProjectCard img={require(`${project.img}`)} title={project.title} desc={project.desc} gitHub={project.gitHub} liveLink={project.liveLink}></ProjectCard>
        })}
      </div>
      <div id="projectsButton">
        <div className="projectSvg">
          <BsChevronUp onClick={()=>{scrollProject(-300)}}/> <BsChevronDown onClick={()=>{scrollProject(300)}}/>
        </div>
        <Link to="/projectlist" className="projectLink">
          View More
        </Link>
      </div>
    </div>
  )
}



export default Projects