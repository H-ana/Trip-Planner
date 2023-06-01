import "./landing.css";
import React from "react";

const Landing = () => {
  return (
      <div className="landing" >
          <div className="landing_title">VacaPlanner</div>
          <div className="landing_tagline">Travel smarter, not harder!</div>
          <div>
            <a href="/login">
              <button className="landing_loginbtn">
                Login
              </button>
            </a>
          </div>
      </div>
  );
};

export default Landing;
