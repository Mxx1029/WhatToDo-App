import React from "react";
import {Link} from "react-router-dom";
import "./NavBarBroken.scss";
import logo from "../../images/what toDo.png";
import { FaHeartBroken } from "react-icons/fa";



export default function NavBarBroken(){

    return(
        <div className="navbar">
          <Link to={"/"} >
            <div className="logo">
              <img src={logo} alt="Logo WhatToDo" />
            </div>
          </Link>
            <div className="nav">
                <button className="btn-navbar">LIST AN EVENT</button>
                <button className="btn-navbar">LOG IN!</button>
                <div className="heart"><FaHeartBroken /></div>
            </div>
        </div>
    )
}