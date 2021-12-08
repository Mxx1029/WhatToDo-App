import "./NavBar.scss";
import logo from "../../images/what toDo.png";
import { useNavigate, Link } from "react-router-dom";

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
                <Link to="/"><img src={logo} alt ="Logo WhatToDo" /></Link>
            </div>
            <div className="nav">
                <button className="btn-navbar"><Link to="/create-listing" className="btn-navbar">LIST AN EVENT</Link></button>
                {isLogin ? <button className="btn-navbar" onClick={logoutHandler}>LOG OUT!</button> : <button className="btn-navbar"><Link to="/login" className="link-navbar">LOG IN!</Link></button>}
                <FaRegHeart className="heart" /> 
            </div>
        </div>
    )
}