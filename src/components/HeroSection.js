import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './HeroSection.css';
import Button from './Button';
import homeImage from './images/homeimages.png'; // Import the image file


function HeroSection() {
 

  return (
    <div className='hero-container'>
      <div className='welcome'>
        <p>Welcome to Spotlight! </p>
      </div>
      <div className='interested'>
        <p> Interested in knowing the newest and greatest hits on Spotify?
          Check out the top 10 artists currently trending on Spotify!</p>
      </div>
      <div className='wrapper'>
        <div className='explore'>
          <br/>
          <br/>
          <p>Explore the music landscape and discover the
            hottest tracks from your favorite artists. Ready
            to delve into the newest world of music?</p>
          {/* Use Link to navigate */}
          <Link to='/artists'>
            <button className="take">TAKE ME THERE!</button>
          </Link>
        </div>
        {/* Use the imported image */}
          <img src={homeImage} alt='Home Image' className='homeimage' />
      </div>
    </div>
  );
}

export default HeroSection;
