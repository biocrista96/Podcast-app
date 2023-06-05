import styles from './HomeLayout.module.scss'
import Header from '../../components/Header/Header'
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getPodcastsActionCreator} from '../../store/PodcastActions'
const HomeLayout = ()=>{
  const dispatch = useDispatch()
  const { podcasts } = useSelector((state) => state);
  useEffect(()=>{
    dispatch(getPodcastsActionCreator())
  },[])

  return <div className={styles.HomeWrapper}>
    <Header/>
    <Outlet />
  </div>
}

export default HomeLayout