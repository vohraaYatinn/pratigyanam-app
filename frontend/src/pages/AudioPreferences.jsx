import React, { useState, useEffect } from "react";
import { useNavigate, useLocation  } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { signupUserService } from "../urls/urls";
import useAxios from "../network/useAxios";
import { Alert, Radio, Space, Spin } from "antd";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/reducers/functionalities.reducer";
import { Device } from '@capacitor/device';



const AudioPreferences = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { email, password, gender, userName, phoneNumber } = location.state;
  const [audioGender, setAudioGender] = useState("");
  const [language, setLanguage] = useState(""); 
  const [addReferral, setAddReferral] = useState("")
  const handleGenderChange = (e) => {
    const { name, value } = e.target;
    if (name === "audioGender") {
      setAudioGender(value); 
    } else if (name === "language") {
      setLanguage(value); 
    }
  };
  const [
    singleDeviceLoginResponse,
    singleDeviceLoginError,
    singleDeviceLoginLoading,
    singleDeviceLoginFetch,
  ] = useAxios();

  const [signupResponse, signupError, signupLoading,signupFetch] =
    useAxios();

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/signup");
  };
  const [message, setMessage] = useState({
    showMessage: false,
    isError: true,
    message: "",
  });

  const [getDeviceDetails, setDeviceDetails] = useState(false)
  const logDeviceInfo = async () => {
    const info = await Device.getId();
    setDeviceDetails(info?.identifier)
  };
  useEffect(()=>{
    logDeviceInfo()
  },[])
  const handleGoogleAuth = (e) => {
    e.preventDefault();
    let payload={
      fullName: userName,
      email: email,
      password: password,
      gender: gender,
      audioGender: audioGender,
      language: language,
      phoneNumber:phoneNumber,
      referral:addReferral,
      deviceId:getDeviceDetails
    }
    signupFetch(signupUserService(payload))
    // navigate("/music");
   console.log(audioGender, language); 
  };

  useEffect(()=>{
      if(signupError)
        {
          setMessage((prev)=>({...prev,
            message:signupError?.response?.data,
            showMessage:true,
            isError:true
          }))
          console.log(signupError)
         
        }
  },[signupError])

  useEffect(()=>{
    if(signupResponse?.result=="success" )
      {
        navigate("/otp", {
          state: { phoneNumber },
        });      
      }
},[signupResponse])

const onChange = (e) => {
  setLanguage(e.target.value);
};

  return (
    <div className="h-screen sign-background">
      <section style={{ width: "100%" }}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Audio Preferences
              </h1>
              
              <form className="space-y-4 md:space-y-6" onSubmit={handleGoogleAuth}>
              {message.showMessage ? (
            <div >
            <Alert
              closable
              type="error"
              message={message.message}
              dismiss={() => {
                setMessage((prevState) => ({
                  ...prevState,
                  showMessage: false,
                }));
              }}
              isError={message.isError}
            />
            </div>
          ) : null}
                <div>
                  <label htmlFor="audioGender" className="block mb-2 text-sm font-medium text-gray-900">
                    Audio Gender
                  </label>
                  <select
                    id="audioGender"
                    name="audioGender"
                    value={audioGender}
                    onChange={handleGenderChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div>
                  <div className="flex text-sm flex-col">
									<label className="mb-3" htmlFor="gender">
										Language
									</label>
									<Radio.Group onChange={onChange} value={language}>
										<Space direction="horizontal">
											<Radio value={"english"}>English</Radio>
											<Radio value={"hindi"}>Hindi</Radio>
										</Space>
									</Radio.Group>
								</div>
                </div>

                {error && <div className="text-red-600">{error}</div>}
                <div className="w-full flex items-center justify-center text-xl text-gray-600 text-center">
                  <p className="h-[1px] bg-gray-300 w-full"></p>
                  <p className="h-[1px] bg-gray-300 w-full"></p>
                </div>
                <input
										type="text"
										name="Full Name"
										id="userName"
										value={addReferral}
										onChange={(e) => setAddReferral(e.target.value)}
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										placeholder="Would you be able to provide any referrals?"
										required=""
									/>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="w-full text-white bg-gradient-to-r from-orange-500 to-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center send-otp-button"
                    // onClick={handleGoogleAuth}
                  > {signupLoading ? <Spin/> :  "Send OTP"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AudioPreferences;
