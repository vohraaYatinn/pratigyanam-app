import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Skeleton } from 'antd';

import { tracks } from "../data/tracks";
import AudioPlayer from "./AudioPlayer";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";

const TrackList = ({loggedInUserData}) => {
	const [selectedTrack, setSelectedTrack] = useState(tracks[0]);
	const [skeletontime, setSkeletonTime] = useState(true)

	useEffect(()=>{
		setTimeout(()=>{
			setSkeletonTime(false)
		},1500)
	})

	const handleTrackClick = (track) => {
		setSelectedTrack(track);
	};
	const tracks12 = [
		{
		  link: "/single-track/1",
		  iconClass: "fa fa-music font-14 bg-green-dark color-white rounded-sm shadow-xl",
		  title: "Affirmation Sound 1",
		  tagline: "Believe in yourself",
		  affirmationText: "You are capable of achieving great things.",
		  category: "Motivation"
		},
		{
		  link: "/single-track/2",
		  iconClass: "fa fa-music font-14 bg-green-dark color-white rounded-sm shadow-xl",
		  title: "Affirmation Sound 2",
		  tagline: "Positive Energy",
		  affirmationText: "Radiate positive energy and attract positivity.",
		  category: "Positivity"
		},
		{
		  link: "/single-track/2",
		  iconClass: "fa fa-music font-14 bg-green-dark color-white rounded-sm shadow-xl",
		  title: "Affirmation Sound 3",
		  tagline: "Positive Energy",
		  affirmationText: "Radiate positive energy and attract positivity.",
		  category: "Positivity"
		},
		{
		  link: "/single-track/2",
		  iconClass: "fa fa-music font-14 bg-green-dark color-white rounded-sm shadow-xl",
		  title: "Affirmation Sound 3",
		  tagline: "Positive Energy",
		  affirmationText: "Radiate positive energy and attract positivity.",
		  category: "Positivity"
		},
		{
		  link: "/single-track/2",
		  iconClass: "fa fa-music font-14 bg-green-dark color-white rounded-sm shadow-xl",
		  title: "Affirmation Sound 4",
		  tagline: "Positive Energy",
		  affirmationText: "Radiate positive energy and attract positivity.",
		  category: "Positivity"
		},
		{
		  link: "/single-track/2",
		  iconClass: "fa fa-music font-14 bg-green-dark color-white rounded-sm shadow-xl",
		  title: "Affirmation Sound 5",
		  tagline: "Positive Energy",
		  affirmationText: "Radiate positive energy and attract positivity.",
		  category: "Positivity"
		},
		{
		  link: "/single-track/2",
		  iconClass: "fa fa-music font-14 bg-green-dark color-white rounded-sm shadow-xl",
		  title: "Affirmation Sound 6",
		  tagline: "Positive Energy",
		  affirmationText: "Radiate positive energy and attract positivity.",
		  category: "Positivity"
		},
		{
		  link: "/single-track/2",
		  iconClass: "fa fa-music font-14 bg-green-dark color-white rounded-sm shadow-xl",
		  title: "Affirmation Sound 7",
		  tagline: "Positive Energy",
		  affirmationText: "Radiate positive energy and attract positivity.",
		  category: "Positivity"
		},
		{
		  link: "/single-track/2",
		  iconClass: "fa fa-music font-14 bg-green-dark color-white rounded-sm shadow-xl",
		  title: "Affirmation Sound 8",
		  tagline: "Positive Energy",
		  affirmationText: "Radiate positive energy and attract positivity.",
		  category: "Positivity"
		},
		{
		  link: "/single-track/2",
		  iconClass: "fa fa-music font-14 bg-green-dark color-white rounded-sm shadow-xl",
		  title: "Affirmation Sound 9",
		  tagline: "Positive Energy",
		  affirmationText: "Radiate positive energy and attract positivity.",
		  category: "Positivity"
		},
	  ];
	  const trackElements = tracks12.map((track, index) => (
		<React.Fragment key={index}>
		  {skeletontime ? (
			<Skeleton active={true} className="px-4 my-4" title={false} />
		  ) : (
			<Link to={track.link} className="track-link">
			  <i className={track.iconClass} />
			  <span>{track.title}</span>
			  <strong>{track.tagline}</strong>
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
            <a href="index.html" className="header-title">AppKit</a>
            <a href="#" data-menu="menu-main" className="header-icon header-icon-1"><i className="fas fa-bars" /></a>
            <a href="#" data-toggle-theme className="header-icon header-icon-4 show-on-theme-dark"><i className="fas fa-sun" /></a>
            <a href="#" data-toggle-theme className="header-icon header-icon-4 show-on-theme-light"><i className="fas fa-moon" /></a>
            <a href="#" data-menu="menu-share" className="header-icon header-icon-3"><i className="fas fa-share-alt" /></a>
          </div>
         
          <div className="page-content">
         <TopNav />
            <div className="page-title-clear" />
            <div className="card card-style">
              <div className="card mb-0 bg-6" data-card-height={150}/>
			  {skeletontime? <Skeleton.Image active={true} className="mx-auto pt-4" style={{width: "300px", height: "200px"}} title={false}/>:

              <div className="content mt-3" style={{
				display:"flex",
				flexDirection:"column",
				alignItems:"center"

			  }}> 
				<img src="https://t3.ftcdn.net/jpg/03/01/43/92/240_F_301439209_vpF837oCGM1lp0cnC7stzCBn3th0dQ6O.jpg" />
                <p className="color-highlight font-500 mb-n1">  </p>
                <h1 className="mt-4" style={{fontSize:"1.2rem"}}>Morning Affirmation</h1>
                <p className="mb-3">
                  


I am strong, capable, and ready to face the day with a smile.


                </p>
              </div>
			  }
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
          <div id="menu-main" className="menu menu-box-left rounded-0" data-menu-load="menu-main.html" data-menu-width={280} data-menu-active="nav-components" />
          <div id="menu-share" className="menu menu-box-bottom rounded-m" data-menu-load="menu-share.html" data-menu-height={370} />
          <div id="menu-colors" className="menu menu-box-bottom rounded-m" data-menu-load="menu-colors.html" data-menu-height={480} />
        </div>
      </div>
    );
			{/* <AudioPlayer selectedTrack={selectedTrack} /> */}
		</>
	);
};

export default TrackList;
