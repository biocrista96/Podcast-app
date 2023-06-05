import { NotFound } from '../Icons';
import styles from './PodcastCard.module.scss';


const PodcastCard = ({id, podcastImg , podcast, author, clickHandler}) =>{

  return (
    <div className={styles.PodcastCardWraper} onClick={()=>clickHandler(id)}>
      <div className={styles.ImageContainer}>
        {podcastImg ? 
          <img className={styles.PodcastImage} src={podcastImg} alt={podcastImg}/> :
          <NotFound className={styles.icon} />
        }

      </div>
      <div className={styles.InfoContainer}>
        <span className={styles.PodcastName}>{podcast}</span>
        <span className={styles.AuthorName}>Author: {author}</span>
      </div>
    </div>
  )
}

export default PodcastCard