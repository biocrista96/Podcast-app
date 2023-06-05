import PodcastLayout from '../../layout/PodcastLayout/PodcastLayout'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getEpisodesActionCreator } from '../../store/PodcastActions';


const PodcastDetail = () =>{
  const dispatch = useDispatch();

  const { podcastDetail } = useSelector((state) => state);

  const [podcast, setPodcast] = useState(podcastDetail)

  useEffect(()=>{
   if(podcastDetail){ 
      setPodcast(podcastDetail)
      dispatch(getEpisodesActionCreator(podcastDetail.id.attributes['im:id']))
    }
  },[podcastDetail])


  return ( 
  <PodcastLayout >

    detalle de el podcast
  </PodcastLayout>)
}

export default PodcastDetail