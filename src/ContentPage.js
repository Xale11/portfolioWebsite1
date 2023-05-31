import React from 'react'
import Home from './Home'
import Projects from './Projects'
import AboutMe from './AboutMe'
import Modal from './modal'
import { useStateContext } from './context/context'

const ContentPage = () => {

    const {setHoverProject, popup} = useStateContext()

  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        {popup && <Modal/>}
        <Home></Home>
        <Projects onMouseEnter={() => setHoverProject(true)} onMouseLeave={() => setHoverProject(false)}></Projects>
        <AboutMe></AboutMe>        
    </div>
  )
}

export default ContentPage