import React, { useEffect, useState } from "react";
import vector from "../data/vector.jpeg";
import music from "../assets/music.png";
import { IoMdSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import { Card, Flex, Radio, Skeleton } from "antd";
import TopNav from "../components/TopNav";
import OkayModal from "../common-components/OkayModal";
import { Modal } from "antd-mobile";
import { Alert } from "antd";
import { Space, Swiper } from "antd-mobile";
import po1 from "../assets/images/po1.png";
import po2 from "../assets/images/po2.png";
import po3 from "../assets/images/po3.png";
import { useSelector } from "react-redux";
import { userData } from "../redux/reducers/functionalities.reducer";
import useAxios from "../network/useAxios";
import { getNewCategoryService, singleDeviceLoginCheck } from "../urls/urls";
import { test_url_images } from "../config/environment";
import { Device } from '@capacitor/device';

const Home = () => {
  const loggedInUser = useSelector(userData);
  const [loggedInUserData, setLoggedInUserData] = useState([]);
  const navigate = useNavigate();
  const [slideSize1, setSlideSize1] = useState(85);
  const [slideSize2, setSlideSize2] = useState(85);
  const [skeletontime, setSkeletonTime] = useState(true);
  const [
    getCategoriesResponse,
    getCategoriesError,
    getCategoriesLoading,
    getCategoriesFetch,
  ] = useAxios();
  const [
    singleDeviceLoginResponse,
    singleDeviceLoginError,
    singleDeviceLoginLoading,
    singleDeviceLoginFetch,
  ] = useAxios();

  const [categories, setCategories] = useState([]);
  const [getDeviceDetails, setDeviceDetails] = useState(false)
  const logDeviceInfo = async () => {
    const info = await Device.getId();
    console.log(info?.identifier)
    setDeviceDetails(info?.identifier)
  };
  useEffect(() => {
    logDeviceInfo()

    setTimeout(() => {
      setSkeletonTime(false);
    }, 1500);
  });

  const navigateTo = (catId, catName) => {
    navigate(`/music?filter=${catId}&filterName=${catName}`, { state: { category: catId } });
  };
  const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];



  useEffect(() => {
    const updateSlideSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 400) {
        setSlideSize1(65);
        setSlideSize2(75);
      } else {
        setSlideSize1(70);
        setSlideSize2(90);
      }
    };

    // Call the function initially
    updateSlideSize();

    // Add event listener for window resize
    window.addEventListener("resize", updateSlideSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSlideSize);
    };
  }, []);



  useEffect(() => {
    const toast = localStorage.getItem("toast");
    if (toast) {
      localStorage.setItem("toast", false);
    }
    setLoggedInUserData(loggedInUser);
    console.log(loggedInUser);
    if (loggedInUser?.user_profile?.sub_active_till) {
      const subActiveTill = loggedInUser?.user_profile?.sub_active_till;
      const subActiveTillDate = new Date(subActiveTill.split('T')[0]);
      const today = new Date();
      const timeDiff = subActiveTillDate - today;
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      if(days < 0){
        navigate("/manage-subscriptions");
      }
      if(!(loggedInUser?.user_profile?.is_subscription_activated)){
        setMessage({
          showMessage: true,
          isError: false,
          message: `You are currently using free trail, ${days} days left`,
        });
      }

    }

    getCategoriesFetch(getNewCategoryService());
  }, []);

  useEffect(()=>{

    if(getDeviceDetails){
      singleDeviceLoginFetch(singleDeviceLoginCheck({
        deviceId:getDeviceDetails
      }));

    }
  },[getDeviceDetails])

  useEffect(() => {
    if (getCategoriesResponse?.result) {
      setCategories(getCategoriesResponse?.result);
    }
  }, [getCategoriesResponse]);
  const topDoctors = categories.map((color, index) => (
    <Swiper.Item
      key={index}
      onClick={() => {
        navigateTo(color?.id, color?.type);
      }}
    >
      <Card
        hoverable
        style={{
          width: 250,
        }}
        cover={<img alt="example" src={test_url_images + color?.image} />}
      >
        <h1
          style={{
            fontWeight: 600,
            fontSize: "1.1rem",
          }}
        >
          {color?.type}
        </h1>
        <div
          style={{
            lineHeight: "0.2rem",
          }}
        >
          {/* <p>Male / Female</p> */}
        </div>
      </Card>
    </Swiper.Item>
  ));

  const [message, setMessage] = useState({
    showMessage: false,
    isError: true,
    message: "",
  });



  return (
    <div>
      <div id="page">
        <div className="header header-auto-show header-fixed header-logo-center">
          <a href="index.html" className="header-title">
            Pratigyanam
          </a>
          <a
            href="#"
            data-menu="menu-main"
            className="header-icon header-icon-1"
          >
            <i className="fas fa-bars" />
          </a>
          <a
            href="#"
            data-toggle-theme
            className="header-icon header-icon-4 show-on-theme-dark"
          >
            <i className="fas fa-sun" />
          </a>
          <a
            href="#"
            data-toggle-theme
            className="header-icon header-icon-4 show-on-theme-light"
          >
            <i className="fas fa-moon" />
          </a>
          <a
            href="#"
            data-menu="menu-share"
            className="header-icon header-icon-3"
          >
            <i className="fas fa-share-alt" />
          </a>
        </div>
        <BottomNav path={"home"} />
        <TopNav />
        <div className="page-title-clear" />
        
          {message.showMessage ? (
            <div style={{ padding: "10px" }}>
            <Alert
              closable
              type="warning"
              message={message.message}
              dismiss={() => {
                setMessage((prevState) => ({
                  ...prevState,
                  showMessage: false,
                }));
              }}
              isError={message.isError}
            />
            </div>
          ) : null}
        
        <div
          id="menu-main"
          className="menu menu-box-left rounded-0"
          data-menu-width={280}
          data-menu-active="nav-welcome"
          data-menu-load="menu-main.html"
        />
        <div
          id="menu-share"
          className="menu menu-box-bottom rounded-m"
          data-menu-load="menu-share.html"
          data-menu-height={370}
        >
          {" "}
        </div>
        <div
          id="menu-colors"
          className="menu menu-box-bottom rounded-m"
          data-menu-load="menu-colors.html"
          data-menu-height={480}
        />
        <div className="page-content text-center">
        <div class="card card-style morning-affirmation-chakra-div" onClick={()=>{
          navigate("/sub-sound")
        }} style={{
					minHeight:"13rem",
					display:"flex",
					alignItems:"center",
					justifyContent:"center",
          marginBottom:"1rem"
				  }}>
<div class="content">
{/* <h3 style={{textAlign:"center", fontSize:"1.3rem"}}>CHAKRA HEALING
</h3> */}

</div>
</div>

          <div className="card card-style shadow-xl">
            {skeletontime ? (
              <Skeleton active={true} className="px-4 my-4" title={false} />
            ) : (
              <div className="content">
                <p className="color-highlight font-600 mb-n1">
                  Chakras Healing Expert
                </p>
                <h1 className="font-24 font-700 mb-2">
                  Meet Pratigyanam{" "}
                  <i className="fa fa-star mt-n2 font-30 color-yellow-dark float-end me-2 scale-box" />
                </h1>
                <p className="mb-1">
                  Feeling imbalanced? Pratigyanam, your holistic wellness app,
                  connects you with certified Chakras Healing Experts for
                  personalized guidance and a path to inner harmony.{" "}
                </p>
              </div>
            )}
          </div>
          {skeletontime ? (
            <Skeleton.Image
              active={true}
              style={{ width: "300px", height: "300px" }}
            />
          ) : (
            <Swiper
              slideSize={slideSize1}
              trackOffset={15}
              loop
              stuckAtBoundary={false}
              style={{ marginBottom: "1.5rem" }}
            >
              {topDoctors}
            </Swiper>
          )}

          <div className="card card-full-left card-style">
            <div className="content">
              {skeletontime ? (
                <Skeleton active={true} className="px-4 my-4" title={false} />
              ) : (
                <div className="d-flex">
                  <div className="me-3">
                    <img
                      width={120}
                      className="fluid-img rounded-m shadow-xl"
                      src={po1}
                    />
                  </div>
                  <div
                    onClick={() => {
                      navigate("/sub-sound");
                    }}
                  >
                    <p className="color-highlight font-600 mb-n1">
                      Discover the Magic of{" "}
                    </p>
                    <h2>Chakra Healing</h2>
                    <p className="mt-2">
                      Dive into a transformative journey with our app
                      Pratigyanam
                    </p>
                    {/* <a href="index-components.html" className="btn btn-sm rounded-s font-13 font-600 gradient-highlight">View All</a> */}
                  </div>
                </div>
              )}
              <div className="divider mt-4" />
              {skeletontime ? (
                <Skeleton active={true} className="px-4 my-4" title={false} />
              ) : (
                <div
                  className="d-flex"
                  onClick={() => {
                    navigate("/sub-sound");
                  }}
                >
                  <div className="me-3">
                    <img
                      width={120}
                      className="fluid-img rounded-m shadow-xl"
                      src={po2}
                    />
                  </div>
                  <div>
                    <p className="color-highlight font-600 mb-n1">
                      Revitalize Your
                    </p>
                    <h2>Energy Centers</h2>
                    <p className="mt-2">
                      Embark on a voyage of self-discovery with the seven energy
                    </p>
                  </div>
                </div>
              )}
              <div className="divider mt-4" />
              {skeletontime ? (
                <Skeleton active={true} className="px-4 my-4" title={false} />
              ) : (
                <div
                  className="d-flex"
                  onClick={() => {
                    navigate("/sub-sound");
                  }}
                >
                  <div className="me-3">
                    <img
                      width={120}
                      className="fluid-img rounded-m shadow-xl"
                      src={po3}
                    />
                  </div>
                  <div>
                    <p className="color-highlight font-600 mb-n1">
                      Empower Your
                    </p>
                    <h2>Mind, Body, and Spirit</h2>
                    <p className="mt-2">
                      Experience the profound effects of chakra healing with us.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
         
          {/* <a href="" data-toggle-theme></a> */}
          <div data-menu-load="menu-footer.html" />
        </div>
      </div>
    </div>
  );
};

export default Home;
