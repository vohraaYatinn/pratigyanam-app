import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import vector from "../data/vector.jpeg";
import { FaPen } from "react-icons/fa6";
import TopNav from "../components/TopNav";

const EditAddress = () => {
	return (
		<div className="bg-white text-black pb-10">
									<TopNav path={"Edit Address"}/>

			<div>
				<div className="flex mx-5 text-2xl flex-col mt-10">
					<label className="mb-3" htmlFor="first-name">
						Street Address
					</label>
					<input
						type="text"
						placeholder="Street Address"
						className="border-2 border-blue-600 py-2 rounded-full pl-3"
					/>
				</div>
				<div className="flex mx-5 text-2xl flex-col mt-5">
					<label className="mb-3" htmlFor="last-name">
                        City
					</label>
					<input
						type="text"
						placeholder="City name"
						className="border-2 border-blue-600 py-2 rounded-full pl-3"
					/>
				</div>
				<div className="flex mx-5 text-2xl flex-col mt-5">
					<label className="mb-3" htmlFor="email">
						Postal code
					</label>
					<input
						type="number"
						placeholder="Postal code"
						className="border-2 border-blue-600 py-2 rounded-full pl-3"
					/>
				</div>
				<div className="flex mx-5 text-2xl flex-col mt-5">
					<label className="mb-3" htmlFor="email">
                        State
					</label>
					<input
						type="text"
						placeholder="state"
						className="border-2 border-blue-600 py-2 rounded-full pl-3"
					/>
				</div>
				<div className="flex mx-5 text-2xl flex-col mt-5">
					<label className="mb-3" htmlFor="email">
                        Country
					</label>
					<input
						type="text"
						placeholder="Country"
						className="border-2 border-blue-600 py-2 rounded-full pl-3"
					/>
				</div>
				<div className="text-center">
                <button
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

export default EditAddress;
