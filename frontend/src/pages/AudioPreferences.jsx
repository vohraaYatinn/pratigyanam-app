import React from 'react'
import { Flex, Radio } from 'antd';
import { FaArrowLeft, FaFemale, FaMale } from "react-icons/fa";

import english from '../assets/images/english.png'
import hindi from '../assets/images/hindi.png'
import { useNavigate } from 'react-router-dom';
const AudioPreferences = () => {

    const navigate = useNavigate();
    const createAccount = () => {   
        navigate('/')
    }

  return (
    <div>
        <div className="h-screen bg-white sign-background" >
			<section style={{
				    width: "100%"
			}}>
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl "  style={{
								marginBottom:"3rem"
							}}>
								Choose your Audio Preferences
							</h1>
							<form className="space-y-4 md:space-y-6">
								
                            <div className="flex mx-5 text-xl flex-col ">
		
					
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
								<button
									type="submit"
									className="w-full  text-white bg-gradient-to-r from-orange-500 to-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center send-otp-button"
                                    onClick={createAccount}
									>
									Create your account
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
    </div>
  )
}

export default AudioPreferences