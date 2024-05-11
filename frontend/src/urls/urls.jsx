/* eslint-disable */

import { HttpAxiosService } from './httpService.jsx';
import { Urls } from './constantsUrls';
import { test_url } from "../../src/config/environment.js"

const project = new HttpAxiosService(test_url);

//login and signup
export const phoneNumberOtp = (payload_data) => {
  return project.post(Urls.PHONE_NUMBER_OTP, payload_data);
};
export const verifyOtpUrl = (payload_data) => {
  return project.post(Urls.VERIFY_OTP, payload_data);
};

export const signupUserService= (payload_data) => {
  return project.post(Urls.SIGN_UP_USER, payload_data);
};

export const getUserFavouriteService= (payload_data) => {
  return project.get(Urls.GET_USER_FAV, payload_data);
};


export const editProfileAndPreferencesService= (payload_data) => {
  return project.post(Urls.EDIT_USER_PROFILE, payload_data);
};


export const getAllSubscriptionService= (payload_data) => {
  return project.get(Urls.GET_ALL_SUBSCRIPTION, payload_data);
};


export const getMusicService= (payload_data) => {
  return project.get(Urls.GET_MUSIC, payload_data);
};