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
        <Link to="/webdevelopment" className="project web-development">
          
        </Link>
        <Link to="/datascience" className="project data-science">
           
        </Link>
         
      </div>
    </div></div>
  );
}

export default Projects;
