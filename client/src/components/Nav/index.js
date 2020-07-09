import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand google" to="/">
        Google Books
      </Link>
      <div id="navbar Nav">
      <Link className="nav-link" to="/"><button type="button" className="btn srchBtn">Search Books</button></Link>
      <Link className="nav-link" to="/saved"><button type="button" className="btn svdBtn">Saved Books</button></Link>
      </div>
    </nav>
  );
}

export default Nav;
