import "./LoginText.scss"
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LoginText(){

    return(
        <div className="login-text">
            <h1>LOG IN TO YOUR ACCOUNT.</h1>
            <p>Don't have an account? <span><Link to="/register">Create one</Link></span></p>
            <div className="arrow"><FaArrowRight /></div>
        </div>
    )
}