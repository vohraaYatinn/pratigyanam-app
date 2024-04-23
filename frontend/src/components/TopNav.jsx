


import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa6";
import { SearchOutline, MoreOutline, CloseOutline } from 'antd-mobile-icons'
import { NavBar, Space, Toast } from 'antd-mobile'
import { FaBars } from 'react-icons/fa';
import logo from "../assets/images/logo.png"
import { useRouter } from "../hooks/navigator";


const TopNav = ({ path }) => {
	const router = useRouter();

	const right = (
		<div style={{ fontSize: 24 }}>
			<Space style={{ '--gap': '16px' }}>
				<SearchOutline onClick={()=>{
						router.push("/search")
				}}/>
				<FaUser onClick={()=>{
						router.push("/profile")
				}}/>
			</Space>
		</div>
	)


	return (
		<>

			<NavBar right={right}   onBack={() => {
				path != "home" &&
				history.back()
			}} style={{ marginTop: "1rem" , background:"F2EFE7"}} backArrow={path == "home" ? false : true} className="" back={path == "home" && <>
				<img src={logo} alt="" style={{ height: "5rem" }} />
			</>}>
				{path == "home" ? <div >

				</div> : path}
			</NavBar>
		</>)
}

export default TopNav;