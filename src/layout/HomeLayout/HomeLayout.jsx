import styles from './HomeLayout.module.scss'
import Header from '../../components/Header/Header'
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { getPodcastsActionCreator,getLastTimeRequestedActionCreator, setLastTimeRequestedActionCreator} from '../../store/PodcastActions'
const HomeLayout = ()=>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { podcasts, lasTimeRequested } = useSelector((state) => state);

  const [refreshStorage, setRefresStorage] = useState(false)

  const redirectToHome = ()=>{
    navigate('/')
  }

  const hasPassed24Hours = (savedDate) => {
    const twentyFourHours = 24 * 60 * 60 * 1000; // 24 horas en milisegundos
    const currentDate = new Date(); // Obtener la fecha actual
  
    // Convertir la fecha guardada a objeto Date
    const parsedSavedDate = new Date(savedDate);
  
    // Calcular la diferencia de tiempo entre la fecha actual y la guardada
    const timeDifference = currentDate - parsedSavedDate;
  
    // Verificar si han pasado 24 horas
    if (timeDifference >= twentyFourHours) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(()=>{
    dispatch(getLastTimeRequestedActionCreator())

    if(lasTimeRequested){
      setRefresStorage(hasPassed24Hours(lasTimeRequested))
    }
  },[])

  useEffect(()=>{
    if(refreshStorage){
      dispatch(getPodcastsActionCreator(true))
      dispatch(setLastTimeRequestedActionCreator())
    }else{
      dispatch(getPodcastsActionCreator(false))
    }
  },[refreshStorage])


  return <div className={styles.HomeWrapper}>
    <Header clickHandler={redirectToHome}/>
    <Outlet />
  </div>
}

export default HomeLayout