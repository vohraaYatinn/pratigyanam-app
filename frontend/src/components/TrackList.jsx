import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Skeleton } from "antd";

import { tracks } from "../data/tracks";
import AudioPlayer from "./AudioPlayer";
import { Link, useLocation } from "react-router-dom";
import TopNav from "./TopNav";
import useAxios from "../network/useAxios";
import {
  addUserRecentService,
  getMusicService,
  getUserRecentService,
} from "../urls/urls";
import { userData } from "../redux/reducers/functionalities.reducer";
import { useSelector } from "react-redux";

const TrackList = ({
  loggedInUserData,
  type,
  category,
  language,
  gender
}) => {
  const location = useLocation();
  const currentURL = window.location.href;
  const lastString = currentURL.substring(currentURL.lastIndexOf("/") + 1);
  const loggedInUser = useSelector(userData);
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);
  const [skeletontime, setSkeletonTime] = useState(true);
  const [filterValue, setFilterValue] = useState('');
  const [getResponse, getError, getLoading, getFetch] = useAxios();
  const [
    addToRecentResponse,
    addToRecentError,
    addToRecentLoading,
    addToRecentFetch,
  ] = useAxios();
  const [music, setMusic] = useState();
  useEffect(() => {
    setTimeout(() => {
      setSkeletonTime(false);
    }, 1500);
  });
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const filterParam = searchParams.get('filter');
    const filterName = searchParams.get('filterName');
    setFilterValue(filterName || '');
    console.log("filter", filterParam)
  }, [location.search]);

  useEffect(() => {
    console.log("last string", lastString);

    if (lastString == "recent-music") {
      getFetch(getUserRecentService({ userId: loggedInUser?.id }));
    } else {
      console.log("not");
      const searchParams = new URLSearchParams(location.search);
    const filterParam = searchParams.get('filter');
    const filterName = searchParams.get('filterName');
      getFetch(
        getMusicService({
          language: loggedInUser?.user_preferences[0]?.language,
          gender: loggedInUser?.user_preferences[0]?.gender,
          category: filterParam || ""
        })
      );
    }
  }, []);

  useEffect(() => {
    console.log("response", getResponse?.result);
    if (getResponse?.result) {
      setMusic(getResponse?.result);
    }
  }, [getResponse]);

  useEffect(() => {
    console.log("music:", music);
  }, [music]);

  const handleTrackClick = (track) => {
    setSelectedTrack(track);
  };


  const addToRecent = (trackId) => {
    addToRecentFetch(
      addUserRecentService({ userId: loggedInUser?.id, trackId: trackId })
    );
  };
  const trackElements = music?.map((track, index) => (
    <React.Fragment key={index}>
      {skeletontime ? (
        <Skeleton active={true} className="px-4 my-4" title={false} />
      ) : (
        <Link
          to={`/single-track/${track?.music?.id}`}
          className="track-link"
          onClick={() => addToRecent(track?.music?.id)}
        >
          {/* <i className={track.iconClass} /> */}
          <span> {track?.music?.title}</span>
          {lastString == "recent-music" &&
          <strong>{`${track?.music?.categories?.category?.type}`}</strong> }
          <i className="fa fa-angle-right" />

        </Link>
      )}
    </React.Fragment>
  ));

  return (
    <>
      <div>
        <div id="page">
          <div className="header header-auto-show header-fixed header-logo-center">
            <a href="index.html" className="header-title">
              AppKit
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

          <div className="page-content">
            <TopNav />
            <div className="page-title-clear" />
            <div className="card card-style">
              <div className="card mb-0 bg-6" data-card-height={150} />

              {lastString === "recent-music" ? (
                ""
              ) : (
                (category && music) && 
                <div
                  className="content mt-3"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img src="https://t3.ftcdn.net/jpg/03/01/43/92/240_F_301439209_vpF837oCGM1lp0cnC7stzCBn3th0dQ6O.jpg" />
                  <p className="color-highlight font-500 mb-n1"> </p>
                  <h1 className="mt-4" style={{ fontSize: "1.2rem" }}>
                    {filterValue ? filterValue : ""}
                  </h1>
                  {/* <p className="mb-3">
                    I am strong, capable, and ready to face the day with a
                    smile.
                  </p> */}
                </div>
              )}
            </div>
            <div className="card card-style">
              <div className="content mt-0 mb-0">
                <div className="list-group list-custom-large check-visited">
                  {trackElements}
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
        </div>
      </div>

      {/* <AudioPlayer selectedTrack={selectedTrack} /> */}
    </>
  );
};

export default TrackList;
