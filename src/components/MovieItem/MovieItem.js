import Image from '../Image/Image';
import styles from './MovieItem.module.css'

function MovieItem({ movie, onMovieSelect }) {
  return (
    <div className={styles.movie_item} onClick={() => onMovieSelect(movie)}
      key={movie.episode_id}>
      <Image movie={movie} className={styles.movie_item} />
      <div className={styles.movie_item__content}>
        <h2>{movie.title}</h2>
        <button className={styles.movie_item__button} >
          Watch
        </button>
      </div>
    </div>
  );
}

export default MovieItem;