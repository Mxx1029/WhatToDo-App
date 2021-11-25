import Header from "../NavBar/NavBar"
import Footer from "../Footer/Footer";
import Form from "./Form";
import "./CreateListingPage.scss"


export default function CreateListingPage(){

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