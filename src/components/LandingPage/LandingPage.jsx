import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import SearchNav from "../SearchNav/SearchNav";
import Card from "../Card/Card";
import "./LandingPage.scss"


export default function LandingPage(){
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetchEvents();
        setLoading(false);
      }, []);

    const fetchEvents = () => {
        axios
          .get('http://localhost:9012/events/today')
          .then((res) => {
            console.log(res);
            setEvents(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };

    if (loading) {
        return "Loading...";
    }
    
    console.log(events);
    
    return(
        <div className="search-nav">
            <div className="top">
                <Header />
                <SearchNav />
            </div>
            <div className="search-results">
                <h2>WHAT TO DO ...TODAY?</h2>
            </div>
            <main>
              {events?.map(event => 
                 <Card key={event._id} 
                       event={event} />)}   
           
                  {/* <Card 
                  //    name={`${eventList.title}`}
                  //    eventImage={eventList.picture.thumbnail}
                  //    date={eventList.date}
                  //    about={eventList.email}
                  //    cathegory={eventList.cathegory}
                  //    key={eventList.id}  
                     /> 
              */}
                
            </main>
           
            <Footer />
        </div>
    )
}