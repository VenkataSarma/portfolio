import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
  FaPython, FaChartBar, FaChartLine, FaJava, FaBootstrap
} from "react-icons/fa";
import {
  SiTypescript, SiExpress, SiMongodb, SiNumpy, SiPandas, SiTableau,
  SiAdobephotoshop, SiCanva, SiCapcut, SiPicsart, SiPlotly
} from "react-icons/si";

const skillsCategories = [
  {
    category: "Technical Skills",
    skills: [
      { name: "Python", icon: <FaPython className="skill-icon" /> },
      { name: "Cloud Computing", icon: <FaDatabase className="skill-icon" /> },{ name: "JavaScript", icon: <FaJs className="skill-icon" /> },
      { name: "TypeScript", icon: <SiTypescript className="skill-icon" /> }
    ],
  },
  {
    category: "Web Development",
    skills: [
      
      { name: "React", icon: <FaReact className="skill-icon" /> },
      { name: "Express.js", icon: <SiExpress className="skill-icon" /> },
      { name: "Node.js", icon: <FaNodeJs className="skill-icon" /> },
      { name: "MongoDB", icon: <SiMongodb className="skill-icon" /> },
      { name: "SQL", icon: <FaDatabase className="skill-icon" /> },
    ],
  },
  {
    category: "Data Science",
    skills: [
      { name: "Excel", icon: <FaChartBar className="skill-icon" /> },
      { name: "Power BI", icon: <FaChartBar className="skill-icon" /> },
      { name: "Pandas", icon: <SiPandas className="skill-icon" /> },
      { name: "Matplotlib", icon: <FaChartLine className="skill-icon" /> },
      { name: "Seaborn", icon: <SiPlotly className="skill-icon" /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <div id="Skills" className="skills-container">
      <div className='title'>
        <h1>Skills</h1>
      </div>
      {skillsCategories.map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category.category}</h3>
          <div className="skills-grid">
            {category.skills.map((skill, i) => (
              <div key={i} className="skill-box">
                {skill.icon}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
