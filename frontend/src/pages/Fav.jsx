import React, { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaChevronRight, FaLocationDot } from "react-icons/fa6";
import {
  MdDeleteOutline,
  MdOutlinePayment,
  MdOutlineSecurity,
} from "react-icons/md";
import {
  IoLockOpenOutline,
  IoLockClosedOutline,
  IoLanguage,
} from "react-icons/io5";
import { Flex, Radio, Skeleton } from "antd";

import { FiEdit } from "react-icons/fi";
import vector from "../data/vector.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { NavBar } from "antd-mobile";
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import { tracksFav } from "../data/tracks";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Dialog, List, SwipeAction, Toast, Image } from "antd-mobile";
import { categoriesFav } from "../data/categories";
import { useSelector } from "react-redux";
import { userData } from "../redux/reducers/functionalities.reducer";
import { addUserRecentService, getUserFavouriteService } from "../urls/urls";
import useAxios from "../network/useAxios";

const FavComponent = () => {
  const navigate = useNavigate();

  const loggedInUser = useSelector(userData);
  const [selectedTrack, setSelectedTrack] = useState(tracksFav[0]);
  const [toggleCategory, setToggleCategory] = useState("category");
  const [skeletontime, setSkeletonTime] = useState(true);
  const [loggedInUserData, setLoggedInUserData] = useState([]);
  const [userFavourites, setUserFavourites] = useState([]);
  const [
    addToRecentResponse,
    addToRecentError,
    addToRecentLoading,
    addToRecentFetch,
  ] = useAxios();

  const [userCategories, setUserCategories] = useState([]);
  const [favResponse, favError, favLoading, favpFetch] = useAxios();
  useEffect(() => {
    setTimeout(() => {
      setSkeletonTime(false);
    }, 200);
  });
  useEffect(() => {
    if (loggedInUser?.user_profile?.sub_active_till) {
      const subActiveTill = loggedInUser?.user_profile?.sub_active_till;
      const subActiveTillDate = new Date(subActiveTill.split('T')[0]);
      const today = new Date();
      const timeDiff = subActiveTillDate - today;
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      if(days < 0){
        navigate("/manage-subscriptions");
      }
    }
  }, []);
  useEffect(() => {
    setLoggedInUserData(loggedInUser);
    console.log(loggedInUser);
  }, []);

  useEffect(() => {
    if (loggedInUserData?.id) {
      console.log(loggedInUserData);
      favpFetch(getUserFavouriteService({ userId: loggedInUserData?.id }));
    }
  }, [loggedInUserData]);

  const handleTrackClick = (track) => {
    setSelectedTrack(track);
  };
  const ChangeRadio = (e) => {
    setToggleCategory(e.target.value);
  };
  const ref = useRef(null);

  useEffect(() => {
    console.log(favResponse);
    let categoryList = [];
    {
      favResponse?.result &&
        favResponse?.result.map((value) => {
          if (value.track.categories) {
            const categoryId = value.track.categories.category.id;
            const categoryName = value.track.categories.category.type;
            const isIdPresent = categoryList.some(
              (category) => category.id === categoryId
            );
            if (!isIdPresent) {
              categoryList.push({ id: categoryId, name: categoryName });
            }
          }
          console.log("categores", categoryList);
        });
    }
   
    setUserCategories(categoryList);
    setUserFavourites(favResponse?.result ? favResponse?.result : []);
  }, [favResponse]);

  const addToRecent = (trackId) => {
    addToRecentFetch(
      addUserRecentService({ userId: loggedInUser?.id, trackId: trackId })
    );
  };

  return (
    <>
      <TopNav />
      <BottomNav path={"fav"} />
      <div className="page-title-clear" />
      <Radio.Group
        defaultValue="categories"
        buttonStyle="solid"
        size="large"
        style={{ textAlign: "center", width: "100%", padding: "1rem" }}
        onChange={(e) => {
          ChangeRadio(e);
        }}
      >
        <Radio.Button
          value="categories"
          style={{
            width: "50%",
          }}
        >
          Categories
        </Radio.Button>
        <Radio.Button
          value="audio"
          style={{
            width: "50%",
            textAlign: "centers",
          }}
        >
          Audio
        </Radio.Button>
      </Radio.Group>

      <div className="page-content">
        <div className="card card-style">
          <div className="content mb-2">
            <div className="list-group list-custom-large">
              {toggleCategory === "audio" ? (
                <>
                  {userFavourites.map((item) => {
                    return skeletontime ? (
                      <Skeleton
                        active={true}
                        className="px-4 my-4"
                        title={false}
                        paragraph={{ row: 1 }}
                      />
                    ) : (
                      // <a href="#">
                      <Link
                        to={`/single-track/${item?.track?.id}`}
                        className="track-link"
                        onClick={() => addToRecent(item?.track?.id)}
                      >
                        {/* <img src={item.img} /> */}
                        <span>{item?.track?.title}</span>
                        {/* <strong>{item?.track?.artist}</strong> */}
                        <strong>{`${item?.track?.categories?.category?.type}`}</strong> 
                        <span className="badge bg-red-dark font-11 color-white">
                          Audio
                        </span>
                        <i className="fa fa-angle-right" />
                        {/* </a> */}
                      </Link>
                    );
                  })}
                      { 
      userFavourites.length == 0 && <span>No favorites have been added.
      </span>
    }
                </>
              ) : (
                <>
                  {userCategories?.map((item) => {
                    return skeletontime ? (
                      <Skeleton
                        active={true}
                        className="px-4 my-4"
                        title={false}
                        paragraph={{ row: 1 }}
                      />
                    ) : (
                      // <a
                      //   data-trigger-switch="switch-1"
                      //   className="border-0"
                      //   href="#"
                      // >
                      <Link
                      onClick={()=>{
                        navigate(`/music?filter=${item.id}&filterName=${item.name}`, { state: { category: item.id } });

                      }}
                        // to={{
                        //   pathname: `/music`,
                        //   search: `?filter=${item.id}&filterName=${item.name}`,
                        //   state: { category: item.id }
                        // }}
                        className="track-link"
                       
                      >
                        {/* <img src="images/avatars/5s.png" alt="Avatar" /> */}

                        <span>{item.name}</span>
                        <span className="badge bg-blue-dark font-11 color-white">
                          Category
                        </span>

                        <i className="fa fa-angle-right" />
                        {/* </a> */}
                      </Link>
                    );
                  })}
                  { 
      userCategories.length == 0 && <span>No favorites have been added.</span>
    }
                </>
              )}
            </div>
          </div>
        </div>

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
    </>
  );
};

