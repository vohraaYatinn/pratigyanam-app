import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation  } from "react-router-dom";
import { PhoneOtpSend, VerifyOtp } from "../urls/urls";
import useAxios from "../network/useAxios";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/reducers/functionalities.reducer";

const OtpEnter = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSignIn = (e) => {
		e.preventDefault();
		navigate("/home");
	};
	const { phoneNumber } = location.state;
	const [verifyOtpResponse, verifyOtpError, verifyOtpLoading, verifyOtpFetch] =
    useAxios();
	const [formValues, setFormValues] = useState({
		phone:phoneNumber || 0,
		firstDigit:"",
		secondDigit:"",
		thirdDigit:"",
		fourthDigit:"",
		fifthDigit:"",
	  });

	  const handleOtp = (e) => {
		verifyOtpFetch(VerifyOtp(formValues))
	};
	useEffect(()=>{
		if(verifyOtpResponse?.result == "success"){
			if(verifyOtpResponse?.user?.role == "admin"){
				localStorage.setItem("adminToken", verifyOtpResponse?.token)
				dispatch(updateUser(verifyOtpResponse?.user));
				navigate("/admin-dashboard");
			  }
			  else{
				localStorage.setItem("storedToken", verifyOtpResponse?.token)
				dispatch(updateUser(verifyOtpResponse?.user));
				navigate("/home");
			  }
		}
	},[verifyOtpResponse])
  

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
								Verify Otp
							</h1>
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
									onClick={handleOtp}
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
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default OtpEnter;
