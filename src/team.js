import React from 'react';
import headerImg from './images/img.png';
import agnes from './images/agnesimg.jpg';
import alexander from './images/alexander.jpg';
import avelin from './images/avelin.jpg';
import gudrun from './images/gudrun.jpg';
import mood from './images/mood.jpg';

const team = () => {
    return (
      
        <div data-aos="fade-up">
          <h1 className="team-headline">The Team</h1>
          <section className="container-team">
              <div className="profile">
                  <img src={agnes} alt="profile" className="img-about"></img>
                  <h2 className="h2-profile" alt="profile image" >Agnes Shutrick</h2>
                  <p className="p-profile">agnesben@kth.se</p>
              </div>
              <div className="profile">
                  <img src={alexander} alt="profile" className="img-about"></img>
                  <h2 className="h2-profile">Alexander Danielsson</h2>
                  <p className="p-profile">aldani@kth.se</p>
              </div>
              <div className="profile">
                  <img src={gudrun} alt="profile" className="img-about"></img>
                  <h2 className="h2-profile">Guðrún Margrét Ívansdóttir</h2>
                  <p className="p-profile">gmiv@kth.se</p>
              </div>
              <div className="profile">
                  <img src={mood} alt="profile" className="img-about"></img>
                  <h2 className="h2-profile">Mahmoud Sherzad</h2>
                  <p className="p-profile">mahso@kth.se</p>
              </div>
              <div className="profile">
                  <img src={avelin} alt="profile" className="img-about"></img>
                  <h2 className="h2-profile">Ävelin Pantigoso</h2>
                  <p className="p-profile">avelinpv@kth.se</p>
              </div>
          </section>
      </div>
    )
  }

export default team