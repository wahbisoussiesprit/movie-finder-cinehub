import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { SAMPLE_MOVIES } from '../../utils/constants';
import './CategoryRow.css';

// Interview talking point: "I built a CategoryRow component that demonstrates component composition and data mapping"
const CategoryRow = ({ title, category }) => {
  // Filter movies by category (simulated)
  const filteredMovies = SAMPLE_MOVIES.filter(movie => 
    category === 'trending' ? movie.isFeatured :
    category === 'action' ? movie.genre.includes('Action') :
    category === 'comedy' ? movie.genre.includes('Comedy') :
    category === 'drama' ? movie.genre.includes('Drama') :
    true
  ).slice(0, 6); // Show max 6 movies per row

  return (
    <section className="category-row">
      <div className="category-header">
        <h2 className="category-title">
          <span className="category-icon">
            {category === 'trending' && '🔥'}
            {category === 'action' && '💥'}
            {category === 'comedy' && '😂'}
            {category === 'drama' && '🎭'}
            {category === 'top_rated' && '🏆'}
          </span>
          {title}
        </h2>
        <a href={`#${category}`} className="see-all">
          See All →
        </a>
      </div>
      
      <div className="movies-grid">
        {filteredMovies.map(movie => (
          <MovieCard 
            key={movie.id} 
            movie={movie}
            // Interview point: "I used unique keys for list items for React optimization"
          />
        ))}
      </div>
    </section>
  );
};

export default CategoryRow;