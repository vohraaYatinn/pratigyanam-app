import React, { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaChevronRight, FaLocationDot } from "react-icons/fa6";
import music from "../assets/music.png";
import { Link, useNavigate } from "react-router-dom";
import { NavBar } from "antd-mobile";
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import { tracksFav, tracksFav3 } from "../data/tracks";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Dialog, List, SwipeAction, Toast, Image } from "antd-mobile";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Skeleton } from "antd";
const { Search } = Input;
import { Button, SearchBar, Space } from "antd-mobile";
import { getMusicService } from "../urls/urls";
import useAxios from "../network/useAxios";
import { useSelector } from "react-redux";
import { userData } from "../redux/reducers/functionalities.reducer";

const SearchComponent = () => {
  const loggedInUser = useSelector(userData);
  const [selectedTrack, setSelectedTrack] = useState(tracksFav[0]);
  const [skeletontime, setSkeletonTime] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const [musicList, setMusicList] = useState({
    category:[],
    music:[]
  });

  const [searchResponse, searchError, searchLoading, searchFetch] = useAxios();
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
    setTimeout(() => {
      setSkeletonTime(false);
    }, 1500);
  });

  const navigate = useNavigate();
  console.log(searchValue);

  const handleTrackClick = (track) => {
    setSelectedTrack(track);
  };
  const navigateTo = () => {
    navigate("/music");
  };
  const ref = useRef(null);

  const getSong = (value) => {
    setTimeout(() => {
      //   setManager([]);
      //   setShowElement(true)
      let payloadData = {
        searchText: value,
        language:loggedInUser?.user_preferences[0]?.language,
        gender: loggedInUser?.user_preferences[0]?.gender
      };
      searchFetch(getMusicService(payloadData));
    }, 500);
    // setTimer(delayDebounceFn)
  };
  console.log(loggedInUser)
  const searchSong = (value) => {
    if (value.length >= 3) {
      getSong(value);
    }
  };

  useEffect(() => {
    if (searchResponse?.result) {
      setMusicList(searchResponse.data);
    }
  }, [searchResponse]);

  return (
    <div>
      <div id="page">
        <TopNav />
        <BottomNav path={"search"} />
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
        {skeletontime ? (
          <>
            <div className="text-center ">
              <Skeleton
                active={true}
                title={false}
                paragraph={{ rows: 2 }}
                className="mt-3 mx-8"
              />
              <Skeleton
                active={true}
                title={false}
                paragraph={{ rows: 2 }}
                className="mt-5 mx-8"
              />
            </div>
          </>
        ) : (
          <div className="page-content">
            <div className="card card-style">
              <div className="content mb-2">
                <h4>Type Your Search </h4>

                <div class="input-style  has-borders mb-4">
                  <input
                    type="text"
                    class="form-control"
                    id="form1"
                    placeholder="start typing here..."
                    value={searchValue}
                    // onSearch={searchSong}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                      searchSong(e.target.value); // Call searchSong function with the current value
                    }}
                  />
                  <label for="form1" class="color-highlight">
                    Quantity
                  </label>
                </div>

                {searchLoading ? (
                  <Skeleton
                    active={true}
                    title={false}
                    paragraph={{ rows: 2 }}
                    className="mt-5 mx-8"
                  />
                ) : (
                  <>
                  {
                  musicList?.category.map((data, index) => (
                    <div className="list-group list-custom-large">
                      <Link
                        data-trigger-switch="switch-1"
                        className="border-0"
                        onClick={()=>{
                          navigate(`/music?filter=${data.id}&filterName=${data.type}`, { state: { category: data.id } });
                        }}
                      >
                        <div>
                          
                          <span>{data.type}</span>
                          <strong>Category</strong>
                        </div>
                        {/* <span className="badge bg-blue-dark font-11 color-white">Category</span> */}
                        <i className="fa fa-angle-right" />
                      </Link>
                    </div>
                  ))}
                  {
                  musicList?.music.map((data, index) => (
                    <div className="list-group list-custom-large">
                      <Link
                        data-trigger-switch="switch-1"
                        className="border-0"
                        to={`/single-track/${data?.id}`}
                      >
                        <div>
                          
                          <span>{data.title}</span>
                          <strong>Audio</strong>
                        </div>
                        {/* <span className="badge bg-blue-dark font-11 color-white">Category</span> */}
                        <i className="fa fa-angle-right" />
                      </Link>
                    </div>
                  ))}
                  
                  </>
                )}
              </div>
            </div>

            <div data-menu-load="menu-footer.html" />
          </div>
        )}
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

export default SearchComponent;

// return (
// 	<div className="bg-white text-black pb-10 sm:pb-24 sign3-background" style={{
// 		fontFamily: "emoji"
// 	}}>

// 		<div>
// 		<TopNav path={"Search"}/>

// 			<div className="mt-5">
// 				<p className="text-lg ml-4 mt-3">Recent Search Audios</p>
// 				<SearchBar
//       placeholder='Search Audio'
// 	  className="search-bar-antd"
//       style={{ '--background': '#ffffff', padding:"1rem", margin:"1rem 0rem"}}
//     />
// 				<section className="mx-3 h-full mb-[140px] overflow-scroll">

// 				{tracksFav3.map((item) => {
// 					return (

// 						<div
// 							key={item.id}
// 							className={`flex gap-5 my-3 items-center rounded-xl px-3 py-2  w-full `}>

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

// 					);
// 				})}
// 			</section>
// 			</div>

// 		</div>
// 		<BottomNav path="search"/>

// 	</div>

// );
