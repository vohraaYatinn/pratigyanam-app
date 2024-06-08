import React, { useEffect, useRef, useState } from "react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import { Button, Dropdown } from "antd-mobile";
import { addMusicWithCategory, getNewCategoryService } from "../urls/urls";
import useAxios from "../network/useAxios";
import { Radio, Select, Alert } from "antd";

const AdminUpload = () => {
  const ref = useRef(null);
  const [getResponse, getError, getLoading, getFetch] = useAxios();
  const [postMusicResponse, postMusicError, postMusicLoading, postMusicFetch] = useAxios();
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({
    showMessage: false,
    isError: true,
    message: "",
  });

  const [option, setOption] = useState([]);
  const optionsWithGender = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' }
  ];
  const optionsWithLanguage = [
    { label: 'English', value: 'English' },
    { label: 'Hindi', value: 'Hindi' }
  ];

  const handleUpload = (e, name) => {
    setFormValues((prev) => ({ ...prev, [name]: e.target.value }));
  };

  useEffect(() => {
    if (getResponse?.message === "success") {
      setCategories(getResponse?.result);
      const options = getResponse.result.map((item, index) => ({
        value: item.id,
        label: `${index+1}. ${item.type}`,
      }));
      setOption(options);
    }
  }, [getResponse]);

  const [genderValues, setGenderValue] = useState('Male');
  const [languageValue, setLanguageValue] = useState('English');

  const changeGender = ({ target: { value } }) => {
    setGenderValue(value);
    setFormValues((prev) => ({ ...prev, gender: value }));
  };

  const changeLanguage = ({ target: { value } }) => {
    setLanguageValue(value);
    setFormValues((prev) => ({ ...prev, language: value }));
  };

  const handleUploadImage = (e) => {
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

  useEffect(() => {
    getFetch(getNewCategoryService());
  }, []);

  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    image: "",
    audio: "",
    gender: "Male",
    language: "English",
    category: "",
  });

  const validate = () => {
    const errors = {};
    if (!formValues.name) {
      errors.name = "Name is required!";
    }
    if (!formValues.description) {
      errors.description = "Description is required!";
    }
    if (!formValues.image) {
      errors.image = "Image is required!";
    }
    if (!formValues.audio) {
      errors.audio = "Audio is required!";
    }
    if (!formValues.category) {
      errors.category = "Category is required!";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      postMusicFetch(addMusicWithCategory(formValues));
    }
  };

  useEffect(() => {
    if (postMusicResponse.message) {
      setMessage({
        showMessage: true,
        isError: false,
        message: postMusicResponse.message,
      });
      setFormValues({
        name: "",
        description: "",
        image: "",
        audio: "",
        gender: "Male",
        language: "English",
        category: "",
      });
      setGenderValue("Male");
      setLanguageValue("English");
    }
  }, [postMusicResponse]);

  useEffect(() => {
    if (postMusicError.message) {
      setMessage({
        showMessage: true,
        isError: true,
        message: postMusicError.message,
      });
    }
  }, [postMusicError]);

  return (
    <>
      <TopNav />
      <BottomNav path={"admin-upload"}/>
      <div className="pt-20">
        <h1 className="text-2xl font-bold text-center">Upload Sound</h1>

        <div className="mx-3">
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

          <form className="w-full mt-3">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Name
                </label>
                <input
                  className="block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4  focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Name of the Sound"
                  value={formValues.name}
                  onChange={(e) => handleUpload(e, "name")}
                />
                {errors.name && <div className="text-red-500">{errors.name}</div>}
              </div>

              <div className="w-full px-3 mt-2">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Description
                </label>
                <input
                  className="block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4  focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Description of the Sound"
                  value={formValues.description}
                  onChange={(e) => handleUpload(e, "description")}
                />
                {errors.description && (
                  <div className="text-red-500">{errors.description}</div>
                )}
              </div>

              <div className="w-full px-3 mt-2">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
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

              <div className="w-full px-3 mt-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
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

              <div className="w-full px-3 mt-4">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Image for Sound
                </label>
                <input
                  type="file"
                  onChange={handleUploadImage}
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

              <div className="w-full px-3 mt-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
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
                {errors.audio && <div className="text-red-500">{errors.audio}</div>}
              </div>
            </div>
          </form>

          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Select Categories for Sound
          </label>
          <div style={{ marginTop: "1rem" }}>
            <Select
              placeholder="Select a Category"
              style={{ width: "100%" }}
              options={option}
              onChange={handleChange}
            />
            {errors.category && <div className="text-red-500">{errors.category}</div>}
          </div>

          <div className="text-center mt-6 flex flex-col items-center gap-3 mb-20">
            <button
            disabled={getLoading}
              type="button"
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

export default AdminUpload;
