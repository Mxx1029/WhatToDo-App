import Header from "../NavBar/NavBar"
import Footer from "../Footer/Footer";
import Form from "./Form";
import "./ListingPage.scss"


export default function ListingPage(){

    return(
        <div className="search-nav">
            <div className="top">
                <Header />
                <Form />
            </div>
            <Footer />
            
        </div>
    )
}