import React from "react";
import "../Nav/Nav.css";
import { BrowserRouter as Router } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
const url = "https://khris-react-countries.netlify.app";
const site = "https://khris-dogtopia.netlify.app";
const fuber = "https://fuber-eats.netlify.app";

function Content() {
  return (
    <Router>
      <div>
        <div className="about">
          <h2>About Me</h2>
          <hr></hr>
          <p>
            Extroverted Introvert
            <br />
            Lover of all things dark chocolate
            <br />
            California kid that migrated to NYC
          </p>

          <p>I’m a creative software engineer expanding my skills in frontend engineering with an additional interest in Android development. I have a passion for building clean, stylist sites that increase accessibility to resources to all. Melding my skill sets in software engineering and recruiting will eventually yield a better working alternative to current ATS systems.
</p>
        </div>
        <article className="projects">
          <h2>Projects</h2>
          <hr></hr>
          <div className="stuff">
            
            <div
              className="project"
              onClick={() => window.open(site, "_blank")}
              style={{
                backgroundImage: `url("https://media.tenor.com/tw52HMUGnlcAAAAM/corgi-puppy-puppies.gif")`,
              }}
            ><p className="links">Dogtopia</p>
            </div>
            
            <div
              className="project2"
              style={{ backgroundImage: `url(https://lh3.googleusercontent.com/-xMdH0DB20Ck/WnCpTDDRpOI/AAAAAAAAqsg/r847ux8JZ5Qs59kH_26PUGJGRDbsngyhgCHMYCw/s0/United-Nations-flag-wave.gif` }}
              onClick={() => window.open(url, "_blank")}
            ><p className="links">United Nations</p></div>
            
            <div
              className="project3"
              style={{
                backgroundImage: `url("https://media.tenor.com/LeSVOZJUt-oAAAAM/muuve-rider.gif")`,
              }}
              onClick={() => window.open(fuber, "_blank")}
            ><p className="links">FuberEats</p></div>
          </div>
        </article>
      </div>
      <center>
        <IoMailOutline
          className="mail"
          onClick={() => window.open("mailto:khristopherpatrick@gmail.com")}
        />{" "}
        Email Me
      </center>
    </Router>
  );
}

export default Content;
