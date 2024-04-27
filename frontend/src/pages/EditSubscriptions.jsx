import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import vector from "../data/vector.jpeg";
import { GoDot } from "react-icons/go";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";


const EditSubscriptions = () => {

		  return (
			
			<div>

			  <div id="page">
				<div className="header header-fixed header-logo-left header-auto-show">
				  <a href="index.html" className="header-title">AppKit</a>
				  <a href="#" data-menu="menu-main" className="header-icon header-icon-1"><i className="fas fa-bars" /></a>
				  <a href="#" data-toggle-theme className="header-icon header-icon-3 show-on-theme-dark"><i className="fas fa-sun" /></a>
				  <a href="#" data-toggle-theme className="header-icon header-icon-3 show-on-theme-light"><i className="fas fa-moon" /></a>
				  <a href="#" data-menu="menu-share" className="header-icon header-icon-2"><i className="fas fa-share-alt" /></a>
				</div>
				<TopNav />
				<BottomNav />
				
				<div className="page-title-clear" />
				<div class="card card-style">
<div class="content mb-0">
<p class="font-600 mb-n1 color-highlight">Your Current Subscription plan</p>
<h1>Monthly</h1>
<div class="list-group list-custom-large">
<a href="#">
<i class="fa font-14 fa-calendar rounded-sm shadow-m bg-red-dark color-white"></i>
<span>30 April, 2024</span>
<strong>Valid Through</strong>
<i class="fa fa-angle-right"></i>
</a>

</div>
</div>
</div>
<div style={{marginBottom:"8rem"}}>
				<div class="card card-style p-4 bg-31" data-card-height="550" style={{minHeight:"20rem"}}>
<div class="card-center text-center">
{/* <h6 class="mb-0 color-highlight">Get AppKit Today</h6> */}
<h1 class="font-800 color-white font-30 line-height-xl">₹ 99/- <br/>Monthly</h1>
<p class="font-16 color-white opacity-50 line-height-l boxed-text-l">
Create your next Mobile Project in a familiar programming language built by the best author in the nieche.
</p>
<a href="#" class="btn btn-center-m btn-m gradient-blue rounded-s font-700 text-uppercase">Subscribe</a>
</div>
<div class="card-overlay bg-black opacity-80"></div>
</div>
				<div class="card card-style p-4 bg-31 pb-10" data-card-height="550" style={{minHeight:"20rem"}}>
<div class="card-center text-center">
{/* <h6 class="mb-0 color-highlight">Get AppKit Today</h6> */}
<h1 class="font-800 color-white font-30 line-height-xl">₹ 599/- <br/>Anually</h1>
<p class="font-16 color-white opacity-50 line-height-l boxed-text-l">
Create your next Mobile Project in a familiar programming language built by the best author in the nieche.
</p>
<a href="#" class="btn btn-center-m btn-m gradient-blue rounded-s font-700 text-uppercase">Subscribe</a>
</div>
<div class="card-overlay bg-black opacity-80"></div>
</div>
</div>
			
			  </div>
			</div>
		  );
		}
	  





// 	return (


// 		<div className="bg-white text-black pb-10 sign3-background" style={{
// 			fontFamily: "emoji"
// 		}}>
// 									<TopNav path={"Manage Subscriptions"}/>
// 			<div style={{
// 				    display: "flex",
// 					alignItems: "center",
// 					flexDirection: "column",
// 					marginTop: '3rem',
// 					fontSize:"1rem"
// 			}}>
// 			<p>Your Current Subscription plan</p>
// 			<h4>Type: <span style={{
// 				fontWeight:"700",
// 				fontSize:"1.5rem"
// 			}}>Monthly</span></h4>
// 			<h4>Valid Through: <span style={{
// 				fontWeight:"700",
// 				fontSize:"1.5rem"
// 			}}>30 April, 2024</span></h4>
// 			</div>
// 			<div className="text-center">
// 			<button
// 									type="submit"
// 									className="  text-white bg-gradient-to-r from-orange-500 to-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-xl px-12 mx-5  py-2.5 text-center send-otp-button"
								
// 									>
// 									Upgrade Now
// 								</button>
// 			</div>
// 			<div>
// 				<div className="border-2 border-black mx-8 my-8 py-5 px-5 rounded-xl"
// 				style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}
// 				>
// 						<p className="text-6xl font-bold my-4">₹ 99/-</p>
// 						<h4 className="text-2xl font-semibold">Monthly</h4>
// 						<ul className="text-xl">
// 							<li className="my-3 flex items-center gap-3"><GoDot /> <p>Lorem ipsum dolor sit amet.</p>
//  </li>
// 							<li className="my-3 flex items-center gap-3"><GoDot /> <p>Lorem ipsum dolor sit amet.</p>
//  </li>
// 							<li className="my-3 flex items-center gap-3"><GoDot /> <p>Lorem ipsum dolor sit amet.</p>
//  </li>
							
// 						</ul>
// 					<div className="text-center">
//                 <button
// 									type="submit"
// 									className="  text-white bg-gradient-to-r from-orange-500 to-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-xl px-12 mx-5  py-2.5 text-center send-otp-button"
								
// 									>
// 									Subscribe Now
// 								</button>
//                 </div>
// 				</div>
// 				<div className="border-2 border-black mx-8 my-8 py-5 px-5 rounded-xl"
// 				style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}
// 				>
					
// 						<p className="text-6xl font-bold my-4">₹ 599/-</p>
// 						<h4 className="text-2xl font-semibold">Yearly</h4>

// 						<ul className="text-xl">
// 							<li className="my-3 flex items-center gap-3"><GoDot /> <p>Lorem ipsum dolor sit amet.</p>
//  </li>
// 							<li className="my-3 flex items-center gap-3"><GoDot /> <p>Lorem ipsum dolor sit amet.</p>
//  </li>
// 							<li className="my-3 flex items-center gap-3"><GoDot /> <p>Lorem ipsum dolor sit amet.</p>
//  </li>
							
// 						</ul>
// 					<div className="text-center">
//                 <button
// 									type="submit"
// 									className="  text-white bg-gradient-to-r from-orange-500 to-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-xl px-12 mx-5  py-2.5 text-center send-otp-button"
								
// 									>
// 									Subscribe Now
// 								</button>
//                 </div>
// 				</div>
			
// 			</div>
// 		</div>
		
// 	);


export default EditSubscriptions;
