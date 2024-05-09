import React, { useRef } from "react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import { Button, Dropdown } from "antd-mobile";

const AdminSubscription = () => {
	const ref = useRef(null);

	return (
		<>
			<TopNav />
			<BottomNav />
			<div className="pt-20">
				<h1 className="text-2xl font-bold text-center">Add subscriptions</h1>

				<div className="mx-3">
					<form className="w-full ">
						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full px-3  ">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									for="grid-first-name">
									Name
								</label>
								<input
									className=" block w-full  bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-3  focus:outline-none focus:bg-white"
									id="grid-first-name"
									type="text"
									placeholder="Name of the Sound"
								/>
							</div>
							<div className="w-full px-3  ">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									for="grid-first-name">
									Description
								</label>
								<input
									className=" block w-full  bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-3  focus:outline-none focus:bg-white"
									id="grid-first-name"
									type="text"
									placeholder="Description of the Sound"
								/>
							</div>
							<div className="w-full px-3  ">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									for="grid-first-name">
									Price
								</label>
								<input
									className=" block w-full  bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-3  focus:outline-none focus:bg-white"
									id="grid-first-name"
									type="number"
									placeholder="Description of the Sound"
								/>
							</div>
							
							
						</div>
					</form>

					<div className="text-center mt-3 flex flex-col items-center gap-3">
						<button className="bg-red-600 text-white font-bold text-2xl px-6 rounded-lg py-1">
							Upload
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminSubscription;
