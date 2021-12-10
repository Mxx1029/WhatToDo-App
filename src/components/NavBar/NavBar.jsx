import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./NavBar.scss";
import logo from "../../images/what toDo.png";
import {FaSearch, FaHeart, FaRegHeart,FaSignInAlt} from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

export default function NavBar(){
    const isLogin = localStorage.getItem("isLogin")
    const navigate = useNavigate()
    const {menuOpen, setMenuOpen} = useState(false);

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
    const logoutHandler = () => {
        localStorage.removeItem("isLogin")
        navigate("/")   
    }
    
    return(
        <div className="navbar">
            <div className="logo">
                <Link to="/"><img src={logo} alt ="Logo WhatToDo" /></Link>
            </div>
            <div className="nav">
                <button className="btn-navbar"><Link to="/create-listing" className="link-navbar">LIST AN EVENT</Link></button>
                {isLogin ? <button className="btn-navbar" onClick={logoutHandler}>LOG OUT!</button> : <button className="btn-navbar"><Link to="/login" className="link-navbar">LOG IN!</Link></button>}
                <FaSearch className="mobile-search-icon" /> 
                <FaRegHeart className="heart" /> 
                <FaSignInAlt className="mobile-menu" onClick={toogleMenu} />
            </div>
        </div>
    )
}

