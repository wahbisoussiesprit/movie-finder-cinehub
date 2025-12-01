import { useState, useEffect } from 'react';
import { SAMPLE_MOVIES } from '../utils/constants';

// Custom hook for movie data management
export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate API call
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setMovies(SAMPLE_MOVIES);
        setError(null);
      } catch (err) {
        setError('Failed to load movies');
        console.error('Error fetching movies:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Filter movies by search query
  const searchMovies = (query) => {
    if (!query.trim()) return SAMPLE_MOVIES;
    
    return SAMPLE_MOVIES.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.genre.toLowerCase().includes(query.toLowerCase()) ||
      movie.year.toString().includes(query)
    );
  };

  // Get movies by category
  const getMoviesByCategory = (category) => {
    switch(category) {
      case 'trending':
        return SAMPLE_MOVIES.filter(movie => movie.isFeatured);
      case 'action':
        return SAMPLE_MOVIES.filter(movie => movie.genre.includes('Action'));
      case 'comedy':
        return SAMPLE_MOVIES.filter(movie => movie.genre.includes('Comedy'));
      case 'drama':
        return SAMPLE_MOVIES.filter(movie => movie.genre.includes('Drama'));
      case 'top_rated':
        return [...SAMPLE_MOVIES].sort((a, b) => b.rating - a.rating);
      default:
        return SAMPLE_MOVIES;
    }
  };

  return {
    movies,
    loading,
    error,
    searchMovies,
    getMoviesByCategory
  };
};