import React, { useState } from "react";
import axios from "axios";
import "../../App.css";
import "./Login.css";

function LogIn() {
  const [inputData, setInputData] = useState({
    email: "",
    password: ""
  });

  // ADD CORRECT ENDPOINT ONCE SERVER IS RUNNING! MAKE EDIT SO THAT PASSWORD IS NOT SENT AS A STRING
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
        <h2>Log In</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="emailInput">Email</label>
          <input
            id="emailInput"
            maxLength="20"
            name="email"
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

export default LogIn;