export default FavComponent;

// return (
// 	<div className="bg-white text-black pb-10 sm:pb-24 sign3-background" style={{
// 		fontFamily: "emoji"
// 	}}>

// 		<div>
// 		<TopNav path={"Favourite Audio"}/>
// 		<Radio.Group defaultValue="categories" buttonStyle="solid" size="large" style={{textAlign:"center", width:"100%", marginTop:"1rem", padding:"1rem"}}
// 		onChange={(e)=>{
// 			ChangeRadio(e)
// 		}}
// 		>
//   <Radio.Button value="categories" style={{
// 	width:"50%"
//   }}>Categories</Radio.Button>
//   <Radio.Button value="audio"
//   style={{
// 	width:"50%",
// 	textAlign:"centers"
//   }}
//   >Audio</Radio.Button>
//   </Radio.Group>

// 			{toggleCategory === "audio" ? <div className="mt-5">
// 				<p className="text-lg ml-4 mt-3">Saved Audios</p>
// 				<section className="mx-3 h-full mb-[140px] overflow-scroll">
// 				{tracksFav.map((item) => {
// 					return (
// 						<SwipeAction
// 						ref={ref}
// 						className="seared-components"
// 						closeOnAction={false}
// 						closeOnTouchOutside={false}
// 						rightActions={[
// 						  {
// 							key: 'delete',
// 							text: 'Remove',
// 							color: 'danger',
// 							onClick: async () => {

// 							  ref.current?.close()
// 							},
// 						  },
// 						]}
// 					  >
// 						<Link to={`/single-track/${item.id}`} key={item.id} className="text-black">
// 						<div
// 							className={`flex gap-5 my-3 items-center rounded-xl px-3 py-2  w-full`}>

// 							<img src={item.img} alt="" className="h-12 rounded-lg  w-12"
// 							style={{
// 								objectFit:"cover"
// 							}}
// 							/>
// 							<div className="w-full">
// 								<p className="font-bold text-xl text-start">{item.title}</p>
// 								<p>{item.time}</p>
// 							</div>
// 						</div>
// 						</Link>
// 					  </SwipeAction>

// 					);
// 				})}
// 			</section>
// 			</div> : <div>
// 			<p className="text-lg ml-4 mt-3">Saved Audios</p>
// 				<section className="mx-3 h-full mb-[140px] overflow-scroll">
// 				{categoriesFav.map((item) => {
// 					return (
// 						<SwipeAction
// 						ref={ref}
// 						className="seared-components"
// 						closeOnAction={false}
// 						closeOnTouchOutside={false}
// 						rightActions={[
// 						  {
// 							key: 'delete',
// 							text: 'Remove',
// 							color: 'danger',
// 							onClick: async () => {

// 							  ref.current?.close()
// 							},
// 						  },
// 						]}
// 					  >
// 						<div
// 							key={item.id}
// 							className={`flex gap-5 my-3 items-center rounded-xl px-3 py-2  w-full`}>

// 							<img src={item.img} alt="" className="h-12 rounded-lg  w-12"
// 							style={{
// 								objectFit:"cover"
// 							}}
// 							/>
// 							<div className="w-full">
// 								<p className="font-bold text-xl text-start">{item.title}</p>
// 							</div>
// 						</div>

// 					  </SwipeAction>
// 					  );
// 					})}
// 				</section>
// 				</div>}

// 		</div>
// 		<BottomNav path="fav"/>

// 	</div>

// );
