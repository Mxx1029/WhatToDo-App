import "./RegistrationText.scss"
import { FaArrowRight } from "react-icons/fa";
import {Link} from "react-router-dom"

export default function RegistrationText(){

    return(
        <div className="registration-text">
            <h1>CREATE YOUR ACCOUNT.</h1>
            <p>Do you already have an account? <span><Link to="/login">Log in</Link></span></p>
            <div className="arrow"><FaArrowRight /></div>
        </div>
    )
}