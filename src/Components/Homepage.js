import React from "react";
import Navbar from "./Navbar";
import "../Styles/Homepage.css";
import img from "../images/Img.jpeg";
import fb from "../images/Facebook.png";
import github from "../images/Github.png";
import insta from "../images/instagram.webp";
import lnkdin from "../images/linkedIn.png";
import twtr from "../images/Twitter.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="body">
        <p className="fontt">
          Hi There,
          <br />
          I'm Mayukh <span style = {{color:"red"}}> Ghosal.</span>
          <br />
          I'm into web development.
        </p>
        <Link to='/resume'><button className="button">Resume</button></Link>

        <div className="Social">
         <Link to='https://www.facebook.com/profile.php?id=100010913777606&mibextid=ZbWKwL'> <img src={fb} className="social-image" /></Link>
          <Link to='https://github.com/MayukhGhosal'><img src={github} className="social-image" /></Link>
          <Link to='https://instagram.com/_mayukh_2414_?igshid=YmMyMTA2M2Y='><img src={insta} className="social-image" /></Link>
          <Link to='https://www.linkedin.com/in/mayukh-ghosal-4351551bb/'><img src={lnkdin} className="social-image" /></Link>
          <Link to='https://twitter.com/Mayukh2414'><img src={twtr} className="social-image" /></Link>
        </div>

        <img src={img} className="myImage" />
      </div>
    </div>
  );
}

export default Homepage;
