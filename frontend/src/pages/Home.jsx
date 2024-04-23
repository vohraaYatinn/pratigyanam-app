import React, { useEffect, useState } from "react";
import vector from "../data/vector.jpeg";
import image1 from "../data/thumbnails/image1.jpeg";
import image2 from "../data/thumbnails/image2.jpeg";
import image3 from "../data/thumbnails/image3.jpeg";
import image4 from "../data/thumbnails/image4.jpeg";
import image5 from "../data/thumbnails/image5.jpeg";
import image6 from "../data/thumbnails/image6.png";
import { Swiper } from 'antd-mobile'
import { IoMdSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";
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
					className=" rounded-xl h-48 ml-2"
					
				/>
        </Swiper.Item>
      ))
	const topDoctors2 = topDoctor.map((color, index) => (
        <Swiper.Item key={index}>
         <img
					onClick={navigateTo}
					src={color}
					alt=""
					className=" rounded-xl h-25 ml-2"
				/>
        </Swiper.Item>
      ))

	return (
		<div className="sign2-background">
	
<TopNav path={"home"}/>
<Alert style={{marginTop:"1.6rem"}}
      message={<div style={{fontWeight:600, fontSize:"1.5rem"}}>Get Premium</div>}
      description={<div><p>You Got a 7 day free trail - get premium for take control of your listerning</p>
	  <Link to={'/manage-subscriptions'}>

	  <button style={{
		background:"black",
		color:"white",
		marginTop:"1.2rem",
		padding:"0.8rem 2rem",
		borderRadius:"40px"
	  }}>Buy Now</button>
	  </Link>

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
			<p className="text-xl font-bold ">INNER BALANCE</p>
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
					src={image5}
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
					src={image5}
					style={{
						width:"45%",
						height:"12rem",
						objectFit:"cover"

					}}
					alt=""
					className=" rounded-xl  ml-2"
				/>
			</div>
			<div className="mt-5 flex items-center justify-between mx-3 mt-3" >
				<p className="text-xl font-bold ">INNER BALANCE</p>
			</div>
			<div style={{marginTop:"1rem", paddingBottom:"1rem"}} >
			<Swiper slideSize={slideSize2} trackOffset={15} loop stuckAtBoundary={false}
            indicator={() => null}
            >
          {topDoctors2}
        </Swiper>
				
			</div>
			<div className="mt-5 flex items-center justify-between mx-3 mt-3" >
			<p className="text-xl font-bold ">INNER BALANCE</p>
			</div>
			<div style={{marginTop:"1rem", paddingBottom:"10rem"}} >
			<Swiper slideSize={slideSize2} trackOffset={15} loop stuckAtBoundary={false}
            indicator={() => null}
            >
          {topDoctors2}
        </Swiper>
				
			</div>
			<BottomNav path="home"/>
		</div>
	);
};

export default Home;
