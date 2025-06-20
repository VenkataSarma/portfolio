import React from 'react'
import about from './Assets/VVS.jpg';

function About() {
  return (
    <div>
        <div className='us'>
      <div className='me'>
        <h1 className='about'> About Me!</h1>
      </div>
      <div className='box'>
      <div className='about-image'>
        <img src={about}></img>
      </div>
      <div className='content'>
      I’m a 3rd-year B.Tech CSE-Data Science student with a passion for uncovering insights from data and building innovative solutions.
       With experience in data science, web development, and graphic design,I thrive on solving complex challenges.
        I aim to grow my technical expertise while contributing to impactful projects.
      </div></div></div>
    </div>
  )
}

export default About
