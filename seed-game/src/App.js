import './index.css';
import headerImg from './images/img.png';
import footerImg from './images/img2.png';
import wave from './images/wave.png';
import Navbar from './navbar.js'
import Team from './team.js'
import Demo from './demo.js'
import Images from './images'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="header"><img src={wave} className="wave-bot"></img><img src={headerImg} className="headerImg"></img></div>
      <Demo />
      <Images />

      <div className="project-section">
        <a href="" target="_blank" className="project-h1"><h1>View on Github</h1></a>
        <a href="" target="_blank" className="project-h1"><h1>Game Design Document</h1></a>
      </div>
      
      <footer className="footer">
        <img src={wave} className="wave-top"></img>
        <img src={wave} className="wave-bot"></img>
        <img src={footerImg} className="footer-img"></img>
      </footer>

        <Team />
    </div>
  );
}

export default App;
