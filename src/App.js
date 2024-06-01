import { useState, useEffect } from 'react';
import MovieList from '@/components/MovieList/MovieList';
import MovieDetails from '@/components/MovieDetails/MovieDetails';

function App() {
  const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favorites, setFavorites] = useState(initialFavorites);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (movie) => {
    if (favorites.some(fav => fav.episode_id === movie.episode_id)) {
      setFavorites(favorites.filter(fav => fav.episode_id !== movie.episode_id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  function onFavoriteToggle(movie) {
    handleFavorite(movie);
  }

  function handleMovieSelect(movie) {
    setSelectedMovie(movie);
  }

  return (
    <div className="App">
      <MovieDetails movie={selectedMovie} onFavoriteToggle={onFavoriteToggle} favorites={favorites} />
      <MovieList onMovieSelect={handleMovieSelect} selectedMovie={selectedMovie} />
    </div>
  );
}

export default App;