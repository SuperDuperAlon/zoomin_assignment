import Image from '../Image/Image';
import styles from './MovieDetails.module.css'
import data from '../../data/data.js';

function MovieDetails({ movie, onFavoriteToggle, favorites }) {

  {/* Dynamic Link based on the episode ID */}
  function handleLink(id) {
    if (!movie) return
    const movieToUse = data.find(movie => movie.episode_id === id)
    return window.open(`${movieToUse.link}`, '_blank')
  }

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
        <div className={styles.movie_details__buttons}>
          <button className={styles.movie_details__button} onClick={() => onFavoriteToggle(movie)}>
            {favorites.some(fav => fav.episode_id === movie.episode_id) ? "Liked" : "Like"}
          </button>
          <button className={styles.movie_details__trailer_button} onClick={() => handleLink(movie.episode_id)}>
            Watch Trailer
          </button>
        </div>
      </div>
    </div >
  );
}

export default MovieDetails;