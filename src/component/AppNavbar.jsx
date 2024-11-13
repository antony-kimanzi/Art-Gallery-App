import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./AppNavbar.css";

export default function AppNavbar() {
  const location = useLocation();

  return (
    <div className="nav-bar">
      <div className="logo">
        <Link to="/" className="cookie-regular">GallerySphere</Link>
      </div>
      <div className="nav-links">
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/personalcollection"
          className={`nav-link ${
            location.pathname === "/personalcollection" ? "active" : ""
          }`}
        >
          Personal Collection
        </Link>
      </div>
    </div>
  );
}
