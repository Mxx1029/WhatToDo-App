import Header from "../NavBar/NavBar";
import MainLogin from "./MainLogin";
import Footer from "../Footer/Footer";
import "./LoginPage.scss"


export default function LoginPage(){

    return(
        <div>
        <div className="top">
            <Header />
            <MainLogin />
        </div>
        <Footer />
        </div>
    )
}