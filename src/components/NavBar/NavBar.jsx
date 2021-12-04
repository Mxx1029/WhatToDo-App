import "./NavBar.scss";
import logo from "../../images/what toDo.png";
import { FaSearch } from "react-icons/fa";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

export default function NavBar(){

    return(
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt ="Logo WhatToDo" />
            </div>
            <div className="nav">
                <button className="btn-navbar">LIST AN EVENT</button>
                <button className="btn-navbar">LOG IN!</button>
                <FaSearch className="mobile-search-icon" /> 
                <FaRegHeart className="heart" /> 
                <FaBars className="mobile-menu-bars" />
            </div>
        </div>
    )
}