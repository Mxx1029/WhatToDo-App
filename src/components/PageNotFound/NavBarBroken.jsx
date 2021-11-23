import "./NavBarBroken.scss"
import logo from "../../images/what toDo.png"
import { FaHeartBroken } from "react-icons/fa";



export default function NavBarBroken(){

    return(
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt ="Logo WhatToDo" />
            </div>
            <div className="nav">
                <button className="btn-navbar">LIST AN EVENT</button>
                <button className="btn-navbar">LOG IN!</button>
                <div className="heart"><FaHeartBroken /></div>
            </div>
        </div>
    )
}