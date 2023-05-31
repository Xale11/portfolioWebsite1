import React, { useRef, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"
import {faAt} from "@fortawesome/free-solid-svg-icons"
import Slideshow from "./Slideshow.js"
import "./Home.css"
import { useStateContext } from './context/context.js'

const Home = () => {

  const {scrollHome, setScrollHome, setHoverHome, popup, setPopup} = useStateContext()
  const homepage = useRef()

  const autoScroll = () => {
    window.scrollTo(0,0)
    setScrollHome(false)
  }

  const showPopup = () => {
    setPopup(true)
    setTimeout(() => {setPopup(false)}, 1000)
  }

  useEffect(() => {
    autoScroll()
  }, [scrollHome])

  return (
    <div className="home" ref={homepage} onMouseEnter={() => setHoverHome(true)} onMouseLeave={() => setHoverHome(false)}>
        <div className="main">
          <div className="profile"><h1>Hi, I'm Alex</h1></div>
          <div className="desc">
            <h2>I've embarked on an exciting journey as a self-taught React developer, exploring blockchain development, and crafting captivating home robotics projects. Explore my portfolio and join me in pushing the boundaries of technology!</h2>
            <p>HTML • CSS • JAVASCRIPT • REACT • PYTHON</p>
          </div>      
          <div className="links">
            <a href="https://docs.google.com/document/d/1dkSTHttWg0RAdJYutbO9n-B8SIA9_tSkJOOiehKcoUQ/edit?usp=sharing" target="_blank" id="resume">Resume</a>
            <div id="dropdownLinks">
              <a href="https://uk.linkedin.com/in/alex-diyan-325200202" target="_blank" className="dropdownLink">
                <FontAwesomeIcon icon={faLinkedin} className="homeDropdown"/>
              </a>
              <span href="" onClick={() => {navigator.clipboard.writeText("alexdiyan@outlook.com"); showPopup()}} className="dropdownLink">
                <FontAwesomeIcon icon={faAt} className="homeDropdown"/>
                <Email></Email>
              </span>
              <a href="https://github.com/Xale11" target='_blank' className="dropdownLink">
                <FontAwesomeIcon icon={faGithub} className="homeDropdown"/>
              </a>
            </div>
        </div>            
        </div>
        <div className="slideshow">
          <Slideshow></Slideshow>
        </div>
    </div>
  )
}

const Email = () => {
  return(
    <span className="email"><p>alexdiyan@outlook.com</p></span>
  )
}

export default Home