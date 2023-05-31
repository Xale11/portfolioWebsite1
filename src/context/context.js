import React, { useContext, createContext, useRef, useState } from 'react'

const ContextAPI = createContext()

const Context = ({children}) => {

    const projectData = [
        {
        img: "./img/watMovi.png",
        title:"Movie Streaming Site - watMovi",
        desc:"This is another big React project which uses the TMDb API to fetch data on movies. I used multiple React hooks and ContextAPI to manage the state between the multiple React components. The website's homepage shows the top 10 trending movies in real-time which is presented on a slideshow that shows each movie cover on a slide card. As you scroll down, you will see popular movies for each genre of movie. There is also a search bar where you search for a specific movie you. When searching for specific movies, recommended and relevant movies will also be shown in the search. Once I completed this project I had a very strong grasp of React and felt very comfortable with the front end of web development. It was clear to me that my next project would focus on the backend.",
        date: "24/05/23"
      },
      {
        img: "./img/weatherApp.png",
        title:"Weather App",
        desc:"This is another React project which used APIs to fetch data on the weather and times in different parts of the world. You use the search bar to type in the city or country of your choice and a function will be triggered which fetches data using the API based on your searched request. I completed this project to further improve my utilisation of React hooks and understand how to use APIs in React better as I faced challenges using APIs in my last React project.",
        date: "12/05/23"
      },
      {
        img: "./img/ecommerceSite.png",
        title:"Ecommerce Website",
        desc:"Here I created a fully functional e-commerce website which accepts payments through Stripe. I used the react framework, Next.js, Sanity (Backend - Headless CMS) and StripeAPI to create the website. This was my first time working on the backend, so using Sanity was a very good beginner step for me. In this project, I gained a strong understanding of how to use React Hooks (e.g. useState, useState, useRef, useContext), state management (ContextAPI) and Next.js routing. You are able to place items in a basket and state what quantity you want. Then you will be led to a stripe payment page where you can make payments. Through the stripe API, you can track who made the order, how much they made and when they made the orders. Sanity is a backend headless CMS which is used to store the products and key information attached to the product. After completing this project I had a solid foundation in JSX and React hooks and functions. Prior to this project, I had completed a 12 hr React course which is why I was able to make such a big jump from my last project.",
        date: "17/02/23"
      },
      {
        img: "./img/parallax.png",
        title:"Parallax Scrolling Effect",
        desc:"In this project, I was learning more advanced CSS and JavaScript skills to create more aesthetic webpages. As you scroll the images and words on the webpage slide across the page which gives an appealing effect to anyone viewing the page. ",
        date: "21/09/22"
      },
      {
        img: "./img/pokedex.png",
        title:"Pokedex App",
        desc:"The focus of this project was the use of APIs. More specifically, I used PokeAPI to gain access to a large data set of Pokemon and their characteristics. I used fetch to access the data as a JSON file and .json() to convert the JSON file into JavaScript. Using event listeners and javascript a list of named elements can be clicked on to reveal the description and characteristics of the Pokemon which has been clicked on.",
        date: "01/09/22"
      },
      {
        img: "./img/stopwatch.png",
        title:"Stopwatch/Timer App",
        desc:"This was the functional web application that I created. I used HTML, CSS and JavaScript. The HTML and CSS behind this project were very simple, the main aim of this project was to use JavaScript and event listeners to make the functional web app. This was a big jump in my web development journey.",
        date: "06/06/22"
      },
      {
        img: "./img/lineRobot.jpg",
        title:"Line Following Robot",
        desc:"This was my 2nd-year university robotics project. I worked in a group of 5 which was split into 3 teams for the mechanical, electrical, and programming sides of the project. I was in the electrical team and the sole member of the programming team as I was the only person who knew how to program. The robot had to follow a black line to a checkpoint and deliver a letter on top of an elevated stand. A Wheatstone bridge circuit, LDRs and LEDs were used to detect the black line that needed to be followed. The LDRs were connected to the Wheatstone bridge and placed under the robot alongside the LEDs. The resistance of the LDRs varied with light incident on it and the light incident on the surface was dependent on light reflected from the LEDs. The light reflected from the LEDs changes as it approached the line causing the LDRs to change resistance. Changing the LDRs changed the centre voltage, VG. This centre voltage was detected by a microcontroller which I programmed in C and then processed with an algorithm to determine the direction in which the robot moves in and ensure it follows the line.",
        date: "24/03/22"
      },
      {
        img: "./img/netflix.png",
        title:"Netflix Clone",
        desc:"This was near the start of my web development journey where I was learning to the basics of HTML and CSS. I recreated the Netflix home page and learned about CSS selectors, grid box, flexbox and much more. The project gave me the motivation and confidence to continue my journey in web development as I felt at the time if could make the Netflix homepage, I could create full stack websites for big companies. I quickly learned after this I had a long way to go before, I reached that point.",
        date: "09/03/22"
      },
      {
        img: "./img/remoteRobot.PNG",
        title:"Remote controlled Car",
        desc:"Here I used an Arduino Uno, Arduino Nano and NRF24 transceivers to create a remote-controlled car. I programmed the Arduino with the Arduino IDE language which is basically a simplified version of C++. The remote consisted of the Arduino nano, direction buttons and NRF24 transceiver. By pressing the buttons signals are sent to the Arduino which in turns determines the signal transmitted by the transceiver. The car consisted of the Arduino Uno, a motor driver, lithium batteries, 4 motors and the NRF24 transceiver. The signal from the remote is received through transceiver and processed in the Arduino to output a set of control parameters to the parameters to the motor drive which would power the motors. The car could drive forwards, backwards and turn left and right.",
        date: "24/02/22"
      }
      
    ]

  const slideShowData = [
    {
      img: "./img/watMovi.png",
      title:"Movie Streaming Site - watMovi",
      desc:"This is another big React project which uses the TMDb API to fetch data on movies. I used multiple React hooks and ContextAPI to manage the state between the multiple React components. The website's homepage shows the top 10 trending movies in real-time which is presented on a slideshow that shows each movie cover on a slide card. As you scroll down, you will see popular movies for each genre of movie. There is also a search bar where you search for a specific movie you. When searching for specific movies, recommended and relevant movies will also be shown in the search. Once I completed this project I had a very strong grasp of React and felt very comfortable with the front end of web development. It was clear to me that my next project would focus on the backend.",
      date: "24/05/23"
    },
    {
      img: "./img/weatherApp.png",
      title:"Weather App",
      desc:"This is another React project which used APIs to fetch data on the weather and times in different parts of the world. You use the search bar to type in the city or country of your choice and a function will be triggered which fetches data using the API based on your searched request. I completed this project to further improve my utilisation of React hooks and understand how to use APIs in React better as I faced challenges using APIs in my last React project.",
      date: "12/05/23"
    },
    {
      img: "./img/ecommerceSite.png",
      title:"Ecommerce Website",
      desc:"Here I created a fully functional e-commerce website which accepts payments through Stripe. I used the react framework, Next.js, Sanity (Backend - Headless CMS) and StripeAPI to create the website. This was my first time working on the backend, so using Sanity was a very good beginner step for me. In this project, I gained a strong understanding of how to use React Hooks (e.g. useState, useState, useRef, useContext), state management (ContextAPI) and Next.js routing. You are able to place items in a basket and state what quantity you want. Then you will be led to a stripe payment page where you can make payments. Through the stripe API, you can track who made the order, how much they made and when they made the orders. Sanity is a backend headless CMS which is used to store the products and key information attached to the product. After completing this project I had a solid foundation in JSX and React hooks and functions. Prior to this project, I had completed a 12 hr React course which is why I was able to make such a big jump from my last project.",
      date: "17/02/23"
    }
]
    const [scrollAbout, setScrollAbout] = useState(false)
    const [scrollProjects, setScrollProjects] = useState(false)
    const [scrollHome, setScrollHome] = useState(false)
    const [hoverProject, setHoverProject] = useState(false)
    const [hoverHome, setHoverHome] = useState(false)
    const [hoverAbout, setHoverAbout] = useState(false)
    const [popup, setPopup] = useState(false)

  return (
    <ContextAPI.Provider value={{popup, setPopup, hoverProject, setHoverProject, setHoverAbout, hoverAbout, setHoverHome, hoverHome ,projectData, slideShowData, scrollAbout, setScrollAbout, setScrollProjects, scrollProjects, scrollHome, setScrollHome}}>
        {children}
    </ContextAPI.Provider>
  )
}

export const useStateContext = () => useContext(ContextAPI)

export default Context