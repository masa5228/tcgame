import React from 'react';
import imageConfig from '../config/images';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${imageConfig.heroImage})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          {/* <h1 className="game-title">T!C!Game</h1>
          <p className="game-subtitle">トカゲー</p> */}
          <p className="catchphrase">
            朝靄の森で繰り広げる、ちょっと変わった住人たちの物語
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
