import React from 'react';
import { Link } from 'react-router-dom';
import web from './Assets/WEB_DEVELOPMENT.png'
import data from './Assets/DATA_SCIENCE.png'


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
              backgroundImage: `url(${web})`,
            }}
          >
            {/* You can add text here if you want */}
          </Link>

          <Link
            to="/datascience"
            className="project data-science"
            style={{
              backgroundImage: `url(${data})`,
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
