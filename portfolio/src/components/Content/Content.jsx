import React from "react";
import "../Nav/Nav.css"
import { BrowserRouter as Router, Link} from "react-router-dom";
import image from "/Users/khristopherpatrick/sei/projects/Kapatric-Portfolio/portfolio/src/assets/dog.jpeg"
import image2 from "/Users/khristopherpatrick/sei/projects/Kapatric-Portfolio/portfolio/src/assets/country.jpeg"



function Content() {
  

  const handleClick = () => {
    console.log('I was clicked')
    
  }
  
  return (
    <Router>
      <div>
        <div className="about">
          <h2>About Me</h2>
          <hr></hr>
          <p>Extroverted Introvert<br />
            Lover of all things dark chocolate<br />
            California kid that migrated to NYC</p>
        </div>
        <article id="projects">
          <h2>Projects</h2>
          <hr></hr>
          <div className="stuff">
            <div className="project" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="project2" style={{ backgroundImage: `url(${image2})` }} onClick={event => handleClick(event)}></div>
            <div className="project3"></div>
          </div>
        </article>
      </div>
    </Router>
  );
}

export default Content