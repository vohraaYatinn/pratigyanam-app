import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import vector from "../data/vector.jpeg";
import { FaPen } from "react-icons/fa6";
import TopNav from "../components/TopNav";

const EditProfile = () => {
	return (
		<div className="bg-white text-black pb-10 sign3-background" style={{
			fontFamily: "emoji"
		}}>
		<TopNav path={"Edit Profile"}/>

			<div className="mt-10 text-xl flex items-end justify-center">
				<img src={vector} alt="" className=" h-40 mx-auto rounded-full" />
			
			</div>
			<div>
				<div className="flex mx-5 text-xl flex-col mt-10">
					<label className="mb-3" htmlFor="first-name">
						First Name
					</label>
					<input
						type="text"
						placeholder="eg. Virat"
						className="border-2 border-black-300 py-2 rounded-md pl-3"
					/>
				</div>
				<div className="flex mx-5 text-xl flex-col mt-5">
					<label className="mb-3" htmlFor="last-name">
						Last Name
					</label>
					<input
						type="text"
						placeholder="Last Name"
						className="border-2 border-black-300 py-2 rounded-md pl-3"
					/>
				</div>
				<div className="flex mx-5 text-xl flex-col mt-5">
					<label className="mb-3" htmlFor="email">
						Email
					</label>
					<input
						type="text"
						placeholder="email"
						className="border-2 border-black-300 py-2 rounded-md pl-3"
					/>
				</div>
				<div className="flex mx-5 text-xl flex-col mt-5">
					<label className="mb-3" htmlFor="date-of-birth">
						Date of Birth
					</label>
					<input
						type="date"
						placeholder="Date of Birth"
						className="border-2 border-black-300 py-2 rounded-md pl-3"
					/>
				</div>
				<div className="flex mx-5 text-xl flex-col mt-5">
					<label className="mb-3" htmlFor="gender">
						Gender
					</label>
					<div className="flex gap-6">
						<div className="text-xl border-2  flex items-center gap-2">
							<input type="radio" className="rounded-md" />
							<p>Male</p>
						</div>
						<div className="text-xl border-2  flex items-center gap-2">
							<input type="radio" className="rounded-md" />
							<p>Female</p>
						</div>
					</div>
				</div>
			
				<div className="flex mx-5 text-xl flex-col mt-5 mb-8">
				<button
				style={{
					marginBottom:"2rem"
				}}
									type="submit"
									className="  text-white bg-gradient-to-r from-orange-500 to-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-12 mx-5  py-2.5 text-center send-otp-button"
								
									>
									Save
								</button>
				</div>

			</div>
		</div>
		
	);
};

export default EditProfile;
