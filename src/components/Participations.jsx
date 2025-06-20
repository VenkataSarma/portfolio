import React, { useState } from 'react';

// ✅ Import images from src/Assets/
import hacka from './Assets/HACKA.jpeg';
import hackat from './Assets/HACKAT.jpg';
import hod from './Assets/HOD.jpg';
import principal from './Assets/PRINCIPAL.jpg';
import thub from './Assets/THUB.jpg';
import dsh from './Assets/DSH.jpg';
import microsoft from './Assets/MICROSOFT.jpg';
import praesto from './Assets/PRAESTO.jpg';
import vis1 from './Assets/VIS.jpg';
import vis2 from './Assets/VIS2.jpg';
import vis3 from './Assets/VIS3.jpg';

// ✅ Organize image data
const participationImages = [
  { src: hacka, alt: 'Hackathon Poster' },
  { src: hackat, alt: 'Hackathon Trophy' },
  { src: hod, alt: 'With HOD' },
  { src: principal, alt: 'With Principal' },
  { src: thub, alt: 'T-Hub Event' },
  { src: dsh, alt: 'DSH Poster' },
  { src: microsoft, alt: 'Microsoft Certificate' },
  { src: praesto, alt: 'Praesto Trophy' },
  { src: vis1, alt: 'VIS Event 1' },
  { src: vis2, alt: 'VIS Event 2' },
  { src: vis3, alt: 'VIS Event 3' }
];

// ✅ Achievements list
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

      {/* Image thumbnails */}
      <div className="image-grid">
        {participationImages.map((img, index) => (
          <div
            className="image-box"
            key={index}
            onClick={() => setSelectedImg(img.src)}
          >
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {/* Enlarged modal view */}
      {selectedImg && (
        <div className="modal" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="enlarged" />
        </div>
      )}

      {/* Achievements list */}
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
