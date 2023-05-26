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
      className="subscribe-con "
      id="subscribe-con"
      data-aos="slide-up"
      data-aos-once="true"
    >
      <div className="subs-doodle lg:hidden">
        <img src={require("../Assets/subs-doodle.png")} alt="" />
      </div>

      <div className="subscribe-body ">
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
          <h3 id="person-name-heading">Full name *</h3>
          <input
            type="text"
            name="name"
            id="person-name"
            required
            className="text-[0D2F3F]"
            placeholder="Enter your full name"
            onChange={handleChange}
          />

          <h3 id="person-email-heading">Email *</h3>
          <input
            type="email"
            name="email"
            id="person-email"
            required
            className="text-[0D2F3F]"
            placeholder="Enter your email"
            onChange={handleChange}
          />

          <h3 id="person-org-heading">Organization/College *</h3>
          <input
            type="text"
            name="organization"
            id="person-org"
            required
            className="text-[0D2F3F]"
            placeholder="Enter your organization name"
            onChange={handleChange}
          />
          <p className="text-right text-sm text-gray-400"><i>* indicates required</i></p>

          < button type="submit" id="subscribe-btn" onClick={subscribe}>
            <p>SUBSCRIBE</p><svg viewBox="0 0 448 512" class="bell"><path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z">
              </path></svg>
        
          </button>
        </form>
      </div>
    </div>
  );
}
