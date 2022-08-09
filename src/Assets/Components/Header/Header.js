import React, { useEffect } from "react";
import "../Header/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="container-fluid cont ">
        <div>
          <h2 className="display-6">Covid-19 Tracker </h2>
          <p className="lead">Live</p>
        </div>

        <div>
          <p className="lead">
            Get Live data for better Decisions in an uncertain time.
          </p>
        </div>
      </div>
    </>
  );
}
