import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import vector from "../data/vector.jpeg";
import { GoDot } from "react-icons/go";
import TopNav from "../components/TopNav";


const EditSubscriptions = () => {
	return (
		<div className="bg-white text-black pb-10">
									<TopNav path={"Manage Subscriptions"}/>

			<div>
				<div className="border-2 border-black mx-8 my-8 py-5 px-5 rounded-xl">
					<h2 className="text-3xl font-semibold">Monthly</h2>
					<div>
						<p className="text-5xl font-bold my-4">$ 120</p>
						<ul className="text-xl">
							<li className="my-3 flex items-center gap-3"><GoDot /> <p>Lorem ipsum dolor sit amet.</p>
 </li>
							<li className="my-3 flex items-center gap-3"><GoDot /> <p>Lorem ipsum dolor sit amet.</p>
 </li>
							<li className="my-3 flex items-center gap-3"><GoDot /> <p>Lorem ipsum dolor sit amet.</p>
 </li>
							
						</ul>
					</div>
					<div className="text-center">
                <button
									type="submit"
									className="  text-white bg-gradient-to-r from-orange-500 to-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-12 mx-5  py-2.5 text-center send-otp-button"
								
									>
									Buy Now
								</button>
                </div>
				</div>
				<div className="border-2 border-black mx-8 my-8 py-5 px-5 rounded-xl">
					<h2 className="text-3xl font-semibold">Yearly</h2>
					<div>
						<p className="text-5xl font-bold my-4">$ 1200</p>
						<ul className="text-xl">
							<li className="my-3 flex items-center gap-3"><GoDot /> <p>Lorem ipsum dolor sit amet.</p>
 </li>
							<li className="my-3 flex items-center gap-3"><GoDot /> <p>Lorem ipsum dolor sit amet.</p>
 </li>
							<li className="my-3 flex items-center gap-3"><GoDot /> <p>Lorem ipsum dolor sit amet.</p>
 </li>
							
						</ul>
					</div>
					<div className="text-center">
                <button
									type="submit"
									className="  text-white bg-gradient-to-r from-orange-500 to-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-12 mx-5  py-2.5 text-center send-otp-button"
								
									>
									Buy Now
								</button>
                </div>
				</div>
			</div>
		</div>
		
	);
};

export default EditSubscriptions;
