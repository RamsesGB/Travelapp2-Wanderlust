import React, { useState } from "react";
import axios from "axios";
// import "../../App.css";
import "./Dashboard.css";

function ManageExp() {
  //Edit this further down the line to automatically
  //pre-fill each input with logged-in user data
  const [inputData, setInputData] = useState({
    title: "",
    picture: "",
    description: "",
    price: ""
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
    <section className="EditExp-Section">
      map over list of user experiences and create cards for each one with a
      link to edit inside that takes user to the edit screen for that particular
      experience
    </section>
  );
}

export default ManageExp;
