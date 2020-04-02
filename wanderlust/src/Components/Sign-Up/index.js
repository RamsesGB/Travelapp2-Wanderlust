import React, { useState } from "react";
import axios from "axios";
import "../../App.css";
import "./SignUp.css";

function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ADD CORRECT ENDPOINT ONCE SERVER IS RUNNING!
  const onSubmit = event => {
    event.preventDefault();
    axios.post("/", { fname, lname, email, password });
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
            onChange={event => {
              setFname(event.target.value);
            }}
          ></input>

          <label htmlFor="lnameInput">Last Name</label>
          <input
            id="lnameInput"
            maxLength="20"
            name="lname"
            type="text"
            onChange={event => {
              setLname(event.target.value);
            }}
          ></input>

          <label htmlFor="emailInput">Email</label>
          <input
            id="emailInput"
            maxLength="20"
            name="Email"
            type="email"
            onChange={event => {
              setEmail(event.target.value);
            }}
          ></input>

          <label htmlFor="passwordInput">Password</label>
          <input
            id="passwordInput"
            minLength="6"
            name="password"
            type="password"
            onChange={event => {
              setPassword(event.target.value);
            }}
          ></input>
          <input className="form-btn" type="submit" />
        </form>
      </div>
    </section>
  );
}

export default SignUp;
