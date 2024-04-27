import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import vector from "../data/vector.jpeg";
import { FaPen } from "react-icons/fa6";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import { Link } from "react-router-dom";

const EditProfile = () => {

	return (
		<>
			<div>
				<div id="page">
					<TopNav />
					<BottomNav />
					<div className="page-title page-title-fixed">
						<h1>Profile</h1>
						<a href="#" className="page-title-icon shadow-xl bg-theme color-theme" data-menu="menu-share"><i className="fa fa-share-alt" /></a>
						<a href="#" className="page-title-icon shadow-xl bg-theme color-theme show-on-theme-light" data-toggle-theme><i className="fa fa-moon" /></a>
						<a href="#" className="page-title-icon shadow-xl bg-theme color-theme show-on-theme-dark" data-toggle-theme><i className="fa fa-lightbulb color-yellow-dark" /></a>
						<a href="#" className="page-title-icon shadow-xl bg-theme color-theme" data-menu="menu-main"><i className="fa fa-bars" /></a>
					</div>
					<div className="page-title-clear" />
					<div className="page-content">
						<div className="card card-style">
							<div className="d-flex content mb-1 check-it-profile">
								<div className="flex-grow-1">
									<h2 className="mt-3">Kartik Singh</h2>

								</div>
								<img src="images/pictures/6s.jpg" width={115} height={103} className="rounded-circle mt-3 shadow-xl" />
							</div>

							<div className="content input-for-profile ">
								<p style={{ marginBottom: "0rem" }}>Full Name </p>

								<div class="input-style  has-borders">
									<input type="text" class="form-control" id="form1" placeholder="kartik singh" />
									<label for="form1" class="color-highlight">Quantity</label>
								</div>

							</div>
							<div className="content mb-2 input-for-profile">
								<p style={{ marginBottom: "0rem" }}>Email </p>

								<div class="input-style  has-borders mb-4">
									<input type="text" class="form-control" id="form1" placeholder="kartik@gmail.com" />
									<label for="form1" class="color-highlight">Quantity</label>
								</div>

							</div>

							<div className="content mb-2 input-for-profile">
								<p style={{ marginBottom: "0rem" }}>Gender </p>

								<div class="input-style  has-borders mb-4">
								<select  class="form-control" >
{/* <option value="default">Storage</option> */}
<option value="z" selected>Male</option>
<option value="a">Female</option>
</select>
								</div>

							</div>
							<div className="content mb-2 input-for-profile">
								<p style={{ marginBottom: "0rem" }}>Date of Birth </p>

								<div class="input-style  has-borders mb-4">
									<input type="date" class="form-control" id="form1" placeholder="start typing here..." />
									<label for="form1" class="color-highlight">Quantity</label>
								</div>

							</div>
							<a href="#" class="close-menu mt-5 mb-5 btn btn-m btn-center-l rounded-s shadow-xl text-uppercase font-900 bg-red-dark">Save</a>

						</div>
						<div data-menu-load="menu-footer.html" />
					</div>

				</div>
			</div>

		</>
	);

	// return (
	// 	<div className="bg-white text-black pb-10 sign3-background" style={{
	// 		fontFamily: "emoji"
	// 	}}>
	// 	<TopNav path={"Edit Profile"}/>

	// 		<div className="mt-10 text-xl flex items-end justify-center">
	// 			<img src={vector} alt="" className=" h-40 mx-auto rounded-full" />

	// 		</div>
	// 		<div>
	// 			<div className="flex mx-5 text-xl flex-col mt-10">
	// 				<label className="mb-3" htmlFor="first-name">
	// 					First Name
	// 				</label>
	// 				<input
	// 					type="text"
	// 					placeholder="eg. Virat"
	// 					className="border-2 border-black-300 py-2 rounded-md pl-3"
	// 				/>
	// 			</div>
	// 			<div className="flex mx-5 text-xl flex-col mt-5">
	// 				<label className="mb-3" htmlFor="last-name">
	// 					Last Name
	// 				</label>
	// 				<input
	// 					type="text"
	// 					placeholder="Last Name"
	// 					className="border-2 border-black-300 py-2 rounded-md pl-3"
	// 				/>
	// 			</div>
	// 			<div className="flex mx-5 text-xl flex-col mt-5">
	// 				<label className="mb-3" htmlFor="email">
	// 					Email
	// 				</label>
	// 				<input
	// 					type="text"
	// 					placeholder="email"
	// 					className="border-2 border-black-300 py-2 rounded-md pl-3"
	// 				/>
	// 			</div>
	// 			<div className="flex mx-5 text-xl flex-col mt-5">
	// 				<label className="mb-3" htmlFor="date-of-birth">
	// 					Date of Birth
	// 				</label>
	// 				<input
	// 					type="date"
	// 					placeholder="Date of Birth"
	// 					className="border-2 border-black-300 py-2 rounded-md pl-3"
	// 				/>
	// 			</div>
	// 			<div className="flex mx-5 text-xl flex-col mt-5">
	// 				<label className="mb-3" htmlFor="gender">
	// 					Gender
	// 				</label>
	// 				<div className="flex gap-6">
	// 					<div className="text-xl border-2  flex items-center gap-2">
	// 						<input type="radio" className="rounded-md" />
	// 						<p>Male</p>
	// 					</div>
	// 					<div className="text-xl border-2  flex items-center gap-2">
	// 						<input type="radio" className="rounded-md" />
	// 						<p>Female</p>
	// 					</div>
	// 				</div>
	// 			</div>

	// 			<div className="flex mx-5 text-xl flex-col mt-5 mb-8">
	// 			<button
	// 			style={{
	// 				marginBottom:"2rem"
	// 			}}
	// 								type="submit"
	// 								className="  text-white bg-gradient-to-r from-orange-500 to-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-12 mx-5  py-2.5 text-center send-otp-button"

	// 								>
	// 								Save
	// 							</button>
	// 			</div>

	// 		</div>
	// 	</div>

	// );
};

export default EditProfile;
