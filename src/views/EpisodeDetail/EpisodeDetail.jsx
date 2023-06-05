import PodcastLayout from '../../layout/PodcastLayout/PodcastLayout';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from './EpisodeDetail.module.scss';
import { cleanEpisodeActionCreator } from '../../store/PodcastActions';

const EpisodeDetail = () =>{
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { episode } = useSelector((state) => state);

  const returnToPodcast = ()=>{
    navigate(-1)
    dispatch(cleanEpisodeActionCreator())
  }
  
  return ( 
    <PodcastLayout  clickHandler={returnToPodcast}>
      <div className={styles.EpisodeDetailWrapper}>
        <div className={styles.title}>{episode.title}</div>
        <div className={styles.description} dangerouslySetInnerHTML={{ __html: episode?.description }}></div>
        <audio controls className={styles.player}> 
          <source src={episode.playLink.url} type={episode.playLink.type}/>
        </audio>
      </div>
    </PodcastLayout>)
}

export default EpisodeDetail