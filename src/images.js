import React from 'react'
import wave from './images/wave.png';
import level1 from './images/img8.png';
import level4 from './images/img6.png';
import final from './images/imgtree.png';

const images = () => {
  return (
    <div className="img-section">
        <img src={wave} className="wave-bot"></img>
        <img src={wave} className="wave-img"></img>
        <div className="images" data-aos="fade-up">
            <img src={level1} className="img-img"></img>
            <img src={level4} className="img-img"></img>
            <img src={final} className="img-img"></img>
        </div>
    </div>
  )
}

export default images