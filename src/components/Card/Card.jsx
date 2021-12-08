import React from "react";
import {Link} from "react-router-dom";
import EventDateCard from "./EventDateCard";
import {eventDefaultImages} from "../../images/defaultImagesDB/defaultImagesDB";
import FavoriteButton from "./ButtonFavorite";

import "./Card.scss";

export default function Card({event}) {
  const { name, image, category, summary } = event;


  //print a random default image of the array db
  let defaultImage = eventDefaultImages[Math.floor(Math.random()*eventDefaultImages.length)];

  
   
  return (
    <div className="card-container">
      <div className="image-container">
        {/* Event image */}
        <img src={image ? image : defaultImage} alt="" className="event-img row column" />

        <EventDateCard event={event} /> 

      </div>
      <div className="card-text">
        <h5 className="card-title">{name}</h5>
        <p className="card-summary">{summary}</p>
        <div className="card-footer">
          <p className="card-category"><span>{category}</span></p>
          <FavoriteButton />
          <Link to={"/event/" + event._id} >
           <button>GO</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
