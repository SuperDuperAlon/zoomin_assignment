import Image from '../Image/Image';
import styles from './MovieDetails.module.css'

function MovieDetails({ movie, onFavoriteToggle, favorites }) {

  if (!movie) return null;
  return (
    <div className={styles.movie_details}>
      <Image movie={movie} className={styles.movie_details__image} />
      <div className={styles.movie_details__content}>
        <h2 className={styles.movie_details__title}>{movie.title}</h2>
        <div className={styles.movie_details__tagline}>
          <p>{movie.release_date.slice(0, 4)}</p>
          -
          <p>Directed by: <span style={{ marginLeft: '3px' }}><strong>{movie.director}</strong></span></p>
          -
          <p><strong>Star Wars Episode{' ' + movie.episode_id}</strong> </p>
        </div>
        <p className='display-none'>{movie.opening_crawl}</p>
        <button className={styles.movie_details__button} onClick={() => onFavoriteToggle(movie)}>
          {favorites.some(fav => fav.episode_id === movie.episode_id) ? "Liked" : "Like"}
        </button>
      </div>
    </div >
  );
}

export default MovieDetails;