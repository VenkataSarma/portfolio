import React from 'react'
import { Link } from 'react-router-dom';

function Achievements() {
  return (
    <div id="Achievements">
   <div className='achieve'>
        <h1>My Achievements</h1>
      </div>
      <div className='extra'>
      <Link to="/certificates" className=" cert1">
          my certificates
        </Link>
        <Link to="/participations" className=" cert2">
          Participations
        </Link>
         
    </div></div>
  )
}

export default Achievements
