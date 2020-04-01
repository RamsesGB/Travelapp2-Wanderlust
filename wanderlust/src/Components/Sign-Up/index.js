import React from "react";
import "../../App.css";
import "./SignUp.css";
// import signUpIcon from "../../Images/teddy-kelley-105544-unsplash.jpg";

function SignUp() {
  return (
    <section className="SignUp-Container">
      <aside className="SignUp-image-box">{/* Image Container */}</aside>
      <div>
        <h2>Sign Up</h2>
        <form>
          <label>
            <input
              id="fnameInput"
              maxLength="20"
              placeholder="First Name"
              name="fname"
              type="text"
            ></input>
            <input
              id="lnameInput"
              maxLength="20"
              placeholder="Last Name"
              name="lname"
              type="text"
            ></input>
            <input
              id="emailInput"
              maxLength="20"
              placeholder="Email"
              name="Email"
              type="email"
            ></input>
            <input
              id="passwordInput"
              minLength="6"
              placeholder="Password"
              name="password"
              type="password"
            ></input>
          </label>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
