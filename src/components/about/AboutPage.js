import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => (
  <div
    className="jumboston"
    style={{
      background: "#38c74b",
      color: "white",
      borderRadius: "5px",
      textAlign: "center"
    }}
  >
    <h1>About Chain Rattler</h1>
    <p>
      This is a CRUD functional scorecard app built using React, React
      Router, Auth/passport and React Strap.
    </p>
    <Link to="/" className="btn btn-primary btn-lg">
      Home Page
    </Link>
  </div>
);

export default AboutPage;
