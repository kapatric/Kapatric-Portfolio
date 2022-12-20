import React from "react";
import "../Nav/Nav.css"
import { BrowserRouter as Router} from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
const url = "https://khris-react-countries.netlify.app"
const site = "https://khris-dogtopia.netlify.app"
const fuber = "https://fuber-eats.netlify.app"


function Content() {
  
  
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
        <article className="projects">
          <h2>Projects</h2>
          <hr></hr>
          <div className="stuff">
              <div className="project" onClick={() => window.open(site, '_blank')} style={{ backgroundImage: `url("https://www.animatedimages.org/data/media/202/animated-dog-image-0638.gif")` }}></div>
    
            <div className="project2" style={{ backgroundImage: `url(/country.jpeg)` }} onClick={() => window.open(url, '_blank')}></div>
            <div className="project3" style={{ backgroundImage: `url(/Fuber.jpeg)` }} onClick={() => window.open(fuber, '_blank')}></div>
          </div>
        </article>
      </div>
      <center>
        <IoMailOutline className="mail" onClick={() => window.open("mailto:khristopherpatrick@gmail.com")} /> Email Me
        </center>
    </Router>
  );
}

export default Content