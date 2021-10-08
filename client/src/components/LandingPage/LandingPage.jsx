import styles from '../LandingPage/LangingPage.module.css'
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'


export default function LandingPage() {

    // useEffect(() => {
    //     const userInfo = localStorage.getItem('userInfo');
        
    //     if(userInfo) {
    //         history.push('/')
    //     }
    // }, [history])

return(
    
       <div className={styles.landing}>
        <h1 className={styles.title}>Car Shop</h1>
        <Link to ='/home'>
            <button className={styles.button}>ENTER THE STORE</button>
        </Link>
        <Link to ='/user/login'>
            <button className={styles.button}>LOGIN</button>
        </Link>
        <Link to='/user/register'>
            <button className={styles.button}>REGISTER</button>
        </Link>
       </div>
       
      )
      
}