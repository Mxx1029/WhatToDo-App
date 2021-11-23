import "./NavBar.scss"
import logo from "../../images/what toDo.png"
import heart from "../../images/heart.png"

export default function NavBar(){

    return(
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt ="Logo WhatToDo" />
            </div>
            <div className="nav">
                <button className="btn-navbar">LIST AN EVENT</button>
                <button className="btn-navbar">LOG IN!</button>
                <div className="heart"><img src={heart} alt="heart" /></div>
            </div>
        </div>
    )
}