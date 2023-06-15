import "./home.css";
import React, { useState } from "react";

const Home = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleRunClick = () => {
    console.log(`Run clicked with input: ${inputText}`);
  };
  let itinerary = ""
  return (
    <>
    <div className="home">
      <div className="home_title">VacaPlanner</div>
      <div className="home_tagline">Travel smarter, not harder!</div>
      <div className="input-container">
        <input
          className="startinput"
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Start typing here"
        />
        <button onClick={handleRunClick}>Search</button>
      </div>
    </div>
      {itinerary == "" ? (<></>) : (<div className="container">
        <div className="content">
          {itinerary}
        </div>
      </div>)}
      </>
  );
};

export default Home;
