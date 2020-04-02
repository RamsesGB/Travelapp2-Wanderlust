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
    console.log({...inputData})
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
            type="text"
            onChange={onInputChange}
          ></input>

          <label htmlFor="lnameInput">Last Name</label>
          <input
            id="lnameInput"
            maxLength="20"
            name="lname"
            type="text"
            onChange={onInputChange}
          ></input>

          <label htmlFor="emailInput">Email</label>
          <input
            id="emailInput"
            maxLength="20"
            name="Email"
            type="email"
            onChange={onInputChange}
          ></input>

          <label htmlFor="passwordInput">Password</label>
          <input
            id="passwordInput"
            minLength="6"
            name="password"
            type="password"
            onChange={onInputChange}
          ></input>
          <input className="form-btn" type="submit" />
        </form>
      </div>
    </section>
  );
}

export default SignUp;
