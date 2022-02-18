import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div
    className="jumbotron"
    body
    inverse
    style={{
      backgroundColor: "#38c74b",
      borderColor: "#333",
      color: "white",
      borderRadius: "5px", 
      textAlign: "center"
    }}

  >
    <h1>Chain Rattler</h1>
    <p>A disc golf scorecard app</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
