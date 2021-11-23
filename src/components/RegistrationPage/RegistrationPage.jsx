import Header from "../NavBar"
import MainRegistration from "./MainRegistration"
import Footer from "../Footer"
import "./RegistrationPage.css"


export default function RegistrationPage(){

    return(
        <div>
            <div className="top">
                <Header />
                <MainRegistration />
            </div>
            <Footer />
        </div>
    )
}