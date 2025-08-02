import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import playstore from '../../assets/images/logo/playstore.png';
import appstore from '../../assets/images/logo/apple.png';

const InstallApp = () => {
  const notificationsData = [
    {
      "id": 1,
      "type": "download",
      "message": "Download our app now for an enhanced experience! Click to install.",
      "timestamp": "2023-11-16T14:01:00Z"
    }
  ];

  useEffect(() => {
    const notification = notificationsData[0];
    setTimeout(() => {
      handleDownloadClick(notification);
    }, 0);
  }, []);

  const isMobileOrTablet = () => {
    return window.innerWidth <= 768 && 992;
  };

  const handleDownloadClick = (notification) => {
    if (isMobileOrTablet()) {
      const { id, message } = notification;
      const toastId = toast.custom(({ close }) => (
        <div className="download-toast">
          <p style={{ color: '#213366', wordWrap: 'break-word', marginRight:20, }}>{message}</p>
          <div className="button-container">
            <button onClick={() => handleDownloadRedirect('https://play.google.com/store', toastId)}>
              <img src={playstore} alt="Play Store" style={{
                width: "25px",
                height: "25px",
              }} /> Play Store
            </button>
            <button onClick={() => handleDownloadRedirect('https://appstore.com', toastId)}>
              <img src={appstore} alt="App Store"  style={{
                width: "25px",
                height: "25px",
              }} /> App Store
            </button> 
          </div>
          <span 
            onClick={() => handleManualClose(toastId)}
            className="close-icon"
            
          >
            &#10006;
          </span>
        </div>
      ), { duration: 1500000, icon: '' }); 
    }
  };

  const handleDownloadRedirect = (storeUrl, toastId) => {
    window.open(storeUrl, '_blank');
    toast.dismiss(toastId); 
  };

  const handleManualClose = (toastId) => {
    toast.dismiss(toastId); 
  };

  return (
    <div>
      <Toaster position="bottom-right" />
      <style>{`
        /* Add your custom styles for toasts here */
        .download-toast {
          background-color: #ebf6fa;
          color: black;
          padding: 15px;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .button-container {
          display: flex;
          gap: 10px;
        }

        .button-container button {
          background: none;
          border: none;
          cursor: pointer;
        }

        .download-toast button {
          margin-top: 10px;
          padding: 10px 20px;
          font-size: 16px;
          background-color: #2b2f36;
          color: #FFF;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .download-toast button:hover {
          background-color: #f24570;
          color: #fff;
          cursor: pointer;
        }
        .download-toast button:active{
          box-shadow: 0 0 5px black;
        }

        .close-icon {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 18px;
            cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default InstallApp;
