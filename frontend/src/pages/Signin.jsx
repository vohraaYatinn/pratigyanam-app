import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png"
const Signin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();
	localStorage.setItem("toast",true)

	const handleSignIn = (e) => {
		e.preventDefault();
		navigate("/otp");
	};

	return (
		<div className="h-screen bg-white sign-background" >
			<section style={{
				    width: "100%"
			}}>
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
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
										Phone Number
									</label>
									<input
										type="email"
										name="email"
										id="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
										placeholder="+91 8293023392"
										required=""
									/>
								</div>
								
								<button
									type="submit"
									onClick={handleSignIn}
									className="w-full  text-white bg-gradient-to-r from-orange-500 to-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center send-otp-button"
								
									>
									Send Otp
								</button>
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

export default Signin;
