import React, { useState, useEffect } from "react";
import { useNavigate, useLocation  } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { signupUserService } from "../urls/urls";
import useAxios from "../network/useAxios";
import { Spin } from "antd";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/reducers/functionalities.reducer";



const AudioPreferences = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { email, password, gender, userName, phoneNumber } = location.state;
  const [audioGender, setAudioGender] = useState("");
  const [language, setLanguage] = useState(""); 
  const handleGenderChange = (e) => {
    const { name, value } = e.target;
    if (name === "audioGender") {
      setAudioGender(value); 
    } else if (name === "language") {
      setLanguage(value); 
    }
  };

  const [signupResponse, signupError, signupLoading,signupFetch] =
    useAxios();

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const handleGoogleAuth = (e) => {
    e.preventDefault();
    let payload={
      fullName: userName,
      email: email,
      password: password,
      gender: gender,
      audioGender: audioGender,
      language: language,
      phoneNumber:phoneNumber
    }
    signupFetch(signupUserService(payload))
    // navigate("/music");
   console.log(audioGender, language); 
  };

  useEffect(()=>{
      if(signupError?.data)
        {
         console.log(signupError.data)
        }
  },[signupError])

  useEffect(()=>{
    if(signupResponse?.message=="Welcome" && signupResponse?.result)
      {
        const userProfileData = {email:email, user_id:"" };
        dispatch(updateUser(signupResponse?.result));
        navigate("/home");
      }
},[signupResponse])

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
                  <label className="block mb-2 text-sm font-medium text-gray-900">Language</label>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="english"
                      name="language"
                      value="english"
                      checked={language === "english"}
                      onChange={handleGenderChange}
                    />
                    <label htmlFor="english" className="text-sm text-gray-900 ml-2">
                      English
                    </label>
                    <input
                      type="radio"
                      id="hindi"
                      name="language"
                      value="hindi"
                      checked={language === "hindi"}
                      onChange={handleGenderChange}
                      className="ml-4"
                    />
                    <label htmlFor="hindi" className="text-sm text-gray-900">
                      Hindi
                    </label>
                  </div>
                </div>

                {error && <div className="text-red-600">{error}</div>}

                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="w-full text-white bg-gradient-to-r from-orange-500 to-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center send-otp-button"
                    // onClick={handleGoogleAuth}
                  > {signupLoading ? <Spin/> :  "Create an account"}
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
