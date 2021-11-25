import "./NavBar.scss"
import logo from "../../images/what toDo.png"
import heart from "../../images/heart.png";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function NavBar(){

    return(
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt ="Logo WhatToDo" />
            </div>
            <div className="nav">
                <button className="btn-navbar">LIST AN EVENT</button>
                <button className="btn-navbar">LOG IN!</button>
                <FaHeart className="heart" /> 
            </div>
        </div>
    )
}