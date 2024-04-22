import React, { useEffect } from "react";
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

const Home = () => {
	const navigate = useNavigate();
	const navigateTo = () => {
		navigate("/music");
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

	return (
		<>
<TopNav path={"home"}/>
			<div style={{marginTop:"1.6rem"}}>
			<Swiper slideSize={90} trackOffset={15} loop stuckAtBoundary={false}
            indicator={() => null}
            >
          {topDoctors}
        </Swiper>
				
			</div>
			<div className="mt-5 flex items-center justify-between mx-3 mt-3">
				<p className="text-3xl font-bold">Inner Balance</p>
			</div>
			<div className="mt-3 flex gap-4 ">
				<img
					onClick={navigateTo}
					src={image5}
					alt=""
					className=" rounded-xl h-32 w-32 ml-2"
				/>
				<img
					onClick={navigateTo}
					src={image4}
					alt=""
					className=" rounded-xl h-32 w-32 ml-2"
				/>
			</div>
			<div className="mt-3 flex overflow-x-scroll gap-4 ">
				<img
					onClick={navigateTo}
					src={image2}
					alt=""
					className=" rounded-xl h-32 w-32 ml-2"
				/>
				<img
					onClick={navigateTo}
					src={image3}
					alt=""
					className=" rounded-xl h-32 w-32 ml-2"
				/>
			</div>

			<BottomNav path="home"/>
		</>
	);
};

export default Home;
