import styles from './HomeLayout.module.scss'
import Header from '../../components/Header/Header'
import { Outlet, useNavigate } from "react-router-dom";

const HomeLayout = ()=>{
  return <div className={styles.HomeWrapper}>
    <Header/>
    <Outlet />
  </div>
}

export default HomeLayout