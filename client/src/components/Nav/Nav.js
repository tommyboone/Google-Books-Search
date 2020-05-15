import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar">
      <div>
        <h2>Google Books</h2>
        <Link to="/" className="link">
          Search
        </Link>
        <Link to="/saved" className="link">
          Saved
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
