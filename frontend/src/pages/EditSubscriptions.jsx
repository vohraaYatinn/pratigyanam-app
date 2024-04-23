import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import vector from "../data/vector.jpeg";
import { GoDot } from "react-icons/go";
import TopNav from "../components/TopNav";


const EditSubscriptions = () => {
	return (
		<div className="bg-white text-black pb-10 sign3-background" style={{
			fontFamily: "emoji"
		}}>
									<TopNav path={"Manage Subscriptions"}/>
			<div style={{
				    display: "flex",
					alignItems: "center",
					flexDirection: "column",
					marginTop: '3rem',
					fontSize:"1rem"
			}}>
			<p>Your Current Subscription plan</p>
			<h4>Type: <span style={{
				fontWeight:"700",
				fontSize:"1.5rem"
			}}>Monthly</span></h4>
			<h4>Valid Through: <span style={{
				fontWeight:"700",
				fontSize:"1.5rem"
			}}>30 April, 2024</span></h4>
			</div>
			<div>
				<div className="border-2 border-black mx-8 my-8 py-5 px-5 rounded-xl"
				style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}
				>
						<p className="text-6xl font-bold my-4">₹ 99/-</p>
						<h4 className="text-2xl font-semibold">Monthly</h4>
						<ul className="text-xl">
							<li className="my-3 flex items-center gap-3"><GoDot /> <p>Lorem ipsum dolor sit amet.</p>
 </li>
							<li className="my-3 flex items-center gap-3"><GoDot /> <p>Lorem ipsum dolor sit amet.</p>
 </li>
							<li className="my-3 flex items-center gap-3"><GoDot /> <p>Lorem ipsum dolor sit amet.</p>
 </li>
							
						</ul>
					<div className="text-center">
                <button
									type="submit"
									className="  text-white bg-gradient-to-r from-orange-500 to-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-12 mx-5  py-2.5 text-center send-otp-button"
								
									>
									Buy Now
								</button>
                </div>
				</div>
				<div className="border-2 border-black mx-8 my-8 py-5 px-5 rounded-xl"
				style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}
				>
					
						<p className="text-6xl font-bold my-4">₹ 599/-</p>
						<h4 className="text-2xl font-semibold">Yearly</h4>

						<ul className="text-xl">
							<li className="my-3 flex items-center gap-3"><GoDot /> <p>Lorem ipsum dolor sit amet.</p>
 </li>
							<li className="my-3 flex items-center gap-3"><GoDot /> <p>Lorem ipsum dolor sit amet.</p>
 </li>
							<li className="my-3 flex items-center gap-3"><GoDot /> <p>Lorem ipsum dolor sit amet.</p>
 </li>
							
						</ul>
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
