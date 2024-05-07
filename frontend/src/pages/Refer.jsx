import React from "react";

import refer from "../assets/refer.png";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import { Link } from "react-router-dom";


const Refer = () => {

			  return (
				<>
			<div>
		  <div id="page">
			<TopNav />
			<BottomNav path={"profile"}/>
			<div className="page-title page-title-fixed">
			  <h1>User Lists</h1>
			  <a href="#" className="page-title-icon shadow-xl bg-theme color-theme" data-menu="menu-share"><i className="fa fa-share-alt" /></a>
			  <a href="#" className="page-title-icon shadow-xl bg-theme color-theme show-on-theme-light" data-toggle-theme><i className="fa fa-moon" /></a>
			  <a href="#" className="page-title-icon shadow-xl bg-theme color-theme show-on-theme-dark" data-toggle-theme><i className="fa fa-lightbulb color-yellow-dark" /></a>
			  <a href="#" className="page-title-icon shadow-xl bg-theme color-theme" data-menu="menu-main"><i className="fa fa-bars" /></a>
			</div>
			<div className="page-title-clear" />
			<div className="page-content">

			<div className="card card-style" >
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
			
			  <div data-menu-load="menu-footer.html" />
			</div>
			<div id="menu-main" className="menu menu-box-left rounded-0" data-menu-load="menu-main.html" data-menu-width={280} data-menu-active="nav-components" />
			<div id="menu-share" className="menu menu-box-bottom rounded-m" data-menu-load="menu-share.html" data-menu-height={370} />
			<div id="menu-colors" className="menu menu-box-bottom rounded-m" data-menu-load="menu-colors.html" data-menu-height={480} />
		  </div>
		</div>

</>

			  )
};

export default Refer;







