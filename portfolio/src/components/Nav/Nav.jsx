import React from "react";
import "./Nav.css"
import face from '../../assets/KP.jpeg'
import { IoHomeOutline } from "react-icons/io5";

function Nav() {

  return (
    <header>
      <img src={face} alt=""/>
      <h1>Khristopher Patrick</h1>
      <ul>
      <li><a href="/" className="home"><IoHomeOutline /></a></li>
      <li><a href="#about">About Me</a></li>
      <li><a href="https://github.com/kapatric?tab=repositories">Projects</a></li>
      <li><a href="https://www.linkedin.com/in/khristopherahmad/">LinkedIn</a></li>
    </ul>
    </header>
  );
}

export default Nav