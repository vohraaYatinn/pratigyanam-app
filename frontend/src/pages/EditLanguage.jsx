import React from "react";
import TopNav from "../components/TopNav";
import { Flex, Radio } from 'antd';
import { FaArrowLeft, FaFemale, FaMale } from "react-icons/fa";

import english from '../assets/images/english.png'
import hindi from '../assets/images/hindi.png'
import BottomNav from "../components/BottomNav";
import { Link } from "react-router-dom";


const EditAddress = () => {
	return (
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

			  <div className="card card-style">
				<div className="content mb-2">
				
				

				  <div className="list-group list-custom-large">
				  <div>
<div className="pt-2 " style={{
display:"flex",
fontSize:"7rem",
justifyContent:"space-around",
flexDirection:"row-reverse",
marginBottom:"1rem"
}}>
<FaFemale />
<FaMale />
</div>
<div className="flex mx-5 text-xl flex-col ">



<Radio.Group defaultValue="a" buttonStyle="solid" size="large" style={{textAlign:"center"}}>
<Radio.Button value="a" style={{
width:"50%"
}}>Male</Radio.Button>
<Radio.Button value="b"
style={{
width:"50%",
textAlign:"centers"
}}
>Female</Radio.Button>
</Radio.Group>
<div className="mt-20" style={{
display:"flex",
fontSize:"7rem",
justifyContent:"space-around",
flexDirection:"row-reverse",
marginBottom:"1rem"
}}>
<img src={hindi} alt="" className="h-20 w-20" />
<img src={english} alt="" className="h-20 w-20" />

</div>
<Radio.Group defaultValue="a" buttonStyle="solid" size="large" style={{textAlign:"center", marginTop: "10px"}} className="pb-4">
<Radio.Button value="a" style={{
width:"50%"
}}>English</Radio.Button>
<Radio.Button value="b"
style={{
width:"50%",
textAlign:"centers"
}}
>Hindi</Radio.Button>
</Radio.Group>

</div>

</div>
					
				  </div>
				</div>
			  </div>
			<p></p>
			  <div data-menu-load="menu-footer.html" />
			</div>
			<div id="menu-main" className="menu menu-box-left rounded-0" data-menu-load="menu-main.html" data-menu-width={280} data-menu-active="nav-components" />
			<div id="menu-share" className="menu menu-box-bottom rounded-m" data-menu-load="menu-share.html" data-menu-height={370} />
			<div id="menu-colors" className="menu menu-box-bottom rounded-m" data-menu-load="menu-colors.html" data-menu-height={480} />
		  </div>
		</div>












	);
};

export default EditAddress;



