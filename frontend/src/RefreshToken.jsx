import React, { useEffect } from 'react'
import useAxiosWithoutRoute from './network/useAxiosWithRoute';
import { useDispatch, useSelector } from "react-redux";
import { updateUser, userData } from './redux/reducers/functionalities.reducer';
import { getRefershToken } from './urls/urls';

const RefreshToken = () => {
  const dispatch = useDispatch();
  const [getRefreshResponse, getRefreshError, getRefreshLoading, getRefreshFetch] = useAxiosWithoutRoute();
  const loggedInUser = useSelector(userData);

  useEffect(()=>{
    if(!loggedInUser?.user_profile){
      let storedToken = localStorage.getItem('storedToken');
      let adminToken = localStorage.getItem('adminToken');    
      if(storedToken){
        getRefreshFetch(getRefershToken({token:storedToken, role:"customer"}))
      }
      else if(adminToken){
        getRefreshFetch(getRefershToken({token:adminToken, role:"admin"}))
      }
      else{
        window.location.href = "/";
      }
    
    }
  },[])
  useEffect(()=>{
    if(getRefreshResponse?.result){
      if(getRefreshResponse?.result == "success"){
        dispatch(updateUser(getRefreshResponse?.user));
      }
      else{
        localStorage.removeItem('storedToken');
        localStorage.removeItem('adminToken');  
        window.location.href = "/";
      }
    }

  },[getRefreshResponse])
  return (
    <></>
  )
}

export default RefreshToken