import React, { useState } from 'react';


const images = ['ACCENTURE.png', 'CLOUD.png', 'DBMS.png', 'EXCEL-365.png', 'DS-365.png', 'COURSERA.png', 'CISCO.png', 'HACKER.png', 'SIMPLILEARN.png', 'UDEMY.png', 'UNSTOP.png']; // Add more image file names here

function Certificates() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="certificates-container">
      <h2 className="section-title">My Certificates</h2>
      <div className="image-grid">
        {images.map((img, index) => (
          <div
            className="image-box"
            key={index}
            onClick={() => setSelectedImg(img)}
          >
            <img src={`assets/${img}`} alt={`certificate-${index}`} />
          </div>
        ))}
      </div>

      {selectedImg && (
        <div className="modal" onClick={() => setSelectedImg(null)}>
          <img src={`assets/${selectedImg}`} alt="enlarged" />
        </div>
      )}
    </div>
  );
}

export default Certificates;
