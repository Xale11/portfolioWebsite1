import React from 'react'
import "./Slideshow.css"
import amazonRobot from "./img/amazonRobot.jpg"
import teslaBot from "./img/teslaBot.jpg"
import bostonRobot from "./img/bostonDyna.jpg"
import { BsChevronDown, BsGithub } from "react-icons/bs"
import {BiCodeAlt} from "react-icons/bi"
import { useStateContext } from './context/context'

const Slideshow = () => {

  const {slideShowData} = useStateContext()

  return (
    <div id="slideSpace">
        <div id="cards">
          {slideShowData.map((slide, i) => {
            return <div className="card" style={{"--delay": i-1}}>
                      <div className="title">{slide.title}</div>
                      <div className="img">
                          <img src={require(`${slide.img}`)} alt="" />
                          <div className="layer2"><BiCodeAlt onClick={() => {window.open(slide.liveLink)}}/><BsGithub onClick={() => {window.open(slide.gitHub)}}/></div>
                      </div>
                  </div>
          })}

        </div>
    </div>
  )
}

export default Slideshow