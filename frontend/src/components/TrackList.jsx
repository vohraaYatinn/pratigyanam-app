import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";

import { tracks } from "../data/tracks";
import AudioPlayer from "./AudioPlayer";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";

const TrackList = () => {
	const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

	const handleTrackClick = (track) => {
		setSelectedTrack(track);
	};

	return (
		<>
			<div className=" w-screen">
			<TopNav path={"audio"}/>
				<section className="mt-8 flex justify-around gap-4 mx-3">
					<div>
						<img
							src={selectedTrack.img}
							style={{
								objectFit:"cover"
							}}
							alt=""
							className="h-32 w-32 rounded-md "
						/>
					</div>
					<div
					className="common-flex-property"
					
					>
						<h4 className="text-3xl font-bold">{selectedTrack.title}</h4>
						<p className="text-lg mt-2 text-black"
						style={{marginTop:"0rem"}}
						>{selectedTrack.author}</p>
					</div>
				</section>
				<section className="mt-8 border-t border-b border-gray-300 py-2">
					<div className="text-xl flex items-center justify-between mx-6">
						<p className="text-black">{tracks.length} Tracks</p>
						<button className="bg-gradient-to-r from-orange-500 to-yellow-500  text-black font-semibold py-2 px-6 rounded-full ">
							Play All
						</button>
					</div>
				</section>
				<section className="mx-3 h-full mb-[140px] overflow-scroll">
					{tracks.map((item) => {
						return (
							<div
								key={item.id}
								className={`flex gap-5 my-5 items-center rounded-xl px-3 py-2  w-full ${
									selectedTrack.id === item.id ? "bg-white" : ""
								}`}
								onClick={() => handleTrackClick(item)}>
								<p>{item.id}</p>
								<img src={item.img} alt="" className="h-12 rounded-lg  w-12" 
								style={{
									objectFit:"cover"
								}}
								/>
								<div className="w-full">
									<p className="font-bold text-xl text-start">{item.title}</p>
									<p>{item.time}</p>
								</div>
								<p className="text-xl">
									<BsThreeDotsVertical />
								</p>
							</div>
						);
					})}
				</section>
			</div>
			<AudioPlayer selectedTrack={selectedTrack} />
		</>
	);
};

export default TrackList;
