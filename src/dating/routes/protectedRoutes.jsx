import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import store from '../../hooks/useLocalStorage'
const ProtectedRoutes = ({ children }) => {
   const {getData}= store();
  const isAuthenticated = getData("token");
  return isAuthenticated? children  :<Navigate to='/login' replace/>

};

export default ProtectedRoutes;
