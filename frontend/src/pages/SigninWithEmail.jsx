import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import phone from "./phone.png";
import google from "./google.png";
import useAxios from "../network/useAxios";
import { emailSignIn, phoneNumberOtp } from "../urls/urls";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/reducers/functionalities.reducer";
import { Spin } from "antd";
import { Device } from '@capacitor/device';

const SigninWithEmail = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  localStorage.setItem("toast", true);
  const [LoginResponse, LoginError, LoginLoading, LoginFetch] = useAxios();

  useEffect(()=>{
    if(localStorage.getItem("storedToken")){
      navigate('/home')
    }
  },[])
  const [getDeviceDetails, setDeviceDetails] = useState(false)

  const loginFunction = () => {
    console.log("hiiii");
    if(getDeviceDetails){
      LoginFetch(emailSignIn({ email: email, password:password, deviceId:getDeviceDetails }));
    }
  };
	const logDeviceInfo = async () => {
		const info = await Device.getId();
		setDeviceDetails(info?.identifier)
	  };
	  useEffect(() => {
		logDeviceInfo()
	  },[]);
	
  useEffect(() => {
    if (LoginResponse?.result && LoginResponse?.login_check) {
      if(LoginResponse?.user?.role == "admin"){
        localStorage.setItem("adminToken", LoginResponse?.token)
        dispatch(updateUser(LoginResponse?.user));
        navigate("/admin-dashboard");
      }
      else{
        localStorage.setItem("storedToken", LoginResponse?.token)
        dispatch(updateUser(LoginResponse?.user));
        navigate("/home");
      }

    }
    else if(LoginResponse?.result && !LoginResponse?.login_check){
      setErrors({
        "logincheck": "Login failed. Please check your email and password."
      })
    }
  }, [LoginResponse]);
	
  useEffect(() => {
    if(LoginError){
      if(LoginError?.response?.data == "Inactive user"){
       navigate("/phoneLoginInactive")
      }
      setErrors({
        "logincheck": "Login failed. Please check your email and password."
      })
    }

  }, [LoginError]);

  const validate = (email, password) => {
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
    return errors;
  };

  const submitValues = () => {
    const errors = validate(email, password);
    if (Object.keys(errors).length !== 0) {
      setErrors(errors);
    } else {
      loginFunction();
    }
  };

  return (
    <div className="h-screen sign-background">
      <section
        style={{
          width: "100%",
        }}
      >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1
                className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl "
                style={{
                  marginBottom: "3rem",
                }}
              >
                Login
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setErrors({})
                      setEmail(e.target.value)}
                    }
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
											errors.email ? "full-input-errors" : ""
										  }`}
                    placeholder="Enter your mail here"
                    required=""
                  />
                  {errors.email && (
                    <div className="text-red-500">{errors.email}</div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) =>{
                      setErrors({})
                      setPassword(e.target.value)
                    }}
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
											errors.password ? "full-input-errors" : ""
										  }`}                    
                      placeholder="Enter your password here"
                    required=""
                  />
                  {errors.password && (
                    <div className="text-red-500">{errors.password}</div>
                  )}
                </div>
                <button
                  type="submit"
                  onClick={() => {

                    submitValues()	
                  			  }}
                  className="w-full  text-white bg-gradient-to-r from-orange-500 to-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center send-otp-button"
                >
                  {LoginLoading ? <Spin /> : "Login" }
                </button>
                {errors.logincheck && (
                    <div className="text-red-500" style={{marginTop:"0.5rem"}}>{errors.logincheck}</div>
                  )}
                <div className="w-full flex items-center justify-center text-xl text-gray-600 text-center">
                  <p className="h-[1px] bg-gray-300 w-full"></p>
                  <span className="px-5"> or </span>
                  <p className="h-[1px] bg-gray-300 w-full"></p>
                </div>

                <div class="flex items-center justify-center ">
                  <button
                    // onClick={handleGoogleAuth}
                    class="flex items-center w-full justify-center   rounded-lg sm:px-16 px-6 py-3 text-sm font-medium text-gray-800 border border-gray-300 "
                    onClick={() => {
                      navigate("/phoneLogin");
                    }}
                  >
                    <img
                      src={phone}
                      style={{
                        height: "1.4rem",
                        marginRight: "1rem",
                      }}
                      alt=""
                    />
                    <span>Continue with Phone</span>
                  </button>
                </div>
                <div class="flex items-center justify-center ">
                  <button
                    onClick={()=>{
                      navigate('/signup')
                    }}
                    class="flex items-center w-full justify-center   rounded-lg sm:px-16 px-6 py-3 text-sm font-medium text-gray-800 border border-gray-300 "
                  >
                    <img
                      src={google}
                      style={{
                        height: "2rem",
                        marginRight: "1rem",
                      }}
                      alt=""
                    />

                    <span>Create a new account</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SigninWithEmail;
