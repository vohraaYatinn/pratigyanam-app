import React, { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaChevronRight, FaLocationDot } from "react-icons/fa6";
import music from "../assets/music.png";
import { Link, useNavigate } from "react-router-dom";
import { NavBar} from 'antd-mobile'
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import { tracksFav, tracksFav3 } from "../data/tracks";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Dialog, List, SwipeAction, Toast, Image } from 'antd-mobile'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Skeleton } from 'antd';
const { Search } = Input;
import { Button, SearchBar, Space } from 'antd-mobile'




const AffirmationComponent = () => {
	const [selectedTrack, setSelectedTrack] = useState(tracksFav[0]);
	const [skeletontime, setSkeletonTime] = useState(true);

	useEffect(()=>{
		setTimeout(() => {
			setSkeletonTime(false)
		}, 1500);
	},[])
	const navigate = useNavigate();

	const handleTrackClick = (track) => {
		setSelectedTrack(track);
	};
	const navigateTo = () => {
		navigate("/music");
	};
	const ref = useRef(null)


		  return (
			<div>
			  <div id="page">
				<div className="header header-fixed header-logo-center header-auto-show">
				  <a href="index.html" className="header-title">Dashboard</a>
				  <a href="#" data-back-button className="header-icon header-icon-1"><i className="fas fa-chevron-left" /></a>
				  <a href="#" data-menu="menu-main" className="header-icon header-icon-4"><i className="fas fa-bars" /></a>
				  <a href="#" data-toggle-theme className="header-icon header-icon-3 show-on-theme-dark"><i className="fas fa-sun" /></a>
				  <a href="#" data-toggle-theme className="header-icon header-icon-3 show-on-theme-light"><i className="fas fa-moon" /></a>
				</div>
				<BottomNav path={"search"}/>
		<TopNav />
				<div className="page-title-clear" />
				<div className="page-content">
				  <div className="card card-style bg-11 mt-3" data-card-height={160}>
					<div className="card-bottom ps-3 pb-3">
					  <h1 className="font-17 color-white mb-n3">At a Glance</h1>
					  <h4 className="font-13 color-white mb-4 opacity-50">Latest Statistics</h4>
					  <div className="d-flex">
						<div className="pe-3">
						  <h5 className="color-white">15k</h5>
						  <h6 className="color-white opacity-60">Visits</h6>
						</div>
						<div className="pe-3">
						  <h5 className="color-white">14k</h5>
						  <h6 className="color-white opacity-60">Sales</h6>
						</div>
						<div className="ms-auto text-end pe-3">
						  <h5 className="color-white">$15.315</h5>
						  <h6 className="color-white opacity-60">Total Earnings</h6>
						</div>
					  </div>
					</div>
					<div className="card-overlay bg-black opacity-80" />
				  </div>

				  {skeletontime? <Skeleton active={true} title={false} className="px-4 my-4" paragraph={{
      rows: 6,
    }}/>:

				  <div class="card card-style morning-affirmation-div" style={{
					minHeight:"10rem",
					display:"flex",
					alignItems:"center",
					justifyContent:"center"
				  }}>
<div class="content">
<h3 style={{textAlign:"center", fontSize:"1.3rem"}}>Morning Affirmations
</h3>

</div>
</div>
}
{skeletontime? <Skeleton active={true} title={false} className="px-4 my-5" paragraph={{
      rows: 6,
    }}/>:
				  <div class="card card-style night-affirmation-div"  style={{
					minHeight:"10rem",
					display:"flex",
					alignItems:"center",
					justifyContent:"center"
				  }}>
<div class="content">
<h3 style={{textAlign:"center", fontSize:"1.3rem"}}>Night Affirmations
</h3>

</div>
</div>
}





				</div>
				<div id="menu-main" className="menu menu-box-left rounded-0" data-menu-load="menu-main.html" data-menu-width={280} data-menu-active="nav-pages" />
				<div id="menu-share" className="menu menu-box-bottom rounded-m" data-menu-load="menu-share.html" data-menu-height={370} />
				<div id="menu-colors" className="menu menu-box-bottom rounded-m" data-menu-load="menu-colors.html" data-menu-height={480} />
			  </div>
			</div>
		  );
		}
	



  
  

export default AffirmationComponent;




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