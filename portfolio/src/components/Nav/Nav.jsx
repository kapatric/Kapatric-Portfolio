import React from "react";
import "./Nav.css"
import { IoHomeOutline } from "react-icons/io5";

function Nav() {

  return (
    <header>
      <img src="/KP.jpeg" alt=""/>
      <h1>Khristopher Patrick</h1>
      <ul>
      <li><a href="/" className="home"><IoHomeOutline /></a></li>
      <li><a href="https://github.com/kapatric?tab=repositories">Github</a></li>
      <li><a href="https://www.linkedin.com/in/khristopherahmad/">LinkedIn</a></li>
      <li><a href="#mail">Contact Me</a></li>
    </ul>
    </header>
  );
}

export default Nav