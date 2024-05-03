import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
const AudioPreferences = () => {
  const [gender, setGender] = useState(""); 

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      navigate("/signup");
    }
  };

  const handleGoogleAuth = () => {
    navigate("/music");
  };
  return (
    <>
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
                  className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl e"
                  style={{
                    marginBottom: "3rem",
                  }}
                >
                  Audio Preferences
                </h1>
                <form className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="gender"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={gender}
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
                    <label htmlFor="language" className="block mb-2 text-sm font-medium text-gray-900">
                      Language
                    </label>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="english"
                        name="language"
                        value="english"
                        checked={gender === "english"}
                        onChange={handleGenderChange}
                        className="mr-2"
                      />
                      <label htmlFor="english" className="text-sm text-gray-900 mr-4">
                        English
                      </label>
                      <input
                        type="radio"
                        id="hindi"
                        name="language"
                        value="hindi"
                        checked={gender === "hindi"} 
                        onChange={handleGenderChange}
                        className="mr-2"
                      />
                      <label htmlFor="hindi" className="text-sm text-gray-900">
                        Hindi
                      </label>
                    </div>
                  </div>





                  {error && <div className="text-red-600">{error}</div>}
               
             <div class="flex items-center justify-center ">
			 <button
									type="submit"
									style={{
										marginBottom:"2rem"
									}}
									className="w-full  text-white bg-gradient-to-r from-orange-500 to-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center send-otp-button"
									onClick={()=>{
										navigate("/home");
									}}
									>
									Create an account
								</button>
                  </div>

                  
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AudioPreferences;