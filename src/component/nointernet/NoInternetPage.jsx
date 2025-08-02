// src/components/NoInternetPage.js
import React from 'react';
import NoInternet from '../../../src/assets/images/nointernetimg.jpg'

const NoInternetPage = () => {
  return (
    <div className='NoInternet_wrap' style={styles.container}>
        <img src={NoInternet} alt="" />
      <h1 style={styles.title}>No Internet Connection</h1>
      <p style={styles.message}>Please check your internet connection and try again.</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    color: '#f24570',
  },
  message: {
    fontSize: '1.2rem',
    color: '#3b368c',
  },
};

export default NoInternetPage;
