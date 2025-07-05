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
      I'm a final year B.Tech CSE (Data Science) student passionate about building innovative solutions in Web Development and AI/ML.
       With hands-on experience in developing data-driven applications and intelligent systems, I enjoy turning complex problems into impactful solutions.
        I aim to grow my technical expertise while contributing to real-world projects that make a difference.


      </div></div></div>
    </div>
  )
}

export default About
