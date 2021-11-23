import Header from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import SearchNav from "../SearchNav/SearchNav.jsx";
import "./LandingPage.scss"


export default function LandingPage(){

    return(
        <div className="search-nav">
            <div className="top">
                <Header />
                <SearchNav />
            </div>
            <Footer />
            
        </div>
    )
}