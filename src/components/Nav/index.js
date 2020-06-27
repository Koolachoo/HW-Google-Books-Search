import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand google" href="/">
        Google Books
      </a>
      <div id="navbar Nav">
      <a className="nav-link" href="/"><button type="button" className="btn srchBtn">Search Books</button></a>
      <a className="nav-link" href="/saved"><button type="button" className="btn svdBtn">Saved Books</button></a>
      </div>
    </nav>
  );
}

export default Nav;
