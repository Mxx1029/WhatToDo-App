import "./LoginText.scss"
import { FaArrowRight } from "react-icons/fa";

export default function LoginText(){

    return(
        <div className="login-text">
            <h1>LOG IN TO YOUR ACCOUNT.</h1>
            <p>Dont have an account? <span>Create one</span></p>
            <div className="arrow"><FaArrowRight /></div>
        </div>
    )
}