// import React, { createContext, useContext, useState, useEffect } from 'react';

// const ModalContext = createContext();

// export const ModalProvider = ({ children }) => {
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const lastModalTime = localStorage.getItem('lastModalTime');
//     const currentTime = new Date().getTime();

//     // Show the modal if 30 minutes have passed since the last time it was closed
//     if (!lastModalTime || currentTime - lastModalTime >= 30 * 60 * 1000) {
//       setShowModal(true);
//       localStorage.setItem('lastModalTime', currentTime);
//     }
//   }, []);

//   const hideModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <ModalContext.Provider value={{ showModal, hideModal }}>
//       {children}
//     </ModalContext.Provider>
//   );
// };

// export const useModal = () => {
//   return useContext(ModalContext);
// };





// import React, { createContext, useContext, useState, useEffect } from 'react';

// const ModalContext = createContext();

// export const ModalProvider = ({ children }) => {
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setShowModal(true);
//     }, 10 * 1000); // 10 seconds in milliseconds

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   const hideModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <ModalContext.Provider value={{ showModal, hideModal }}>
//       {children}
//     </ModalContext.Provider>
//   );
// };

// export const useModal = () => {
//   return useContext(ModalContext);
// };






import React, { createContext, useContext, useState, useEffect } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowModal(true);
    }, 1 * 1000); 

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
