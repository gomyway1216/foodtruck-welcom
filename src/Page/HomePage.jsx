import React from 'react';
import styles from './home-page.module.scss';
import twitterIcon from '../asset/twitter.png';
import facebookIcon from '../asset/facebook.png';
import instagramIcon from '../asset/instagram.png';

const HomePage = () => {

  return (
    <div className={styles.root}>
      <div 
        className={styles.home} name='home'
      />   
      <div className={styles.footer}>
        <div className={styles.container}>
          <a href="https://twitter.com/erikatokachi" >
            <div className={styles.imageContainer}>
              <img className={styles.image} src={twitterIcon} alt="Twitter" />
      
            </div>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100087156172865" >
            <div className={styles.imageContainer}>
              <img className={styles.image} src={facebookIcon} 
                alt="Facebook" />
            </div>
          </a>
          <a href="https://www.instagram.com/tokachi_musubi/" >
            <div className={styles.imageContainer}>
              <img className={styles.image} src={instagramIcon} 
                alt="Instagram"/>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;