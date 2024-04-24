import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";


const Navbar = () => {
 return (
    <div className="navbaar">
       <nav class="navbar navbar-expand-lg navbar-light bg-danger h-50">
        <a className="navbar-brand fs-3 fst-italic " href="/">
          FlavourHub
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Login
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/createuser">
                SignUp
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
 );
};

export default Navbar;