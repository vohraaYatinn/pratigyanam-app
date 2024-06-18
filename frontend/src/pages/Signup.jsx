import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Radio, Space } from "antd";

const Signup = () => {
	const [userName, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState({});
	const [gender, setGender] = useState("M");
	const [phoneNumber, setPhoneNumber] = useState("");
	useEffect(()=>{
		if(localStorage.getItem("storedToken")){
		  navigate('/home')
		}
	  },[])
	const navigate = useNavigate();

	const handleSignUp = (e) => {
		e.preventDefault();
		const errors = validate(email, password, confirmPassword, phoneNumber);
		if (Object.keys(errors).length !== 0) {
			setErrors(errors);
		} else {
			console.log("email: ", email, "password: ", password);
			navigate("/audio-preferences", {
				state: { email, password, gender, userName, phoneNumber },
			});
		}
		console.log({
			email,
			password,
			confirmPassword,
			gender,
		});
	};

	const onChange = (e) => {
		setGender(e.target.value);
	};

	const validate = (email, password, confirmPassword, phone) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!email) {
			errors.email = "Email is required!";
		} else if (!regex.test(email)) {
			errors.email = "This is not a valid email format!";
		}
		if (!password) {
			errors.password = "Password is required";
		} else if (password.length < 6) {
			errors.password = "Password should be more than 6 characters";
		}
		if (!confirmPassword) {
			errors.confirmPassword = "Confirm password is required";
		} else if (password !== confirmPassword) {
			errors.confirmPassword = "Passwords do not match";
		}
		if (!userName) {
			errors.userName = "Full Name is required!";
		}
		if (!phone) {
			errors.phone = "Phone Number is required!";
		}
		else if(phone.length !=10){
			errors.phone = "Phone Number is invalid!";

		}
		return errors;
	};

	const handleGoogleAuth = () => {
		navigate("/audio-preferences");
	};

	const handleGenderChange = (e) => {
		setGender(e.target.value);
	};

	return (
		<div className="h-screen sign-background">
			<section
				style={{
					width: "100%",
				}}>
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1
								className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl e"
								style={{
									marginBottom: "3rem",
								}}>
								Create your free account
							</h1>
							<form className="space-y-4 md:space-y-6" onSubmit={handleSignUp}>
								<div>
									<label
										htmlFor="userName"
										className="block mb-2 text-sm font-medium text-gray-900">
										Your name
									</label>
									<input
										type="text"
										name="Full Name"
										id="userName"
										value={userName}
										onChange={(e) =>{
											setErrors((prev)=>({...prev, userName:false}))
											setUsername(e.target.value)
										} }
										className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
											errors.userName ? "full-input-errors" : ""
										  }`} 
										  										placeholder="Your Full Name"
										required=""
									/>
									{errors.userName && (
										<div className="text-red-500">{errors.userName}</div>
									)}
								</div>
								<div>
									<label
										htmlFor="phone"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Your Phone Number
									</label>
									<input
										type="number"
										name="phone"
										id="phone"
										maxLength={10}
										value={phoneNumber}
										onChange={(e) => {
											if(e.target.value.length <=10){
												setErrors((prev)=>({...prev, phone:false}))
												setPhoneNumber(e.target.value)

											}

										}}
										className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
											errors.phone ? "full-input-errors" : ""
										  }`} 
										  										placeholder="Enter your Phone Number"
										required=""
									/>
									{errors.phone && (
										<div className="text-red-500">{errors.phone}</div>
									)}
								</div>
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Your email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										value={email}
										onChange={(e) =>{
											setErrors((prev)=>({...prev, email:false}))
											setEmail(e.target.value)
										}}
										className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
											errors.email ? "full-input-errors" : ""
										  }`} 
										  										placeholder="name@company.com"
										required=""
									/>
									{errors.email && (
										<div className="text-red-500">{errors.email}</div>
									)}
								</div>
								<div>
									<label
										htmlFor="password"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										value={password}
										onChange={(e) => {
											setPassword(e.target.value)
											setErrors((prev)=>({...prev, password:false}))

										}
										
										}
										placeholder="••••••••"
										className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
											errors.password ? "full-input-errors" : ""
										  }`} 
										  										required=""
									/>
									{errors.password && (
										<div className="text-red-500">{errors.password}</div>
									)}
								</div>
								<div>
									<label
										htmlFor="confirm-password"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Confirm password
									</label>
									<input
										type="password"
										name="confirm-password"
										id="confirm-password"
										value={confirmPassword}
										onChange={(e) => {
											setErrors((prev)=>({...prev, confirmPassword:false}))

											setConfirmPassword(e.target.value)
										
										}}
										placeholder="••••••••"
										className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
											errors.confirmPassword ? "full-input-errors" : ""
										  }`} 
										  										required=""
									/>
									{errors.confirmPassword && (
										<div className="text-red-500">{errors.confirmPassword}</div>
									)}
								</div>
								<div className="flex text-sm flex-col">
									<label className="mb-3" htmlFor="gender">
										Gender
									</label>
									<Radio.Group onChange={onChange} value={gender}>
										<Space direction="horizontal">
											<Radio value={"M"}>Male</Radio>
											<Radio value={"F"}>Female</Radio>
										</Space>
									</Radio.Group>
								</div>
								<button
									type="submit"
									className="w-full text-white bg-gradient-to-r from-orange-500 to-yellow-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
									Next
								</button>

								<p className="text-sm font-light text-gray-500 ">
									Already have an account?{" "}
									<Link
										to={"/"}
										className="font-medium text-primary-600 hover:underline ">
										Login here
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Signup;
