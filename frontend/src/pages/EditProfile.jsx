import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import vector from "../data/vector.jpeg";
import { FaPen } from "react-icons/fa6";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import { Link } from "react-router-dom";
import img from "../assets/images/6s.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUser,
  userData,
} from "../redux/reducers/functionalities.reducer";
import useAxios from "../network/useAxios";
import { editProfileAndPreferencesService } from "../urls/urls";
import { Alert } from "antd";

const EditProfile = () => {
  const dispatch = useDispatch();
  const doFetchNewData = useRef(true);
  const loggedInUser = useSelector(userData);
  const [loggedInUserData, setLoggedInUserData] = useState([]);
  const [formValues, setFormValues] = useState({
    userId: loggedInUser ? loggedInUser?.id : "",
    fullName: loggedInUser ? loggedInUser?.user_profile?.name : "",
    email: loggedInUser ? loggedInUser?.email : "",
    gender: loggedInUser ? loggedInUser?.user_profile?.gender : "",
    dob: loggedInUser ? loggedInUser?.user_profile?.date_of_birth : "",
    editType: "profile",
  });

  const [editResponse, editError, editLoading, editFetch] = useAxios();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSave = () => {
    dispatch(updateUser(formValues))
    editFetch(editProfileAndPreferencesService(formValues));
    console.log(formValues);
  };

  const [message, setMessage] = useState({
    showMessage: false,
    isError: true,
    message: "",
  });

  const editResponseRef = useRef(editResponse);

  useEffect(() => {
    setLoggedInUserData(loggedInUser);
    console.log(loggedInUser)
    setFormValues(loggedInUser)
    if (editResponseRef.current !== editResponse) {
      setMessage({
        showMessage: true,
        isError: false,
        message: editResponse.message,
      });
    }
    editResponseRef.current = editResponse;
  }, [editResponse]);

  return (
    <>
      <div>
        <div id="page">
          <TopNav />
          <BottomNav path={"profile"} />
          <div className="page-title page-title-fixed">
            <h1>Profile</h1>
            <a
              href="#"
              className="page-title-icon shadow-xl bg-theme color-theme"
              data-menu="menu-share"
            >
              <i className="fa fa-share-alt" />
            </a>
            <a
              href="#"
              className="page-title-icon shadow-xl bg-theme color-theme show-on-theme-light"
              data-toggle-theme
            >
              <i className="fa fa-moon" />
            </a>
            <a
              href="#"
              className="page-title-icon shadow-xl bg-theme color-theme show-on-theme-dark"
              data-toggle-theme
            >
              <i className="fa fa-lightbulb color-yellow-dark" />
            </a>
            <a
              href="#"
              className="page-title-icon shadow-xl bg-theme color-theme"
              data-menu="menu-main"
            >
              <i className="fa fa-bars" />
            </a>
          </div>
          <div className="page-title-clear" />
          <div className="page-content">
            {message.showMessage ? (
              <Alert
                closable
                message={message.message}
                dismiss={() => {
                  setMessage((prevState) => ({
                    ...prevState,
                    showMessage: false,
                  }));
                }}
                isError={message.isError}
              />
            ) : null}
            <div className="card card-style">
              <div className="d-flex content mb-1 check-it-profile">
                <div className="flex-grow-1">
                  <h2 className="mt-3">
                    {loggedInUserData?.user_profile?.name}
                  </h2>
                </div>
                <img
                  src={img}
                  width={115}
                  height={103}
                  className="rounded-circle mt-3 shadow-xl"
                />
              </div>

              <div className="content input-for-profile ">
                <p style={{ marginBottom: "0rem" }}>Full Name </p>

                <div class="input-style  has-borders">
                  <input
                    type="text"
                    class="form-control"
                    id="form1"
                    name="fullName"
                    value={formValues.fullName}
                    onChange={handleInputChange}
                  />
                  <label for="form1" class="color-highlight">
                    Quantity
                  </label>
                </div>
              </div>
              <div className="content mb-2 input-for-profile">
                <p style={{ marginBottom: "0rem" }}>Email </p>

                <div class="input-style  has-borders mb-4">
                  <input
                    type="text"
                    class="form-control"
                    id="form1"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                  />
                  <label for="form1" class="color-highlight">
                    Quantity
                  </label>
                </div>
              </div>

              <div className="content mb-2 input-for-profile">
                <p style={{ marginBottom: "0rem" }}>Gender </p>

                <div class="input-style  has-borders mb-4">
                  <select
                    class="form-control"
                    name="gender"
                    value={formValues.gender}
                    onChange={handleInputChange}
                  >
                    {/* <option value="default">Storage</option> */}
                    <option value="male" selected>
                      Male
                    </option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="content mb-2 input-for-profile">
                <p style={{ marginBottom: "0rem" }}>Date of Birth </p>

                <div class="input-style  has-borders mb-4">
                  <input
                    type="date"
                    class="form-control"
                    id="form1"
                    name="dob"
                    placeholder="start typing here..."
                    value={formValues.dob}
                    onChange={handleInputChange}
                  />
                  <label for="form1" class="color-highlight">
                    Quantity
                  </label>
                </div>
              </div>
              <a
                onClick={handleSave}
                href="#"
                class="close-menu mt-5 mb-5 btn btn-m btn-center-l rounded-s shadow-xl text-uppercase font-900 bg-red-dark"
              >
                Save
              </a>
            </div>
            <div data-menu-load="menu-footer.html" />
          </div>
        </div>
      </div>
    </>
  );

  // return (
  // 	<div className="bg-white text-black pb-10 sign3-background" style={{
  // 		fontFamily: "emoji"
  // 	}}>
  // 	<TopNav path={"Edit Profile"}/>

  // 		<div className="mt-10 text-xl flex items-end justify-center">
  // 			<img src={vector} alt="" className=" h-40 mx-auto rounded-full" />

  // 		</div>
  // 		<div>
  // 			<div className="flex mx-5 text-xl flex-col mt-10">
  // 				<label className="mb-3" htmlFor="first-name">
  // 					First Name
  // 				</label>
  // 				<input
  // 					type="text"
  // 					placeholder="eg. Virat"
  // 					className="border-2 border-black-300 py-2 rounded-md pl-3"
  // 				/>
  // 			</div>
  // 			<div className="flex mx-5 text-xl flex-col mt-5">
  // 				<label className="mb-3" htmlFor="last-name">
  // 					Last Name
  // 				</label>
  // 				<input
  // 					type="text"
  // 					placeholder="Last Name"
  // 					className="border-2 border-black-300 py-2 rounded-md pl-3"
  // 				/>
  // 			</div>
  // 			<div className="flex mx-5 text-xl flex-col mt-5">
  // 				<label className="mb-3" htmlFor="email">
  // 					Email
  // 				</label>
  // 				<input
  // 					type="text"
  // 					placeholder="email"
  // 					className="border-2 border-black-300 py-2 rounded-md pl-3"
  // 				/>
  // 			</div>
  // 			<div className="flex mx-5 text-xl flex-col mt-5">
  // 				<label className="mb-3" htmlFor="date-of-birth">
  // 					Date of Birth
  // 				</label>
  // 				<input
  // 					type="date"
  // 					placeholder="Date of Birth"
  // 					className="border-2 border-black-300 py-2 rounded-md pl-3"
  // 				/>
  // 			</div>
  // 			<div className="flex mx-5 text-xl flex-col mt-5">
  // 				<label className="mb-3" htmlFor="gender">
  // 					Gender
  // 				</label>
  // 				<div className="flex gap-6">
  // 					<div className="text-xl border-2  flex items-center gap-2">
  // 						<input type="radio" className="rounded-md" />
  // 						<p>Male</p>
  // 					</div>
  // 					<div className="text-xl border-2  flex items-center gap-2">
  // 						<input type="radio" className="rounded-md" />
  // 						<p>Female</p>
  // 					</div>
  // 				</div>
  // 			</div>

  // 			<div className="flex mx-5 text-xl flex-col mt-5 mb-8">
  // 			<button
  // 			style={{
  // 				marginBottom:"2rem"
  // 			}}
  // 								type="submit"
  // 								className="  text-white bg-gradient-to-r from-orange-500 to-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-12 mx-5  py-2.5 text-center send-otp-button"

  // 								>
  // 								Save
  // 							</button>
  // 			</div>

  // 		</div>
  // 	</div>

  // );
};

export default EditProfile;
