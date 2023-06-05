import styles from './PodcastLayout.module.scss'
import { NotFound } from '../../components/Icons/index';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';

const PodcastLayout = ({
  children,
  podcastImage, 
  podcastName, 
  author, 
  description})=>{

    const { podcastDetail } = useSelector((state) => state);

    const [podcast, setPodcast] = useState(podcastDetail)
  
    useEffect(()=>{
      setPodcast(podcastDetail)
    },[podcastDetail])
  
  return(
    <div className={styles.PodcastLayoutWrapper}>
      <div className={styles.PodcastInfo}>
        <div className={styles.ImageWrapper}>
          <div className={styles.ImageContainer}>
          {podcast? 
          <img className={styles.PodcastImage} src={podcast['im:image'][2].label} alt={podcast['im:image'][2].label}/> :
          <NotFound className={styles.icon} />
        }
          </div>
        </div>
        <div className={styles.TitleContainer}>
          <span className={styles.PodcastName}>{podcast['im:name'].label}</span>
          <span className={styles.AuthorName}>Autor: {podcast['im:artist'].label}</span>
        </div>
        <div className={styles.DescriptionContainer}>
          <span className={styles.DescriptionTitle}>Descripcion:</span>
          <p className={styles.Paragraph}>
           {podcast.summary.label}
          </p>
        </div>
      </div>
      <div className={styles.ChildrenWrapper}> 
        {children}
      </div>
      
    </div>
  )
}

export default PodcastLayout