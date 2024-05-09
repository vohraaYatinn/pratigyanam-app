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
export const patientSignUp = (payload_data) => {
  return project.post(Urls.PATIENT_SIGNUP, payload_data);
};
export const patientAddNewProfile = (payload_data) => {
  return project.post(Urls.PATIENT_ADD_PROFILE, payload_data);
};

//home
export const fetchCustomerHospital = (payload_data) => {
  return project.get(Urls.DASHBOARD_HOSPITALS, payload_data);
};
export const fetchCustomerDoctors = (payload_data) => {
  return project.get(Urls.DASHBOARD_DOCTORS, payload_data);
};
export const fetchCustomerlatestAppointment = (payload_data) => {
  return project.get(Urls.PATIENT_LATEST_APPOINTMENTS, payload_data);
};
export const fetchAppointmentDetails = (payload_data) => {
  return project.get(Urls.APPOINTMENT_DETAILS, payload_data);
};
export const addReviewsPatient = (payload_data) => {
  return project.post(Urls.ADD_REVIEWS, payload_data);
};
export const fetchReviewsPatient = (payload_data) => {
  return project.get(Urls.FETCH_REVIEWS, payload_data);
};
export const fetchFavDoctor = (payload_data) => {
  return project.get(Urls.FETCH_FAV_DOCTOR, payload_data);
};
export const fetchFavDoctorAddRemove = (payload_data) => {
  return project.post(Urls.FETCH_FAV_DOCTOR, payload_data);
};
export const fetchAppointments = (payload_data) => {
  return project.get(Urls.FETCH_APPOINTMENTS_PATIENTS, payload_data);
};
export const fetchLabReports = (payload_data) => {
  return project.get(Urls.FETCH_LAB_REPORTS, payload_data);
};
export const fetchprofiles = (payload_data) => {
  return project.get(Urls.GET_PERSONAL_PROFILE, payload_data);
};
export const changeProfileValues = (payload_data) => {
  return project.post(Urls.CHANGE_PROFILE_VALUES, payload_data);
};


//doctor
export const fetchSingleDoctorDetails = (payload_data) => {
  return project.get(Urls.GET_SINGLE_DOCTOR, payload_data);
};
export const fetchRequestAppointmentsDetails = (payload_data) => {
  return project.get(Urls.REQUEST_APPOINTMEENTS_DETAILS, payload_data);
};
export const fetchBookingPrice = (payload_data) => {
  return project.multiPartFormData(Urls.FETCH_PRICE_OF_BOOKING, payload_data);
};
export const fetchBookingConfirmationPagePrice = (payload_data) => {
  return project.get(Urls.FETCH_PRICE_OF_BOOKING_FINAL_PAGE, payload_data);
};
export const fetchBookingConfirmationStatus = (payload_data) => {
  return project.post(Urls.CONFIRM_BOOKING_PATIENT, payload_data);
};
export const searchPatientFeature = (payload_data) => {
  return project.get(Urls.SEARCHING_DETAILS, payload_data);
};


//hospital
export const fetchSingleHospital = (payload_data) => {
  return project.get(Urls.FETCH_SINGLE_HOSPITALS, payload_data);
};
//hospital
export const changeJwtOfPatient = (payload_data) => {
  return project.post(Urls.CHANGE_JWT_PATIENT, payload_data);
};