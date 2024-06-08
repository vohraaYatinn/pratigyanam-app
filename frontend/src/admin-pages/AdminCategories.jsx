import React, { useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import { adddNewCategoryService, deleteNewCategoryServices, getNewCategoryService } from "../urls/urls";
import useAxios from "../network/useAxios";
import { Alert } from "antd";

const AdminCategories = () => {
  const [addResponse, addError, addLoading, addFetch] = useAxios();
  const [getResponse, getError, getLoading, getFetch] = useAxios();
  const [categories, setCategories] = useState([]);
  const [formValues, setFormValues] = useState({
    type: "",
    image: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({
    showMessage: false,
    isError: true,
    message: "",
  });

  const deleteFunction = (id) => {
    addFetch(deleteNewCategoryServices({ id: id }));
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.match("image/jpeg") && !file.type.match("image/png")) {
        setErrors({ image: "Only PNG and JPG images are allowed!" });
        setFormValues((prev) => ({
          ...prev,
          image: "",
        }));
      } else {
        setErrors({ image: "" });
        console.log("Selected file:", file);
        setFormValues((prev) => ({
          ...prev,
          image: file,
        }));
      }
    }
  };

  const handleSubmit = () => {
    if (validate()) {
      addFetch(adddNewCategoryService(formValues));
    }
  };

  const validate = () => {
    const errors = {};
    if (!formValues.type) {
      errors.type = "Category type is required!";
    }
    if (!formValues.image) {
      errors.image = "Image is required!";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    if (getResponse?.message === "success") {
      setCategories(getResponse?.result);
    }
  }, [getResponse]);

  useEffect(() => {
    getFetch(getNewCategoryService());
  }, []);

  useEffect(() => {
    if (addResponse?.result === "success") {
      setMessage({
        showMessage: true,
        isError: false,
        message: "Category added successfully!",
      });
      getFetch(getNewCategoryService());
      setFormValues({ type: "", image: "" });
    } else if (addError) {
      setMessage({
        showMessage: true,
        isError: true,
        message: "Failed to add category!",
      });
    }
  }, [addResponse, addError]);

  return (
    <>
      <TopNav />
      <BottomNav path={"admin-categories"}/>
      <div className="w-full px-3 ">
        <div className="pt-20">
          <h1 className="font-bold text-center text-3xl mb-4">Categories</h1>
          {message.showMessage && (
            <Alert
              closable
              type={message.isError ? "error" : "success"}
              message={message.message}
              onClose={() => {
                setMessage((prevState) => ({
                  ...prevState,
                  showMessage: false,
                }));
              }}
            />
          )}
          <div className="w-full m-2">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Image
            </label>
            <input
              onChange={handleUpload}
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
            {errors.image && <div className="text-red-500">{errors.image}</div>}
          </div>
          <input
            className="mt-3 block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4  focus:outline-none focus:bg-white"
            type="text"
            placeholder="Add new category"
            value={formValues.type}
            onChange={(e) => {
              setFormValues({ ...formValues, type: e.target.value });
            }}
          />
          {errors.type && <div className="text-red-500">{errors.type}</div>}
          <button
            disabled={getLoading}
            className="bg-blue-500 text-white px-5 py-1.5 rounded-lg"
            onClick={handleSubmit}
            style={{
              marginTop: "1rem",
              width: "100%",
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="mt-5 mb-20">
        <h1 className="text-2xl text-center my-2 font-bold">Total Categories</h1>
        <div style={{ paddingBottom: "10rem", marginTop: "2rem" }}>
          {categories?.map((item, index) => {
            return (
              <div
                className="text-xl flex ml-5 gap-4"
                style={{
                  justifyContent: "space-between",
                  margin: "0.5em 1rem",
                }}
              >
                <p>
                  {index+1}. {item.type}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteFunction(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AdminCategories;
