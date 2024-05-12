import React, { useRef, useState } from "react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import { Button, Dropdown } from "antd-mobile";

const AdminUpload = () => {
  const ref = useRef(null);

  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    image:"",
    path: "",
  });

  return (
    <>
      <TopNav />
      <BottomNav />
      <div className="pt-20">
        <h1 className="text-2xl font-bold text-center">Upload sound</h1>

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
                  placeholder="Name of the Sound"
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
                  placeholder="Description of the Sound"
                />
              </div>
              <div className="w-full px-3  ">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Image for Sound
                </label>
                <input
                  type="file"
                  className="block w-full text-sm text-gray-500
        file:me-4 file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-semibold
        file:bg-blue-600 file:text-white
        hover:file:bg-blue-700
        file:disabled:opacity-50 file:disabled:pointer-events-none
        dark:text-neutral-500
        dark:file:bg-blue-500
        dark:hover:file:bg-blue-400
      "
                />
              </div>
              <div className="w-full px-3  mt-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Add sound
                </label>
                <input
                  type="file"
                  className="block w-full text-sm text-gray-500
        file:me-4 file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-semibold
        file:bg-blue-600 file:text-white
        hover:file:bg-blue-700
        file:disabled:opacity-50 file:disabled:pointer-events-none
        dark:text-neutral-500
        dark:file:bg-blue-500
        dark:hover:file:bg-blue-400
      "
                />
              </div>
            </div>
          </form>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Select Categories for Sound
          </label>
          <div className="flex items-center justify-evenly ">
            <div className="">
              <label
                htmlFor="duration"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Duration
              </label>
              <select
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
              </select>
            </div>
            <div className="">
              <label
                htmlFor="duration"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Duration
              </label>
              <select
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
              </select>
            </div>
          </div>

          <div className="text-center mt-3 flex flex-col items-center gap-3">
            <button className="bg-red-600 text-white font-bold text-2xl px-6 rounded-lg py-1">
              Upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUpload;
