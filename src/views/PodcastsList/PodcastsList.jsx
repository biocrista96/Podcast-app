import { useEffect, useState } from 'react';
import PodcastCard from '../../components/PodcastCard/PodcastCard'
import styles from './PodcastsList.module.scss'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getpodcastDetailActionCreator } from '../../store/PodcastActions';
import { Search } from '../../components/Icons';
import { useDebounce } from '../../utils/useDebounced';

const PodcastList = () =>{

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { podcasts } = useSelector((state) => state);

  const [podcastsList, setPodcastsList] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [firstLoad, setFirstLoad] = useState(true);

  const debounced = useDebounce(filterValue, 500);

  const redirectToPodcast = (id)=>{
    dispatch(getpodcastDetailActionCreator(id))
    navigate(`podcast/${id}`)
  }

  const handleFiltering = (event) => {
    const keyword = event.target.value;
    setFilterValue(keyword);
  };

  const handleDebouncedFilter = () => {
    if (filterValue !== "") {
      setPodcastsList(
        podcasts.filter((p) => {
          return (
            String(p['im:name'].label)
              .replace("null", "")
              .toLowerCase()
              .includes(filterValue.toLowerCase()) ||
            String(p['im:artist'].label)
              .replace("null", "")
              .toLowerCase()
              .includes(filterValue.toLowerCase())
          );
        })
      );
    } else {
      setPodcastsList(podcasts);
    }
  };

  useEffect(()=>{
    setPodcastsList(podcasts)
    setFirstLoad(false)
  },[podcasts])

  useEffect(() => {
    !firstLoad && handleDebouncedFilter();
  }, [debounced]);

  return <div className={styles.PodcastListWrapper}>
    <div className={styles.SearchBar}>
      <Search className={styles.icon}/>
      <input className={styles.input} value={filterValue} onChange={handleFiltering}/>
    </div>
    <div className={styles.ListContainer}>
      {
        podcastsList &&podcastsList.map(podcast =>{
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
   

  </div>
}

export default PodcastList