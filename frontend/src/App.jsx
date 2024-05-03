import React, { useEffect } from "react";
import TrackList from "./components/TrackList.jsx";
import { useNavigate } from "react-router-dom";
// import { App as CapacitorApp } from '@capacitor/app';


const App = () => {
	// CapacitorApp.addListener('backButton', ({canGoBack}) => {
	// 	if(!canGoBack){
	// 	  CapacitorApp.exitApp();
	// 	} else {
	// 	  window.history.back();
	// 	}
	//   });
	const navigate = useNavigate();
	useEffect(() => {
		const user = localStorage.getItem("loggedin");
		
	}, []);

	return (
		<>
			<TrackList />
		</>
	);
};

export default App;
