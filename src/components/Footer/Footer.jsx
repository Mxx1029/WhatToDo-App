import "./Footer.css";
import logo from "../../images/WTD-logo-color.png";

export default function Footer(){

    return(
        <div className="footer">
            <div className="container">
                <div className="links-copyright">
                    <p>Disclaimer</p>
                    <p>Privacy</p>
                    <p>	&copy; 2021 WHATTODO</p>
                </div>
                <div className="contact">
                    <p className="contact-whattodo">Contact WHATTODO</p>
                    <p>info@whattodo.de</p>
                    <p>+4916783830918</p>
                </div>
                <div className="logo-footer">
                    <img src={logo} alt ="Logo WhatToDo" />
                </div>
                </div>
        </div>
    );
}