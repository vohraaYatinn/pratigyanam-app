import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import vector from "../data/vector.jpeg";
import { FaPen } from "react-icons/fa6";
import TopNav from "../components/TopNav";

const EditAddress = () => {
	return (
		<div className="bg-white text-black pb-10">
									<TopNav path={"Audio Language"}/>

			<div>
				<div className="flex mx-5 text-2xl flex-col mt-10">
					<label className="mb-3" htmlFor="first-name">
						Switch Audio Language
					</label>
									
					<button className="  text-white bg-gradient-to-r from-orange-500 to-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-12 mx-5  py-2.5 text-center send-otp-button">English</button>
									
					<button className="  text-white bg-gradient-to-r from-orange-500 to-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-12 mx-5  py-2.5 text-center send-otp-button">Hindi</button>
				</div>
			</div>
		</div>
		
	);
};

export default EditAddress;
