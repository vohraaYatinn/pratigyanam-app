import React, { useEffect } from "react";
import TrackList from "./components/TrackList.jsx";
import { useNavigate } from "react-router-dom";

const App = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const user = localStorage.getItem("loggedin");
		if (user) {
			console.log("User is logged in");
		} else {
			navigate("/signup");
		}
	}, []);

	return (
		<>
			<TrackList />
		</>
	);
};

export default App;
