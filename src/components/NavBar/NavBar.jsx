import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./NavBar.scss";
import logo from "../../images/what toDo.png";
import {FaSearch, FaHeart, FaRegHeart,FaSignInAlt} from "react-icons/fa";


export default function NavBar() {

  return (
    <div className="navbar">
      <Link to={"/"} >
          <div className="logo">
            <img src={logo} alt="Logo WhatToDo" />
          </div>
       </Link>
      
      <div className="nav">
        <button className="btn-navbar">LIST AN EVENT</button>
        <button className="btn-navbar">LOG IN!</button>
        <FaSearch className="mobile-search-icon" />
        <FaRegHeart className="heart-icon" />
         <Link to={"/login"} >
            <FaSignInAlt className="login-icon" />
         </Link>
      </div>
    </div>
  );
}
