import React from "react";
import logo from "../Keybee/Assects/logo@1x.png";
import Briefhistory from ""
export default function Navbar() {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="w">
          <img src={logo} alt="ddf" />
        </a>
        <button
          type="button"
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="wnavbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          id="navbarCollapse"
          class="collapse navbar-collapse justify-content-start"
        >
          <input
            class="form-control mr-sm-2 w-25 h-25 "
            type="search"
            placeholder="Search Here"
            aria-label="Search"
          />

          <div class="navbar-nav ml-auto">
            <a href="w" class="nav-item nav-link">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="w" class="nav-item nav-link">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="w" class="nav-item nav-link">
              <i class="fa fa-google-plus"></i>
            </a>
            <a href="w" class="nav-item nav-link">
              <i class="fa fa-pinterest-p"></i>
            </a>
          </div>
        </div>
      </nav>

	  <Briefhistory/>
    </div>
  );
}
