import React, { useState } from "react";
import axios from "axios";
import "../../App.css";
import "./SignUp.css";

function SignUp() {
  const [inputData, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: ""
  });

  // ADD CORRECT ENDPOINT ONCE SERVER IS RUNNING!
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
      <aside className="SignUp-image-box">{/* Image Container */}</aside>
      <div className="Form-Container">
        <h2>Sign Up</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="fnameInput">First Name</label>
          <input
            id="fnameInput"
            maxLength="20"
            name="fname"
            value={inputData.fname}
            type="text"
            onChange={onInputChange}
          />

          <label htmlFor="lnameInput">Last Name</label>
          <input
            id="lnameInput"
            maxLength="20"
            name="lname"
            value={inputData.lname}
            type="text"
            onChange={onInputChange}
          />

          <label htmlFor="emailInput">Email</label>
          <input
            id="emailInput"
            maxLength="20"
            name="email"
            value={inputData.email}
            type="email"
            onChange={onInputChange}
          />

          <label htmlFor="passwordInput">Password</label>
          <input
            id="passwordInput"
            minLength="6"
            name="password"
            value={inputData.password}
            type="password"
            onChange={onInputChange}
          />
          <input className="form-btn" type="submit" />
        </form>
      </div>
    </section>
  );
}

export default SignUp;
