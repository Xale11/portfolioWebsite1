import React, { useState, useEffect, useRef } from 'react'
import "./ProjectList.css"
import { useStateContext } from './context/context'
import { BsChevronDown, BsGithub } from "react-icons/bs"
import {BiCodeAlt} from "react-icons/bi"

const ProjectList = () => {

    const {projectData} = useStateContext()

  return (
    <div className='projectlist'>
        {projectData.map((item) => {
            return <ProjectSlide img={item.img} title={item.title} date={item.date} desc={item.desc} gitHub={item.gitHub} liveLink={item.liveLink}></ProjectSlide>
        })}
    </div>
  )
}

const ProjectSlide = ({img, title, date, desc, liveLink, gitHub}) => {

    const [extra, setExtra] = useState(false)
    const {setHoverProject} = useStateContext()
    const [speed, setSpeed] = useState(0)
    const slide = useRef()


    return (
        <div className="projectSlide" ref={slide} onMouseEnter={() => setHoverProject(true)} onMouseLeave={() => setHoverProject(false)}>
            <div className="slideMain">
                <div className="slideImg">
                    <img src={require(`${img}`)} alt="Not Available" />
                    <div className="layer"><BiCodeAlt onClick={() => {window.open(liveLink)}}/><BsGithub onClick={() => {window.open(gitHub)}}/></div>
                    <div className="slideDate">{date}</div>
                </div>
                <div className="slideDets">
                    <h1 className="slideTitle">{title}</h1>
                    <div className="slideDesc">{desc}</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectList