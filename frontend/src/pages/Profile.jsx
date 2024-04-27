import React from "react";
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

const Profile = () => {
	const router = useRouter();

	return (
		<div className="bg-white text-black pb-10 sm:pb-24 sign3-background" style={{height:"100vh"}}>

			<div>
				
				<div className="flex items-center justify-evenly text-3xl py-8 gap-3" style={{
					flexDirection:"row-reverse"
				}}>
			
					<img src={vector} alt="" className="h-16 w-16 rounded-full" />
					<div>
						<p className="font-semibold">Yatin Vohra</p>
						<div className="text-lg flex items-center gap-2">

							<FaLocationDot />
							<span className="">Uttar Pradesh, India</span>
						</div>
					</div>
					<div style={{
						gap:"1rem",
						display:"flex", flexDirection:"column"
					}}>
					

					<Link onClick={()=>{
						history.back()
					}}>
						<div>
						<FaArrowLeft />
						</div>
					</Link>
				
					</div>

				</div>
				<div className="mt-5">
					<p className="text-lg ml-4 mt-3">Personal Info</p>
					<div>
						<div className="flex items-center text-xl gap-5 justify-between mx-4 mt-3 my-2 py-2 "
						onClick={()=>{
							router.push("/edit-profile")
						}}
						>
							<div className="flex gap-4" >
								<FaUserCheck />
								<p>Edit Profile</p>
							</div>
							<FaChevronRight />
						</div>
						<div className="flex items-center text-xl gap-5 justify-between mx-4 mt-3 my-2 py-2 "
						onClick={()=>{
							router.push('/edit-address')
						}}
						>
							<div className="flex gap-4" >
								<FaLocationDot />
								<p>My Address</p>
							</div>
							<FaChevronRight />
						</div>
						<div className="flex items-center text-xl gap-5 justify-between mx-4 mt-3 my-2 py-2 "
						 onClick={()=>{
							router.push('/manage-subscriptions')
						}}
						>
							<div className="flex gap-4" >
								<MdOutlinePayment />
								<p>Manage Subscription</p>
							</div>
							<FaChevronRight />
						</div>
					</div>
				</div>
			
				<div className="mt-5">
					<p className="text-lg ml-4 mt-3">General </p>
					<div>
						<div className="flex items-center text-xl gap-5 justify-between mx-4 mt-3 my-2 py-2 " onClick={()=>{
								router.push('/edit-language')
							}}>
							<div className="flex gap-4" >
								<IoLanguage />
								<p>Audio Language</p>
							</div>
							<FaChevronRight />
						</div>
						<div className="flex items-center text-xl gap-5 justify-between mx-4 mt-3 my-2 py-2 "
						onClick={()=>{
							router.push('/refer-and-earn')
						}}
						>
							<div className="flex gap-4" 
							
							>
								<VscReferences />
								<p>Refer & Earn</p>
							</div>
							<FaChevronRight />
						</div>
						<div className="flex items-center text-xl gap-5 justify-between mx-4 mt-3 my-2 py-2 ">
							<div className="flex gap-4">
								<MdSupportAgent /> 
								<a href="http://wa.me/+917042414212" target="_blank" className="text-black">Help & Support</a>
							</div>
							<FaChevronRight />
						</div>
					</div>
				</div>
				<div className="mt-5">
					<p className="text-lg ml-4 mt-3">Authentication</p>
					<div onClick={()=>{
							router.push('/')
						}}>
						<div className="flex items-center text-xl gap-5 justify-between mx-4 mt-3 my-2 py-2 "
						
						>
							<div className="flex gap-4">
								<MdLogout />
								<p>Logout</p>
							</div>
							<FaChevronRight />
						</div>
					</div>
		
				</div>
			</div>
			<BottomNav path="edit"/>

		</div>
		
	);
};

export default Profile;
