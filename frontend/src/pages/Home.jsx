import React, { useEffect, useState } from "react";
import vector from "../data/vector.jpeg";
import music from "../assets/music.png"

import image1 from "../assets/images/banners/1.png"
import image2 from "../assets/images/banners/2.png"
import image3 from "../assets/images/banners/3.png"
import image4 from "../assets/images/banners/4.png"
import { IoMdSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import { Card, Flex, Radio } from 'antd';
import TopNav from "../components/TopNav";
import OkayModal from "../common-components/OkayModal";
import { Modal } from 'antd-mobile'
import { Alert } from "antd";
import { Space, Swiper } from 'antd-mobile'

const Home = () => {
	const navigate = useNavigate();
	const [slideSize1, setSlideSize1] = useState(85)
	const [slideSize2, setSlideSize2] = useState(85)


	const navigateTo = () => {
		navigate("/music");
	};
	const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

	const items = colors.map((color, index) => (
	  <Swiper.Item key={index}>
		<div style={{ background: color }}>
		  {index + 1}
		</div>
	  </Swiper.Item>
	))

	useEffect(() => {
		const updateSlideSize = () => {
		  const screenWidth = window.innerWidth;
		  if (screenWidth >= 400) {
			setSlideSize1(65);
			setSlideSize2(75)
		  } else {
			setSlideSize1(55);
			setSlideSize2(90)

		  }
		};
	
		// Call the function initially
		updateSlideSize();
	
		// Add event listener for window resize
		window.addEventListener('resize', updateSlideSize);
	
		// Cleanup the event listener on component unmount
		return () => {
		  window.removeEventListener('resize', updateSlideSize);
		};
	  }, []);
	const onClose = () => {
		console.log('I was closed.');
	  };


	const topDoctor = [
		{
		"title":"Health Affirmations",
		"image":image1

	},

	{
		"title":"Wealth Affirmations",
		"image":image2


	},	
	{
		"title":"Stress Management",
		"image":image3


	},	
	{
		"title":"Deep Sleep",
		"image":image4


	}


]
	useEffect(()=>{
		const toast = localStorage.getItem("toast")
		if(toast){
		localStorage.setItem("toast",false)
		}
	},[])
	const topDoctors = topDoctor.map((color, index) => (
        <Swiper.Item key={index}>
           <Card
    hoverable
    style={{
      width: 250,
    }}
    cover={<img alt="example" src={color.image} />}
  >
	<h1 style={{
		fontWeight:600,
		fontSize:"1.1rem"
	}}>{color.title}</h1>
	<div style={{
		lineHeight:"0.2rem"
	}}>
	<p>Hindi / English</p>
	{/* <p>Male / Female</p> */}
	</div>
  </Card>
        </Swiper.Item>
      ))



	  return (
		<div>
		  <div id="page">
			<div className="header header-auto-show header-fixed header-logo-center">
			  <a href="index.html" className="header-title">Pratigyanam</a>
			  <a href="#" data-menu="menu-main" className="header-icon header-icon-1"><i className="fas fa-bars" /></a>
			  <a href="#" data-toggle-theme className="header-icon header-icon-4 show-on-theme-dark"><i className="fas fa-sun" /></a>
			  <a href="#" data-toggle-theme className="header-icon header-icon-4 show-on-theme-light"><i className="fas fa-moon" /></a>
			  <a href="#" data-menu="menu-share" className="header-icon header-icon-3"><i className="fas fa-share-alt" /></a>
			</div>
<BottomNav />
	<TopNav />
			<div className="page-title-clear" />

			<div id="menu-main" className="menu menu-box-left rounded-0" data-menu-width={280} data-menu-active="nav-welcome" data-menu-load="menu-main.html" />
			<div id="menu-share" className="menu menu-box-bottom rounded-m" data-menu-load="menu-share.html" data-menu-height={370}> </div>
			<div id="menu-colors" className="menu menu-box-bottom rounded-m" data-menu-load="menu-colors.html" data-menu-height={480} />
			<div className="page-content">
			  <Swiper slideSize={slideSize1} trackOffset={15} loop stuckAtBoundary={false}
			  style={{marginBottom:"1.5rem"}}
			  >
          {topDoctors}
        </Swiper>
			
				
				
			  <div className="card card-style shadow-xl">
				<div className="content">
				  <p className="color-highlight font-600 mb-n1">Chakras Healing Expert</p>
				  <h1 className="font-24 font-700 mb-2">Meet Pratigyanam <i className="fa fa-star mt-n2 font-30 color-yellow-dark float-end me-2 scale-box" /></h1>
				  <p className="mb-1">
				  Feeling imbalanced? Pratigyanam, your holistic wellness app, connects you with certified Chakras Healing Experts for personalized guidance and a path to inner harmony.				  </p>
				</div>
			  </div>
			  <div className="card card-full-left card-style">
				<div className="content">
				  <div className="d-flex">
					<div className="me-3">
					  <img width={120} className="fluid-img rounded-m shadow-xl" src="images/po1.png" />
					</div>
					<div>
					  <p className="color-highlight font-600 mb-n1">Discover the Magic of </p>
					  <h2>Chakra Healing</h2>
					  <p className="mt-2">
					  Dive into a transformative journey with our app Pratigyanam 
					  </p>
					  {/* <a href="index-components.html" className="btn btn-sm rounded-s font-13 font-600 gradient-highlight">View All</a> */}
					</div>
				  </div>
				  <div className="divider mt-4" />
				  <div className="d-flex">
					<div className="me-3">
					  <img width={120} className="fluid-img rounded-m shadow-xl" src="images/po2.png" />
					</div>
					<div>
					  <p className="color-highlight font-600 mb-n1">Revitalize Your</p>
					  <h2>Energy Centers</h2>
					  <p className="mt-2">
					  Embark on a voyage of self-discovery with the seven energy
					  </p>
					</div>
				  </div>
				  <div className="divider mt-4" />
				  <div className="d-flex">
					<div className="me-3">
					  <img width={120} className="fluid-img rounded-m shadow-xl" src="images/po3.png" />
					</div>
					<div>
					  <p className="color-highlight font-600 mb-n1">Empower Your</p>
					  <h2>Mind, Body, and Spirit</h2>
					  <p className="mt-2">
					  Experience the profound effects of chakra healing with us.
					  </p>
					</div>
				  </div>
				</div>
			  </div>
			  <div className="row mb-0">
				<a href="#" className="col-6 pe-0">
				  <div className="card mr-0 card-style">
					<div className="d-flex pt-3 pb-3">
					  <div className="align-self-center">
						<i className="fa fa-history color-green-light ms-3 font-34 mt-1" />
					  </div>
					  <div className="align-self-center">
						<h5 className="ps-2 ms-1 mb-0">Recently <br /> Played</h5>
					  </div>
					</div>
					<p className="px-3">
					Reconnect with your favorite healing sessions and tracks with ease.
					</p>
				  </div>
				</a>
				<a href="#" className="col-6 ps-0">
				  <div className="card ml-0 card-style">
					<div className="d-flex pt-3 pb-3">
					  <div className="align-self-center">
						<i className="fa fa-music color-blue-dark ms-3 font-34 mt-1" />
					  </div>
					  <div className="align-self-center">
						<h5 className="ps-2 ms-1 mb-0">Audio<br />Library</h5>
					  </div>
					</div>
					<p className="px-3">
					Dive into a treasure trove of soundscapes designed to nourish Soul. 
					</p>
				  </div>
				</a>
			  </div>
			  <a href="#" data-toggle-theme >
			  </a>
			  <div data-menu-load="menu-footer.html" />
			</div>
			<div id="menu-share" className="menu menu-box-bottom menu-box-detached">
			  <div className="menu-title mt-n1"><h1>Share the Love</h1><p className="color-highlight">Just Tap the Social Icon. We'll add the Link</p><a href="#" className="close-menu"><i className="fa fa-times" /></a></div>
			  <div className="content mb-0">
				<div className="divider mb-0" />
				<div className="list-group list-custom-small list-icon-0">
				  <a href="auto_generated.html" className="shareToFacebook external-link">
					<i className="font-18 fab fa-facebook-square color-facebook" />
					<span className="font-13">Facebook</span>
					<i className="fa fa-angle-right" />
				  </a>
				  <a href="auto_generated.html" className="shareToTwitter external-link">
					<i className="font-18 fab fa-twitter-square color-twitter" />
					<span className="font-13">Twitter</span>
					<i className="fa fa-angle-right" />
				  </a>
				  <a href="auto_generated.html" className="shareToLinkedIn external-link">
					<i className="font-18 fab fa-linkedin color-linkedin" />
					<span className="font-13">LinkedIn</span>
					<i className="fa fa-angle-right" />
				  </a>
				  <a href="auto_generated.html" className="shareToWhatsApp external-link">
					<i className="font-18 fab fa-whatsapp-square color-whatsapp" />
					<span className="font-13">WhatsApp</span>
					<i className="fa fa-angle-right" />
				  </a>
				  <a href="auto_generated.html" className="shareToMail external-link border-0">
					<i className="font-18 fa fa-envelope-square color-mail" />
					<span className="font-13">Email</span>
					<i className="fa fa-angle-right" />
				  </a>
				</div>
			  </div>
			</div>
			<div id="menu-install-pwa-android" className="menu menu-box-bottom rounded-m">
			  <img className="mx-auto mt-4 rounded-m" src="app/icons/icon-128x128.png" alt="img" width={90} />
			  <h4 className="text-center mt-4 mb-2">Appkit on your Home Screen</h4>
			  <p className="text-center boxed-text-xl">
				Install Appkit on your home screen, and access it just like a regular app. It really is that simple!
			  </p>
			  <div className="boxed-text-l">
				<a href="#" className="pwa-install mx-auto btn btn-m font-600 bg-highlight">Add to Home Screen</a>
				<a href="#" className="pwa-dismiss close-menu btn-full mt-3 pt-2 text-center text-uppercase font-600 color-red-light font-12 pb-4 mb-3">Maybe later</a>
			  </div>
			</div>
			<div id="menu-install-pwa-ios" className="menu menu-box-bottom rounded-m">
			  <div className="boxed-text-xl top-25">
				<img className="mx-auto mt-4 rounded-m" src="app/icons/icon-128x128.png" alt="img" width={90} />
				<h4 className="text-center mt-4 mb-2">Appkit on your Home Screen</h4>
				<p className="text-center ms-3 me-3">
				  Install Appkit on your home screen, and access it just like a regular app. Open your Safari menu and tap "Add to Home Screen".
				</p>
				<a href="#" className="pwa-dismiss close-menu btn-full mt-3 text-center text-uppercase font-700 color-red-light opacity-90 font-110 pb-5">Maybe later</a>
			  </div>
			</div>
		  </div>
		</div>
	  );
};

export default Home;
