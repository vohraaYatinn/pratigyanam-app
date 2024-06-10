import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png"
import { PhoneOtpSend  } from "../urls/urls";
import useAxios from "../network/useAxios";
import { Spin } from "antd";


const Signin = () => {
	const [phoneNumber, setPhoneNumber] = useState('');
	const [phoneOtpsResponse, phoneOtpsError, phoneOtpsLoading, phoneOtpsFetch] =
    useAxios();
	const [errors, setErrors] = useState({})
	const navigate = useNavigate();
	localStorage.setItem("toast",true)
	const handleSignInUsingPhone = (phone) =>{
		phoneOtpsFetch(PhoneOtpSend({
			phone:phone
		}))
	}

	const [getDeviceDetails, setDeviceDetails] = useState(false)

	const logDeviceInfo = async () => {
		const info = await Device.getId();
		console.log(info?.identifier)
		setDeviceDetails(info?.identifier)
	  };
	  useEffect(() => {
		logDeviceInfo()
	  });
	
	useEffect(()=>{
		if(localStorage.getItem("storedToken")){
		  navigate('/home')
		}
	  },[])
	const handleSignIn = (e) => {
		e.preventDefault();
			const errors = validate(phoneNumber);
			if (Object.keys(errors).length !== 0) {
			  setErrors(errors);
			} else {	
				handleSignInUsingPhone(phoneNumber)
				
			};
	};
	useEffect(()=>{
		if(phoneOtpsResponse?.result == "success"){
			navigate("/otp", {
				state: { phoneNumber },
			});
		}
		else if(phoneOtpsResponse?.result == "new_login"){
			navigate("/signup");
		}
	},[phoneOtpsResponse])
	const validate = (phoneNumber) => {
        const errors = {};
		if (!phoneNumber) {
			errors.phoneNumber = "Phone number is required";
		  } else if (phoneNumber.length < 10) {
			errors.phoneNumber = "Phone number is not valid";
		  }
        return errors;
    };

	return (
		<div className="h-screen sign-background" >
			<section style={{
				    width: "100%"
			}}>
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
					
							<h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl "  style={{
								marginBottom:"3rem"
							}}>
								Login
							</h1>
							<form className="space-y-4 md:space-y-6">
								<div>
									<label
										htmlFor="phone"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Phone Number
									</label>
									<input
										type="number"
										name="phone"
										id="phone"
										maxLength={10}
										value={phoneNumber}
										onChange={(e) => {
											if(e.target.value.length <=10){
												setPhoneNumber(e.target.value)

											}

										}}
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
										placeholder="Enter 10 digits phone number"
										required=""
									/>
									{errors.phoneNumber && (
                        <div className="text-red-500">{errors.phoneNumber}</div>
                      )}
								</div>
								
								<button
									type="submit"
									onClick={handleSignIn}
									className="w-full  text-white bg-gradient-to-r from-orange-500 to-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center send-otp-button"
								
									>
									  {phoneOtpsLoading ? <Spin /> : "Login" }
								</button>
								
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Signin;
