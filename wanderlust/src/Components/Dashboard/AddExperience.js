import React, { useState } from "react";
import axios from "axios";
// import "../../App.css";
import "./Dashboard.css";

function AddExp() {
  //Edit this further down the line to automatically
  //pre-fill each input with logged-in user data
  const [inputData, setInputData] = useState({
    title: "",
    picture: "",
    description: "",
    price: "",
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
    <section className="Form-Section">
      <div className="Form-Container">
        <form onSubmit={onSubmit}>
          <label htmlFor="titleInput">Add Title</label>
          <input
            id="titleInput"
            maxLength="140"
            name="title"
            value={inputData.title}
            type="text"
            onChange={onInputChange}
          />

          <label htmlFor="picInput">Add Picture</label>
          <input
            id="picInput"
            name="picture"
            value={inputData.picture}
            type="image"
            alt="experience thumbnail"
            onChange={onInputChange}
          />

          <label htmlFor="descriptionInput">Add description</label>
          <input
            id="descriptionInput"
            maxLength="140"
            name="description"
            value={inputData.description}
            type="text"
            onChange={onInputChange}
          />

          <label htmlFor="priceInput">Add Price</label>
          <input
            id="priceInput"
            maxLength="20"
            name="price"
            value={inputData.price}
            type="text"
            onChange={onInputChange}
          />

          <input className="form-btn" type="submit" />
        </form>
      </div>
    </section>
  );
}

export default AddExp;