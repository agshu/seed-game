import './index.css';
import headerImg from './images/img.png';
import footerImg from './images/img2.png';
import wave from './images/wave.png';
import Navbar from './navbar.js'
import Team from './team.js'
import Demo from './demo.js'
import Images from './images'
import Section from "./section";
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  const descriptionRef = React.useRef(null);
  return (
    <div className="App animate__animated animate__fadeIn"  >
      <Navbar/>
      <div className="header"><img src={wave} className="wave-bot"></img><img src={headerImg} className="headerImg"></img></div>
      <Section id="demo" ref={descriptionRef}/><Demo />
      <Images /><Section id="project" ref={descriptionRef}/>

      <div className="project-section" data-aos="fade-up">
        <a href="" target="_blank" className="project-h1"><h1>View on Github</h1></a>
        <a href="" target="_blank" className="project-h1"><h1>Game Design Document</h1></a>
      </div>
      
      <footer className="footer">
        <img src={wave} className="wave-top"></img>
        <img src={wave} className="wave-bot"></img>
        <img src={footerImg} className="footer-img"></img>
      </footer>

      <Section id="team" ref={descriptionRef}/><Team />
    </div>
  );
}

export default App;
