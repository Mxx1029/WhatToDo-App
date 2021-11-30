import Header from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import SearchNav from "../SearchNav/SearchNav";

import "./EventPage.scss";
import {FaCalendarAlt} from "react-icons/fa";
import {FaMapMarkerAlt} from "react-icons/fa";
import {FaTicketAlt} from "react-icons/fa";
import {FaInfo} from "react-icons/fa";
import eventImage from "../../images/mockup_event_0.jpeg";


export default function EventPage({event}){

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
                    <p className="event-date">13 NOV</p>
                </div>
                <div className="event-info">
                    <div className="dates">
                        <div className="item-info">
                             <h5>Dates and Time</h5>  
                             <p>Sat 20 Nov  |  11pm</p>
                        </div>
                     
                       <FaCalendarAlt />
                    </div>
                    <div className="location">
                    <div className="item-info">
                       <h5> Location</h5> 
                       <p>Prinzenstraße 85F,  10969 Berlin</p>
                       <br />
                       <a href="https://googlemaps.com">Open in map</a> {/* this is a web link */}
                    
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
                       <br />
                       <a href="https://eventpage.com">visit website</a>{/* this is a web link */}
                     </div>
                     <FaInfo />
                    </div>
                </div>
                <div className="event-about">
                    <h2>Event Title</h2>
                    <div className="event-description"> 
                        <p>The nation’s foremost celebration of everything drag, kitsch and pop-culture comes to Melbourne.
                        Catch up with local and international drag artiste royalty including Drag Expo Ambassador Karen From Finance. Visitors can meet the stars of RuPaul’s Drag Race, plus local stars. Some of the stars include Alaska Thunder*uck, Art Simone, Bebe Zahara Benet, Berry Juicy, Bible Girl, Chelsea Bun, Cherylyn Barnes, Desmond Is Amazing, Eve Elle, Hannah Conda, Jasmine Masters, Kane Enable, Katya, Luci Furr, Manila Luzon, Pangina Heels, Phi Phi O'Hara, Sharon Needles, Stacy Queen, Tatianna, Trinity The Tuck, Trixie Mattel and Wundes.
                        
                        Enjoy a plethora of panels, tutorials, chill-out spaces, fabulous shopping stores, runways with Q&A sessions, meet and greets, official merchandise, a drag market and more.
                        
                        Learn how drag has evolved over the years, how Australia has given drag our own special flavour, and how drag artistes have a message everyone can learn from.
                        </p> 
                    </div>
                </div>
                <div className="event-Map">
                <p>This is the map container and here goes a map view</p> 
                </div>
                
             </div>
            </main>
           
            <Footer />
        </div>
    )
}