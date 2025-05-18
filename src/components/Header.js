import React from "react";

function Header() {
  return (
    <header class="header" id="header">
    <nav class="nav">
      <a href="#" class="nav__logo">My Portfolio</a>
      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
         
          <li class="nav__item"><a href="#Skills" class="nav__link">Skills</a></li>
          <li class="nav__item"><a href="#Experience" class="nav__link">Experience</a></li>
          <li class="nav__item"><a href="#Projects" class="nav__link">Projects</a></li>
          <li class="nav__item"><a href="#Achievements" class="nav__link">Achievements</a></li>
          <li class="nav__item"><a href="#Footer" class="nav__link">Contact</a></li>
          
        </ul>
      </div>
      <div class="nav__toggle" id="nav-toggle">
        <i class="bx bx-menu"></i>
      </div>
    </nav>
  </header>
  );
}

export default Header;