import React, { useState } from 'react';


const images = ['accenture.png', 'cloud.png', 'dbms.png', 'excel-365.png', 'ds-365.png', 'coursera.png', 'cisco.png', 'hacker.png', 'simplilearn.png', 'udemy.png', 'unstop.png']; // Add more image file names here

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
