import React, { useState } from "react";
import axios from "axios";
import "../../App.css";
import "./Dashboard.css";

function Profile() {
  //Edit this further down the line to automatically
  //pre-fill each input with logged-in user data
  const [inputData, setInputData] = useState({
    bio: "",
    location: "",
    fname: "",
    lname: "",
    email: "",
    password: ""
  });

  const onSubmit = event => {
    event.preventDefault();
    axios.post("/", { ...inputData });
    console.log({ ...inputData });
  };

  const onInputChange = event => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <section className="SignUp-Container">
      <div className="Form-Container">
        <form onSubmit={onSubmit}>
          <label htmlFor="bioInput">Bio</label>
          <input
            id="bioInput"
            maxLength="140"
            name="bio"
            type="text"
            onChange={onInputChange}
          />

          <label htmlFor="locationInput">Location</label>
          <input
            id="locationInput"
            maxLength="50"
            name="location"
            type="text"
            onChange={onInputChange}
          />

          <label htmlFor="fnameInput">First Name</label>
          <input
            id="fnameInput"
            maxLength="20"
            name="fname"
            type="text"
            onChange={onInputChange}
          />

          <label htmlFor="lnameInput">Last Name</label>
          <input
            id="lnameInput"
            maxLength="20"
            name="lname"
            type="text"
            onChange={onInputChange}
          />

          <label htmlFor="emailInput">Email</label>
          <input
            id="emailInput"
            maxLength="20"
            name="email"
            type="email"
            onChange={onInputChange}
          />

          <label htmlFor="passwordInput">Password</label>
          <input
            id="passwordInput"
            minLength="6"
            name="password"
            type="password"
            onChange={onInputChange}
          />
          <input className="form-btn" type="submit" />
        </form>
      </div>
    </section>
  );
}

export default Profile;
