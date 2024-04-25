import React from "react";
import TopNav from "../components/TopNav";
import { Flex, Radio } from 'antd';
import { FaArrowLeft, FaFemale, FaMale } from "react-icons/fa";

import english from '../assets/images/english.png'
import hindi from '../assets/images/hindi.png'


const EditAddress = () => {
	return (
		<div className="bg-white text-black pb-10 sign3-background" >
									<TopNav path={"Audio Language"}/>

			<div>
			<div className="mt-20" style={{
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
					<Radio.Group defaultValue="a" buttonStyle="solid" size="large" style={{textAlign:"center", marginTop: "10px"}}>
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
			<p className="flex mx-5 text-xl flex-col" style={{marginTop:"1rem"}}>* Please select your default gender & language preference.</p>
		</div>
		
	);
};

export default EditAddress;
