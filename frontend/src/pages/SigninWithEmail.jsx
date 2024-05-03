import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png"
import phone from "./phone.png"
import google from "./google.png"
const SigninWithEmail = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();
	localStorage.setItem("toast",true)

	const handleSignIn = (e) => {
		e.preventDefault();
		navigate("/home");
	};

	return (
		<div className="h-screen sign-background" >
			<section style={{
				    width: "100%"
			}}>
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                {/* <h1 style={{marginBottom:"1rem", fontSize:"1rem"}}>Pratigyanam</h1> */}
                    <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							{/* <div style={{
								display:"flex",
								alignItems:"center",
								width:"100%",
								justifyContent:"center"
							}}>
							<img src={logo} alt="" style={{height:"8rem"}}/>

							</div> */}
							<h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl "  style={{
								marginBottom:"3rem"
							}}>
								Login
							</h1>
							<form className="space-y-4 md:space-y-6">
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
										placeholder="Enter your mail here"
										required=""
									/>
								</div>
								
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Password
									</label>
									<input
										type="password"
										name="password"
										id="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
										placeholder="Enter your password here"
										required=""
									/>
								</div>
                                <button
									type="submit"
									onClick={handleSignIn}
									className="w-full  text-white bg-gradient-to-r from-orange-500 to-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center send-otp-button"
								
									>
									Login
								</button>
                                <div className="w-full flex items-center justify-center text-xl text-gray-600 text-center">
									<p className="h-[1px] bg-gray-300 w-full"></p>
									<span className="px-5"> or </span>
									<p className="h-[1px] bg-gray-300 w-full"></p>
								</div>
                            
								<div class="flex items-center justify-center ">
									<button
										// onClick={handleGoogleAuth}
										class="flex items-center w-full justify-center   rounded-lg sm:px-16 px-6 py-3 text-sm font-medium text-gray-800 border border-gray-300 "
                                        onClick={()=>{
                                            navigate("/phoneLogin");
                                        }}
                                        >
					<img src={phone} 
                    style={{
                        height:"2rem",
                        marginRight:"1rem"
                    }}
                    alt="" />
										<span>Continue with Phone</span>
									</button>
								</div>
								<div class="flex items-center justify-center ">
									<button
										// onClick={handleGoogleAuth}
										class="flex items-center w-full justify-center   rounded-lg sm:px-16 px-6 py-3 text-sm font-medium text-gray-800 border border-gray-300 ">
															<img src={google} style={{
                                                                height:"2rem",
                                                                marginRight:"1rem"
                                                            }} alt="" />

										<span>Continue with Google</span>
									</button>
								</div>
								
								
								{/* <p className="text-sm font-light text-gray-500 ">
									don't have an account?{" "}
									<Link
										to={"/signup"}
										className="font-medium text-primary-600 hover:underline ">
										otp
									</Link>
								</p> */}
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SigninWithEmail;
