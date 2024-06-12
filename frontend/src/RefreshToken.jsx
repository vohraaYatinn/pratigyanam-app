import React, { useEffect } from 'react'
import useAxiosWithoutRoute from './network/useAxiosWithRoute';
import { useDispatch, useSelector } from "react-redux";
import { updateUser, userData } from './redux/reducers/functionalities.reducer';
import { getRefershToken } from './urls/urls';
import { LocalNotifications } from '@capacitor/local-notifications';
import { PushNotifications } from '@capacitor/push-notifications';

const RefreshToken = () => {
  const dispatch = useDispatch();
  const [getRefreshResponse, getRefreshError, getRefreshLoading, getRefreshFetch] = useAxiosWithoutRoute();
  const loggedInUser = useSelector(userData);
// Function to schedule daily notification at 3 PM
PushNotifications.addListener('registration', (token) => {
  console.log('Push registration success, token: ' + token.value);
});

PushNotifications.addListener('registrationError', (error) => {
  console.error('Error on registration: ' + JSON.stringify(error));
});

PushNotifications.addListener('pushNotificationReceived', (notification) => {
  console.log('Push received: ' + JSON.stringify(notification));
});

PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
  console.log('Push action performed: ' + JSON.stringify(notification));
});

const scheduleDailyNotification = async () => {
  const now = new Date();
  const target = new Date();
  target.setHours(13, 26, 0, 0);

  if (target.getTime() <= now.getTime()) {
    target.setDate(target.getDate() + 1);
  }

  await LocalNotifications.schedule({
    notifications: [
      {
        title: "Reminder",
        body: "This is your daily reminder at 3 PM",
        id: 1,
        schedule: { at: target },
        sound: null,
        attachments: null,
        actionTypeId: "",
        extra: null
      }
    ]
  });

  console.log('Notification scheduled for: ', target);
};
scheduleDailyNotification();
// Listen for when the notification is received
LocalNotifications.addListener('localNotificationReceived', (notification) => {
  console.log('Notification received: ', notification);
  scheduleDailyNotification();
});
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