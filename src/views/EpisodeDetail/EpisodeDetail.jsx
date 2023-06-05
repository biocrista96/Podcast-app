import PodcastLayout from '../../layout/PodcastLayout/PodcastLayout';
import { useNavigate } from "react-router-dom";
import styles from './EpisodeDetail.module.scss';

const EpisodeDetail = () =>{
  const navigate = useNavigate()

  const returnToPodcast = ()=>{
    navigate(-1)
  }
  return ( 
    <PodcastLayout  clickHandler={returnToPodcast}>
      <div className={styles.PodcastDetailWrapper}>
        
      </div>
    </PodcastLayout>)
}

export default EpisodeDetail