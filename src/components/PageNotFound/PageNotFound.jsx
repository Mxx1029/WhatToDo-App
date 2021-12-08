import NavBarBroken from "./NavBarBroken.jsx";
import MainPageNotFound from "./MainPageNotFound.jsx";
import Footer from "../Footer/Footer.jsx";
import "./PageNotFound.scss";


export default function PageNotfound(){

    return(
        <div>
            <div className="page-not-found">
                <NavBarBroken />
                <MainPageNotFound />
            </div>
            <Footer />
        </div>
    )
}