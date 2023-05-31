import React, { useEffect, useRef } from 'react'
import "./AboutMe.css"
import { useStateContext } from './context/context'

const AboutMe = () => {
  
  const {scrollAbout, setScrollAbout, setHoverAbout} = useStateContext()
  const aboutme = useRef()

  const autoScroll = () => {
    if (scrollAbout){
      aboutme.current.scrollIntoView()
      setScrollAbout(false)
    }

  }

  useEffect(() => {
    autoScroll()
  }, [scrollAbout])

  console.log(scrollAbout)

  return (
    <div className='aboutme' ref={aboutme} onMouseEnter={() => setHoverAbout(true)} onMouseLeave={() => setHoverAbout(false)}>
      <h1 className="aboutmeHeader">About Me</h1>
      <div className="aboutmeDesc">
        <p>Hi, I'm Alex! I am an aspiring engineer with a passion for the exciting intersection of technology and innovation. Currently, I am pursuing an MEng degree in Mechatronic Engineering at Lancaster University. Mechatronics, which combines mechanical, electrical, control, and computer engineering, has been the perfect fit for my multidisciplinary interests.</p>
        <p>Throughout my academic journey, I've discovered my love for coding and its transformative power to shape the world around us. As a self-taught React developer, I have honed my skills in building intuitive and dynamic web applications. This journey has also led me to explore the fascinating realm of blockchain technology, giving me the desire to become a full-stack blockchain developer. The decentralized nature of blockchain and its potential to revolutionize various industries have captivated my imagination.</p>
        <p>Beyond my academic pursuits, I have eagerly embarked on numerous home robotics projects. These ventures have allowed me to apply my knowledge in practical ways, bringing my engineering skills to life. By combining my expertise in mechatronics, coding, and robotics, I strive to create innovative solutions that push the boundaries of what's possible.</p>
        <p>Through my portfolio website, I aim to showcase my projects and highlight my technical capabilities. It serves as a testament to my dedication and passion for web development and robotics. I firmly believe that by leveraging my skills and experience, I can make a significant impact in the field.</p>
        <p>Whether you're a prospective client seeking a reliable web development partner or a potential employer looking for a motivated and skilled professional, I invite you to explore my portfolio and witness the results of my hard work and determination. I am confident that my adaptability, problem-solving mindset, and commitment to learning will make me a valuable asset in any project or organization.</p>
        <p>Feel free to connect with me through my GitHub, CV, email, or LinkedIn. I am always excited to collaborate on new opportunities and contribute to meaningful projects that push the boundaries of technology.</p>
        <p>Thank you for visiting my website, and I look forward to connecting with you soon!</p>
      </div>
    </div>
  )
}

export default AboutMe