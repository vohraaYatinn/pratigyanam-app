import { Radio } from "antd";
import React from "react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
	return (
		<>
			<TopNav />
			<BottomNav />
			<div className="pt-[75px] mx-4 flex justify-between items-center">
				<div>
					<span className="text-sm font-semibold">welcome back</span>
					<h2 className="text-xl font-bold">Yatin Vohra</h2>
				</div>
				<img
					className="w-16 rounded-full"
					src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
					alt=""
				/>
			</div>
			<div className="flex justify-center items-center mt-8">
				<div className="grid grid-cols-2 gap-4">
					<div className="w-40 h-32 bg-red-700 text-white font-semibold rounded-lg flex items-center flex-col justify-center">
						<p className="text-white font-semibold tracking-wider text-lg text-center mt-2">
							Total Users
						</p>{" "}
						<p className="text-white tracking-wider text-3xl font-bold text-center mt-2">
							2300
						</p>
					</div>
					<div className="w-40 h-32 bg-blue-700 text-white font-semibold rounded-lg flex items-center flex-col justify-center">
						<p className="text-white font-semibold tracking-wider text-lg text-center mt-2">
							Male Users
						</p>{" "}
						<p className="text-white tracking-wider text-3xl font-bold text-center mt-2">
							2300
						</p>
					</div>
					<div className="w-40 h-32 bg-green-700 text-white font-semibold rounded-lg flex items-center flex-col justify-center">
						<p className="text-white font-semibold tracking-wider text-lg text-center mt-2">
							Female Users
						</p>{" "}
						<p className="text-white tracking-wider text-3xl font-bold text-center mt-2">
							2300
						</p>
					</div>
					<div className="w-40 h-32 bg-yellow-700 text-white font-semibold rounded-lg flex items-center flex-col justify-center">
						<p className="text-white font-semibold tracking-wider text-lg text-center mt-2">
							Monthly Subscriptions
						</p>{" "}
						<p className="text-white tracking-wider text-3xl font-bold text-center mt-2">
							2300
						</p>
					</div>
					<div className="w-40 h-32 bg-gray-700  rounded-lg flex items-center flex-col justify-center">
						<p className="text-white font-semibold tracking-wider text-lg text-center mt-2">
							Yearly Subscriptions
						</p>{" "}
						<p className="text-white tracking-wider text-3xl font-bold text-center mt-2">
							2300
						</p>
					</div>
				</div>
			</div>
			<div className="mt-5 text-2xl flex  flex-col gap-3 mx-3 font-bold ">
				<Link className="text-black" to={"/admin-categories"}>
					<div className="flex items-center justify-between">
						<p>Categories</p>
						<FaArrowRight />
					</div>
				</Link>
				<Link className="text-black" to={"/admin-upload"}>
					<div className="flex items-center justify-between">
						<p>Upload</p>
						<FaArrowRight />
					</div>
				</Link>
			</div>
		</>
	);
};

export default AdminDashboard;
