import React from 'react';

function Education() {
  return (
    <div>
      {/* Education title OUTSIDE the box */}
      <h1 className="education-title">Education</h1>

      {/* Outer box for education cards */}
      <div className="education-container">
        <div className="whole">
          <div className="Tech">
            <h1 className="degree">B.Tech</h1>
            <h2 className="clg-name">Malla Reddy Engineering College</h2>
            <h3 className="city">Hyderabad</h3>
            <h3 className="year">2022-2026</h3>
            <h3 className="year">CGPA: 9.44</h3>
          </div>

          <div className="Tech">
            <h1 className="degree">Intermediate</h1>
            <h2 className="clg-name">SR Junior College</h2>
            <h3 className="city">Hyderabad</h3>
            <h3 className="year">2020-2022</h3>
            <h3 className="year">%: 95.8</h3>
          </div>

          <div className="Tech">
            <h1 className="degree">10th Class</h1>
            <h2 className="clg-name">Jaya High School</h2>
            <h3 className="city">Suryapet</h3>
            <h3 className="year">2019-2020</h3>
            <h3 className="year">CGPA: 10</h3>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Education;
