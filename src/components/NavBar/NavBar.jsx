import "./NavBar.scss";
import logo from "../../images/what toDo.png";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function NavBar(){
    const isLogin = localStorage.getItem("isLogin")
    const navigate = useNavigate()

    const logoutHandler = () => {
        localStorage.removeItem("isLogin")
        navigate("/")   
    }
    
    return(
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt ="Logo WhatToDo" />
            </div>
            <div className="nav">
                <button className="btn-navbar">LIST AN EVENT</button>
                {isLogin ? <button className="btn-navbar" onClick={logoutHandler}>LOG OUT!</button> : <button className="btn-navbar">LOG IN!</button>}
                <FaRegHeart className="heart" /> 
            </div>
        </div>
    )
}