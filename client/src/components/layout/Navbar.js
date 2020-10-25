import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./foodbook.png";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper" style={{backgroundColor:"#FF8802"}}>
            <Link
              to="/"
              className="brand-logo left"
              src="./foodbook.png"
              >
              <img
            src={logo}
            className="logo"
            alt="googleBooksLogo" />
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;