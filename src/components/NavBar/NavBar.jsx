import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SearchModalMobile from "../SearchNav/SearchModalMobile";
import "./NavBar.scss";
import logo from "../../images/what toDo.png";
import {
  FaSearch,
  FaHeart,
  FaRegHeart,
  FaSignInAlt,
  FaSignOutAlt,
  FaRegEdit,
} from "react-icons/fa";

export default function NavBar() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal); //to open mobile search modal
  const isLogin = localStorage.clear();
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo WhatToDo" />
        </Link>
      </div>
      <div className="nav">
        {isLogin ? (
          <Link to={"/create-listing"}>
            <FaRegEdit className="create-event-mobile-icon" />
          </Link>
        ) : null}

        {isLogin ? (
          <button className="btn-navbar">
            <Link to="/create-listing" className="link-navbar">
              LIST AN EVENT
            </Link>
          </button>
        ) : null}
        {isLogin ? (
          <button className="btn-navbar" onClick={logoutHandler}>
            LOG OUT!
          </button>
        ) : (
          <button className="btn-navbar">
            <Link to="/login" className="link-navbar">
              LOG IN!
            </Link>
          </button>
        )}
        <button className="search-mobile" onClick={() => Toggle()}>
          <FaSearch className="mobile-search-icon" />
        </button>
        <SearchModalMobile
          show={modal}
          title="WHAT TO DO TODAY...?"
          close={Toggle}
        />
        <FaRegHeart className="heart-icon" />

        {isLogin ? (
          <Link to={"/event"}>
            <FaSignOutAlt className="login-icon" />
          </Link>
        ) : (
          <Link to={"/login"}>
            <FaSignInAlt className="login-icon" />
          </Link>
        )}
      </div>
    </div>
  );
}
