import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaSignOutAlt, FaRegEdit, FaHeart, FaRegHeart } from "react-icons/fa";
import "./NavBarLogged.scss";

export default function NavBarLogged() {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="nav">
      <Link to="/create-listing" className="link-navbar">
        <button className="btn-navbar"> LIST AN EVENT </button>
      </Link>

      <button className="btn-navbar" onClick={logoutHandler}>
        LOG OUT!
      </button>

      <Link to={"/create-listing"}>
        <FaRegEdit className="create-event-mobile-icon" />
      </Link>

      <Link to={"/event"}>
        <FaSignOutAlt className="login-icon" />
      </Link>

      <Link to={"/whishlist"}>
        <FaHeart className="heart-icon" />
      </Link>
      
    </div>
  );
}
