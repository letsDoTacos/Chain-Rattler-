import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => (
  <div
    className="jumboston"
    style={{
      background: "green",
      color: "white",
      borderRadius: "5px",
    }}
  >
    <h1>About Chain Rattler</h1>
    <p>
      This is a CRUD functional scorecard app built using React, Redux, React
      Router, Auth/passport and React Strap.
    </p>
    <Link to="/" className="btn btn-primary btn-lg">
      Back to the HomePage
    </Link>
  </div>
);

export default AboutPage;
