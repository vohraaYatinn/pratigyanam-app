import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
const AudioPreferences = () => {
  const [gender, setGender] = useState(""); // State to manage selected gender

  const handleGenderChange = (e) => {
    // Update the selected gender state when dropdown value changes
    setGender(e.target.value);
  };
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
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
                        checked={gender === "english"} // Check if language is English
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
                        checked={gender === "hindi"} // Check if language is Hindi
                        onChange={handleGenderChange}
                        className="mr-2"
                      />
                      <label htmlFor="hindi" className="text-sm text-gray-900">
                        Hindi
                      </label>
                    </div>
                  </div>





                  {error && <div className="text-red-600">{error}</div>}
                  {/* <button
                    onClick={handleSignUp}
                    type="submit"
                    className="w-full text-white bg-gradient-to-r from-orange-500 to-yellow-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Create an account
                  </button> */}
                  {/* <div className="w-full flex items-center justify-center text-xl text-gray-600 text-center">
                    <p className="h-[1px] bg-gray-300 w-full"></p>
                    <span className="px-5"> or </span>
                    <p className="h-[1px] bg-gray-300 w-full"></p>
                  </div> */}
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

                  {/* <p className="text-sm font-light text-gray-500 ">
                    Already have an account?{" "}
                    <Link
                      to={"/"}
                      className="font-medium text-primary-600 hover:underline "
                    >
                      Login here
                    </Link>
                  </p> */}
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