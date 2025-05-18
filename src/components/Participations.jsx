import React, { useState } from 'react';

const participationImages = [
  'hacka.jpeg',
  'hackat.jpg',
  'hod.jpg',
  'principal.jpg',
  'thub.jpg',
  'dsh.jpg',
  'microsoft.jpg',
  'praesto.jpg',
  'vis.jpg',
  'vis2.jpg',
  'vis3.jpg'
   
  // Add more image file names stored in 'public/assets'
];

const achievements = [
  'Reliance Undergraduate Scholar',
  'GATE Qualified',
  'Intern at IIT Ropar',
  'Praesto Inter College AI Hackathon Runner-Up'
];

function Participations() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="participations-container">
      <h1 className="section-title">My Participations</h1>
      <div className="image-grid">
        {participationImages.map((img, index) => (
          <div
            className="image-box"
            key={index}
            onClick={() => setSelectedImg(img)}
          >
            <img src={`assets/${img}`} alt={`participation-${index}`} />
          </div>
        ))}
      </div>

      {selectedImg && (
        <div className="modal" onClick={() => setSelectedImg(null)}>
          <img src={`assets/${selectedImg}`} alt="enlarged" />
        </div>
      )}

      <div className="achievements-box">
        <h1>My Highlights</h1>
        <ul className="animated-list">
          {achievements.map((item, index) => (
            <li key={index} className="animated-bullet">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Participations;
