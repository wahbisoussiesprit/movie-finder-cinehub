import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SearchBar from './components/SearchBar/SearchBar';
import CategoryRow from './components/CategoryRow/CategoryRow';
import MovieCard from './components/MovieCard/MovieCard';  // ADD THIS LINE
import Footer from './components/Footer/Footer';
import { useMovies } from './hooks/useMovies';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const { movies, loading, error, searchMovies } = useMovies();

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredMovies = searchQuery ? searchMovies(searchQuery) : [];

  if (error) {
    return (
      <div className="error-container">
        <h2>Error loading movies</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SearchBar onSearch={handleSearch} />
      
      <main className="main-content">
        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading amazing movies...</p>
          </div>
        ) : searchQuery ? (
          <div className="search-results-container">
            <h2 className="search-results-title">
              Search Results for "{searchQuery}"
              <span className="results-count"> ({filteredMovies.length} movies found)</span>
            </h2>
            {filteredMovies.length > 0 ? (
              <div className="movies-grid">
                {filteredMovies.map(movie => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p>No movies found. Try a different search term.</p>
              </div>
            )}
          </div>
        ) : (
          <>
            <CategoryRow title="🔥 Trending Now" category="trending" />
            <CategoryRow title="🏆 Top Rated" category="top_rated" />
            <CategoryRow title="💥 Action Movies" category="action" />
            <CategoryRow title="😂 Comedy" category="comedy" />
            <CategoryRow title="🎭 Drama" category="drama" />
            <CategoryRow title="🚀 Sci-Fi" category="scifi" />
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;