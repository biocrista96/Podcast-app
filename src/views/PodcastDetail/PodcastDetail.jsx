import PodcastLayout from '../../layout/PodcastLayout/PodcastLayout'
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { getEpisodesActionCreator, setEpisodeActionCreator } from '../../store/PodcastActions';
import styles from './PodcastDetail.module.scss'
import EpisodeList from '../../components/EpisodeList/EpisodeList';


const PodcastDetail = () =>{
  const dispatch = useDispatch();

  const { podcastDetail, episodes } = useSelector((state) => state);

  const [episodesList, setEpisodesList] = useState( episodes)

  const handleEpisode = (id)=>{
    dispatch(setEpisodeActionCreator(id))
  }

  useEffect(()=>{
   if(podcastDetail){ 
      dispatch(getEpisodesActionCreator(podcastDetail.id.attributes['im:id']))
    }
  },[podcastDetail])

  useEffect(()=>{
    if(episodes){

      setEpisodesList(episodes)
    }
  },[episodes])


  return ( 
  <PodcastLayout >
    <div className={styles.PodcastDetailWrapper}>
      <div className={styles.header}>
       <span>Episodios: </span> 
       <span>{episodesList.length}</span>
      </div>
      <EpisodeList episodeList={episodes} clickHandler={handleEpisode}/>
    </div>
  </PodcastLayout>)
}

export default PodcastDetail