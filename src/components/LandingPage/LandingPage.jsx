import Header from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import SearchNav from "../SearchNav/SearchNav";
import Card from "../Card/Card";
import "./LandingPage.scss"


export default function LandingPage(){

    return(
        <div className="search-nav">
            <div className="top">
                <Header />
                <SearchNav />
            </div>
            <main>
                <Card /> 
                <Card /> 
                <Card /> 
                <Card /> 
                <Card /> 
                <Card /> 
                <Card /> 
                <Card />
                <Card /> 
                <Card /> 
                <Card /> 
                <Card />
            </main>
           
            <Footer />
        </div>
    )
}