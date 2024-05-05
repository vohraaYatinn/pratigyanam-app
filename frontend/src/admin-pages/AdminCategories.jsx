import React from "react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import { categories } from "../data/categories";

const AdminCategories = () => {
	return (
		<>
			<TopNav />
			<BottomNav />
			<div className="w-full px-3 ">
				<div className="pt-20">
					<h1 className="font-bold text-center text-3xl mb-4">Categories</h1>
					<input
						className=" block w-full  bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-3  focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="Add new category"
					/>
					<button className="bg-blue-500 text-white px-5 py-1.5 rounded-lg">
						Submit
					</button>
				</div>
			</div>
			<div className="mt-5">
				<h1 className="text-3xl text-center my-2 font-bold">
					Total Categories
				</h1>
				{categories?.map((item) => {
					return (
						<>
							<div className="text-2xl flex items-center ml-5 gap-4">
								<p>{item.id}. {item.title}</p>
							</div>
						</>
					);
				})}
			</div>
		</>
	);
};

export default AdminCategories;
