import React from 'react';
import './Home.css';
import logo from '../assets/logo.png';
import photo from '../assets/presentation.jpg';
import background from '../assets/background.jpg';

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${background})` }}>
      <div className="scrolling-text marquee-top">
        <div className="scroll-content">
          ✨ Bienvenue sur notre site d’orientation et de développement personnel ✨
        </div>
      </div>

      <img src={logo} alt="Logo" className="rotating-logo" />

      <div className="main-content">
  <div className="left-content">
    <img src={photo} alt="Présentation" className="presentation-photo" />
  </div>

  <div className="center-content">
    <h1 className="welcome-message">
      Bienvenue sur notre site d’orientation et de développement personnel !
    </h1>
  </div>

  <div className="right-content">
    <video
      src="/ma-video.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="home-video"
    >
      Votre navigateur ne supporte pas la lecture de vidéos.
    </video>
  </div>
</div>
      <div className="scrolling-text marquee-bottom">
        <div className="scroll-content">
          🚀 Explorez votre avenir dès aujourd’hui avec nos tests et conseils personnalisés ! 🚀
        </div>
      </div>
    </div>
  );
};

export default Home;

