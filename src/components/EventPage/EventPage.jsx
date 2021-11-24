import Header from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import SearchNav from "../SearchNav/SearchNav";

import "./EventPage.scss";
import {FaCalendarAlt} from "react-icons/fa";
import {FaMapMarkerAlt} from "react-icons/fa";
import {FaTicketAlt} from "react-icons/fa";
import {FaInfo} from "react-icons/fa";
import eventImage from "../../images/mockup_event_0.jpeg";


export default function EventPage(){

    return(
        <div className="search-nav">
            <div className="top">
                <Header />
                <SearchNav />
            </div>
            <main>
             <div className="event-container">
                <div className="event-image">
                    <img src={eventImage} alt="" />
                </div>
                <div className="event-info">
                    <div className="dates">
                        <div className="item-info">
                             <h5>Dates and Time</h5>  
                             <p>Sat 20 Nov    11pm</p>
                        </div>
                     
                       <FaCalendarAlt />
                    </div>
                    <div className="location">
                    <div className="item-info">
                       <h5> Location</h5> 
                       <p>Prinzenstraße 85F</p>
                       <p>10969 Berlin</p>  
                       </div>
                       <FaMapMarkerAlt /> 
                    </div>
                    <div className="price">
                     <div className="item-info">
                       <h5>Price and Bookings</h5>
                       <p>50 €</p>
                     </div>
                      <FaTicketAlt />
                    </div>
                    <div className="contact-i">
                     <div className="item-info">
                       <h5>Contact details</h5>
                       <p>info@horsemeatdisco.com</p>
                     </div>
                     <FaInfo />
                    </div>
                </div>
                <div className="event-about">
                </div>
                <div className="event-Map"></div>
             </div>
            </main>
           
            <Footer />
        </div>
    )
}