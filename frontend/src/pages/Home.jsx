import React, { useEffect, useState } from "react";
import vector from "../data/vector.jpeg";
import image1 from "../assets/images/morning.png";
import image2 from "../assets/images/night.png";
import image3 from "../assets/images/wealth.png";
import image4 from "../assets/images/health.png";
import image5 from "../assets/images/sleep.png";
import image6 from "../assets/images/stress.png";
import { Swiper } from 'antd-mobile'
import { IoMdSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import { Flex, Radio } from 'antd';
import TopNav from "../components/TopNav";
import OkayModal from "../common-components/OkayModal";
import { Modal } from 'antd-mobile'
import { Alert } from "antd";

const Home = () => {
	const navigate = useNavigate();
	const [slideSize1, setSlideSize1] = useState(85)
	const [slideSize2, setSlideSize2] = useState(85)


	const navigateTo = () => {
		navigate("/music");
	};


	useEffect(() => {
		const updateSlideSize = () => {
		  const screenWidth = window.innerWidth;
		  if (screenWidth >= 400) {
			setSlideSize1(85);
			setSlideSize2(75)
		  } else {
			setSlideSize1(100);
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
	const topDoctor = [image1,image2,image3]
	useEffect(()=>{
		const toast = localStorage.getItem("toast")
		if(toast){
		localStorage.setItem("toast",false)
		}
	},[])
	const topDoctors = topDoctor.map((color, index) => (
        <Swiper.Item key={index}>
         <img
					onClick={navigateTo}
					src={color}
					alt=""
					className=" rounded-xl h-52 w-[90%] ml-2"
					
				/>
        </Swiper.Item>
      ))
	const topDoctors2 = topDoctor.map((color, index) => (
        <Swiper.Item key={index}>
         <img
					onClick={navigateTo}
					src={color}
					alt=""
					className=" rounded-xl h-52 px-3 w-full ml-2"
				/>
        </Swiper.Item>
      ))

	return (
		<>
		<div className="sign2-background">
	
<TopNav path={"home"}/>
<Alert style={{marginTop:"1.6rem"}}
      message={<div style={{fontWeight:600, fontSize:"1.5rem"}}>Get Premium</div>}
      description={<div><p>You Got a 7 day free trail - get premium for take control of your listerning</p>
	  <button 
	 	onClick={()=> {navigate('/manage-subscriptions')}} 
	  style={{
		background:"black",
		color:"white",
		marginTop:"1.2rem",
		padding:"0.8rem 2rem",
		borderRadius:"40px"
	  }}>Upgrade Now</button>
	  </div>}
      type="success"
      closable
      onClose={onClose}
    />
			<div style={{marginTop:"1.6rem"}}>
			<Swiper slideSize={slideSize1} trackOffset={15} loop stuckAtBoundary={false}
            indicator={() => null}
            >
          {topDoctors}
        </Swiper>
				
			</div>
			<div className="mt-5 flex items-center justify-between mx-3 mt-3">
			<p className="text-xl font-bold uppercase">Categories</p>
			</div>
	
			<div className="mt-3 flex overflow-x-scroll gap-4 ">
			<img
					onClick={navigateTo}
					src={image1}
					style={{
						width:"45%",
						height:"12rem",
						objectFit:"cover"

					}}
					alt=""
					className=" rounded-xl  ml-2"
				/>
				<img
					onClick={navigateTo}
					src={image2}
					style={{
						width:"45%",
						height:"12rem",
						objectFit:"cover"

					}}
					alt=""
					className=" rounded-xl  ml-2"
				/>
			</div>
			<div className="mt-3 flex overflow-x-scroll gap-4 ">
			<img
					onClick={navigateTo}
					src={image3}
					style={{
						width:"45%",
						height:"12rem",
						objectFit:"cover"
					}}
					alt=""
					className=" rounded-xl  ml-2"
				/>
				<img
					onClick={navigateTo}
					src={image4}
					style={{
						width:"45%",
						height:"12rem",
						objectFit:"cover"

					}}
					alt=""
					className=" rounded-xl  ml-2"
				/>
			</div>
			<div className="mt-3 flex overflow-x-scroll gap-4 ">
			<img
					onClick={navigateTo}
					src={image5}
					style={{
						width:"45%",
						height:"12rem",
						objectFit:"cover"
					}}
					alt=""
					className=" rounded-xl  ml-2"
				/>
				<img
					onClick={navigateTo}
					src={image6}
					style={{
						width:"45%",
						height:"12rem",
						objectFit:"cover"

					}}
					alt=""
					className=" rounded-xl  ml-2"
				/>
			</div>
			<div className="mt-8 flex items-center justify-between mx-3 " >
				<p className="text-xl font-bold ">Morning Affirmations</p>
			</div>
			<div style={{marginTop:"1rem",}} >
			<Swiper slideSize={slideSize2} trackOffset={15} loop stuckAtBoundary={false}
            indicator={() => null}
            >
          {topDoctors2}
        </Swiper>
				
			</div>
			<div className="flex items-center justify-between mx-3 mt-3" >
			<p className="text-xl font-bold ">Night Affirmations</p>
			</div>
			<div style={{marginTop:"1rem",}} >
			<Swiper slideSize={slideSize2} trackOffset={15} loop stuckAtBoundary={false}
            indicator={() => null}
            >
          {topDoctors2}
        </Swiper>
				
			</div>
			<div className=" flex items-center justify-between mx-3 mt-3" >
			<p className="text-xl font-bold ">Wealth Affirmations</p>
			</div>
			<div style={{marginTop:"1rem"}} >
			<Swiper slideSize={slideSize2} trackOffset={15} loop stuckAtBoundary={false}
            indicator={() => null}
            >
          {topDoctors2}
        </Swiper>
				
			</div>
			<div className="mt-5 flex items-center justify-between mx-3 mt-3" >
			<p className="text-xl font-bold ">Health Affirmations</p>
			</div>
			<div style={{marginTop:"1rem", }} >
			<Swiper slideSize={slideSize2} trackOffset={15} loop stuckAtBoundary={false}
            indicator={() => null}
            >
          {topDoctors2}
        </Swiper>
				
			</div>
			<div className="mt-5 flex items-center justify-between mx-3 mt-3" >
			<p className="text-xl font-bold ">Deep-Sleep Affirmations</p>
			</div>
			<div style={{marginTop:"1rem", }} >
			<Swiper slideSize={slideSize2} trackOffset={15} loop stuckAtBoundary={false}
            indicator={() => null}
            >
          {topDoctors2}
        </Swiper>
				
			</div>
			<div className="mt-5 flex items-center justify-between mx-3 mt-3" >
			<p className="text-xl font-bold ">Stress-Management Affirmations</p>
			</div>
			<div style={{marginTop:"1rem", }} >
			<Swiper slideSize={slideSize2} trackOffset={15} loop stuckAtBoundary={false}
            indicator={() => null}
            >
          {topDoctors2}
        </Swiper>
				
			</div>
			<BottomNav path="home"/>
		</div>
		</>
	);
};

export default Home;
