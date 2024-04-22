import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const OtpEnter = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const handleSignIn = (e) => {
		e.preventDefault();
		localStorage.setItem("loggedin", true);

		navigate("/home");
	};
	const [formValues, setFormValues] = useState({
		phoneNumber:"phone",
		firstDigit:"",
		secondDigit:"",
		thirdDigit:"",
		fourthDigit:"",
		fifthDigit:"",
	  });
  

	return (
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
								Verify Otp
							</h1>
							<form className="space-y-4 md:space-y-6">
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Enter Otp
									</label>
									<div className="d-flex gap-1 mb-2 otp-boxes">
      <div className="col">
        <input
          type="text"
          className="form-control form-control-lg text-center py-3"
          value={formValues?.firstDigit}
          maxLength={1}
          onChange={(e)=>{
            setFormValues((prev)=>({...prev, firstDigit:e.target.value}))
          }}
        />
      </div>
      <div className="col">
        <input
          type="text"
          className="form-control form-control-lg text-center py-3"
          value={formValues?.secondDigit}
          maxLength={1}
          onChange={(e)=>{
            setFormValues((prev)=>({...prev, secondDigit:e.target.value}))
          }}
        />
      </div>
      <div className="col">
        <input
          type="text"
          className="form-control form-control-lg text-center py-3"
          value={formValues?.thirdDigit}
          maxLength={1}
          onChange={(e)=>{
            setFormValues((prev)=>({...prev, thirdDigit:e.target.value}))
          }}
        />
      </div>
      <div className="col">
        <input
          type="text"
          className="form-control form-control-lg text-center py-3"
          value={formValues?.fourthDigit}
          maxLength={1}
          onChange={(e)=>{
            setFormValues((prev)=>({...prev, fourthDigit:e.target.value}))
          }}
        />
      </div>
      <div className="col">
        <input
          type="text"
          className="form-control form-control-lg text-center py-3"
          value={formValues?.fifthDigit}
          maxLength={1}
          onChange={(e)=>{
            setFormValues((prev)=>({...prev, fifthDigit:e.target.value}))
          }}
        />
      </div>
    </div>
						</div>
								<button
									type="submit"
									onClick={handleSignIn}
									className="w-full  text-white bg-gradient-to-r from-orange-500 to-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
									Sign In
								</button>
								<p className="text-sm font-light text-gray-500 ">
									don't have an account?{" "}
									<Link
										to={"/signup"}
										className="font-medium text-primary-600 hover:underline ">
										sign up
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

export default OtpEnter;
