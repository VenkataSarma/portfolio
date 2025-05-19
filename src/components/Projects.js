import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div id="Projects">
      <div>
        <div className="me">
          <h1 className="about">Projects</h1>
        </div>
        <div className="work">
          <Link
            to="/webdevelopment"
            className="project web-development"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + '/Assets/WEB_DEVELOPMENT.png'})`,
            }}
          >
            {/* You can add text here if you want */}
          </Link>

          <Link
            to="/datascience"
            className="project data-science"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + '/Assets/DATA_SCIENCE.png'})`,
            }}
          >
            {/* You can add text here if you want */}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
