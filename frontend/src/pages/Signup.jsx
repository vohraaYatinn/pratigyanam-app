import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");

	const navigate = useNavigate();

	const handleSignUp = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setError("Passwords do not match");
		} else {
			navigate("/");
		}
	};

	const handleGoogleAuth = () => {
		navigate("/music");
	};

	return (
		<div className="h-screen bg-white sign-background">
			<section style={{
				    width: "100%"
			}}>
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl e" style={{
								marginBottom:"3rem"
							}}>
								Create your free account
							</h1>
							<form className="space-y-4 md:space-y-6">
						
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
										onChange={(e) => setEmail(e.target.value)}
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										placeholder="name@company.com"
										required=""
									/>
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
										onChange={(e) => setPassword(e.target.value)}
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
										required=""
									/>
								</div>
								<div>
									<label
										htmlFor="confirm-password"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Confirm password
									</label>
									<input
										type="confirm-password"
										name="confirm-password"
										id="confirm-password"
										value={confirmPassword}
										onChange={(e) => setConfirmPassword(e.target.value)}
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 0"
										required=""
									/>
								</div>
								{error && <div className="text-red-600">{error}</div>}
								<button
									onClick={handleSignUp}
									type="submit"
									className="w-full text-white bg-gradient-to-r from-orange-500 to-yellow-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
									Create an account
								</button>
								<div className="w-full flex items-center justify-center text-xl text-gray-600 text-center">
									<p className="h-[1px] bg-gray-300 w-full"></p>
									<span className="px-5"> or </span>
									<p className="h-[1px] bg-gray-300 w-full"></p>
								</div>
								<div class="flex items-center justify-center ">
									<button
										onClick={handleGoogleAuth}
										class="flex items-center w-full justify-center   rounded-lg sm:px-16 px-6 py-3 text-sm font-medium text-gray-800 border border-gray-300 ">
										<svg
											class="h-6 w-6 mr-2"
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											width="800px"
											height="800px"
											viewBox="-0.5 0 48 48"
											version="1.1">
											{" "}
											<title>Google-color</title>{" "}
											<desc>Created with Sketch.</desc> <defs> </defs>{" "}
											<g
												id="Icons"
												stroke="none"
												stroke-width="1"
												fill="none"
												fill-rule="evenodd">
												{" "}
												<g
													id="Color-"
													transform="translate(-401.000000, -860.000000)">
													{" "}
													<g
														id="Google"
														transform="translate(401.000000, 860.000000)">
														{" "}
														<path
															d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
															id="Fill-1"
															fill="#FBBC05">
															{" "}
														</path>{" "}
														<path
															d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
															id="Fill-2"
															fill="#EB4335">
															{" "}
														</path>{" "}
														<path
															d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
															id="Fill-3"
															fill="#34A853">
															{" "}
														</path>{" "}
														<path
															d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
															id="Fill-4"
															fill="#4285F4">
															{" "}
														</path>{" "}
													</g>{" "}
												</g>{" "}
											</g>{" "}
										</svg>
										<span>Continue with Google</span>
									</button>
								</div>
								
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
