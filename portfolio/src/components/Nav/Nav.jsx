import React from "react";
import "./Nav.css"
import "../Projects/Projects.jsx"
import { IoHomeOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { Link} from "react-router-dom"

 

function Nav() {
  const handleClick = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <img src="/KP.jpeg" alt=""/>
      <h1>Khristopher Patrick</h1>
      <ul>
        <li><a href="/" className="home"><IoHomeOutline /></a></li>
      <li id="projects" onclick={handleClick}><Link to="/projects" >Projects</Link></li>
      <li><a href="https://github.com/kapatric?tab=repositories">Github</a></li>
      <li><a href="https://www.linkedin.com/in/khristopherahmad/">LinkedIn</a></li>
      <li><a href="#mail"><IoMailOutline
          className="mail"
          onClick={() => window.open("mailto:khristopherpatrick@gmail.com")}
        /></a></li>
    </ul>
    </header>
  );
}

export default Nav;