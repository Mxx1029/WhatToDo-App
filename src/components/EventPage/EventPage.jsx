import Header from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import SearchNav from "../SearchNav/SearchNav";
import "./EventPage.scss"


export default function EventPage(){

    return(
        <div className="search-nav">
            <div className="top">
                <Header />
                <SearchNav />
            </div>
            <main>
                
            </main>
           
            <Footer />
        </div>
    )
}