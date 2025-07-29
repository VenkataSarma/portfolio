import React, { useState } from 'react';

// ✅ Import all certificate images
import accenture from './Assets/ACCENTURE.png';
import cloud from './Assets/CLOUD.png';
import dbms from './Assets/DBMS.png';
import excel from './Assets/EXCEL-365.png';
import ds from './Assets/DS-365.png';
import coursera from './Assets/COURSERA.png';
import cisco from './Assets/CISCO.png';
import hacker from './Assets/HACKER.png';
import simplilearn from './Assets/SIMPLILEARN.png';
import udemy from './Assets/UDEMY.png';
import unstop from './Assets/UNSTOP.png';
import rbi from './Assets/RBI.png';
import bootcamp from './Assets/BOOTCAMP.jpg';
import vibe from './Assets/VIBATHON.jpg';
import gfg from './Assets/GFG.png';
import info from './Assets/INFO.png';



// ✅ Create an array of objects
const images = [
  { src: accenture, alt: 'Accenture Certificate' },
  { src: cloud, alt: 'Cloud Certificate' },
  { src: dbms, alt: 'DBMS Certificate' },
  { src: excel, alt: 'Excel Certificate' },
  { src: ds, alt: 'Data Science Certificate' },
  { src: coursera, alt: 'Coursera Certificate' },
  { src: cisco, alt: 'Cisco Certificate' },
  { src: hacker, alt: 'HackerRank Certificate' },
  { src: simplilearn, alt: 'Simplilearn Certificate' },
  { src: udemy, alt: 'Udemy Certificate' },
  { src: unstop, alt: 'Unstop Certificate' },
  {src: rbi, alt:"RBI quiz participation certificate"},
  {src: bootcamp, alt: " Global AI Bootcamp "},
  {src: vibe, alt:"Vibathon participate certificate"},
  {src: gfg, alt:"GFG + SALESFORCE workshop"},
 {src: info, alt:"Infosys AI certificate"}

];

function Certificates() {
const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="certificates-container">
      <h2 className="section-title">My Certificates</h2>

      {/* Thumbnail grid */}
      <div className="image-grid">
        {images.map((img, index) => (
          <div
            className="image-box"
            key={index}
            onClick={() => setSelectedImg(img.src)}
          >
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {/* Modal view */}
      {selectedImg && (
        <div className="modal" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="enlarged certificate" />
        </div>
      )}
    </div>
  );
}

export default Certificates;
