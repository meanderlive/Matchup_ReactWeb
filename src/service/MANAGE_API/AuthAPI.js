import axios from 'axios';
import { BASE_URL } from '../../base';


//login Api 
// export const userLogin = async (credentials) => {
  
//   try {
//     const {setData,setObjectData}= store();
//     const response = await axios.post(`${BASE_URL}/User/login`, credentials);
//     const data = response 
//     setData("token",data.data.data.token)
//     setObjectData("userData", data); 
//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.status === 400) {
//     } else if (error.response && error.response.status === 401) {
//     } else if (error.response && error.response.status === 500) {
//     } else {
//     }
//   }
// }



//create user Api
// export const createUser = async (userData) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/User/create`, userData);
//     localStorage.setItem("userData", JSON.stringify(response.data) ); 
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };


// create Login
// export const sentOtpApi =async (data)=>{
 
//   try {
//     const response = await axios.post(`${BASE_URL}/User/loginWithEmail`,data)
//     return response
//   } catch (error) {
//     throw error;
//   }
// }
// verify otp
// token set karna ha abhi
// export const verifyOTPApi =async (data)=>{
 
//   try {
//     const response = await axios.post(`${BASE_URL}/User/verifyOtpEmail`,data)
//     localStorage.setItem("userData", JSON.stringify(response.data.data.data) ); 

//     return response.data
//   } catch (error) {
//     throw error;
//   }
// }
// export const verifyOTPApi = async (data)=>{
//   const options ={
//     method:'POST',
//     headers:{
//       'content-type':'application/json',
//     },
//     body:JSON.stringify(data)

//   }
//   try {
//     debugger
//     const response = await fetch(`${BASE_URL}/User/verifyOtpEmail`,options)
//     return response
//   } catch (error) {
//     throw error
    
//   }
// }

// export const forgotPassword = async (data) => {
//   localStorage.setItem('forgetemail',data?.email)
//   try {
//     const response = await axios.post(`${BASE_URL}/User/forgot-password`,data );
//     localStorage.setItem("usertoken", response?.data?.token);
//     return response.data;

//   } catch (error) {
//     if (error.response && error.response.status === 400) {
//     } else if (error.response && error.response.status === 401) {
//     } else if (error.response && error.response.status === 500) {
//     } else {
//     }
//   }
// };




// export const verifyOTP = async (otpData) => {
//   try {
//     // Make an API request to verify the OTP
//     const token = localStorage.getItem('usertoken')
//    const  data={
//       otp:otpData,
//       token:token
//     }
//     const response = await axios.post(`${BASE_URL}/User/verifyOTP`, data)
//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.status === 400) {
//     } else if (error.response && error.response.status === 401) {
//     } else if (error.response && error.response.status === 500) {
//     } else {
//     }
//   }
// };


// export const resetPassword = async (passwordData) => {
//   try {

//     const resetdata={
//       email:localStorage.getItem('forgetemail'),
//       newPassword:passwordData
//     }
//     const token = localStorage.getItem('usertoken');
//     const response = await axios.post(`${BASE_URL}/User/resetPassword`, resetdata, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };


import axios from 'axios';

export const updateUserByIdMetri = async (userId, passwordData) => {
  try {
    const response = await axios.put(`${BASE_URL}/User/update/${userId}`, passwordData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
