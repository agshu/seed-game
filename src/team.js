import React from 'react';
import headerImg from './images/img.png';

const team = () => {
    return (
      
        <div data-aos="fade-up">
          <h1 className="team-headline">The Team</h1>
          <section className="container-team">
              <div className="profile">
                  <img src={headerImg} alt="profile" className="img-about"></img>
                  <h2 className="h2-profile" alt="profile image" >Agnes Shutrick</h2>
                  <p className="p-profile">agnesben@kth.se</p>
              </div>
              <div className="profile">
                  <img src={headerImg} alt="profile" className="img-about"></img>
                  <h2 className="h2-profile">Alexander Danielsson</h2>
                  <p className="p-profile">aldani@kth.se</p>
              </div>
              <div className="profile">
                  <img src={headerImg} alt="profile" className="img-about"></img>
                  <h2 className="h2-profile">Guðrún Margrét Ívansdóttir</h2>
                  <p className="p-profile">gmiv@kth.se</p>
              </div>
              <div className="profile">
                  <img src={headerImg} alt="profile" className="img-about"></img>
                  <h2 className="h2-profile">Mahmoud Sherzad</h2>
                  <p className="p-profile">mahso@kth.se</p>
              </div>
              <div className="profile">
                  <img src={headerImg} alt="profile" className="img-about"></img>
                  <h2 className="h2-profile">Ävelin Pantigoso</h2>
                  <p className="p-profile">avelinpv@kth.se</p>
              </div>
          </section>
      </div>
    )
  }

export default team