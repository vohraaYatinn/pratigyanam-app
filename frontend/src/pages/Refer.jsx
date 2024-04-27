import React from "react";

import refer from "../assets/refer.png";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";


const Refer = () => {

			  return (
				<>
					<TopNav/>
					<BottomNav/>

				<div className="card card-style pt-12">
				  <h4 className="font-28 text-center color-theme font-800 pt-3 mt-3">Refer & Earn</h4>
				  <img src={refer} alt="" className="w-40 h-40 mx-auto" />
				  <p className="boxed-text-l  mt-2">
					Upon  Successfully sharing with 10 users, you'll unlock one month free access.
				  </p>

<div className="border-2 border-dashed border-black flex text-sm mx-5 my-4 px-2 justify-center py-2 gap-4">
				<div className="text-center  pr-2">
					<p>your refferal code</p>
					<p className="uppercase font-bold text-xl">abcgde234</p>
					<button className="mt-1 bg-gray-500/30 text-sm px-3 py-1 text-black rounded-md">Copy</button>
				</div>
			</div>

				  <div className="text-center mb-4">
					<p className="mb-3  font-medium">Share your Refferal code via</p>
					<a href="#" className="icon icon-xs rounded-sm shadow-l mr-1 bg-facebook"><i className="fab fa-facebook-f" /></a>
					<a href="#" className="icon icon-xs rounded-sm shadow-l mr-1 bg-twitter"><i className="fab fa-twitter" /></a>
					<a href="#" className="icon icon-xs rounded-sm shadow-l mr-1 bg-phone"><i className=" fa-whatsapp fa-brands" /></a>
				  </div>
				  <div className="divider mb-0" />
				  <div className="row text-center mb-3 pl-3 pr-3">
					<a className="font-11 col-4 mx-auto" href="http://wa.me/+917042414212" target="_blank">Contact Support</a>
				  </div>
				</div>
</>

			  )
};

export default Refer;
