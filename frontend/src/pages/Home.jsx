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
import { Flex, Radio } from 'antd';
import TopNav from "../components/TopNav";
import OkayModal from "../common-components/OkayModal";
import { Modal } from 'antd-mobile'
import { Alert } from "antd";

const Home = () => {
	const navigate = useNavigate();
	const [slideSize1, setSlideSize1] = useState(85)
	const [slideSize2, setSlideSize2] = useState(85)
	const [showModal, setShowModal] = useState(false)

	const navigateTo = () => {
		navigate("/music");
	};

	useEffect(()=>{
		setShowModal(true)
	},[])

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
		<>
		{showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    * Please select your default gender & language preference.
                  </p>
                </div>
				<div>
				<div className="flex mx-5 text-xl flex-col pb-10">
		
					
		
		<Radio.Group defaultValue="a" buttonStyle="solid" size="large" style={{textAlign:"center"}}>
<Radio.Button value="a" style={{
width:"50%"
}}>Male</Radio.Button>
<Radio.Button value="b"
style={{
width:"50%",
textAlign:"centers"
}}
>Female</Radio.Button>
</Radio.Group>
		<Radio.Group defaultValue="a" buttonStyle="solid" size="large" style={{textAlign:"center", marginTop: "10px"}}>
<Radio.Button value="a" style={{
width:"50%"
}}>Hindi</Radio.Button>
<Radio.Button value="b"
style={{
width:"50%",
textAlign:"centers"
}}
>English</Radio.Button>
</Radio.Group>
	
	</div>
				</div>
				<div className=" flex items-center justify-end gap-4 text-2xl mr-5 mb-5">
				<button onClick={()=> setShowModal(false)} className="text-red-500 ">close</button>
				<button className=" text-white bg-gradient-to-r from-orange-500 to-yellow-500 px-4 rounded-xl py-1">save</button>
				</div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

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
		</>
	);
};

export default Home;
