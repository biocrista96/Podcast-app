import PodcastLayout from '../../layout/PodcastLayout/PodcastLayout';
import styles from './EpisodeDetail.module.scss';

const EpisodeDetail = () =>{
  return ( 
    <PodcastLayout >
      <div className={styles.PodcastDetailWrapper}>
        detalle de episodio
      </div>
    </PodcastLayout>)
}

export default EpisodeDetail