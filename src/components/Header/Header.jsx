import {Logo} from '../Icons/index'
import styles from './Header.module.scss'

const Header = () =>{
  return <div className={styles.HeaderWrapper}>
    <div className={styles.LogoContainer}> <Logo/></div>
   </div>
}

export default Header