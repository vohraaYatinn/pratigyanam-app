import React, { useEffect, useState } from "react";
import TrackList from "./components/TrackList.jsx";
import { useLocation } from "react-router-dom";
import { App as CapacitorApp } from '@capacitor/app';
import useAxiosWithoutRouter from "./network/useAxiosWithoutRouter.js";
import { jwtCheckRefresh } from "./urls/urls.jsx";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./redux/reducers/functionalities.reducer.js";


const MainCheck = () => {
	const [loggedInUserData, setLoggedInUserData] = useState([])
    const dispatch = useDispatch();

    const [LoginResponse, LoginError, LoginLoading, LoginFetch] = useAxiosWithoutRouter();

	// const navigate = useRouter();
	useEffect(() => {
		const token = localStorage.getItem('jwt');
        console.log(token)
        if(token){
            LoginFetch(jwtCheckRefresh());
        }
        else{
            // navigate.push("/");
        }
	}, []);

  useEffect(() => {
    if (LoginResponse?.check == "success") {
      dispatch(updateUser(LoginResponse?.result));
	  localStorage.setItem("jwt", LoginResponse?.token)
    }
	else if(LoginResponse?.check == "failure"){
       localStorage.remove('jwt');
	}
  }, [LoginResponse]);

	return (
		<>
		</>
	);
};

export default MainCheck;
