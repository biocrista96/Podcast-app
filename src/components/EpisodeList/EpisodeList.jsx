import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from './EpisodeList.module.scss'

const EpisodeList = ({episodeList, clickHandler}) =>{
  const navigate = useNavigate();
  const { podcastDetail } = useSelector((state) => state);

  const navigateToEpisode = (id)=>{
    const podcastId = podcastDetail.id.attributes['im:id']
    clickHandler(id)
    navigate(`/podcast/${podcastId}/episode/${id}`)
  }

  const formatDate = (d)=> {
    const date = new Date(d);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Los meses en JavaScript van de 0 a 11
    const year = date.getFullYear().toString();
  
    return `${day}/${month}/${year}`;
  }
  return (
  <div className={styles.EpisodeListWrapper}>
    <div className={styles.ElementWrapper}>
      <div className={styles.EpisodeTable}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Título</th>
            <th>Fecha</th>
            <th>Duración</th>
          </tr>
        </thead>
        <tbody>
       {episodeList &&episodeList.map(episode =>{
            return(
                <tr key={episode.id} onClick={()=>navigateToEpisode(episode.id)}>
                  <td>{episode.title}</td>
                  <td>{formatDate(episode.creationDate)}</td>
                  <td>{episode.duration}</td>
                </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
      </div>
  </div>)
}

export default EpisodeList