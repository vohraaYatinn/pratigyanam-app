


import React from 'react'
import { RiAccountCircleLine, RiHeartLine, RiHome2Line, RiSearchLine } from 'react-icons/ri';
import { Link } from 'react-router-dom'
import { FaMusic, FaUser } from "react-icons/fa6";
import { SearchOutline, MoreOutline, CloseOutline } from 'antd-mobile-icons'
import { NavBar, Space, Toast } from 'antd-mobile'
import { FaBars } from 'react-icons/fa';
import logo from "../assets/images/logo.png"


const TopNav = ({path}) => {
    const right = (
		<div style={{ fontSize: 24 }}>
		  <Space style={{ '--gap': '16px' }}>
			<SearchOutline />
			<FaBars />
		  </Space>
		</div>
	  )
	
	  const back = () =>
		Toast.show({
		  content: '点击了返回区域',
		  duration: 1000,
		})
  return (
<>

<NavBar right={right} onBack={()=>{
    history.back()
}} style={{marginTop:"1rem"}} backArrow={path=="home"?false:true} className="" back={path == "home" && <>
<img src={logo} alt="" style={{height:"5rem"}}/>
</>}>
  {path == "home" ? <div >
   
  </div>:path}
</NavBar>
</>  )
}

export default TopNav;