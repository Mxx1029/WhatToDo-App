import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import moment from "moment";
import Header from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import SearchNav from "../SearchNav/SearchNav";

import "./EventPage.scss";
//icons
import { FaCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
//import eventImage from "../../images/mockup_event_0.jpeg";

export default function EventPage(event) {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  let { id } = useParams();
  console.log(id);

  const fetchEvents = () => {
    axios
      .get("http://localhost:9012/events/" + id)
      .then((res) => {
        console.log(res);
        setEventData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const {
    address,
    booking_required,
    description,
    name,
    email,
    image,
    phone,
    users_attending,
    website,
    users_wishlisting,
    category,
    summary,
    start_date,
    end_date,
  } = eventData;

  const startDate = moment(start_date);
  const endDate = moment(start_date);

  function EventDateSinglepage() {
    const startMoment = moment(start_date);
    const startDate = startMoment.format("D MMM");
    const endMoment = moment(end_date);
    
    if (startMoment.isSame(endMoment, "day") && startMoment.isSame(endMoment, "month")) { 
          return <p >{startDate}</p>;
      } else if (startMoment.isSame(endMoment, "month")) {  
          return ( <p >{startMoment.format("D ")} {endMoment.format(" - D MMM")}</p>);
    } return (<p> {startMoment.format("D MMM")} {endMoment.format(" - D MMM")}</p>);
  };

  return (
    <div className="search-nav">
      <div className="top">
        <Header />
        <SearchNav />
      </div>
      <main>
        <div className="event-container">
          <div className="event-image">
            <img src={image} alt="" />
            <p className="event-date">
              <EventDateSinglepage />
            </p>
          </div>
          <div className="event-info">
            <div className="dates">
              <div className="item-info">
                <h5>Dates and Time</h5>
                <p>starts: {startDate.format('lll')}</p>
                <p>Ends: {endDate.format('lll')}</p>
              </div>

              <FaCalendarAlt />
            </div>
            <div className="location">
              <div className="item-info">
                <h5> Location</h5>
                <p>{address}</p>
                <br />
                <a href="https://googlemaps.com">Open in map</a>{" "}
                {/* this is a web link */}
              </div>
              <FaMapMarkerAlt />
            </div>
            <div className="price">
              <div className="item-info">
                <h5>Price and Bookings</h5>
                <p>Price: 50 €</p>
                <br />
                {!booking_required 
                  ? <p>Booking Required</p>
                  : null
                }
              </div>
              <FaTicketAlt />
            </div>
            <div className="contact-i">
              <div className="item-info">
                <h5>Contact details</h5>
                <p>phone: {phone}</p>
                <p>email: {email}</p>
                <br />
                <a href={website}>visit website</a>
                {/* this is a web link */}
              </div>
              <FaInfo />
            </div>
          </div>
          <div className="event-about">
            <h2>{name}</h2>
            <div className="event-description">
              <p>{description}</p>
            </div>
          </div>
          <div className="event-Map">
            <p>This is the map container and here goes a map view</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
