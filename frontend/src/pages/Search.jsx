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
import { Link, useNavigate } from "react-router-dom";
import { NavBar} from 'antd-mobile'
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import { tracksFav, tracksFav3 } from "../data/tracks";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Dialog, List, SwipeAction, Toast, Image } from 'antd-mobile'
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { Search } = Input;
import { Button, SearchBar, Space } from 'antd-mobile'




const SearchComponent = () => {
	const [selectedTrack, setSelectedTrack] = useState(tracksFav[0]);
	const navigate = useNavigate();

	const handleTrackClick = (track) => {
		setSelectedTrack(track);
	};
	const navigateTo = () => {
		navigate("/music");
	};
	const ref = useRef(null)

	return (
		<div className="bg-white text-black pb-10 sm:pb-24 sign3-background" style={{
			fontFamily: "emoji"
		}}>

			<div>
			<TopNav path={"Search"}/>

				<div className="mt-5">
					<p className="text-lg ml-4 mt-3">Recent Search Audios</p>
					<SearchBar
          placeholder='Search Audio'
		  className="search-bar-antd"
          style={{ '--background': '#ffffff', padding:"1rem", margin:"1rem 0rem"}}
        />
					<section className="mx-3 h-full mb-[140px] overflow-scroll">
		
					{tracksFav3.map((item) => {
						return (
							
							<div
								key={item.id}
								className={`flex gap-5 my-3 items-center rounded-xl px-3 py-2  w-full `}>
								
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
							  
							
						);
					})}
				</section>
				</div>
		
			
			</div>
			<BottomNav path="search"/>

		</div>
		
	);
};

export default SearchComponent;
