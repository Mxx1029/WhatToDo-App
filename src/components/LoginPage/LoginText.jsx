import "./LoginText.scss"
import { FaArrowRight } from "react-icons/fa";

export default function LoginText(){

    return(
        <div className="login-text">
            <h1 className="login-title-desktop">LOG IN TO YOUR ACCOUNT.</h1>
            <h1 className="login-title-mobile"><span>LOG IN</span></h1>
            <p className="create-account">Dont have an account? <span>Create one</span></p>
            <div className="arrow"><FaArrowRight /></div>
        </div>
    )
}