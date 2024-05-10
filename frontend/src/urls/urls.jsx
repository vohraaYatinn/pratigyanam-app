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