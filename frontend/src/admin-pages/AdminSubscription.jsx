import React, { useRef, useState, useEffect } from "react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import { Button, Dropdown } from "antd-mobile";
import useAxios from "../network/useAxios";
import { adddNewSubscriptionService, editSubscriptionPostAdmin, fetchSubscriptions, getAllSubscriptionPost, getAllSubscriptionService } from "../urls/urls";
import { Alert } from "antd";

const AdminSubscription = () => {
  const [subResponse, subError, subLoading, subFetch] = useAxios();
  const [fetchSubscriptionResponse, fetchSubscriptionError, fetchSubscriptionLoading, fetchSubscriptionFetch] = useAxios();
  const ref = useRef(null);
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    price: "",
    duration: "",
  });
  const [errors, setErrors] = useState({});
  const [selectedId, setSelectedId] = useState(false);
  const [message, setMessage] = useState({
    showMessage: false,
    isError: true,
    message: "",
  });

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      if (selectedId) {
        subFetch(editSubscriptionPostAdmin({ ...formValues, id: selectedId }));
      } else {
        subFetch(getAllSubscriptionPost(formValues));
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const subResponseRef = useRef(subResponse);
  useEffect(() => {
    fetchSubscriptionFetch(getAllSubscriptionService());
  }, []);
  
  const [subscriptionData, setSubscriptionData] = useState([]);
  useEffect(() => {
    if (fetchSubscriptionResponse?.message === "Success") {
      setSubscriptionData(fetchSubscriptionResponse?.result);
    }
  }, [fetchSubscriptionResponse]);
  
  useEffect(() => {
    if (subResponseRef.current !== subResponse) {
      setMessage({
        showMessage: true,
        isError: false,
        message: subResponse.message,
      });
      fetchSubscriptionFetch(getAllSubscriptionService());
      setSelectedId(false);
      setFormValues({
        name: "",
        description: "",
        price: "",
        duration: "",
      });
    }
    subResponseRef.current = subResponse;
  }, [subResponse]);

  const validate = () => {
    const errors = {};
    if (!formValues.name) {
      errors.name = "Name is required!";
    }
    if (!formValues.description) {
      errors.description = "Description is required!";
    }
    if (!formValues.price) {
      errors.price = "Price is required!";
    }
    if (!formValues.duration) {
      errors.duration = "Duration for Subscription is required!";
    }
    return errors;
  };

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
          <form className="w-full">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-name"
                >
                  Name
                </label>
                <input
                  className="block w-full bg-gray-200 text-gray-700 border rounded px-4 py-2 focus:outline-none focus:bg-white"
                  id="grid-name"
                  type="text"
                  placeholder="Name of the Subscription"
                  value={formValues.name}
                  onChange={(e) => {
                    setFormValues({ ...formValues, name: e.target.value });
                  }}
                />
                {errors.name && <div className="text-red-500">{errors.name}</div>}
              </div>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mt-3 mb-2"
                  htmlFor="grid-description"
                >
                  Description
                </label>
                <input
                  className="block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 focus:outline-none focus:bg-white"
                  id="grid-description"
                  type="text"
                  placeholder="Description of the Subscription"
                  value={formValues.description}
                  onChange={(e) => {
                    setFormValues({ ...formValues, description: e.target.value });
                  }}
                />
                {errors.description && <div className="text-red-500">{errors.description}</div>}
              </div>
              <div className="w-full px-3">
                <label
                  htmlFor="duration"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mt-3 mb-2"
                >
                  Duration
                </label>
                <input
                  className="block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 focus:outline-none focus:bg-white"
                  id="grid-duration"
                  type="number"
                  placeholder="Enter duration in days"
                  value={formValues.duration}
                  onChange={(e) => {
                    setFormValues({ ...formValues, duration: e.target.value });
                  }}
                />
                {errors.duration && <div className="text-red-500">{errors.duration}</div>}
              </div>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs mt-3 font-bold mb-2"
                  htmlFor="grid-price"
                >
                  Price
                </label>
                <input
                  className="block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 focus:outline-none focus:bg-white"
                  id="grid-price"
                  type="number"
                  placeholder="Price"
                  value={formValues.price}
                  onChange={(e) => {
                    setFormValues({ ...formValues, price: e.target.value });
                  }}
                />
                {errors.price && <div className="text-red-500">{errors.price}</div>}
              </div>
            </div>
          </form>
          <div className="text-center mt-3 flex flex-col items-center gap-3">
            <button
            disabled={subLoading}
              className="bg-red-600 text-white font-bold text-2xl px-6 rounded-lg py-1"
              onClick={handleSubmit}
            >
              {selectedId ? "Update" : "Upload"}
            </button>
          </div>
          <div className="mt-5 ">
            <h1 className="text-2xl text-center my-2 font-bold">
              Total Subscription
            </h1>
            <div style={{ paddingBottom: "10rem", marginTop: "2rem" }} >
              {subscriptionData?.map((item, index) => (
                <div key={item.id} className="text-xl flex ml-5 gap-4" style={{ justifyContent: "space-between", margin: "0.5em 1rem" }}>
                  <p>
                    {index + 1}. {item.name}
                  </p>
                  <button
                  disabled={subLoading}
                    className="btn btn-warning"
                    onClick={() => {
                      setSelectedId(item.id);
                      setFormValues({
                        name: item.name,
                        description: item.description,
                        price: item.price,
                        duration: item.duration,
                      });
                    }}
                  >
                    Edit
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSubscription;
