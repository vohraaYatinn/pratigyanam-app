import React, { useEffect, useRef, useState } from "react";
import TopNav from "../components/TopNav";
import { Alert, Flex, Radio, Skeleton } from "antd";
import { FaArrowLeft, FaFemale, FaMale } from "react-icons/fa";

import english from "../assets/images/english.png";
import hindi from "../assets/images/hindi.png";
import BottomNav from "../components/BottomNav";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { userData } from "../redux/reducers/functionalities.reducer";
import useAxios from "../network/useAxios";
import { editProfileAndPreferencesService } from "../urls/urls";

const EditAddress = () => {
  const [skeletontime, setSkeletonTime] = useState(true);
  const doFetchNewData = useRef(true);
  const loggedInUser = useSelector(userData);
  const [loggedInUserData, setLoggedInUserData] = useState([]);
  //   const [gender, setGender] = useState(loggedInUserData?.user_preferences[0]?.gender)
  //   const [language, setLanguage] = useState(loggedInUserData?.user_preferences[0]?.language)
  useEffect(() => {
    setTimeout(() => {
      setSkeletonTime(false);
    }, 1500);
  });

  const [formValues, setFormValues] = useState({
    userId: loggedInUser ? loggedInUser?.id : "",
    audioGender: loggedInUser ? loggedInUser?.user_preferences[0]?.gender : "",
    language: loggedInUser ? loggedInUser?.user_preferences[0]?.language : "",
    editType: "preference",
  });
  const [editResponse, editError, editLoading, editFetch] = useAxios();

  const [message, setMessage] = useState({
    showMessage: false,
    isError: true,
    message: "",
  });

  const editResponseRef = useRef(editResponse);
  useEffect(() => {
    console.log(formValues);
    setLoggedInUserData(loggedInUser);
    console.log(loggedInUser);
    if (editResponseRef.current !== editResponse) {
      setMessage({
        showMessage: true,
        isError: false,
        message: editResponse.message,
      });
    }
	editResponseRef.current = editResponse
  }, [editResponse]);

  const onChangeGender = ({ target: { value } }) => {
    setFormValues({ ...formValues, audioGender: value });
    console.log("hii gender");
    editFetch(editProfileAndPreferencesService({ userId: loggedInUser ? loggedInUser?.id : "",
    audioGender: value,
    language: loggedInUser ? loggedInUser?.user_preferences[0]?.language : "",
    editType: "preference"}));
  };
  const onChangeLanguage = ({ target: { value } }) => {
    setFormValues({ ...formValues, language: value });
    editFetch(editProfileAndPreferencesService({ userId: loggedInUser ? loggedInUser?.id : "",
    audioGender: loggedInUser ? loggedInUser?.user_preferences[0]?.gender : "",
    language: value,
    editType: "preference"}));
  };

//   useEffect(() => {
//     if (
//       formValues.language !== loggedInUser?.user_preferences[0]?.language ||
//       formValues.gender !== loggedInUser?.user_preferences[0]?.gender
//     ) {
//       editFetch(editProfileAndPreferencesService(formValues));
//     }
//   }, [formValues]);

  return (
    <div>
      <div id="page">
        <TopNav />
        <BottomNav path={"profile"} />
        <div className="page-title page-title-fixed">
          <h1>User Lists</h1>
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
          <div className="card card-style">
            <div className="content mb-2">
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
              {skeletontime ? (
                <>
                  <div className="text-center ">
                    <Skeleton.Image
                      active={true}
                      style={{ width: "120px", height: "130px" }}
                      className=""
                    />
                    <Skeleton.Image
                      active={true}
                      style={{ width: "120px", height: "130px" }}
                      className="ml-5"
                    />
                    <Skeleton
                      active={true}
                      title={false}
                      paragraph={{ rows: 2 }}
                      className="mt-3 mx-8"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <Skeleton.Image
                      active={true}
                      style={{ width: "120px", height: "130px" }}
                      className=""
                    />
                    <Skeleton.Image
                      active={true}
                      style={{ width: "120px", height: "130px" }}
                      className="ml-5"
                    />
                    <Skeleton
                      active={true}
                      title={false}
                      paragraph={{ rows: 2 }}
                      className="mt-3 mx-8"
                    />
                  </div>
                </>
              ) : (
                <div className="list-group list-custom-large">
                  <div>
                    <div
                      className="pt-2 "
                      style={{
                        display: "flex",
                        fontSize: "7rem",
                        justifyContent: "space-around",
                        flexDirection: "row-reverse",
                        marginBottom: "1rem",
                      }}
                    >
                      <FaFemale />
                      <FaMale />
                    </div>
                    <div className="flex mx-5 text-xl flex-col ">
                      <Radio.Group
                        onChange={onChangeGender}
                        defaultValue={formValues.audioGender}
                        buttonStyle="solid"
                        size="large"
                        style={{ textAlign: "center" }}
                      >
                        <Radio.Button
                          value="male"
                          style={{
                            width: "50%",
                          }}
                        >
                          Male
                        </Radio.Button>
                        <Radio.Button
                          value="female"
                          style={{
                            width: "50%",
                            textAlign: "centers",
                          }}
                        >
                          Female
                        </Radio.Button>
                      </Radio.Group>
                      <div
                        className="mt-20"
                        style={{
                          display: "flex",
                          fontSize: "7rem",
                          justifyContent: "space-around",
                          flexDirection: "row-reverse",
                          marginBottom: "1rem",
                        }}
                      >
                        <img src={hindi} alt="" className="h-20 w-20" />
                        <img src={english} alt="" className="h-20 w-20" />
                      </div>

                      <Radio.Group
                        defaultValue={formValues.language}
                        onChange={onChangeLanguage}
                        buttonStyle="solid"
                        size="large"
                        style={{ textAlign: "center", marginTop: "10px" }}
                        className="pb-4"
                      >
                        <Radio.Button
                          value="english"
                          style={{
                            width: "50%",
                          }}
                        >
                          English
                        </Radio.Button>
                        <Radio.Button
                          value="hindi"
                          style={{
                            width: "50%",
                            textAlign: "centers",
                          }}
                        >
                          Hindi
                        </Radio.Button>
                      </Radio.Group>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <p></p>
          <div data-menu-load="menu-footer.html" />
        </div>
        <div
          id="menu-main"
          className="menu menu-box-left rounded-0"
          data-menu-load="menu-main.html"
          data-menu-width={280}
          data-menu-active="nav-components"
        />
        <div
          id="menu-share"
          className="menu menu-box-bottom rounded-m"
          data-menu-load="menu-share.html"
          data-menu-height={370}
        />
        <div
          id="menu-colors"
          className="menu menu-box-bottom rounded-m"
          data-menu-load="menu-colors.html"
          data-menu-height={480}
        />
      </div>
    </div>
  );
};

export default EditAddress;
