import { useEffect, useState } from 'react';
import PodcastCard from '../../components/PodcastCard/PodcastCard'
import styles from './PodcastsList.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const PodcastList = () =>{

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { podcasts } = useSelector((state) => state);

  const [podcastsList, setPodcastsList] = useState(podcasts)

  const redirectToPodcast = (id)=>{
    console.log(id)
  }
  useEffect(()=>{
    setPodcastsList(podcasts)
  },[podcasts])

  return <div className={styles.PodcastListWrapper}>
    {
      podcastsList.map(podcast =>{
        const id = podcast.id.attributes['im:id']
        return (
              <PodcastCard 
              podcastImg={podcast['im:image'][0].label}
              podcast={podcast['im:name'].label}
              author={podcast['im:artist'].label}
              id={id}
              clickHandler={redirectToPodcast}
              key={id}/>
        )
      })
    }

  </div>
}

export default PodcastList