import { useState, useEffect } from 'react';
import { fetchMovies } from '@/services/api';
import MovieItem from '@/components/MovieItem/MovieItem';
import Loading from '@/components/Loading/Loading';
import styles from './MovieList.module.css'

function MovieList({ onMovieSelect, selectedMovie }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await fetchMovies();
        setMovies(data);
        onMovieSelect(data[0])
      } catch (error) {
        console.error("Failed fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);

  if (isLoading) return <Loading />
  else return (
    <div className={styles.movie_list}>
      <h2>More Like {selectedMovie.title}</h2>
      <div className={styles.movie_list__movies}>
        {
          movies.map((movie) => {
            return (
              <MovieItem key={movie.episode_id} movie={movie} onMovieSelect={onMovieSelect} />
            )
          })
        }
      </div>
    </div>
  );
}

export default MovieList;
