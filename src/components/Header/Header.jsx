import {Logo} from '../Icons/index'
import styles from './Header.module.scss'

const Header = ({clickHandler}) =>{
  return <div className={styles.HeaderWrapper}>
    <div className={styles.LogoContainer}  onClick={clickHandler}>
       <Logo/>
    </div>
   </div>
}

export default Header