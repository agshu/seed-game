import React from 'react';
import ScrollToButton from './scrollToButton';

const navbar = () => {
  return (
    <nav className="navbar">
        <ScrollToButton toId="demo"><div className="navbar-headline">
            The Game
        </div></ScrollToButton>
        <ScrollToButton toId="project"><div className="navbar-headline">
            The Project
        </div></ScrollToButton>
        <ScrollToButton toId="team"><div className="navbar-headline">
            The Team
        </div></ScrollToButton>
    </nav>
  )
}

export default navbar