import { useState, useRef } from 'react';
import Image from '../Image/Image';
import styles from './MovieItem.module.css'
import data from '../../data/data.js';

function MovieItem({ movie, onMovieSelect }) {
  const [isOnHover, setIsOnHover] = useState(false);
  const [isCloserToLeft, setIsCloserToLeft] = useState(false);
  const divRef = useRef(null);

  {/* When we hover over the item we want to show the trailer and to calculate it's position in the window so it won't overflow */ }

  function handleMouseEnter() {
    if (isOnHover) return // We only want to do this once
    if (divRef.current) {
      const div = divRef.current;
      window.innerWidth / 2 > div.offsetLeft ? setIsCloserToLeft(true) : setIsCloserToLeft(false)
    }
    setIsOnHover(true)
  }

  function handleMouseLeave() {
    if (!isOnHover) return // We only want to do this once
    setIsOnHover(false)
  }

  {/* Get the link to the trailer based on the episode ID */ }

  function getTrailer(id) {
    if (!movie) return
    const movieToUse = data.find(movie => movie.episode_id === id)
    return movieToUse.linkToEmbed
  }

  return (
    <div ref={divRef} className={styles.movie_item} onClick={() => onMovieSelect(movie)}
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      key={movie.episode_id} style={{ transformOrigin: isOnHover && isCloserToLeft ? 'left' : 'right' }}>
      {isOnHover ?
        <>
          <iframe autoPlay
            frameBorder="0" src={`${getTrailer(movie.episode_id)}?autoplay=1&mute=1&origin=https://OurWebsiteDomain`}
            allowFullScreen title={`${movie.title}`} height="278" data-ytbridge="vidSurrogate2" >

          </iframe>
          <button className={styles.movie_item__trailer_button} onClick={() => onMovieSelect(movie)}>
            Watch
          </button>



        </>
        :
        <>
          <Image movie={movie} className={styles.movie_item} />
          <div className={styles.movie_item__content}>
            <h2>{movie.title}</h2>
            <button className={styles.movie_item__button} >
              Watch
            </button>
          </div>
        </>
      }
    </div>
  );
}

export default MovieItem;