import React from 'react'
import styles from '../styles/Home.module.css'
import Button from './Button'
const Header = () => {
  return (
    <div className={styles.header}>  
    <img className={styles.img} src='./assets/i/3890.png'></img>
        <div className={styles.headerindiv}>Berke</div>
        <div className={styles.headerindiv}>Berke</div>
        <div className={styles.headerindiv}>Berke</div>
        <div className={styles.headerindiv}>Berke</div>
        <div className={styles.headerindiv}>Berke</div>
        <div className={styles.headerindiv}>Berke</div>
        <div className={styles.headerindiv}>Berke</div>
        <Button className={styles.Button}></Button>
    </div>
  )
}

export default Header