import React, { useState, useRef } from "react";
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

import { FiEdit } from "react-icons/fi";
import vector from "../data/vector.jpeg";
import { Link } from "react-router-dom";
import { NavBar} from 'antd-mobile'
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import { tracksFav } from "../data/tracks";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Dialog, List, SwipeAction, Toast, Image } from 'antd-mobile'
import { categoriesFav } from "../data/categories";


const FavComponent = () => {
	const [selectedTrack, setSelectedTrack] = useState(tracksFav[0]);
	const [toggleCategory, setToggleCategory] = useState("audio");

	const handleTrackClick = (track) => {
		setSelectedTrack(track);
	};
	const ref = useRef(null)

	return (
		<div className="bg-white text-black pb-10 sm:pb-24 sign3-background" style={{
			fontFamily: "emoji"
		}}>

			<div>
			<TopNav path={"Favourite Audio"}/>
				<div className="flex  items-center justify-evenly text-xl my-3  text-white bg-gradient-to-r from-orange-500 to-yellow-500">
				<button onClick={()=>setToggleCategory("categories")} className="  border-r-2 border-black font-medium  w-[50%]  py-2.5 text-center">Categories</button>
					<button onClick={()=>setToggleCategory("audio")}  className=" w-[50%]   font-medium   py-2.5 text-center">Audio</button>
				</div>
				{toggleCategory === "audio" ? <div className="mt-5">
					<p className="text-lg ml-4 mt-3">Saved Audios</p>
					<section className="mx-3 h-full mb-[140px] overflow-scroll">
					{tracksFav.map((item) => {
						return (
							<SwipeAction
							ref={ref}
							className="seared-components"
							closeOnAction={false}
							closeOnTouchOutside={false}
							rightActions={[
							  {
								key: 'delete',
								text: 'Remove',
								color: 'danger',
								onClick: async () => {
								  
								  ref.current?.close()
								},
							  },
							]}
						  >
							<Link to={`/single-track/${item.id}`} key={item.id} className="text-black">
							<div
								className={`flex gap-5 my-3 items-center rounded-xl px-3 py-2  w-full`}>
								
								<img src={item.img} alt="" className="h-12 rounded-lg  w-12" 
								style={{
									objectFit:"cover"
								}}
								/>
								<div className="w-full">
									<p className="font-bold text-xl text-start">{item.title}</p>
									<p>{item.time}</p>
								</div>
							</div>
							</Link>
						  </SwipeAction>
							
						);
					})}
				</section>
				</div> : <div>
				<p className="text-lg ml-4 mt-3">Saved Audios</p>
					<section className="mx-3 h-full mb-[140px] overflow-scroll">
					{categoriesFav.map((item) => {
						return (
							<SwipeAction
							ref={ref}
							className="seared-components"
							closeOnAction={false}
							closeOnTouchOutside={false}
							rightActions={[
							  {
								key: 'delete',
								text: 'Remove',
								color: 'danger',
								onClick: async () => {
								  
								  ref.current?.close()
								},
							  },
							]}
						  >
							<div
								key={item.id}
								className={`flex gap-5 my-3 items-center rounded-xl px-3 py-2  w-full`}>
								
								<img src={item.img} alt="" className="h-12 rounded-lg  w-12" 
								style={{
									objectFit:"cover"
								}}
								/>
								<div className="w-full">
									<p className="font-bold text-xl text-start">{item.title}</p>
								</div>
							</div>
							  
						  </SwipeAction>	
						  );
						})}
					</section>
					</div>}
		
			
			</div>
			<BottomNav path="fav"/>

		</div>
		
	);
};

export default FavComponent;
