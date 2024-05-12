import React, { useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
// import { categories } from "../data/categories";
import { adddNewCategoryService, getNewCategoryService } from "../urls/urls";
import useAxios from "../network/useAxios";

const AdminCategories = () => {

	const [addResponse, addError, addLoading, addFetch] = useAxios();
	const [getResponse, getError, getLoading, getFetch] = useAxios();
	const [categories, setCategories] = useState([]);
	const [formValues, setFormValues] = useState({
		type: ""
	  });
	
	  const [message, setMessage] = useState({
		showMessage: false,
		isError: true,
		message: "",
	  });
	
	  const handleSubmit = () => {
		addFetch(adddNewCategoryService(formValues));
	  };

	  useEffect(()=>{

		getFetch(getNewCategoryService())

	  }, [addResponse])

	  useEffect(()=>{
		setCategories(getResponse?.result)
	  },[getResponse])
	return (
		<>
			<TopNav />
			<BottomNav />
			<div className="w-full px-3 ">
				<div className="pt-20">
					<h1 className="font-bold text-center text-3xl mb-4">Categories</h1>
					<input
						className=" block w-full  bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-3  focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="Add new category"
						onChange={(e) => {
							setFormValues({ ...formValues, type: e.target.value });
						  }}
					/>
					<button className="bg-blue-500 text-white px-5 py-1.5 rounded-lg" onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</div>
			<div className="mt-5">
				<h1 className="text-3xl text-center my-2 font-bold">
					Total Categories
				</h1>
				{categories?.map((item) => {
					return (
						<>
							<div className="text-2xl flex items-center ml-5 gap-4">
								<p>{item.id}. {item.type}</p>
							</div>
						</>
					);
				})}
			</div>
		</>
	);
};

export default AdminCategories;
