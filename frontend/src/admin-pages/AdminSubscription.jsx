import React, { useRef, useState, useEffect } from "react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import { Button, Dropdown } from "antd-mobile";
import useAxios from "../network/useAxios";
import { adddNewSubscriptionService } from "../urls/urls";
import { Alert } from "antd";

const AdminSubscription = () => {
  const [subResponse, subError, subLoading, subFetch] = useAxios();
  const ref = useRef(null);
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    price: "",
    duration: "",
  });

  const [message, setMessage] = useState({
    showMessage: false,
    isError: true,
    message: "",
  });

  const handleSubmit = () => {
    subFetch(adddNewSubscriptionService(formValues));
  };

  const subResponseRef = useRef(subResponse);

  useEffect(() => {
    console.log(subResponse);
    if (subResponseRef.current !== subResponse) {
      setMessage({
        showMessage: true,
        isError: false,
        message: subResponse.message,
      });
    }
    subResponseRef.current = subResponse;
  }, [subResponse]);

  useEffect(() => {}, [subError]);

  return (
    <>
      <TopNav />
      <BottomNav />
      
      <div className="pt-20">
        <h1 className="text-2xl font-bold text-center">Add subscriptions</h1>
		<div style={{ padding: "10px" }}>
        {message.showMessage ? (
          <Alert
            closable
            type={message?.isError ? "error" : "success"}
            message={message.message}
            onClose={() => {
              setMessage((prevState) => ({
                ...prevState,
                showMessage: false,
              }));
            }}
           
          />
        ) : null}
      </div>
        <div className="mx-3">
          <form className="w-full ">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3  ">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Name
                </label>
                <input
                  className=" block w-full  bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-3  focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Name of the Subscription"
                  onChange={(e) => {
                    setFormValues({ ...formValues, name: e.target.value });
                  }}
                />
              </div>
              <div className="w-full px-3  ">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Description
                </label>
                <input
                  className=" block w-full  bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-3  focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Description of the Subscription"
                  onChange={(e) => {
                    setFormValues({
                      ...formValues,
                      description: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="w-full px-3">
                <label
                  htmlFor="duration"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Duration
                </label>
                {/* <select
                  id="duration"
                  name="duration"
                  value={formValues.duration} // Bind value to state variable
                  onChange={(e) => {
                    setFormValues({ ...formValues, duration: e.target.value });
                  }} // Call handleDurationChange on change
                  className="block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-3 focus:outline-none focus:bg-white"
                >
                  <option value="">Select duration</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select> */}
                <input
                  className=" block w-full  bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-3  focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="number"
                  placeholder="Enter duration in days"
                  onChange={(e) => {
                    setFormValues({
                      ...formValues,
                      duration: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="w-full px-3  ">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Price
                </label>
                <input
                  className=" block w-full  bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-3  focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="number"
                  placeholder="Price"
                  onChange={(e) => {
                    setFormValues({ ...formValues, price: e.target.value });
                  }}
                />
              </div>
            </div>
          </form>

          <div className="text-center mt-3 flex flex-col items-center gap-3">
            <button
              className="bg-red-600 text-white font-bold text-2xl px-6 rounded-lg py-1"
              onClick={handleSubmit}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSubscription;
