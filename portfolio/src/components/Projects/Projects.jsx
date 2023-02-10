import React from "react";
const url = "https://khris-react-countries.netlify.app";
const site = "https://khris-dogtopia.netlify.app";
const fuber = "https://fuber-eats.netlify.app";


export default function Projects() {
  return (
    <article id="things">
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
  )
}
