import React, { useEffect, useRef, useState } from "react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import { Button, Dropdown } from "antd-mobile";
import { addMusicWithCategory, getNewCategoryService } from "../urls/urls";
import useAxios from "../network/useAxios";
import { Radio, Select } from "antd";

const AdminUpload = () => {
  const ref = useRef(null);
  const [getResponse, getError, getLoading, getFetch] = useAxios();
  const [postMusicResponse, postMusicError, postMusicLoading, postMusicFetch] = useAxios();
  const [categories, setCategories] = useState([]);


const [option, setOption] = useState([])
const optionsWithGender = [
  {
    label: 'Male',
    value: 'Male',
  },
  {
    label: 'Female',
    value: 'Female',
  }
];
const optionsWithLanguage = [
  {
    label: 'English',
    value: 'English',
  },
  {
    label: 'Hindi',
    value: 'Hindi',
  }

];
const hadleupload = (e, name) =>{

  setFormValues((prev)=>({...prev, [name]:e.target.value}))
}
useEffect(() => {
  if(getResponse?.message == "success"){
    setCategories(getResponse?.result);
    const options = categories.map((item) => ({
      value: item.id,
      label: `${item.id}. ${item.type}`,
    }));
    setOption(options)
  }
}, [getResponse]);
const [genderValues, setGenderValue] = useState('Male');
const [languageValue, setLanguageValue] = useState('English');

const changeGender = ({ target: { value } }) => {
  setGenderValue(value);
  setFormValues((prev)=>({...prev, gender:value}))

};
const changeLanguage = ({ target: { value } }) => {
  setLanguageValue(value);
  setFormValues((prev)=>({...prev, language:value}))

};
const handleUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    console.log("Selected file:", file);
    setFormValues((prev) => ({
      ...prev,
      image: file,
    }));
  }
};
const handleUploadAudio = (e) => {
  const file = e.target.files[0];
  if (file) {
    console.log("Selected file:", file);
    setFormValues((prev) => ({
      ...prev,
      audio: file,
    }));
  }
};
const handleChange = (value) => {
  setFormValues((prev) => ({
    ...prev,
    category: value,
  }));
};
useEffect(()=>{
  getFetch(getNewCategoryService())
},[])
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
        <h1 className="text-2xl font-bold text-center">Upload Sound</h1>

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
                  onChange={(e)=>{
                    hadleupload(e, "name")
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
                  placeholder="Description of the Sound"
                  onChange={(e)=>{
                    hadleupload(e, "description")
                  }}
                />
              </div>
              <div className="w-full px-3  mt-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Select Gender
                </label>
                <Radio.Group
        options={optionsWithGender}
        onChange={changeGender}
        value={genderValues}
        optionType="button"
        buttonStyle="solid"
      />
              </div>
              <div className="w-full px-3  mt-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                   Select Language
                </label>
                     
       <Radio.Group
        options={optionsWithLanguage}
        onChange={changeLanguage}
        value={languageValue}
        optionType="button"
        buttonStyle="solid"
      />
              </div>
              <div className="w-full px-3  mt-4">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Image for Sound
                </label>
                <input
                  type="file"
                  onChange={handleUpload}
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
                  onChange={handleUploadAudio}
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
          <div style={{marginTop:"1rem"}}>
        <Select
        placeholder="Select a Category" // Informative placeholder
        style={{
          width:"100%"
        }}
        options={option} // Pass formatted options array

        onChange={handleChange}
      />
        </div>


          <div className="text-center mt-6 flex flex-col items-center gap-3 ">
            <button className="bg-red-600 text-white font-bold text-2xl px-6 rounded-lg py-1 "
            onClick={()=>{
              postMusicFetch(addMusicWithCategory(formValues));
            }}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUpload;
