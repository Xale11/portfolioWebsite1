import React, {useState} from "react"
import "./header.css"
import { useStateContext } from "./context/context"
import {Link} from 'react-router-dom'

const Header = () => {

    const {setScrollAbout, setScrollProjects, setScrollHome, hoverProject, hoverHome, hoverAbout} = useStateContext()
    const [about, setAbout] = useState(false)
    const [home, setHome] = useState(true)
    const [project, setProject] = useState(false)

    const toggleHighlight = (focus) => {
        if (focus == "aboutme") {
            setAbout(true)
            setHome(false)
            setProject(false)
        }
        else if (focus == "home") {
            setAbout(false)
            setHome(true)
            setProject(false)
        }
        else {
            setAbout(false)
            setHome(false)
            setProject(true)
        }
    }

    return(
        <div id="header">
            <div id="headerPages">
                <Link to="/" className={`headerPage ${hoverHome&& `headerOutline`}`} id="headerHome" onClick={()=> {setScrollHome(true); toggleHighlight("home")}}><h2>Home</h2></Link>
                <Link to="/projectlist" className={`headerPage ${hoverProject&& `headerOutline`}`} onClick={()=> {toggleHighlight("project")}}><h2>Projects</h2></Link>
                <Link to="/" className={`headerPage ${hoverAbout&& `headerOutline`}`} onClick={()=> {setScrollAbout(true); toggleHighlight("aboutme")}}><h2>About Me</h2></Link>
            </div>
        </div>
    )
}

export default Header