import React from "react";

import refer from "../assets/refer.png";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import TopNav from "../components/TopNav";


const Refer = () => {
	return (
		<>
		<div className="bg-white text-black  sign5-background" >
									<TopNav path={"Refer and Earn"}/>
					
		
			<div className="mt-20 w-full text-center font-semibold ">
				<h2 className="text-2xl mb-10">Refer your friends and Earn</h2>
			</div>
			<div className="">
				<img src={refer} alt="" className="h-40 mx-auto" />
			</div>
			<div className="text-center text-lg mx-4">
				<p>
				Upon successfully sharing with 10 users, you'll unlock one month of free access.
				</p>
			</div>
			<div className="border-2 border-dashed border-black flex text-lg mx-5 my-7 px-3 py-2 gap-4">
				<div className="text-center">
					<p>your refferal code</p>
					<p className="uppercase font-bold text-3xl">abcgde234</p>
				</div>
				<div className="text-xl text-center w-full border-l border-l-black">
					<p>copy</p>
					<p>code</p>
				</div>
			</div>
			<p
				className="text-center font-semibold text-2xl
             my-8">
				{" "}
				Share your Refferral code via
			</p>
			<div className="flex items-center gap-3 justify-center mx-3">
				<div className="text-2xl flex items-center justify-center font-semibold gap-2 text-white bg-green-600 rounded-full px-4 py-3">
					<p>
						<FaWhatsapp />
					</p>
					<p>WhatsApp</p>
				</div>
				<div className="text-2xl flex items-center justify-center font-semibold gap-2 text-white bg-blue-600 rounded-full px-4 py-3">
					<p>
						<FaFacebookF />
					</p>
					<p>Facebook</p>
				</div>
			</div>
			
		</div>
		
		</>
	);
};

export default Refer;
