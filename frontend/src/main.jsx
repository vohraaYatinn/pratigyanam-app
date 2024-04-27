import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/index.css";
import "./styles/customize-progress-bar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";
import Home from "./pages/Home.jsx";
import Refer from "./pages/Refer.jsx";
import Profile from "./pages/Profile.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import OtpEnter from "./pages/Otp.jsx";
import FavComponent from "./pages/Fav.jsx";
import EditAddress from "./pages/EditAddress.jsx";
import EditLanguage from './pages/EditLanguage.jsx'
import EditSubscriptions from "./pages/EditSubscriptions.jsx";
import SearchComponent from "./pages/Search.jsx";
import SingleTrack from "./pages/SingleTrack.jsx";
import AudioPreferences from "./pages/AudioPreferences.jsx";


const router = createBrowserRouter([
	{
		path: "/",
		children: [
			{
				path: "/music",
				element: <App />,
			},
			{
				path: "signup",
				element: <Signup />,
			},
			{
				path: "/",
				element: <Signin />,
			},
			{
				path: "/otp",
				element: <OtpEnter />,
			},
			{
				path: "home",
				element: <Home />,
			},
			{
				path: "refer-and-earn",
				element: <Refer />,
			},
			{
				path: "profile",
				element: <Profile />,
			},
			{
				path: "edit-profile",
				element: <EditProfile />,
			},
			{
				path: "fav",
				element: <FavComponent />,
			},
			{
				path: "edit-address",
				element: <EditAddress />,
			},
			{
				path: "manage-subscriptions",
				element: <EditSubscriptions />,
			},
			{
				path: "edit-language",
				element: <EditLanguage />,
			},
			{
				path: "search",
				element: <SearchComponent />,
			},
			{
				path: "single-track/:id",
				element: <SingleTrack />,
			},
			{
				path: "audio-preferences",
				element: <AudioPreferences />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
