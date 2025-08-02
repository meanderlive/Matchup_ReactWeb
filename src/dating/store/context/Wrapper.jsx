
import React,{useState} from 'react';
import MyContext from './UseContext';

const MyProvider = ({ children }) => {
const [eventArray,setEventArray]=useState([])


  const eventDatahandle= (data)=>{
    setEventArray([...eventArray,data])
  }

  return <MyContext.Provider value={{eventDatahandle,eventArray}}>{children}</MyContext.Provider>;
};

export default MyProvider;
