import React, { useEffect, useState } from "react";
import TrackList from "./components/TrackList.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { userData } from "./redux/reducers/functionalities.reducer.js";
import { useSelector } from "react-redux";
// import { App as CapacitorApp } from '@capacitor/app';


const App = () => {
	const loggedInUser = useSelector(userData);
	const location = useLocation();
	const { user, type } = location.state || {};
	// CapacitorApp.addListener('backButton', ({canGoBack}) => {
	// 	if(!canGoBack){
	// 	  CapacitorApp.exitApp();
	// 	} else {
	// 	  window.history.back();
	// 	}
	//   });
	const [loggedInUserData, setLoggedInUserData] = useState([])
	const navigate = useNavigate();
	useEffect(() => {
		const user = localStorage.getItem("loggedin");
		setLoggedInUserData(loggedInUser)
		console.log(loggedInUser)
	}, []);

	return (
		<>
			<TrackList loggedInUser={loggedInUserData} type={type} />
		</>
	);
};

export default App;
