import React from "react";
import "../CSS/Subscribe.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Subscribe() {
  const baseurl = "https://dev-feed-1-0-ka8g.vercel.app/api"; //baseurl for posting
  const [subscribeForm, setSubscribeForm] = useState({
    name: "",
    email: "",
    organization: "",
  });

  // Function to set Form data
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setSubscribeForm((prev) => {
      return { ...prev, [key]: value };
    });
  };

  //function to post data to backend
  const subscribe = () => {
    axios
      .post(baseurl + "/subscribe", subscribeForm)
      .then((response) => {
        if (response.status === 200) {
          // toast.error(response.data.message);
          toast.warn(response.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log("success");
        }

        console.log(response);
        // window.location(baseurl);
      })
      .catch((error) => {
        toast.error(error.message);
      });
      
  };

  return (
    <div
      className="subscribe-con"
      id="subscribe-con"
      data-aos="slide-up"
      data-aos-once="true"
    >
      <div className="subs-doodle lg:hidden">
        <img src={require("../Assets/subs-doodle.png")} alt="" />
      </div>

      <div className="subscribe-body bg-[#0d2f3f] p-10 border-[#0d2f3f] rounded-xl flex flex-col items-center shadow-lg shadow-[#0d2f3f]">
        <div className="subscribe-heading ">
          <h2 className="poppins">Subscribe to our newsletter</h2>
        </div>

        <div className="hr"></div>

        <div className="form-subheading comme">
          <h3>Stay updated and never miss an event</h3>
        </div>

        <form
          className="subscribe-form comme"
          method="POST"
          action="localhost:3000"
        >
          <input
            type="text"
            name="name"
            id="person-name"
            required
            className="text-[0D2F3F]"
            placeholder="Enter your full name"
            onChange={handleChange}
          />


          <input
            type="email"
            name="email"
            id="person-email"
            required
            className="text-[0D2F3F]"
            placeholder="Enter your email"
            onChange={handleChange}
          />

          <input
            type="text"
            name="organization"
            id="person-org"
            required
            className="text-[0D2F3F]"
            placeholder="Enter your organization name"
            onChange={handleChange}
          />
          <h4>* (Required)</h4>
          <button type="submit" id="subscribe-btn" onClick={subscribe}>
            <p>SUBSCRIBE</p>
          </button>
        </form>
      </div>
    </div>
  );
}
