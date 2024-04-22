import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import vector from "../data/vector.jpeg";
import { FaPen } from "react-icons/fa6";
import TopNav from "../components/TopNav";

const EditProfile = () => {
	return (
		<div className="bg-white text-black pb-10">
									<TopNav path={"Edit Profile"}/>

			<div className="mt-10 text-3xl flex items-end justify-center">
				<img src={vector} alt="" className=" h-40 mx-auto rounded-full" />
				<p className="bg-black px-2 py-2 rounded-full text-white">
					<FaPen />
				</p>
			</div>
			<div>
				<div className="flex mx-5 text-2xl flex-col mt-10">
					<label className="mb-3" htmlFor="first-name">
						First Name
					</label>
					<input
						type="text"
						placeholder="First Name"
						className="border-2 border-blue-600 py-2 rounded-full pl-3"
					/>
				</div>
				<div className="flex mx-5 text-2xl flex-col mt-5">
					<label className="mb-3" htmlFor="last-name">
						Last Name
					</label>
					<input
						type="text"
						placeholder="Last Name"
						className="border-2 border-blue-600 py-2 rounded-full pl-3"
					/>
				</div>
				<div className="flex mx-5 text-2xl flex-col mt-5">
					<label className="mb-3" htmlFor="email">
						Email
					</label>
					<input
						type="text"
						placeholder="email"
						className="border-2 border-blue-600 py-2 rounded-full pl-3"
					/>
				</div>
				<div className="flex mx-5 text-2xl flex-col mt-5">
					<label className="mb-3" htmlFor="date-of-birth">
						Date of Birth
					</label>
					<input
						type="date"
						placeholder="Date of Birth"
						className="border-2 border-blue-600 py-2 rounded-full px-3"
					/>
				</div>
				<div className="flex mx-5 text-2xl flex-col mt-5">
					<label className="mb-3" htmlFor="gender">
						Gender
					</label>
					<div className="flex items-center justify-evenly">
						<div className="text-2xl border-2 border-blue-600 py-2 px-5 rounded-full flex items-center gap-2">
							<input type="checkbox" className="rounded-full" />
							<p>Male</p>
						</div>
						<div className="text-2xl border-2 border-blue-600 py-2 px-5 rounded-full flex items-center gap-2">
							<input type="checkbox" className="rounded-full" />
							<p>Female</p>
						</div>
					</div>
				</div>
				<div className="flex mx-5 text-2xl flex-col mt-5">
					<label className="mb-3" htmlFor="date-of-birth">
						Location
					</label>
					<textarea
						type="text"
						placeholder="location"
						className="border-2 border-blue-600 py-2 rounded-full px-5"
					/>
				</div>
			</div>
		</div>
		
	);
};

export default EditProfile;
