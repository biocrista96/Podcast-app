import PodcastLayout from '../../layout/PodcastLayout/PodcastLayout'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getEpisodesActionCreator } from '../../store/PodcastActions';
import styles from './PodcastDetail.module.scss'
import EpisodeList from '../../components/EpisodeList/EpisodeList';


const PodcastDetail = () =>{
  const dispatch = useDispatch();

  const { podcastDetail, episodes } = useSelector((state) => state);

  const [podcast, setPodcast] = useState(podcastDetail)

  useEffect(()=>{
   if(podcastDetail){ 
      setPodcast(podcastDetail)
      dispatch(getEpisodesActionCreator(podcastDetail.id.attributes['im:id']))
    }
  },[podcastDetail])


  return ( 
  <PodcastLayout >
    <div className={styles.PodcastDetailWrapper}>
      <EpisodeList episodeList={episodes}/>
    </div>
  </PodcastLayout>)
}

export default PodcastDetail