import React, { useState, useEffect } from 'react';
import { SAMPLE_MOVIES } from '../../utils/constants';
import './Hero.css';

const Hero = () => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const featuredMovies = SAMPLE_MOVIES.filter(movie => movie.isFeatured);

  // Auto-rotate featured movies
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prev) => (prev + 1) % featuredMovies.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [featuredMovies.length]);

  const currentMovie = featuredMovies[currentMovieIndex];

  return (
    <section 
      className="hero"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${currentMovie.backdrop})`
      }}
    >
      <div className="hero-container container">
        <div className="hero-content">
          <h1 className="hero-title">{currentMovie.title}</h1>
          
          <div className="hero-meta">
            <span className="hero-rating">⭐ {currentMovie.rating}/10</span>
            <span className="hero-year">{currentMovie.year}</span>
            <span className="hero-duration">{currentMovie.duration}</span>
            <span className="hero-genre">{currentMovie.genre}</span>
          </div>
          
          <p className="hero-description">{currentMovie.description}</p>
          
          <div className="hero-actions">
            <button className="hero-btn play-btn">
              <span className="play-icon">▶</span>
              Play Now
            </button>
            <button className="hero-btn info-btn">
              <span className="info-icon">ⓘ</span>
              More Info
            </button>
          </div>
          
          <div className="hero-indicators">
            {featuredMovies.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentMovieIndex ? 'active' : ''}`}
                onClick={() => setCurrentMovieIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Gradient overlay at bottom */}
      <div className="hero-gradient"></div>
    </section>
  );
};

export default Hero;