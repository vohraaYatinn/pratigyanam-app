/* eslint-disable */

import { HttpAxiosService } from './httpService.jsx';
import { Urls } from './constantsUrls';
import { test_url } from "../../src/config/environment.js"

const project = new HttpAxiosService(test_url);

//login and signup
export const emailSignIn = (payload_data) => {
  return project.post(Urls.SIGN_IN_EMAIL, payload_data);
};
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
export const getAllSubscriptionPost= (payload_data) => {
  return project.post(Urls.GET_ALL_SUBSCRIPTION, payload_data);
};
export const editSubscriptionPostAdmin= (payload_data) => {
  return project.post(Urls.EDIT_SUBSCRIPTION_ADMIN, payload_data);
};


export const getMusicService= (payload_data) => {
  return project.get(Urls.GET_MUSIC, payload_data);
};

export const adddNewSubscriptionService= (payload_data) => {
  return project.post(Urls.GET_ALL_SUBSCRIPTION, payload_data);
};
export const fetchSubscriptions= (payload_data) => {
  return project.post(Urls.FETCH_ALL_SUBSCRIPTION_ADMIN, payload_data);
};

export const adddNewCategoryService= (payload_data) => {
  return project.multiPartFormData(Urls.ADD_GET_CATEGORIES, payload_data);
};
export const fetchMusicByCategory= (payload_data) => {
  return project.get(Urls.FETCH_MUSIC_BY_CATEGORY, payload_data);
};
export const deleteNewCategoryServices= (payload_data) => {
  return project.post(Urls.DELETE_CATEGORIES, payload_data);
};
export const deleteMusicCategory= (payload_data) => {
  return project.post(Urls.DELETE_MUSIC, payload_data);
};

export const getNewCategoryService= (payload_data) => {
  return project.get(Urls.ADD_GET_CATEGORIES, payload_data);
};

export const getUserRecentService= (payload_data) => {
  return project.get(Urls.ADD_GET_RECENT, payload_data);
};

export const addUserRecentService= (payload_data) => {
  return project.post(Urls.ADD_GET_RECENT, payload_data);
};


export const buySubscriptionService= (payload_data) => {
  return project.post(Urls.BUY_SUBSCRIPTION, payload_data);
};


export const getMusicByIdService= (payload_data) => {
  return project.get(Urls.GET_MUSIC_BY_ID, payload_data);
};


export const isMusicUserFavService= (payload_data) => {
  return project.get(Urls.IS_MUSIC_USER_FAV, payload_data);
};

export const addRemoveUserFavouriteService= (payload_data) => {
  return project.post(Urls.GET_USER_FAV, payload_data);
};

export const fetchAdminAccount= (payload_data) => {
  return project.get(Urls.FETCH_ADMIN_ACCOUNT, payload_data);
};

export const addMusicWithCategory= (payload_data) => {
  return project.multiPartFormData(Urls.GET_MUSIC, payload_data);
};
export const getRefershToken= (payload_data) => {
  return project.post(Urls.GET_REFRESH_TOKEN, payload_data);
};
