import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const LanguageChange = ({ showModal, hideModal }) => {
  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean', 'Russian', 'Arabic'];
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <Modal show={showModal} onHide={hideModal} centered>
      <span onClick={hideModal}>
        <i
          className="fa fa-times fs-3"
          aria-hidden="true"
          style={{
            cursor: 'pointer',
            float: 'right',
            padding: '15px 25px 0 0',
          }}
        ></i>
      </span>
      <div className="container px-5 pb-5">
        <h5 className='text-center mb-4'>Select Language</h5>
        <div className="row">
          {languages.map((language, index) => (
            <div key={index} className="col-6">
              <p
                className={`rounded-4 top-quiz-option pointer py-3 ps-4 ${selectedLanguage === language ? 'selected-option' : ''}`}
                onClick={() => handleLanguageSelect(language)}
                style={{
                  backgroundColor: selectedLanguage === language ? '#f24570' : 'whitesmoke',
                  color: selectedLanguage === language ? 'white' : 'black',
                }}
              >
               <i class="fa fa-language me-3 " aria-hidden="true"></i>
  {language}
              </p>
            </div>
          ))}
        </div>
        <button className="default-btn reverse mt-4 " style={{ float: 'right' }} onClick={hideModal}>
          <span>Save</span>
        </button>
      </div>
    </Modal>
  );
};

export default LanguageChange;
