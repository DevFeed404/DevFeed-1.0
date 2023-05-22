import React from "react";
import "../CSS/Subscribe.css";
import { useState } from "react";
import axios from "axios";

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

  //function to post data in backend
  const subscribe = () => {
    axios
      .post(baseurl + "/subscribe", subscribeForm)
      .then((Response) => {
        if (Response.status === 200) {
          alert(Response.data.message);
          console.log("success");
        }

        console.log(Response);
        // window.location(baseurl);
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
          <h4>* (Required)</h4>

          <button type="submit" id="subscribe-btn" onClick={subscribe}>
            <p>SUBSCRIBE</p>
          </button>
        </form>
      </div>
    </div>
  );
}
