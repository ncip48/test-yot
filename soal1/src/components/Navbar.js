import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-danger">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Todo by Herly</span>
        </Link>
      </div>
    </nav>
  );
};
