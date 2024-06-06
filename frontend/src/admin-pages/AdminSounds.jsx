import React, { useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
// import { categories } from "../data/categories";
import { adddNewCategoryService, deleteMusicCategory, deleteNewCategoryServices, fetchMusicByCategory, getNewCategoryService } from "../urls/urls";
import useAxios from "../network/useAxios";
import { Alert, Select } from "antd";

const AdminSounds = () => {
  const [addResponse, addError, addLoading, addFetch] = useAxios();
  const [getResponse, getError, getLoading, getFetch] = useAxios();
  const [actionResponse, actionError, actionLoading, actionFetch] = useAxios();
  const [categories, setCategories] = useState([]);
  const [music, setMusic] = useState([]);
  const [option, setOption] = useState([])

  const [formValues, setFormValues] = useState({
    type: "",
	image:""
  });
  const handleChange = (value) => {
    setFormValues((prev) => ({
      ...prev,
      category: value,
    }));
  };
  useEffect(() => {
    if(getResponse?.message == "success"){
      setCategories(getResponse?.result);
      const options = categories.map((item, index) => ({
        value: item.id,
        label: `${index+1}. ${item.type}`,
      }));
      setOption(options)
    }
  }, [getResponse]);
  const deleteFunction = (id) => {
    actionFetch(deleteMusicCategory({id:id}));

  }
  useEffect(()=>{
    if(actionResponse?.result == "success"){
      addFetch(fetchMusicByCategory({category:formValues?.category}));
    }
  },[actionResponse])

 
  const [message, setMessage] = useState({
    showMessage: false,
    isError: true,
    message: "",
  });

  const handleSubmit = () => {
    addFetch(fetchMusicByCategory({category:formValues?.category}));
  };
  useEffect(() => {
  if(getResponse?.message == "success"){
      setCategories(getResponse?.result);
    }
  }, [getResponse]);
  useEffect(() => {
      getFetch(getNewCategoryService());
  }, []);
  useEffect(() => {
    if(addResponse?.result=="success"){
      setMusic(addResponse?.data)
    }

  }, [addResponse]);

  useEffect(() => {
    if (addResponse.message) {
      setMessage({
        showMessage: true,
        isError: true,
        message: addResponse.message,
      });
    }
  }, [addResponse]);

  return (
    <>
      <TopNav />
      <BottomNav />
      <div className="w-full px-3 ">
        <div className="pt-20">
          <h1 className="font-bold text-center text-3xl mb-4">Audio Management</h1>
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
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3"
            for="grid-first-name"
          >
            Select Categories
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

          <button
          disabled={getLoading}
            className="bg-blue-500 text-white px-5 py-1.5 rounded-lg"
            onClick={handleSubmit}
            style={{
              marginTop:"1rem",
              width:"100%"
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl text-center my-2 font-bold mb-20">
          Total Audios
        </h1>
        <div style={{paddingBottom:"10rem", marginTop:"2rem"}}>
        {music?.map((item, index) => {
          return (
            <>
              <div className="text-xl flex ml-5 gap-4" style={{
                justifyContent:"space-between", margin:"0.5em 1rem"
              }}>
                <p>
                  {index+1}. {item.title}
                </p>
                <button className="btn btn-danger"
                disabled={getLoading}
                onClick={()=>{
                  deleteFunction(item.id)
                }}
                >Delete</button>
               
              </div>
            </>
          );
        })}
        </div>
      </div>
    </>
  );
};

export default AdminSounds;
