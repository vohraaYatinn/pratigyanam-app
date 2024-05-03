import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaChevronRight, FaLocationDot, FaUserCheck } from "react-icons/fa6";
import { VscReferences } from "react-icons/vsc";
import {
	MdDeleteOutline,
	MdLogout,
	MdOutlinePayment,
	MdOutlineSecurity,
	MdSupportAgent,
} from "react-icons/md";
import {
	IoLockOpenOutline,
	IoLockClosedOutline,
	IoLanguage,
} from "react-icons/io5";

import { FiEdit } from "react-icons/fi";
import vector from "../data/vector.jpeg";
import { Link } from "react-router-dom";
import { NavBar} from 'antd-mobile'
import BottomNav from "../components/BottomNav";
import { useRouter } from "../hooks/navigator";
import TopNav from "../components/TopNav";
import { Skeleton } from "antd";

const Profile = () => {
	const router = useRouter();
	const [skeletontime, setSkeletonTime] = useState(true)

	useEffect(()=>{
		setTimeout(()=>{
			setSkeletonTime(false)
		},1500)
	})

		  return (
			<>
					<div>
		  <div id="page">
			<TopNav />
			<BottomNav path={"profile"}/>
			<div className="page-content ">
				  <div className="card card-style" style={{marginTop:"6rem"}}>
				 { skeletontime ? (
									  <Skeleton active={true}  className="px-4 my-4" title={false} paragraph={{rows:14}}/>
									) : (
					<div className="content mt-0 mb-0" >
					  <div className="list-group list-custom-large check-visited">
						
						<Link to={"/edit-profile"} >
						  <i className="fa fa-pen-to-square font-14 bg-gray-dark color-white rounded-sm shadow-xl" />
						  <span style={{fontSize: "1rem", marginTop: "2px"}}>Edit Profile</span>
						  <i className="fa fa-angle-right" />
						</Link>
						<Link to={"/manage-subscriptions"}>
						  <i className="fa fa-money-check font-14 bg-red-dark color-white rounded-sm shadow-xl" />
						  <span style={{fontSize: "1rem", marginTop: "2px"}}>Manage Subscription</span>
						  <i className="fa fa-angle-right" />
						</Link>
						<Link to={"/edit-language"}>
						  <i className="fa fa-language font-14 bg-green-dark color-white rounded-sm shadow-xl" />
						  <span style={{fontSize: "1rem", marginTop: "2px"}}>Audio Languages</span>
						  <i className="fa fa-angle-right" />
						</Link>
						<Link to={"/refer-and-earn"}>
						  <i className="fa fa-lightbulb font-14 bg-yellow-dark color-white rounded-sm shadow-xl" />
						  <span style={{fontSize: "1rem", marginTop: "2px"}}>Refer & Earn</span>
						  <i className="fa fa-angle-right" />
						</Link>						
						<a className="" href="http://wa.me/+917042414212" target="_blank">
						  <i className="fa fa-info font-14 bg-blue-dark color-white rounded-sm shadow-xl" />
						  {/* <span>Help & Support</span> */}
						  <span style={{fontSize: "1rem", marginTop: "2px"}} >Help & Support</span>
						  <i className="fa fa-angle-right" />
						</a>
						<Link to={"/"}>
						  <i className="fa fa-right-from-bracket font-14 bg-yellow-dark color-white rounded-sm shadow-xl" />
						  <span style={{fontSize: "1rem", marginTop: "2px"}}>Logout</span>
						  <i className="fa fa-angle-right" />
						</Link>						
					  </div>
					</div>
)}
				  </div>
				  <div data-menu-load="menu-footer.html" />
				</div>
		
			<div id="menu-main" className="menu menu-box-left rounded-0" data-menu-load="menu-main.html" data-menu-width={280} data-menu-active="nav-components" />
			<div id="menu-share" className="menu menu-box-bottom rounded-m" data-menu-load="menu-share.html" data-menu-height={370} />
			<div id="menu-colors" className="menu menu-box-bottom rounded-m" data-menu-load="menu-colors.html" data-menu-height={480} />
		  </div>
		</div>
			</>
		  );
		}


export default Profile;
