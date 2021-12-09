import React, { useState } from "react";
import "./NavBar.scss";
import logo from "../../images/what toDo.png";
import {FaSearch, FaHeart, FaRegHeart,FaSignInAlt} from "react-icons/fa";


export default function NavBar() {
  const { menuOpen, setMenuOpen } = useState(false);

  const toogleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo WhatToDo" />
      </div>
      <div className="nav">
        <button className="btn-navbar">LIST AN EVENT</button>
        <button className="btn-navbar">LOG IN!</button>
        <FaSearch className="mobile-search-icon" />
        <FaRegHeart className="heart" />
        <FaSignInAlt className="mobile-menu" onClick={toogleMenu} />
      </div>
    </div>
  );
}
