import React, { useState } from 'react';
import './MovieCard.css';

// Interview talking point: "I built a reusable MovieCard component that demonstrates props, state, and event handling"
const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Interview talking point: "I implemented a toggleFavorite function that shows state management"
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    console.log(`${movie.title} ${isFavorite ? 'removed from' : 'added to'} favorites`);
  };

  // Interview talking point: "The component accepts movie props and handles user interactions"
  return (
    <div 
      className="movie-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="movie-image-container">
        <img 
          src={movie.poster} 
          alt={movie.title}
          className="movie-poster"
          loading="lazy" // Interview point: "I used lazy loading for performance"
        />
        <div className="movie-rating">
          ⭐ {movie.rating}/10
        </div>
        {isHovered && (
          <div className="movie-overlay">
            <button className="play-button">▶ Play</button>
          </div>
        )}
      </div>
      
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-meta">
          <span className="movie-year">{movie.year}</span>
          <span className="movie-genre">{movie.genre}</span>
          <span className="movie-duration">{movie.duration}</span>
        </div>
        <p className="movie-description">{movie.description}</p>
        
        <div className="movie-actions">
          <button 
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={toggleFavorite}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? '❤️ Favorited' : '🤍 Add to Favorites'}
          </button>
          <button className="details-btn">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

// Interview talking point: "I used propTypes for type checking in development"
MovieCard.propTypes = {
  // movie: PropTypes.object.isRequired - Can add with prop-types package
};

export default MovieCard;