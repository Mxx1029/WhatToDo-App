import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import moment from "moment";
import EventDateSinglepage from "./EventDateSinglepage";
import EventMailto from "./EventMailto";


import "./EventPage.scss";
//icons
import { FaCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

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
    free_event,
    description,
    name,
    email,
    image,
    phone,
    users_attending,
    website,
    price,
    users_wishlisting,
    category,
    summary,
    start_date,
    end_date,
  } = eventData;

  const startDate = moment(start_date);
  const endDate = moment(end_date);

  

  return (
      <main>
        <div className="event-container">
          <div className="event-image">
            <img src={image} alt="" />
            <p className="event-date">
              <EventDateSinglepage event={event} />
            </p>
          </div>
          <div className="event-info">
            <div className="dates">
              <div className="item-info">
                <h5>Dates and Time</h5>
                <p>From: {startDate.format('dddd, DD MMM YYYY, HH:mm')}</p>
                <p>To: {endDate.format('dddd, DD MMM YYYY, HH:mm')}</p>
              </div>

              <FaCalendarAlt />
            </div>
            <div className="location">
              <div className="item-info">
                <h5> Location</h5>
                <p>{address}</p>
                <br />
                <a href="https://googlemaps.com/">Open in map</a>
              </div>
              <FaMapMarkerAlt />
            </div>
            <div className="price">
              <div className="item-info">
                <h5>Price and Bookings</h5>
                
                {free_event
                  ? <p>FREE</p>
                  : <p>Price: {price} €</p>
                }
                <br />
                {booking_required 
                  ? <p>Booking Required</p>
                  : null
                }
              </div>
              <FaTicketAlt />
            </div>
            <div className="contact-i">
              <div className="item-info">
                <h5>Contact details</h5>
                  {phone ? <p>phone: {phone}</p> : null}   
                  <br />
                  {email 
                    ? <EventMailto email={email} subject={name} body="Hello!" className="event-email">
                          Email
                      </EventMailto>
                    : null}
                
                  <br />
                  {website ? <p><a href={website} className="event-website">visit website</a></p> : null}
                  <br />
                  <a href={website} className="social-media"><FaInstagramSquare /></a>
                  <a href={website} className="social-media"><FaFacebookF /></a>
                  <a href={website} className="social-media"><FaTwitter /></a>
              </div>
              <FaInfo />
            </div>
          </div>
          <div className="event-about">
            <h2 className="event-title">{name}</h2>
             <h5 className="event-category"><span>{category}</span>{users_attending}</h5>
              <div className="event-description">
                 <h5 className="event-summary">{summary}</h5>
                  <p>{description}</p>
              </div>
          </div>
          <div className="event-Map">
            <p>This is the map container and here goes a map view</p>
          </div>
        </div>
      </main>
  );
}
